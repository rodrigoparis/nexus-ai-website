import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations/fade-in-up"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-nexus-primary to-nexus-secondary">
      <Container>
        <FadeInUp className="text-center max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 text-balance">
            ¿Listo para Transformar su Negocio con IA?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Únase a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para impulsar
            su crecimiento. Comencemos su proyecto hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-nexus-primary border-white hover:bg-white/90"
              asChild
            >
              <Link href="/contact">Comenzar Proyecto</Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" asChild>
              <Link href="/about">Conocer Nuestro Equipo</Link>
            </Button>
          </div>
        </FadeInUp>
      </Container>
    </section>
  )
}
