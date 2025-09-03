import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { getInsights } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function InsightsPage() {
  const insights = getInsights()

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-nexus-text-primary mb-6 text-balance">
                Perspectivas e Insights
              </h1>
              <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">
                Manténgase al día con las últimas tendencias, mejores prácticas y análisis profundos sobre inteligencia
                artificial y transformación digital.
              </p>
            </div>
          </Container>
        </section>

        {/* Insights Grid */}
        <section className="py-20 lg:py-32">
          <Container>
            {insights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((insight) => (
                  <article
                    key={insight.id}
                    className="bg-nexus-surface rounded-xl overflow-hidden border border-nexus-text-secondary/10 hover:border-nexus-primary/30 transition-all duration-300 group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={insight.image || "/placeholder.svg?height=192&width=400"}
                        alt={insight.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-nexus-text-secondary mb-3">
                        <time>{new Date(insight.publishedAt).toLocaleDateString("es-ES")}</time>
                        <span>•</span>
                        <span>{insight.readTime}</span>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-3 text-balance">
                        {insight.title}
                      </h3>
                      <p className="text-nexus-text-secondary leading-relaxed mb-4 text-pretty">{insight.excerpt}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/insights/${insight.slug}`}>Leer Más</Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="font-display font-semibold text-2xl text-nexus-text-primary mb-4">
                  Próximamente: Contenido Exclusivo
                </h2>
                <p className="text-nexus-text-secondary mb-8">
                  Estamos preparando contenido valioso sobre IA y transformación digital. ¡Vuelva pronto!
                </p>
                <Button variant="primary" asChild>
                  <Link href="/contact">Suscribirse a Actualizaciones</Link>
                </Button>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
