import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FeaturedCaseStudiesSection } from "@/components/sections/featured-case-studies-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <SocialProofSection />
        <FeaturedCaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
