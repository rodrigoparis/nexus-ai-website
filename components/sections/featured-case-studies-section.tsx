'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { GridAnimation, GridItem } from "@/components/animations/grid-animation"
import { HoverAnimation } from "@/components/animations/hover-animation"
import { getFeaturedCaseStudies } from "@/lib/data"

export function FeaturedCaseStudiesSection() {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <section className="py-20 lg:py-32 bg-background">
      <Container>
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Casos de Éxito Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubra cómo hemos ayudado a empresas como la suya a transformar sus operaciones con IA.
          </p>
        </ScrollAnimation>

        <GridAnimation className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study) => (
            <GridItem key={study.id}>
              <HoverAnimation className="h-full" glowColor="rgba(255, 255, 255, 0.1)">
                <Card className="h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src={study.bannerImage}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{study.client}</div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-4 text-balance">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{study.challenge}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/case-studies/${study.slug}`}>Ver Caso Completo</Link>
                  </Button>
                </CardContent>
                </Card>
              </HoverAnimation>
            </GridItem>
          ))}
        </GridAnimation>

        <ScrollAnimation delay={0.4} className="text-center mt-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/case-studies">Ver Todos los Casos</Link>
          </Button>
        </ScrollAnimation>
      </Container>
    </section>
  )
}
