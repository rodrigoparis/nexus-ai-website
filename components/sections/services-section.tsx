'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "@/components/icons/brain"
import { ChartIcon } from "@/components/icons/chart"
import { RobotIcon } from "@/components/icons/robot"
import { ZapIcon } from "@/components/icons/zap"
import { TargetIcon } from "@/components/icons/target"
import { TrendingUpIcon } from "@/components/icons/trending-up"
import { BarChartIcon } from "@/components/icons/bar-chart"
import { SearchIcon } from "@/components/icons/search"
import { ClockIcon } from "@/components/icons/clock"
import { DollarSignIcon } from "@/components/icons/dollar-sign"
import { ShieldIcon } from "@/components/icons/shield"
import { InfinityIcon } from "@/components/icons/infinity"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggeredScrollAnimation } from "@/components/animations/scroll-animation"
import { HoverAnimation } from "@/components/animations/hover-animation"
import { getServices } from "@/lib/data"

const iconMap = {
  brain: BrainIcon,
  chart: ChartIcon,
  robot: RobotIcon,
} as const

const keywordIconMap = {
  zap: ZapIcon,
  target: TargetIcon,
  "trending-up": TrendingUpIcon,
  "bar-chart": BarChartIcon,
  search: SearchIcon,
  clock: ClockIcon,
  "dollar-sign": DollarSignIcon,
  shield: ShieldIcon,
  infinity: InfinityIcon,
} as const

export function ServicesSection() {
  const services = getServices()

  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <Container>
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-50 mb-6 text-balance">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Ofrecemos soluciones de IA de vanguardia diseñadas para transformar su negocio y generar resultados
            medibles.
          </p>
        </ScrollAnimation>

        <StaggeredScrollAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon in iconMap ? iconMap[service.icon as keyof typeof iconMap] : RobotIcon
            return (
              <motion.div
                key={service.id}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
              >
                <HoverAnimation 
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 group h-full"
                  glowColor="rgba(20, 184, 166, 0.2)"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-gray-50 mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {service.iconKeywords.map((item, index) => {
                        const KeywordIcon = item.icon in keywordIconMap ? keywordIconMap[item.icon as keyof typeof keywordIconMap] : ZapIcon
                        return (
                          <div key={index} className="text-center">
                            <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-teal-500/20 transition-colors">
                              <KeywordIcon className="w-5 h-5 text-teal-400" />
                            </div>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                              {item.keyword}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/services/${service.slug}`}>Saber Más</Link>
                  </Button>
                </HoverAnimation>
              </motion.div>
            )
          })}
        </StaggeredScrollAnimation>

        <ScrollAnimation delay={0.4} className="text-center mt-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/services">Ver Todos los Servicios</Link>
          </Button>
        </ScrollAnimation>
      </Container>
    </section>
  )
}
