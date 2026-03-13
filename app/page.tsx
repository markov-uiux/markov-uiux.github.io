import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Breather } from "@/components/breather"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ManifestoBreather } from "@/components/manifesto-breather"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Header />
      <Breather />
      <AboutSection />
      <WorkSection />
      <ManifestoBreather />
      <ContactSection />
      <Footer />
    </main>
  )
}
