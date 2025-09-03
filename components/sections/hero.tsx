import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import { WordByWordAnimation } from "@/components/animations/text-animation"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.png"
          alt="Fondo abstracto de IA"
          fill
          className="object-cover animate-kenburns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <FadeInUp>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-none tracking-tight">
                <WordByWordAnimation 
                  text={["Tu Negocio,", "Automatizado", "con IA"]}
                  className={["", "luxury-gradient-text whitespace-nowrap", "luxury-gradient-text"]}
                  delay={0.2}
                />
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-2xl font-sans">
                Diseñamos flujos de automatización inteligentes que optimizan tus operaciones, reducen costos y liberan el potencial de tu equipo.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild className="luxury-button-primary">
                  <Link href="/services">Explorar Soluciones</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="luxury-button-secondary bg-transparent">
                  <Link href="/case-studies">Resultados Reales</Link>
                </Button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <StaggerContainer className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/30">
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    <AnimatedCounter end={92} suffix="%" />
                  </div>
                  <div className="text-muted-foreground font-sans">Eficiencia Mejorada</div>
                </StaggerItem>
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    <AnimatedCounter end={40} suffix="%" />
                  </div>
                  <div className="text-muted-foreground font-sans">Reducción de Costos</div>
                </StaggerItem>
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    <AnimatedCounter end={3} suffix="x" />
                  </div>
                  <div className="text-muted-foreground font-sans">Mayor Productividad</div>
                </StaggerItem>
              </StaggerContainer>
            </FadeInUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
