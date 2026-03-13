"use client"

import { ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "ABOUT",   href: "#about" },
  { label: "WORKS",   href: "#work" },
  { label: "CONTACT", href: "#contact" },
  { label: "Curriculum Vitae [CV]", href: "https://drive.google.com/file/d/1PjIjqAf0dI48t7RlcAZfPujaadEpVJbm", external: true },
]

export function Header() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        height: "56px",
        backgroundColor: "rgba(35,35,35,0.96)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #333",
      }}
    >
      <nav className="h-full flex items-center gap-8 px-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            onClick={item.external ? undefined : (e) => scrollTo(e, item.href)}
            className="group inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium"
            style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#975AFA" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff" }}
          >
            {item.label}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        ))}
      </nav>
    </header>
  )
}
