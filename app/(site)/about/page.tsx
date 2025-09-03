import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { getTeamMembers } from "@/lib/data"

export default function AboutPage() {
  const teamMembers = getTeamMembers()

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-nexus-text-primary mb-6 text-balance">
                Sobre Nexus AI
              </h1>
              <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">
                Somos pioneros en inteligencia artificial, dedicados a transformar empresas a través de soluciones
                innovadoras que generan impacto real y ventajas competitivas sostenibles.
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
                <h2 className="font-display font-bold text-3xl md:text-4xl text-nexus-text-primary mb-6">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-nexus-text-secondary leading-relaxed mb-6 text-pretty">
                  Democratizar el acceso a la inteligencia artificial empresarial, proporcionando soluciones
                  personalizadas que permiten a las organizaciones aprovechar todo el potencial de sus datos para tomar
                  decisiones más inteligentes y acelerar su crecimiento.
                </p>
                <p className="text-lg text-nexus-text-secondary leading-relaxed text-pretty">
                  Creemos que la IA no debe ser un privilegio de las grandes corporaciones, sino una herramienta
                  accesible que impulse la innovación en empresas de todos los tamaños.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-nexus-text-primary mb-6">
                  Nuestra Visión
                </h2>
                <p className="text-lg text-nexus-text-secondary leading-relaxed mb-6 text-pretty">
                  Ser la consultora de IA de referencia en el mercado hispanohablante, reconocida por nuestra excelencia
                  técnica, enfoque centrado en el cliente y capacidad para generar transformaciones empresariales
                  medibles y sostenibles.
                </p>
                <p className="text-lg text-nexus-text-secondary leading-relaxed text-pretty">
                  Aspiramos a un futuro donde cada decisión empresarial esté respaldada por insights inteligentes y
                  donde la tecnología amplíe las capacidades humanas en lugar de reemplazarlas.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-nexus-surface">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-nexus-text-primary mb-6">
                Nuestros Valores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-nexus-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-nexus-primary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-3">Excelencia Técnica</h3>
                <p className="text-nexus-text-secondary leading-relaxed text-pretty">
                  Mantenemos los más altos estándares de calidad en cada proyecto, utilizando las tecnologías más
                  avanzadas y las mejores prácticas de la industria.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nexus-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-nexus-secondary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-3">Transparencia Total</h3>
                <p className="text-nexus-text-secondary leading-relaxed text-pretty">
                  Creemos en la comunicación abierta y honesta. Nuestros clientes siempre saben qué estamos haciendo,
                  por qué y cómo impacta en sus objetivos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nexus-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-nexus-primary rounded-full" />
                </div>
                <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-3">Impacto Medible</h3>
                <p className="text-nexus-text-secondary leading-relaxed text-pretty">
                  Cada solución que desarrollamos está diseñada para generar resultados tangibles y medibles que
                  impulsen el crecimiento real del negocio.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-nexus-text-primary mb-6">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-nexus-text-secondary max-w-3xl mx-auto text-pretty">
                Un equipo multidisciplinario de expertos en IA, machine learning y transformación digital, unidos por la
                pasión de resolver desafíos complejos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-nexus-surface rounded-xl p-8 text-center border border-nexus-text-secondary/10 hover:border-nexus-primary/30 transition-all duration-300 group"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg?height=400&width=400"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-2">{member.name}</h3>
                  <p className="text-nexus-secondary font-medium mb-4">{member.position}</p>
                  <p className="text-nexus-text-secondary leading-relaxed text-pretty">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-nexus-surface">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-nexus-primary mb-2">5+</div>
                <div className="text-nexus-text-secondary">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-nexus-secondary mb-2">50+</div>
                <div className="text-nexus-text-secondary">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-nexus-primary mb-2">25+</div>
                <div className="text-nexus-text-secondary">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-nexus-secondary mb-2">95%</div>
                <div className="text-nexus-text-secondary">Tasa de Éxito</div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
