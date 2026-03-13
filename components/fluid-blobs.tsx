"use client"

interface FluidBlobsProps {
  scale?: number
}

export function FluidBlobs({ scale = 1 }: FluidBlobsProps) {
  const size = Math.round(520 * scale)
  const blur = Math.round(60 * scale)

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Blurry wrapper — CSS filter on the container avoids per-frame redraws */}
      <div
        className="absolute inset-0"
        style={{ filter: `blur(${blur}px) contrast(1)` }}
      >
        <div
          className="blob-1 absolute"
          style={{
            width: size,
            height: size,
            background: "#FA5AF0",
            top: "50%",
            left: "50%",
            marginTop: -size / 2,
            marginLeft: -size / 2,
          }}
        />
        <div
          className="blob-2 absolute"
          style={{
            width: size,
            height: size,
            background: "#975AFA",
            top: "50%",
            left: "50%",
            marginTop: -size / 2,
            marginLeft: -size / 2,
          }}
        />
      </div>

      <style>{`
        @keyframes blob-move-1 {
          0%   { transform: translate(0px, 0px) scale(1);    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
          20%  { transform: translate(${Math.round(80*scale)}px, ${Math.round(-60*scale)}px) scale(1.05); border-radius: 40% 60% 44% 56% / 38% 62% 38% 62%; }
          40%  { transform: translate(${Math.round(40*scale)}px, ${Math.round(90*scale)}px) scale(0.95);  border-radius: 72% 28% 66% 34% / 48% 55% 45% 52%; }
          60%  { transform: translate(${Math.round(-70*scale)}px, ${Math.round(40*scale)}px) scale(1.08); border-radius: 30% 70% 52% 48% / 58% 42% 58% 42%; }
          80%  { transform: translate(${Math.round(-50*scale)}px, ${Math.round(-80*scale)}px) scale(0.97); border-radius: 55% 45% 37% 63% / 44% 56% 44% 56%; }
          100% { transform: translate(0px, 0px) scale(1);    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
        }
        @keyframes blob-move-2 {
          0%   { transform: translate(0px, 0px) scale(1.02); border-radius: 40% 60% 44% 56% / 38% 62% 38% 62%; }
          25%  { transform: translate(${Math.round(-90*scale)}px, ${Math.round(60*scale)}px) scale(0.93);  border-radius: 68% 32% 60% 40% / 52% 48% 52% 48%; }
          50%  { transform: translate(${Math.round(60*scale)}px, ${Math.round(80*scale)}px) scale(1.06);  border-radius: 34% 66% 48% 52% / 62% 38% 62% 38%; }
          75%  { transform: translate(${Math.round(80*scale)}px, ${Math.round(-70*scale)}px) scale(0.96);  border-radius: 55% 45% 33% 67% / 42% 58% 42% 58%; }
          100% { transform: translate(0px, 0px) scale(1.02); border-radius: 40% 60% 44% 56% / 38% 62% 38% 62%; }
        }
        .blob-1 {
          animation: blob-move-1 8s ease-in-out infinite;
          opacity: 0.85;
        }
        .blob-2 {
          animation: blob-move-2 10s ease-in-out infinite;
          opacity: 0.75;
        }
      `}</style>
    </div>
  )
}
