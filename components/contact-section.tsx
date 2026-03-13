"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { FluidBlobs } from "@/components/fluid-blobs"

const socials = [
  { label: "Behance",   href: "https://www.behance.net/azethonkh" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/valerii-markov/" },
  { label: "Telegram",  href: "https://t.me/azethonkh" },
  { label: "Instagram", href: "https://www.instagram.com/azethonkh/" },
]

export function ContactSection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const headingRef   = useRef<HTMLHeadingElement>(null)
  const emailRef     = useRef<HTMLDivElement>(null)
  const socialsRef   = useRef<HTMLDivElement>(null)

  // Bidirectional observer — removes in-view on scroll up so animation replays
  useEffect(() => {
    const targets = [headingRef.current, emailRef.current, socialsRef.current]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          } else {
            entry.target.classList.remove("in-view")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    targets.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#232323" }}
    >
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fluid blobs — same animation as hero, scaled 0.6 */}
      <FluidBlobs scale={0.6} />

      <div className="px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            ref={headingRef}
            className="appear text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            {"LET'S WORK TOGETHER"}
          </h2>

          <div ref={emailRef} className="appear" style={{ "--appear-delay": "120ms" } as React.CSSProperties}>
            <a
              href="mailto:markov.uiux@gmail.com"
              className="hov group inline-flex items-center gap-3 text-3xl md:text-5xl lg:text-6xl font-light tracking-wide"
            >
              <span className="border-b-2 border-current pb-2">
                markov.uiux@gmail.com
              </span>
              <ArrowUpRight className="w-8 h-8 flex-shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
          </div>

          <div
            ref={socialsRef}
            className="appear mt-20 pt-12 border-t"
            style={{ borderColor: "#444444", "--appear-delay": "240ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hov group inline-flex items-center gap-1.5 text-sm md:text-base uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {social.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
