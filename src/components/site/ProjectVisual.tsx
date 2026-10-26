/**
 * Drawn line illustrations used for projects that have no photos yet.
 * They are decorative and clearly schematic, never presented as project output.
 */
export function ProjectVisual({ kind }: { kind: "hackathon" | "quality" }) {
  return (
    <div className="bg-blueprint relative flex h-full w-full items-center justify-center overflow-hidden bg-card">
      <div className="bg-veil absolute inset-0" aria-hidden="true" />
      {kind === "hackathon" ? <Hackathon /> : <Quality />}
    </div>
  );
}

function Hackathon() {
  // A stopwatch dial with radial ticks — "challenges under time constraints".
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 300" className="relative h-full w-full text-primary" aria-hidden="true">
      <g transform="translate(200 160)" fill="none" stroke="currentColor">
        <circle r="96" strokeOpacity="0.5" strokeWidth="1" />
        <circle r="78" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 6" />
        {ticks.map((i) => (
          <line
            key={i}
            y1={-96}
            y2={i % 5 === 0 ? -84 : -90}
            strokeOpacity={i % 5 === 0 ? 0.9 : 0.35}
            strokeWidth="1"
            transform={`rotate(${i * 6})`}
          />
        ))}
        <path d="M0 0 L0 -70" strokeWidth="1.5" />
        <path d="M0 0 L46 26" strokeWidth="1" strokeOpacity="0.7" />
        <circle r="3" fill="currentColor" />
        <rect x="-10" y="-122" width="20" height="14" strokeOpacity="0.7" />
        <path d="M-80 -86 l-12 -12 M80 -86 l12 -12" strokeOpacity="0.7" />
        <path
          d="M0 -96 A96 96 0 0 1 83 48"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <g className="fill-muted-foreground" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">
        <text x="24" y="32">T — 00:00</text>
        <text x="300" y="282">TEAM · IDEATE · SOLVE</text>
      </g>
    </svg>
  );
}

function Quality() {
  // A control chart: centre line, upper/lower limits and a process trace.
  const pts = [150, 132, 160, 141, 128, 155, 147, 138, 162, 144, 133, 150, 141, 156, 146];
  const step = 320 / (pts.length - 1);
  const d = pts.map((y, i) => `${i === 0 ? "M" : "L"}${40 + i * step} ${y}`).join(" ");
  return (
    <svg viewBox="0 0 400 300" className="relative h-full w-full text-primary" aria-hidden="true">
      <g fill="none" stroke="currentColor">
        <line x1="40" x2="360" y1="95" y2="95" strokeOpacity="0.45" strokeDasharray="6 5" />
        <line x1="40" x2="360" y1="145" y2="145" strokeOpacity="0.35" />
        <line x1="40" x2="360" y1="195" y2="195" strokeOpacity="0.45" strokeDasharray="6 5" />
        <line x1="40" x2="40" y1="60" y2="230" strokeOpacity="0.3" />
        <line x1="40" x2="360" y1="230" y2="230" strokeOpacity="0.3" />
        <path d={d} strokeWidth="1.6" strokeLinejoin="round" />
        {pts.map((y, i) => (
          <circle key={i} cx={40 + i * step} cy={y} r="2.6" fill="currentColor" stroke="none" />
        ))}
      </g>
      <g className="fill-muted-foreground" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">
        <text x="300" y="88">UCL</text>
        <text x="300" y="138">CL</text>
        <text x="300" y="212">LCL</text>
        <text x="40" y="262">CONTROL CHART · SCHEMATIC</text>
      </g>
    </svg>
  );
}
