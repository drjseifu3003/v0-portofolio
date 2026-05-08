/**
 * Decorative KPI chart, dark (DAD) or light (Scaling Process) grid.
 */
export function TrafficChartSvg({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light"
  const grid = isLight ? "rgba(17,24,39,0.08)" : "rgba(255,255,255,0.05)"
  const labelMuted = isLight ? "rgba(55,65,81,0.45)" : "rgba(245,242,236,0.25)"
  const legend = isLight ? "rgba(55,65,81,0.55)" : "rgba(245,242,236,0.45)"
  const gold = "#c9a84c"
  const purple = "#7c3aed"

  return (
    <svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="clickGradCsDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="impGradCsDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7b6fc4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7b6fc4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="clickGradCsLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gold} stopOpacity="0.25" />
          <stop offset="100%" stopColor={gold} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="impGradCsLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={purple} stopOpacity="0.18" />
          <stop offset="100%" stopColor={purple} stopOpacity="0" />
        </linearGradient>
      </defs>

      <line x1="0" y1="40" x2="680" y2="40" stroke={grid} strokeWidth="1" />
      <line x1="0" y1="80" x2="680" y2="80" stroke={grid} strokeWidth="1" />
      <line x1="0" y1="120" x2="680" y2="120" stroke={grid} strokeWidth="1" />

      {isLight ? (
        <>
          <path
            d="M0,130 C20,128 30,125 50,115 C70,105 80,95 100,88 C120,80 140,70 160,60 C180,50 200,55 220,58 C240,60 260,55 280,48 C300,42 310,38 330,35 C350,32 360,40 380,38 C400,35 420,42 440,50 C460,58 480,60 500,65 C520,70 540,75 560,80 C580,85 600,82 620,78 C640,74 660,72 680,75 L680,155 L0,155 Z"
            fill="url(#impGradCsLight)"
          />
          <path
            d="M0,130 C20,128 30,125 50,115 C70,105 80,95 100,88 C120,80 140,70 160,60 C180,50 200,55 220,58 C240,60 260,55 280,48 C300,42 310,38 330,35 C350,32 360,40 380,38 C400,35 420,42 440,50 C460,58 480,60 500,65 C520,70 540,75 560,80 C580,85 600,82 620,78 C640,74 660,72 680,75"
            fill="none"
            stroke={purple}
            strokeWidth="1.5"
            opacity="0.65"
          />
          <path
            d="M0,120 C10,118 20,100 30,95 C40,88 50,110 60,125 C70,138 80,130 90,118 C100,105 110,95 120,100 C130,108 140,115 150,105 C160,95 170,85 180,75 C190,65 200,80 210,88 C220,95 230,90 240,82 C250,72 260,68 270,62 C280,55 290,52 300,48 C310,44 320,42 330,32 C340,22 350,38 360,42 C370,48 380,40 390,38 C400,35 410,45 420,55 C430,65 440,68 450,72 C460,78 470,82 480,85 C490,90 500,88 510,92 C520,98 530,100 540,105 C550,112 560,108 570,100 C580,92 590,95 600,100 C610,105 620,110 640,105 C660,100 670,105 680,108"
            fill="none"
            stroke={gold}
            strokeWidth="2"
          />
          <path
            d="M0,120 C10,118 20,100 30,95 C40,88 50,110 60,125 C70,138 80,130 90,118 C100,105 110,95 120,100 C130,108 140,115 150,105 C160,95 170,85 180,75 C190,65 200,80 210,88 C220,95 230,90 240,82 C250,72 260,68 270,62 C280,55 290,52 300,48 C310,44 320,42 330,32 C340,22 350,38 360,42 C370,48 380,40 390,38 C400,35 410,45 420,55 C430,65 440,68 450,72 C460,78 470,82 480,85 C490,90 500,88 510,92 C520,98 530,100 540,105 C550,112 560,108 570,100 C580,92 590,95 600,100 C610,105 620,110 640,105 C660,100 670,105 680,108 L680,155 L0,155 Z"
            fill="url(#clickGradCsLight)"
          />
        </>
      ) : (
        <>
          <path
            d="M0,130 C20,128 30,125 50,115 C70,105 80,95 100,88 C120,80 140,70 160,60 C180,50 200,55 220,58 C240,60 260,55 280,48 C300,42 310,38 330,35 C350,32 360,40 380,38 C400,35 420,42 440,50 C460,58 480,60 500,65 C520,70 540,75 560,80 C580,85 600,82 620,78 C640,74 660,72 680,75 L680,155 L0,155 Z"
            fill="url(#impGradCsDark)"
          />
          <path
            d="M0,130 C20,128 30,125 50,115 C70,105 80,95 100,88 C120,80 140,70 160,60 C180,50 200,55 220,58 C240,60 260,55 280,48 C300,42 310,38 330,35 C350,32 360,40 380,38 C400,35 420,42 440,50 C460,58 480,60 500,65 C520,70 540,75 560,80 C580,85 600,82 620,78 C640,74 660,72 680,75"
            fill="none"
            stroke="#7b6fc4"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <path
            d="M0,120 C10,118 20,100 30,95 C40,88 50,110 60,125 C70,138 80,130 90,118 C100,105 110,95 120,100 C130,108 140,115 150,105 C160,95 170,85 180,75 C190,65 200,80 210,88 C220,95 230,90 240,82 C250,72 260,68 270,62 C280,55 290,52 300,48 C310,44 320,42 330,32 C340,22 350,38 360,42 C370,48 380,40 390,38 C400,35 410,45 420,55 C430,65 440,68 450,72 C460,78 470,82 480,85 C490,90 500,88 510,92 C520,98 530,100 540,105 C550,112 560,108 570,100 C580,92 590,95 600,100 C610,105 620,110 640,105 C660,100 670,105 680,108"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="2"
          />
          <path
            d="M0,120 C10,118 20,100 30,95 C40,88 50,110 60,125 C70,138 80,130 90,118 C100,105 110,95 120,100 C130,108 140,115 150,105 C160,95 170,85 180,75 C190,65 200,80 210,88 C220,95 230,90 240,82 C250,72 260,68 270,62 C280,55 290,52 300,48 C310,44 320,42 330,32 C340,22 350,38 360,42 C370,48 380,40 390,38 C400,35 410,45 420,55 C430,65 440,68 450,72 C460,78 470,82 480,85 C490,90 500,88 510,92 C520,98 530,100 540,105 C550,112 560,108 570,100 C580,92 590,95 600,100 C610,105 620,110 640,105 C660,100 670,105 680,108 L680,155 L0,155 Z"
            fill="url(#clickGradCsDark)"
          />
        </>
      )}

      <text x="0" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q1
      </text>
      <text x="110" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q2
      </text>
      <text x="220" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q3
      </text>
      <text x="340" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q4
      </text>
      <text x="450" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q5
      </text>
      <text x="570" y="155" fontSize="8" fill={labelMuted} fontFamily="Inter, system-ui, sans-serif">
        Q6
      </text>

      <rect x="0" y="2" width="10" height="3" fill={gold} rx="1" />
      <text x="14" y="8" fontSize="8" fill={legend} fontFamily="Inter, system-ui, sans-serif">
        Primary KPI
      </text>
      <rect x="70" y="2" width="10" height="3" fill={purple} rx="1" opacity={isLight ? 0.85 : 0.85} />
      <text x="84" y="8" fontSize="8" fill={legend} fontFamily="Inter, system-ui, sans-serif">
        Secondary
      </text>
    </svg>
  )
}
