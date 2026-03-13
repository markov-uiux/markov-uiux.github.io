"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const paragraphs = [
  "Hello there! I'm Valerii. I am an UX/UI designer crafting interfaces with impact.",
  "My work is influenced by brutalism, international typography, and design systems that don't get in the user's way.",
  "I believe in concept-first design, structure before style, and design that dares to not be \"nice\".",
  "Flexibility is my second nature. I can pivot rapidly without losing sight of the end goal.",
]

const designSkills = [
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "Interactive Prototyping",
  "User Personas",
  "Customer Journey Maps",
  "Heuristic Analysis",
  "Competitor Analysis",
  "Web Design",
  "Mobile Design",
  "Adaptive Design",
  "Typography & Composition",
]

const tools = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Affinity Photo 2",
  "DaVinci Resolve",
  "HTML & CSS",
  "Jira",
  "Maze",
]

const experiences = [
  {
    company: "IQua",
    url: "https://iqua.dev/",
    role: "UX/UI Designer",
    period: "since Jun. 2025",
  },
  {
    company: "CO \"Charitable Foundation \"Plus Plus\"",
    url: "https://t.me/plusplus_charity_channel",
    role: "Graphic Designer",
    period: "since Nov. 2023",
  },
  {
    company: "Talent Bay",
    url: "https://www.linkedin.com/company/talent-bay",
    role: "UX/UI Designer",
    period: "Oct. 2024 - Mar. 2025",
  },
]

function useAppearItems(count: number, deps: unknown[] = []) {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
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

    refs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return refs
}

export function AboutSection() {
  const paraRefs = useAppearItems(paragraphs.length)
  const cvRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [cvRef.current, skillsRef.current, experienceRef.current]

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
      id="about"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "#232323" }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="px-4 relative z-10 max-w-6xl mx-auto">
        {/* Cascading paragraphs */}
        <div className="space-y-8 md:space-y-12">
          {paragraphs.map((text, index) => (
            <p
              key={index}
              ref={(el) => { paraRefs.current[index] = el }}
              className="appear text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
          style={{
            color: index === 0 ? "#ffffff" : "#F6F6F6",
            marginLeft: `${index * 4}%`,
            maxWidth: `${100 - index * 4}%`,
            "--appear-delay": `${index * 100}ms`,
          } as React.CSSProperties}
            >
              {text}
            </p>
          ))}
        </div>

        {/* CV Link */}
        <div
          ref={cvRef}
          className="appear mt-16 md:mt-20"
          style={{
            marginLeft: `${paragraphs.length * 4}%`,
            "--appear-delay": "400ms",
          } as React.CSSProperties}
        >
          <a
            href="https://drive.google.com/file/d/1PjIjqAf0dI48t7RlcAZfPujaadEpVJbm"
            target="_blank"
            rel="noopener noreferrer"
            className="hov group inline-flex items-center gap-3 text-lg md:text-xl font-semibold"
          >
            <span className="border-b-2 border-current pb-1">/CV</span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Skills & Experience Grid */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Skills */}
          <div
            ref={skillsRef}
            className="appear"
            style={{ "--appear-delay": "100ms" } as React.CSSProperties}
          >
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: "var(--font-display)", color: "#F6F6F6" }}
            >
              Skills
            </h3>

            <div className="mb-8">
              <h4
                className="text-xs font-medium tracking-[0.15em] uppercase mb-4 opacity-60"
                style={{ color: "#F6F6F6" }}
              >
                Design
              </h4>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-light border"
                    style={{ color: "#F6F6F6", borderColor: "#444444" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="text-xs font-medium tracking-[0.15em] uppercase mb-4 opacity-60"
                style={{ color: "#F6F6F6" }}
              >
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-light border"
                    style={{ color: "#F6F6F6", borderColor: "#444444" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            ref={experienceRef}
            className="appear"
            style={{ "--appear-delay": "220ms" } as React.CSSProperties}
          >
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: "var(--font-display)", color: "#F6F6F6" }}
            >
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <a
                  key={index}
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hov group block pb-6 border-b"
                  style={{ borderColor: "#333333" } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-medium mb-1 flex items-center gap-2">
                        {exp.company}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </h4>
                      <p className="text-sm font-light" style={{ color: "#F6F6F6" }}>
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-sm font-light whitespace-nowrap" style={{ color: "#999999" }}>
                      {exp.period}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
