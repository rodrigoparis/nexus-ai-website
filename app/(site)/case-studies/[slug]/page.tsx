import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/data"
import Link from "next/link"

export async function generateStaticParams() {
  const caseStudies = getCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Header Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-nexus-secondary font-medium mb-4">{caseStudy.client}</div>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-nexus-text-primary mb-8 text-balance">
                {caseStudy.title}
              </h1>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={caseStudy.bannerImage || "/placeholder.svg?height=500&width=1200"}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </section>

        {/* Content Sections */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              {/* The Challenge */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-6">El Desafío</h2>
                <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">{caseStudy.challenge}</p>
              </div>

              {/* Our Solution */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-6">Nuestra Solución</h2>
                <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">{caseStudy.solution}</p>
              </div>

              {/* Results & Impact */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-8">Resultados e Impacto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-nexus-surface rounded-xl p-8 text-center border border-nexus-text-secondary/10"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-nexus-primary mb-4">{result.value}</div>
                      <div className="text-nexus-text-secondary font-medium">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-8">Tecnologías Utilizadas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {caseStudy.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-nexus-surface rounded-lg p-4 text-center border border-nexus-text-secondary/10"
                    >
                      <div className="w-12 h-12 bg-nexus-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <span className="text-nexus-primary font-bold text-lg">{tech.charAt(0)}</span>
                      </div>
                      <span className="text-nexus-text-secondary text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nexus-surface">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-nexus-text-primary mb-6 text-balance">
                ¿Listo para Obtener Resultados Similares?
              </h2>
              <p className="text-xl text-nexus-text-secondary mb-8 text-pretty">
                Descubra cómo podemos ayudar a su empresa a alcanzar el siguiente nivel con soluciones de IA
                personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Comenzar Proyecto</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/case-studies">Ver Más Casos</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
