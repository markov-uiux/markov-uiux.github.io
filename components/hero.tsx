"use client"

import { FluidBlobs } from "@/components/fluid-blobs"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#232323]">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fluid animated blobs — full scale */}
      <FluidBlobs scale={1} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4">
        <p
          className="text-right text-[#fff] text-xl font-bold tracking-wide mb-4 opacity-0 animate-[fadeSlideDown_0.8s_ease-out_0.2s_forwards]"
        >
          UI/UX DESIGN
        </p>

        <h1
          className="text-[#fff] leading-[0.85] tracking-[-0.02em] w-full flex items-center"
          style={{ fontFamily: "'EX LIBRIS', sans-serif" }}
        >
          <span
            className="whitespace-nowrap opacity-0 animate-[fadeSlideRight_0.8s_ease-out_0.4s_forwards]"
            style={{ 
              fontSize: "750px", 
              lineHeight: 1, 
              overflow: "clip", 
              justifyContent: "flex-start", 
              alignSelf: "flex-start", 
              alignItems: "flex-start", 
              height: "600px" }}
          >
            VM
          </span>
          <span
            className="flex-1 mx-[0.15em] h-12 bg-[#fff] self-center opacity-0 animate-[scaleX_0.6s_ease-out_0.7s_forwards]"
            style={{ minWidth: "0.2em", margin:"32px", transformOrigin: "left center" }}
          />
          <span
            className="whitespace-nowrap opacity-0 animate-[fadeSlideLeft_0.8s_ease-out_0.9s_forwards]"
            style={{ 
              fontSize: "750px", 
              lineHeight: 1, 
              overflow: "clip", 
              justifyContent: "flex-start", 
              alignSelf: "flex-start", 
              alignItems: "flex-start", 
              height: "600px"
            }}
          >
            DESIGN
          </span>
        </h1>

        <p
          className="text-left text-[#F6F6F6] text-xl font-bold tracking-wide mt-4 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_1.1s_forwards]"
        >
          EVERYTHING ON PURPOSE
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleX {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
