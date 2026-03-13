"use client"

import { Hero } from "@/components/hero"

export function HeroSection() {
  return (
    <section className="relative w-full" style={{ height: "calc(100vh - 56px)" }}>
      <Hero />
    </section>
  )
}
