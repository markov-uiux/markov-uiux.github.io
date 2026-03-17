"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Heia",
    category: "Landing Page",
    year: "2025",
    description: "Hi-end cleaning service in UK.",
    link: "https://ekorra-landing-be--heia-44675.us-central1.hosted.app/",
  },
  {
    id: "02",
    title: "Simp Gifts",
    category: "Landing Page11",
    year: "2025",
    description: "A platform that helps show support and appreciation by fans to their favorites, by crowdfunding gifts.",
    link: "https://simp.gifts/",
  },
  {
    id: "03",
    title: "RMSX",
    category: "Case Study",
    year: "2024",
    description: "Musician website. Web brutalism experiment.",
    link: "https://www.behance.net/gallery/206505139/WEB-BRUTALISM-MUSICIAN-WEBSITE-UXUI-DESIGN",
  },
]

export function WorkSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [headingRef.current, listRef.current, moreRef.current]
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
    <section id="work" className="py-32 relative" style={{ backgroundColor: "#232323" }}>
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="px-4 relative z-10">
        <div
          ref={headingRef}
          className="appear flex items-baseline justify-between mb-16"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            SELECTED WORK
          </h2>
          <span className="hidden md:block font-mono text-sm" style={{ color: "#F6F6F6" }}>
            {projects.length} Projects
          </span>
        </div>

        <div ref={listRef} className="appear border-t" style={{ borderColor: "#444444", "--appear-delay": "120ms" } as React.CSSProperties}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="hov group block border-b py-8 md:py-10 cursor-pointer"
              style={{ borderColor: "#444444" } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="font-mono text-sm w-12" style={{ color: "#999999" }}>
                  {project.id}
                </span>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                    <h3
                      className="text-2xl md:text-4xl lg:text-5xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "inherit" }}
                    >
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="font-mono text-xs md:text-sm uppercase tracking-wider" style={{ color: "#999999" }}>
                        {project.category}
                      </span>
                      <span className="font-mono text-xs md:text-sm" style={{ color: "#999999" }}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredId === project.id ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-light max-w-2xl" style={{ color: "#F6F6F6" }}>
                      {project.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                    hoveredId === project.id ? "translate-x-1 -translate-y-1 text-[#975AFA]" : "text-white"
                  }`}
                />
              </div>
            </a>
          ))}
        </div>

        {/* More Projects Link */}
        <div ref={moreRef} className="appear mt-12 flex justify-end" style={{ "--appear-delay": "240ms" } as React.CSSProperties}>
          <a
            href="https://www.behance.net/azethonkh"
            target="_blank"
            rel="noopener noreferrer"
            className="hov group inline-flex items-center gap-3 text-lg md:text-xl font-semibold"
          >
            <span className="border-b-2 border-current pb-1">MORE PROJECTS ON BEHANCE</span>
            <ArrowUpRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
