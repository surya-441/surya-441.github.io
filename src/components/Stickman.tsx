"use client";

export default function StickmanWave() {
  return (
    <div className="flex justify-center items-center h-64">
      <svg width="120" height="200" viewBox="0 0 120 200">
        {/* Head */}
        <circle cx="60" cy="30" r="10" stroke="black" strokeWidth="2" fill="none" />
        
        {/* Body */}
        <line x1="60" y1="40" x2="60" y2="100" stroke="black" strokeWidth="2" />

        {/* Left Arm */}
        <line x1="60" y1="60" x2="30" y2="60" stroke="black" strokeWidth="2" />

        {/* Right (Waving) Arm */}
        <g className="animate-wave" style={{ transformOrigin: "60px 60px" }}>
          <line x1="60" y1="60" x2="85" y2="30" stroke="black" strokeWidth="2" />
        </g>

        {/* Legs */}
        <line x1="60" y1="100" x2="40" y2="140" stroke="black" strokeWidth="2" />
        <line x1="60" y1="100" x2="80" y2="140" stroke="black" strokeWidth="2" />
      </svg>

      <style jsx>{`
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(40deg);
          }
        }
      `}</style>
    </div>
  );
}
