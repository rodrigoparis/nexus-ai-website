'use client'

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/animations/fade-in-up"

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background-1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/30" />
      </div>
      
      <Container className="relative z-10">
        <FadeInUp className="text-center max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 text-balance relative">
            ¿Listo para Transformar su Negocio con IA?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-pretty relative">
            Únase a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para impulsar
            su crecimiento. Comencemos su proyecto hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="ghost"
              size="lg"
              className="bg-transparent text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 relative border-0"
              asChild
            >
              <Link href="/contact">Comenzar Proyecto</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="bg-transparent text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 relative" 
              asChild
            >
              <Link href="/about">Conocer Nuestro Equipo</Link>
            </Button>
          </div>
        </FadeInUp>
      </Container>
    </section>
  )
}
