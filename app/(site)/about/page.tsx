'use client'

import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { getTeamMembers } from "@/lib/data"

export default function AboutPage() {
  const teamMembers = getTeamMembers()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-card">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
                Automatizamos la Complejidad
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Transformamos procesos empresariales complejos en flujos de trabajo automatizados que impulsan la eficiencia y el crecimiento.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission */}
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Democratizar la automatización inteligente, permitiendo a empresas de cualquier tamaño optimizar sus operaciones y liberar el potencial de sus equipos.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Nuestra Visión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Un futuro donde cada proceso empresarial está optimizado por IA, permitiendo a las organizaciones enfocarse en la innovación y el crecimiento estratégico.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Nuestros Valores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Resultados Medibles</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Cada solución genera impacto cuantificable en eficiencia y rentabilidad.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Innovación Práctica</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Tecnología avanzada aplicada a objetivos empresariales concretos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Mejora Continua</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Optimización constante basada en datos y retroalimentación.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Expertos en automatización y optimización de procesos empresariales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl p-8 text-center border border-border/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg?height=400&width=400"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">92%</div>
                <div className="text-muted-foreground">Eficiencia Mejorada</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground">Reducción de Costos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Mayor Productividad</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Operación Continua</div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
