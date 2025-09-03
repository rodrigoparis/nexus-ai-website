import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "@/components/icons/brain"
import { ChartIcon } from "@/components/icons/chart"
import { RobotIcon } from "@/components/icons/robot"
import { getServices } from "@/lib/data"
import Link from "next/link"

const iconMap = {
  brain: BrainIcon,
  chart: ChartIcon,
  robot: RobotIcon,
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-nexus-text-primary mb-6 text-balance">
                Nuestros Servicios de IA
              </h1>
              <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">
                Soluciones especializadas en inteligencia artificial y machine learning diseñadas para transformar su
                negocio y generar resultados medibles.
              </p>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <div
                    key={service.id}
                    className="bg-nexus-surface rounded-xl p-8 border border-nexus-text-secondary/10 hover:border-nexus-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-nexus-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-nexus-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-nexus-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-2xl text-nexus-text-primary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-nexus-text-secondary leading-relaxed mb-6">{service.description}</p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-nexus-text-primary mb-3">Beneficios Clave:</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="text-nexus-text-secondary text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-nexus-primary rounded-full mt-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="primary" size="sm" asChild>
                          <Link href={`/services/${service.slug}`}>Ver Detalles</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
