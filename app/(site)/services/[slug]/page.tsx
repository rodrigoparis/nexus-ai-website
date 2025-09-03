import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "@/components/icons/brain"
import { ChartIcon } from "@/components/icons/chart"
import { RobotIcon } from "@/components/icons/robot"
import { getServices, getServiceBySlug } from "@/lib/data"
import Link from "next/link"

const iconMap = {
  brain: BrainIcon,
  chart: ChartIcon,
  robot: RobotIcon,
}

export async function generateStaticParams() {
  const services = getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-nexus-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-nexus-primary" />
                  </div>
                  <h1 className="font-display font-bold text-3xl md:text-5xl text-nexus-text-primary text-balance">
                    {service.title}
                  </h1>
                </div>

                <p className="text-xl text-nexus-text-secondary leading-relaxed mb-8 text-pretty">
                  {service.detailedDescription}
                </p>

                <div className="mb-8">
                  <h2 className="font-display font-semibold text-2xl text-nexus-text-primary mb-6">Beneficios Clave</h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-nexus-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-nexus-primary rounded-full" />
                        </div>
                        <span className="text-nexus-text-secondary leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Comenzar Proyecto</Link>
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg?height=500&width=600"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-semibold text-3xl text-nexus-text-primary mb-8 text-center">
                Tecnologías que Usamos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-nexus-surface rounded-lg p-4 text-center border border-nexus-text-secondary/10 hover:border-nexus-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-nexus-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-nexus-primary font-bold text-lg">{tech.charAt(0)}</span>
                    </div>
                    <span className="text-nexus-text-secondary text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
