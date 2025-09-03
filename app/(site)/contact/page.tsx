import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-nexus-surface">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-nexus-text-primary mb-6 text-balance">
                Hablemos de su Proyecto
              </h1>
              <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">
                ¿Listo para transformar su negocio con IA? Nuestro equipo está aquí para ayudarle a convertir sus ideas
                en soluciones innovadoras que generen resultados reales.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-8">
                  Información de Contacto
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-nexus-text-primary mb-3">Email</h3>
                    <p className="text-nexus-text-secondary">
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@nexusai.com"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-nexus-text-primary mb-3">Teléfono</h3>
                    <p className="text-nexus-text-secondary">
                      {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+34 900 123 456"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-nexus-text-primary mb-3">Dirección</h3>
                    <p className="text-nexus-text-secondary">
                      {process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Calle Innovación 123, Madrid, España"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-nexus-text-primary mb-3">Horario de Atención</h3>
                    <p className="text-nexus-text-secondary">
                      Lunes a Viernes: 9:00 - 18:00 CET
                      <br />
                      Soporte técnico 24/7 para clientes activos
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-nexus-surface rounded-xl border border-nexus-text-secondary/10">
                  <h3 className="font-display font-semibold text-xl text-nexus-text-primary mb-4">
                    ¿Necesita una Consulta Urgente?
                  </h3>
                  <p className="text-nexus-text-secondary mb-4">
                    Para proyectos urgentes o consultas técnicas inmediatas, puede contactarnos directamente por
                    WhatsApp o programar una videollamada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/34900123456"
                      className="inline-flex items-center justify-center px-4 py-2 bg-nexus-secondary text-white rounded-lg hover:bg-nexus-secondary/90 transition-colors text-sm font-medium"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://calendly.com/nexusai"
                      className="inline-flex items-center justify-center px-4 py-2 border border-nexus-primary text-nexus-primary rounded-lg hover:bg-nexus-primary hover:text-white transition-colors text-sm font-medium"
                    >
                      Programar Llamada
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display font-bold text-3xl text-nexus-text-primary mb-8">Envíenos un Mensaje</h2>
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
