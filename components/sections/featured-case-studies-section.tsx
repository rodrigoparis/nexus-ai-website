import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { getFeaturedCaseStudies } from "@/lib/data"

export function FeaturedCaseStudiesSection() {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <section className="py-20 lg:py-32 bg-nexus-surface">
      <Container>
        <FadeInUp className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-nexus-text-primary mb-6 text-balance">
            Casos de Éxito Destacados
          </h2>
          <p className="text-xl text-nexus-text-secondary max-w-3xl mx-auto text-pretty">
            Descubra cómo hemos ayudado a empresas como la suya a transformar sus operaciones con IA.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <div className="bg-nexus-background rounded-xl overflow-hidden border border-nexus-text-secondary/10 hover:border-nexus-primary/30 transition-all duration-300 group h-full">
                <div className="relative h-48">
                  <Image
                    src={study.bannerImage || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-nexus-secondary font-medium mb-2">{study.client}</div>
                  <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-4 text-balance">
                    {study.title}
                  </h3>
                  <p className="text-nexus-text-secondary leading-relaxed mb-6 text-pretty">{study.challenge}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-nexus-primary mb-1">{result.value}</div>
                        <div className="text-sm text-nexus-text-secondary">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/case-studies/${study.slug}`}>Ver Caso Completo</Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="text-center mt-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/case-studies">Ver Todos los Casos</Link>
          </Button>
        </FadeInUp>
      </Container>
    </section>
  )
}
