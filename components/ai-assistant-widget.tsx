"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Loader2, Mic, Square } from "lucide-react"

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
        .fab-wrap { position:fixed; bottom:28px; right:28px; z-index:400; display:flex; flex-direction:column; align-items:flex-end; gap:8px; }
        .fab-hint {
          background:#fff;
          border:1px solid #e5e7eb;
          border-radius:999px;
          padding:8px 14px;
          font-size:12px;
          font-weight:600;
          color:#374151;
          letter-spacing:0.02em;
          white-space:nowrap;
          box-shadow:0 10px 40px rgba(15,23,42,0.1), 0 2px 8px rgba(15,23,42,0.04);
          animation:fabIn 0.35s ease forwards;
        }
        .fab-hint span { color:#059669; font-weight:700; }
        @keyframes fabIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        .fab {
          width:56px; height:56px; border-radius:50%;
          background:linear-gradient(145deg, #34d399 0%, #10b981 48%, #059669 100%);
          border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          position:relative;
          transition:transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s;
          box-shadow:0 14px 44px rgba(16,185,129,0.38), 0 0 0 1px rgba(255,255,255,0.35) inset;
        }
        .fab:hover { transform:scale(1.06); filter:brightness(1.04); box-shadow:0 18px 50px rgba(16,185,129,0.45), 0 0 0 1px rgba(255,255,255,0.45) inset; }
        .fab:active { transform:scale(0.98); }
        .fab-ring { position:absolute; inset:-6px; border-radius:50%; border:2px solid rgba(16,185,129,0.35); animation:fabRing 2.4s ease-in-out infinite; pointer-events:none; }
        @keyframes fabRing { 0%,100%{opacity:0.9;transform:scale(1)} 50%{opacity:0.2;transform:scale(1.12)} }
        @media (max-width:767px) { .fab-wrap{bottom:20px;right:18px} .fab-hint{display:none} }
      `}</style>
      <div className="fab-wrap">
        <div className="fab-hint">
          <span>Voice</span> · Ask Liya
        </div>
        <button className="fab" onClick={onClick} aria-label="Open voice assistant Liya">
          <div className="fab-ring" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
        vapi.on("message", (...args: unknown[]) => {
          const raw = args[0]
          if (!raw || typeof raw !== "object") return
          const msg = raw as { type?: string; transcriptType?: string; role?: string; transcript?: string }
          if (msg.type !== "transcript" || msg.transcriptType !== "final") return
          const role = msg.role
          if (role !== "assistant" && role !== "user") return
          const text = msg.transcript
          if (typeof text !== "string") return
          const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
          setMessages(prev => [...prev, { id: msgIdRef.current++, role, text, time }])
          setTimeout(() => transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" }), 80)
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
        .mo {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(17, 24, 39, 0.28);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 28px;
          animation: moIn 0.24s ease;
        }
        @keyframes moIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .mo-card {
          width: 416px;
          max-height: 88vh;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: moUp 0.35s cubic-bezier(0.34, 1.25, 0.64, 1);
          box-shadow:
            0 32px 90px rgba(15, 23, 42, 0.14),
            0 0 0 1px rgba(255, 255, 255, 1) inset;
          position: relative;
        }
        .mo-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6ee7b7, #34d399, #a78bfa, #7c3aed);
          border-radius: 22px 22px 0 0;
          z-index: 1;
        }
        @keyframes moUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .mo-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 18px 14px;
          padding-top: 22px;
          border-bottom: 1px solid #f3f4f6;
          flex-shrink: 0;
          background: #fff;
        }
        .mo-av {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: linear-gradient(145deg, #ecfdf5 0%, #d1fae5 55%, #a7f3d0 100%);
          border: 1px solid #6ee7b7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(16, 185, 129, 0.2);
        }
        .mo-x {
          width: 36px;
          height: 36px;
          border-radius: 11px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
          flex-shrink: 0;
        }
        .mo-x:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
          color: #111827;
        }
        .mo-st-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          background: linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%);
          border-bottom: 1px solid #e5e7eb;
          flex-shrink: 0;
        }
        .mo-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
          transition: all 0.35s;
        }
        .mo-dot.active {
          background: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.22);
          animation: moDot 1.8s ease-in-out infinite;
        }
        .mo-dot.connecting,
        .mo-dot.ending {
          background: #f59e0b;
          animation: moDot 0.75s ease-in-out infinite;
        }
        @keyframes moDot {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }
        .mo-st-txt {
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          flex: 1;
          transition: color 0.3s;
        }
        .mo-st-txt.active {
          color: #059669;
        }
        .mo-st-txt.connecting,
        .mo-st-txt.ending {
          color: #b45309;
        }
        .mo-tmr {
          font-size: 12px;
          color: #9ca3af;
          font-variant-numeric: tabular-nums;
          font-weight: 500;
          transition: color 0.3s;
        }
        .mo-tmr.active {
          color: #374151;
          font-weight: 600;
        }
        .mo-viz {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2px;
          height: 34px;
          padding: 0 20px;
          background: #fff;
          border-bottom: 1px solid #f3f4f6;
          flex-shrink: 0;
        }
        .mo-vb {
          width: 2px;
          background: linear-gradient(180deg, #a7f3d0, #10b981);
          border-radius: 2px 2px 0 0;
          height: 3px;
          opacity: 0.12;
          flex-shrink: 0;
        }
        .mo-call-area {
          padding: 26px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid #f3f4f6;
          flex-shrink: 0;
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
        }
        .mo-orb {
          position: relative;
          width: 88px;
          height: 88px;
        }
        .mo-orbit {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          pointer-events: none;
        }
        .mo-o1 {
          inset: -10px;
          border-top-color: rgba(16, 185, 129, 0.35);
          animation: moOrb 8s linear infinite;
        }
        .mo-o2 {
          inset: -22px;
          border-right-color: rgba(124, 58, 237, 0.2);
          animation: moOrb 14s linear infinite reverse;
        }
        .mo-o1.active {
          border-top-color: rgba(16, 185, 129, 0.65);
          animation-duration: 2.8s;
        }
        .mo-o2.active {
          border-right-color: rgba(124, 58, 237, 0.4);
          animation-duration: 5s;
        }
        @keyframes moOrb {
          to {
            transform: rotate(360deg);
          }
        }
        .mo-btn {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          outline: none;
          transition: all 0.28s cubic-bezier(0.34, 1.35, 0.64, 1);
          font-family: inherit;
          box-shadow: 0 10px 36px rgba(15, 23, 42, 0.1);
        }
        .mo-btn:hover:not(:disabled) {
          border-color: #34d399;
          transform: scale(1.05);
          box-shadow: 0 16px 44px rgba(16, 185, 129, 0.22);
        }
        .mo-btn.active {
          border-color: #fecdd3;
          background: linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%);
          box-shadow: 0 10px 32px rgba(244, 63, 94, 0.12);
        }
        .mo-btn.active:hover:not(:disabled) {
          border-color: #fda4af;
          box-shadow: 0 14px 40px rgba(244, 63, 94, 0.18);
        }
        .mo-btn.connecting,
        .mo-btn.ending {
          pointer-events: none;
          animation: moBtnP 1.15s ease-in-out infinite;
        }
        @keyframes moBtnP {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.12);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
          }
        }
        .mo-bi {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          transition: color 0.3s;
        }
        .mo-btn.active .mo-bi {
          color: #e11d48;
        }
        .mo-bl {
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6b7280;
          font-family: inherit;
          font-weight: 600;
          transition: color 0.3s;
        }
        .mo-btn.active .mo-bl {
          color: #e11d48;
        }
        .mo-spin {
          animation: moSpin 0.9s linear infinite;
        }
        @keyframes moSpin {
          to {
            transform: rotate(360deg);
          }
        }
        .mo-cst {
          font-size: 13px;
          color: #6b7280;
          letter-spacing: 0.01em;
          transition: color 0.3s;
          text-align: center;
          max-width: 300px;
          line-height: 1.5;
        }
        .mo-cst.active {
          color: #059669;
          font-weight: 500;
        }
        .mo-cst.connecting,
        .mo-cst.ending {
          color: #b45309;
        }
        .mo-transcript {
          flex: 1;
          overflow-y: auto;
          padding: 14px 14px 16px;
          min-height: 128px;
          max-height: 220px;
          background: #f9fafb;
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        .mo-transcript::-webkit-scrollbar {
          width: 5px;
        }
        .mo-transcript::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 8px;
        }
        .mo-empty {
          height: 100%;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #9ca3af;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          padding: 8px 12px;
          line-height: 1.5;
        }
        .mo-empty-g {
          font-size: 1.75rem;
          line-height: 1;
        }
        .mo-msg {
          margin-bottom: 14px;
          animation: moMsg 0.24s ease;
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 100%;
        }
        .mo-msg.assistant {
          align-items: flex-start;
        }
        .mo-msg.user {
          align-items: flex-end;
        }
        @keyframes moMsg {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .mo-mh {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .mo-msg.user .mo-mh {
          flex-direction: row-reverse;
        }
        .mo-mw {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .mo-mw.assistant {
          color: #059669;
        }
        .mo-mw.user {
          color: #7c3aed;
        }
        .mo-mt {
          font-size: 10px;
          color: #9ca3af;
        }
        .mo-mx {
          font-size: 13px;
          line-height: 1.55;
          margin: 0;
          max-width: 94%;
        }
        .mo-msg.assistant .mo-mx {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px 16px 16px 5px;
          padding: 11px 14px;
          color: #374151;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }
        .mo-msg.user .mo-mx {
          background: linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%);
          border: 1px solid #6ee7b7;
          border-radius: 16px 16px 5px 16px;
          padding: 11px 14px;
          color: #065f46;
          box-shadow: 0 1px 3px rgba(16, 185, 129, 0.08);
        }
        .mo-foot {
          padding: 12px 18px;
          border-top: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          background: #fafafa;
        }
        @media (max-width: 767px) {
          .mo {
            padding: 0;
            align-items: flex-end;
            justify-content: stretch;
          }
          .mo-card {
            width: 100%;
            max-height: 88vh;
            border-radius: 22px 22px 0 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }
          .mo-card::before {
            border-radius: 22px 22px 0 0;
          }
        }
      `}</style>

      <div className="mo" onClick={e => { if (e.target === e.currentTarget) handleClose() }}>
        <div className="mo-card">

          <div className="mo-head">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="mo-av" aria-hidden>
                <Mic size={23} strokeWidth={2.25} color="#059669" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.25 }}>Liya</div>
                <div style={{ fontSize: 12, color: "#6b7280", marginTop: 3, lineHeight: 1.45 }}>
                  Voice-only assistant · Trained on how Dereje works with clients
                </div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>Talk naturally. Nothing to type.</div>
              </div>
            </div>
            <button type="button" className="mo-x" onClick={handleClose} aria-label="Close voice assistant">
              <svg width={12} height={12} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <line x1="1" y1="1" x2="9" y2="9" />
                <line x1="9" y1="1" x2="1" y2="9" />
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
              <button type="button" className={`mo-btn ${status}`} onClick={toggle} disabled={callDisabled} aria-label={status === "active" ? "End voice call" : "Start voice call"}>
                <span className="mo-bi">
                  {status === "idle" && <Mic size={30} strokeWidth={2.25} aria-hidden />}
                  {(status === "connecting" || status === "ending") && (
                    <Loader2 size={28} strokeWidth={2.35} className="mo-spin" aria-hidden />
                  )}
                  {status === "active" && <Square size={22} strokeWidth={2.5} fill="currentColor" color="currentColor" style={{ borderRadius: 5 }} aria-hidden />}
                </span>
                <span className="mo-bl">
                  {status === "idle" && "Start"}
                  {status === "connecting" && "Wait"}
                  {status === "active" && "End"}
                  {status === "ending" && "…"}
                </span>
              </button>
            </div>
            <div className={`mo-cst ${status}`}>
              {status === "idle" &&
                (vapiReady ? "Tap start and speak. Ask about services, timelines, booking, or how engagements run." : "Preparing voice client…")}
              {status === "connecting" && "Connecting you to Liya…"}
              {status === "active" && `Live · ${fmt(duration)}`}
              {status === "ending" && "Wrapping up…"}
            </div>
          </div>

          <div className="mo-transcript" ref={transcriptRef}>
            {messages.length === 0 ? (
              <div className="mo-empty">
                <span className="mo-empty-g" aria-hidden>
                  <Mic size={30} strokeWidth={1.75} color="#d1d5db" />
                </span>
                <span style={{ fontWeight: 600, color: "#6b7280" }}>Your conversation transcript</span>
                <span style={{ fontSize: 12, color: "#9ca3af", maxWidth: 280 }}>
                  Voice turns into text here so you can scroll back. The experience is microphone-first.
                </span>
              </div>
            ) : (
              messages.map(m => (
                <div key={m.id} className={`mo-msg ${m.role}`}>
                  <div className="mo-mh">
                    <span className={`mo-mw ${m.role}`}>{m.role === "assistant" ? "Liya" : "You"}</span>
                    <span className="mo-mt">{m.time}</span>
                  </div>
                  <p className="mo-mx">{m.text}</p>
                </div>
              ))
            )}
          </div>

          <div className="mo-foot">
            <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>Private to this tab · End the call anytime</span>
            <span style={{ fontSize: 11, color: "#9ca3af" }}>Voice by Dereje</span>
          </div>

        </div>
      </div>
    </>
  )
}