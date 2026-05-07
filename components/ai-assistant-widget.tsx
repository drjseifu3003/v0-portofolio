"use client"

import { useEffect, useRef, useState, useCallback } from "react"

type Status = "idle" | "connecting" | "active" | "ending"

/** Minimal Vapi instance shape (loaded via dynamic import to avoid SSR / broken webpack chunks). */
type VapiInstance = {
  start: (assistantId: string) => void
  stop: () => void
  on: (event: string, handler: (...args: unknown[]) => void) => void
}
interface Msg { id: number; role: "assistant" | "user"; text: string; time: string }

interface AIAssistantWidgetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AIAssistantWidget({ open, onOpenChange }: AIAssistantWidgetProps) {
  return (
    <>
      {!open && <FloatingButton onClick={() => onOpenChange(true)} />}
      {open  && <AssistantModal onClose={() => onOpenChange(false)} />}
    </>
  )
}

function FloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <style>{`
        .fab-wrap { position:fixed; bottom:32px; right:32px; z-index:400; display:flex; flex-direction:column; align-items:flex-end; gap:10px; }
        .fab-hint { background:#111110; border:1px solid #2a2826; padding:7px 14px; font-size:11px; color:#a8a49c; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap; font-family:'DM Sans',sans-serif; animation:fabIn 0.35s ease forwards; }
        @keyframes fabIn { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }
        .fab { width:52px; height:52px; background:#dedad2; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; position:relative; transition:background 0.18s,transform 0.2s; box-shadow:0 8px 30px rgba(0,0,0,0.5); }
        .fab:hover { background:#fff; transform:scale(1.05); }
        .fab-ring { position:absolute; inset:-7px; border:1px solid rgba(216,218,210,0.15); animation:fabRing 2.5s ease-in-out infinite; pointer-events:none; }
        @keyframes fabRing { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0;transform:scale(1.2)} }
        @media (max-width:767px) { .fab-wrap{bottom:20px;right:20px} .fab-hint{display:none} }
      `}</style>
      <div className="fab-wrap">
        <div className="fab-hint">Ask Liya · My AI</div>
        <button className="fab" onClick={onClick} aria-label="Talk to AI Assistant">
          <div className="fab-ring" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2">
            <path d="M12 2a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
            <path d="M19 10a7 7 0 0 1-14 0"/>
            <line x1="12" y1="17" x2="12" y2="22"/>
            <line x1="8" y1="22" x2="16" y2="22"/>
          </svg>
        </button>
      </div>
    </>
  )
}

function AssistantModal({ onClose }: { onClose: () => void }) {
  const vapiRef       = useRef<VapiInstance | null>(null)
  const [vapiReady, setVapiReady]   = useState(false)
  const [status, setStatus]         = useState<Status>("idle")
  const [messages, setMessages]     = useState<Msg[]>([])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [duration, setDuration]     = useState(0)
  const timerRef      = useRef<NodeJS.Timeout | null>(null)
  const animRef       = useRef<number | null>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const msgIdRef      = useRef(0)
  const volRef        = useRef(0)
  const barsRef       = useRef<(HTMLDivElement | null)[]>([])
  const BAR_COUNT     = 36

  const animateBars = useCallback(() => {
    const v = volRef.current, t = Date.now() / 1000
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      const w = Math.sin(t * 2.8 + i * 0.38) * 0.5 + 0.5
      bar.style.height  = `${Math.max(2, 2 + v * 44 * w * (Math.cos(t * 4.2 + i * 0.55) * 0.3 + 0.7))}px`
      bar.style.opacity = `${Math.max(0.08, 0.08 + v * 0.92)}`
    })
    animRef.current = requestAnimationFrame(animateBars)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(animateBars)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [animateBars])

  useEffect(() => {
    let cancelled = false
    import("@vapi-ai/web")
      .then((mod) => {
        if (cancelled) return
        const Vapi = mod.default
        const key = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY
        if (!key) return
        const vapi = new Vapi(key) as VapiInstance
        vapiRef.current = vapi
        setVapiReady(true)
        vapi.on("call-start", () => { setStatus("active"); setDuration(0); timerRef.current = setInterval(() => setDuration(d => d + 1), 1000) })
        vapi.on("call-end", () => { setStatus("idle"); volRef.current = 0; setIsSpeaking(false); if (timerRef.current) clearInterval(timerRef.current) })
        vapi.on("volume-level", (v: unknown) => { volRef.current = typeof v === "number" ? v : 0 })
        vapi.on("speech-start", () => setIsSpeaking(true))
        vapi.on("speech-end",   () => setIsSpeaking(false))
        vapi.on("message", (msg: { type?: string; transcriptType?: string; role: Msg["role"]; transcript: string }) => {
          if (msg.type === "transcript" && msg.transcriptType === "final") {
            const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
            setMessages(prev => [...prev, { id: msgIdRef.current++, role: msg.role, text: msg.transcript, time }])
            setTimeout(() => transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" }), 80)
          }
        })
      })
      .catch(() => { setVapiReady(false) })
    return () => {
      cancelled = true
      vapiRef.current?.stop()
      vapiRef.current = null
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const toggle = () => {
    if (!vapiRef.current || !vapiReady) return
    if (status === "active") { setStatus("ending"); vapiRef.current.stop() }
    else if (status === "idle") {
      const id = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID
      if (!id) return
      setStatus("connecting"); setMessages([]); vapiRef.current.start(id)
    }
  }

  const handleClose = () => { if (status === "active" || status === "connecting") vapiRef.current?.stop(); onClose() }
  const callDisabled = !vapiReady || status === "connecting" || status === "ending"
  const fmt = (s: number) => `${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`

  return (
    <>
      <style>{`
        .mo { position:fixed; inset:0; z-index:500; background:rgba(0,0,0,0.72); backdrop-filter:blur(6px); display:flex; align-items:flex-end; justify-content:flex-end; padding:32px; animation:moIn 0.22s ease; }
        @keyframes moIn { from{opacity:0} to{opacity:1} }
        .mo-card { width:400px; max-height:88vh; background:#111110; border:1px solid #242420; display:flex; flex-direction:column; overflow:hidden; animation:moUp 0.3s cubic-bezier(0.34,1.3,0.64,1); box-shadow:0 32px 80px rgba(0,0,0,0.7); position:relative; }
        .mo-card::before { content:''; position:absolute; top:0;left:0;right:0;height:1px; background:linear-gradient(90deg,transparent,#dedad2 35%,#dedad2 65%,transparent); opacity:0.35; }
        @keyframes moUp { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:none} }
        .mo-head { display:flex; align-items:center; justify-content:space-between; padding:14px 18px; border-bottom:1px solid #1e1e1c; flex-shrink:0; }
        .mo-av { width:30px;height:30px; background:#dedad2; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .mo-x { width:26px;height:26px; background:none; border:1px solid #242420; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#72706b; transition:border-color 0.18s,color 0.18s; flex-shrink:0; }
        .mo-x:hover { border-color:#4a4844; color:#dedad2; }
        .mo-st-bar { display:flex; align-items:center; gap:8px; padding:9px 18px; background:#0e0e0c; border-bottom:1px solid #1e1e1c; flex-shrink:0; }
        .mo-dot { width:5px;height:5px; border-radius:50%; background:#3a3830; flex-shrink:0; transition:all 0.3s; }
        .mo-dot.active { background:#4caf7d; box-shadow:0 0 5px rgba(76,175,125,0.5); animation:moDot 1.8s ease-in-out infinite; }
        .mo-dot.connecting,.mo-dot.ending { background:#b8a46a; animation:moDot 0.8s ease-in-out infinite; }
        @keyframes moDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .mo-st-txt { font-size:10px; color:#72706b; letter-spacing:0.1em; text-transform:uppercase; flex:1; transition:color 0.3s; }
        .mo-st-txt.active { color:#4caf7d; }
        .mo-st-txt.connecting,.mo-st-txt.ending { color:#b8a46a; }
        .mo-tmr { font-size:11px; color:#3a3830; font-variant-numeric:tabular-nums; transition:color 0.3s; }
        .mo-tmr.active { color:#72706b; }
        .mo-viz { display:flex; align-items:flex-end; justify-content:center; gap:2px; height:28px; padding:0 18px; background:#0e0e0c; border-bottom:1px solid #1e1e1c; flex-shrink:0; }
        .mo-vb { width:2px; background:#dedad2; border-radius:1px 1px 0 0; height:2px; opacity:0.08; flex-shrink:0; }
        .mo-call-area { padding:20px 18px 16px; display:flex; flex-direction:column; align-items:center; gap:12px; border-bottom:1px solid #1e1e1c; flex-shrink:0; }
        .mo-orb { position:relative; width:72px; height:72px; }
        .mo-orbit { position:absolute; border-radius:50%; border:1px solid transparent; pointer-events:none; }
        .mo-o1 { inset:-9px; border-top-color:rgba(216,218,210,0.12); animation:moOrb 7s linear infinite; }
        .mo-o2 { inset:-19px; border-right-color:rgba(216,218,210,0.05); animation:moOrb 12s linear infinite reverse; }
        .mo-o1.active { border-top-color:rgba(216,218,210,0.35); animation-duration:2.5s; }
        .mo-o2.active { border-right-color:rgba(216,218,210,0.15); animation-duration:5s; }
        @keyframes moOrb { to{transform:rotate(360deg)} }
        .mo-btn { position:absolute; inset:0; border-radius:50%; border:1px solid #2a2826; background:#161614; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; outline:none; transition:all 0.3s cubic-bezier(0.34,1.4,0.64,1); font-family:inherit; }
        .mo-btn:hover:not(:disabled) { border-color:#dedad2; background:#1e1e1c; transform:scale(1.06); }
        .mo-btn.active { border-color:rgba(192,67,55,0.5); background:rgba(192,67,55,0.06); }
        .mo-btn.active:hover:not(:disabled) { border-color:rgba(192,67,55,0.8); background:rgba(192,67,55,0.1); }
        .mo-btn.connecting,.mo-btn.ending { pointer-events:none; animation:moBtnP 1.2s ease-in-out infinite; }
        @keyframes moBtnP { 0%,100%{box-shadow:0 0 0 0 rgba(216,218,210,0.08)} 50%{box-shadow:0 0 0 10px rgba(216,218,210,0)} }
        .mo-bi { font-size:1.3rem; line-height:1; color:#dedad2; transition:color 0.3s; }
        .mo-btn.active .mo-bi { color:rgba(220,90,75,0.9); }
        .mo-bl { font-size:8px; letter-spacing:0.18em; text-transform:uppercase; color:#72706b; font-family:inherit; transition:color 0.3s; }
        .mo-btn.active .mo-bl { color:rgba(220,90,75,0.6); }
        .mo-cst { font-size:11px; color:#72706b; letter-spacing:0.06em; transition:color 0.3s; text-align:center; max-width:280px; }
        .mo-cst.active { color:#4caf7d; }
        .mo-cst.connecting,.mo-cst.ending { color:#b8a46a; }
        .mo-transcript { flex:1; overflow-y:auto; padding:12px 18px; min-height:120px; max-height:200px; scrollbar-width:thin; scrollbar-color:#2a2826 transparent; }
        .mo-transcript::-webkit-scrollbar { width:2px; }
        .mo-transcript::-webkit-scrollbar-thumb { background:#2a2826; border-radius:1px; }
        .mo-empty { height:100%; min-height:90px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; color:#3a3830; font-size:11px; letter-spacing:0.1em; text-transform:uppercase; }
        .mo-empty-g { font-size:1.4rem; opacity:0.25; }
        .mo-msg { margin-bottom:12px; animation:moMsg 0.22s ease; }
        @keyframes moMsg { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }
        .mo-mh { display:flex; align-items:baseline; gap:5px; margin-bottom:3px; }
        .mo-mw { font-size:9px; letter-spacing:0.15em; text-transform:uppercase; font-weight:500; }
        .mo-mw.assistant { color:#b8a46a; }
        .mo-mw.user { color:#7898c8; }
        .mo-mt { font-size:9px; color:#3a3830; }
        .mo-mx { font-size:12px; line-height:1.65; color:#a8a49c; padding-left:7px; border-left:1px solid; }
        .mo-msg.assistant .mo-mx { border-color:rgba(184,164,106,0.2); }
        .mo-msg.user .mo-mx { border-color:rgba(120,152,200,0.18); }
        .mo-foot { padding:9px 18px; border-top:1px solid #1e1e1c; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; }
        @media (max-width:767px) {
          .mo { padding:0; align-items:flex-end; justify-content:stretch; }
          .mo-card { width:100%; max-height:85vh; border-left:none; border-right:none; border-bottom:none; }
        }
      `}</style>

      <div className="mo" onClick={e => { if (e.target === e.currentTarget) handleClose() }}>
        <div className="mo-card">

          <div className="mo-head">
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div className="mo-av">
                <span style={{ fontSize:13, fontWeight:600, color:"#0c0c0c", fontFamily:"'DM Sans',sans-serif" }}>L</span>
              </div>
              <div>
                <div style={{ fontSize:13, fontWeight:500, color:"#dedad2" }}>Liya</div>
                <div style={{ fontSize:10, color:"#72706b", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:1 }}>Dereje's AI Assistant</div>
              </div>
            </div>
            <button className="mo-x" onClick={handleClose}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/>
              </svg>
            </button>
          </div>

          <div className="mo-st-bar">
            <div className={`mo-dot ${status}`} />
            <span className={`mo-st-txt ${status}`}>
              {status === "idle"       && "Ready to connect"}
              {status === "connecting" && "Establishing connection…"}
              {status === "active"     && (isSpeaking ? "Liya is speaking" : "Listening…")}
              {status === "ending"     && "Ending session…"}
            </span>
            <span className={`mo-tmr ${status === "active" ? "active" : ""}`}>{fmt(duration)}</span>
          </div>

          <div className="mo-viz">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <div key={i} className="mo-vb" ref={el => { barsRef.current[i] = el }} />
            ))}
          </div>

          <div className="mo-call-area">
            <div className="mo-orb">
              <div className={`mo-orbit mo-o2 ${status === "active" ? "active" : ""}`} />
              <div className={`mo-orbit mo-o1 ${status === "active" ? "active" : ""}`} />
              <button className={`mo-btn ${status}`} onClick={toggle} disabled={callDisabled}>
                <span className="mo-bi">
                  {status === "idle" && "◎"}
                  {(status === "connecting" || status === "ending") && "◌"}
                  {status === "active" && "◉"}
                </span>
                <span className="mo-bl">
                  {status === "idle" && "Start"}{status === "connecting" && "Wait…"}
                  {status === "active" && "End"}{status === "ending" && "…"}
                </span>
              </button>
            </div>
            <div className={`mo-cst ${status}`}>
              {status === "idle"       && (vapiReady ? "Ask about services, availability, or book a call" : "Loading voice client…")}
              {status === "connecting" && "Connecting to Liya…"}
              {status === "active"     && `Live · ${fmt(duration)}`}
              {status === "ending"     && "Ending session…"}
            </div>
          </div>

          <div className="mo-transcript" ref={transcriptRef}>
            {messages.length === 0 ? (
              <div className="mo-empty">
                <span className="mo-empty-g">◈</span>
                <span>Transcript will appear here</span>
              </div>
            ) : messages.map(m => (
              <div key={m.id} className={`mo-msg ${m.role}`}>
                <div className="mo-mh">
                  <span className={`mo-mw ${m.role}`}>{m.role === "assistant" ? "Liya" : "You"}</span>
                  <span className="mo-mt">{m.time}</span>
                </div>
                <p className="mo-mx">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="mo-foot">
            <span style={{ fontSize:10, color:"#3a3830", letterSpacing:"0.08em", textTransform:"uppercase" }}>AI Assistant · Liya</span>
            <span style={{ fontSize:10, color:"#4a4844", letterSpacing:"0.06em" }}>Powered by Dereje</span>
          </div>

        </div>
      </div>
    </>
  )
}