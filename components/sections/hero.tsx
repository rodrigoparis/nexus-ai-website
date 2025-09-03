import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { AnimatedCounter } from "@/components/animations/animated-counter"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Fondo abstracto de IA"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-slate-50/70 to-teal-50/80" />
      </div>

      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-bounce" />
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-pulse" />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gray-300/20 rounded-full blur-md animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <FadeInUp>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 leading-none tracking-tight">
                Transformamos Datos en <span className="luxury-gradient-text">Ventaja Competitiva</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-2xl font-sans">
                Consultora líder en IA y machine learning. Desarrollamos soluciones personalizadas que impulsan la
                innovación y aceleran el crecimiento de su empresa.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild className="luxury-button-primary">
                  <Link href="/services">Nuestros Servicios</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="luxury-button-secondary bg-transparent">
                  <Link href="/case-studies">Ver Estudios de Caso</Link>
                </Button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <StaggerContainer className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-200">
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-teal-500 mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-slate-600 font-sans">Proyectos Exitosos</div>
                </StaggerItem>
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-teal-500 mb-2">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-slate-600 font-sans">Satisfacción del Cliente</div>
                </StaggerItem>
                <StaggerItem className="text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-teal-500 mb-2">24/7</div>
                  <div className="text-slate-600 font-sans">Soporte Técnico</div>
                </StaggerItem>
              </StaggerContainer>
            </FadeInUp>
          </div>

          <div className="relative hidden lg:block">
            <FadeInUp delay={0.8}>
              <div className="relative">
                {/* Neural network visualization */}
                <div className="w-96 h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute inset-8 bg-gradient-to-tr from-teal-500/30 to-gray-300/20 rounded-full blur-2xl animate-bounce" />
                  <div className="absolute inset-16 bg-teal-500/40 rounded-full blur-xl" />

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38B2AC" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Animated connecting lines */}
                    <path
                      d="M100,150 Q200,100 300,150"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M150,100 Q200,200 250,300"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <path
                      d="M100,250 Q200,200 300,250"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: "2s" }}
                    />
                  </svg>

                  {/* Node points */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-500 rounded-full shadow-md animate-pulse" />
                  <div
                    className="absolute top-1/3 right-1/4 w-3 h-3 bg-teal-400 rounded-full shadow-md animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-teal-600 rounded-full shadow-md animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-teal-500 rounded-full shadow-md animate-pulse"
                    style={{ animationDelay: "2.5s" }}
                  />
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
