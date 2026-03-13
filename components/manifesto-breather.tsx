"use client"

import { useEffect, useRef } from "react"

const statements = [
  "I DESIGN WITH TENSION.",
  "I CHOOSE CLARITY OVER COMFORT.",
  "I BELIEVE TYPE IS ARCHITECTURE.",
  "I WORK FAST. I THINK EVEN FASTER.",
  "I SPEAK FIGMA AND CONTEXT.",
]

export function ManifestoBreather() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    // Observe the section itself to trigger line stagger
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lineRefs.current.forEach((el, i) => {
              if (!el) return
              setTimeout(() => el.classList.add("in-view"), i * 120)
            })
          } else {
            lineRefs.current.forEach((el) => el?.classList.remove("in-view"))
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
        <div className="space-y-4 md:space-y-6">
          {statements.map((statement, index) => (
            <p
              key={index}
              ref={(el) => { lineRefs.current[index] = el }}
              className="appear text-base md:text-xl lg:text-2xl font-semibold tracking-tight uppercase"
              style={{
                fontFamily: "var(--font-display)",
                color: "#232323",
              }}
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
