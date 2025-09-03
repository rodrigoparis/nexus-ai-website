import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { getCaseStudies } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-slate-50">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6 text-balance">
                Casos de Éxito
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                Descubra cómo hemos transformado negocios con soluciones de IA personalizadas que generan resultados
                medibles y ventajas competitivas sostenibles.
              </p>
            </div>
          </Container>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-teal-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className="relative h-64">
                    <Image
                      src={
                        study.bannerImage ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bm52u8bm52u8bm52.png-ZXaM5DULdt2PTbUAaZ6xbvzFzOPue4.jpeg"
                      }
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-teal-600 font-medium mb-2">{study.client}</div>
                    <h3 className="font-display font-semibold text-2xl text-slate-900 mb-4 text-balance">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-pretty">{study.challenge}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                          <div className="text-2xl font-bold text-teal-600 mb-1">{result.value}</div>
                          <div className="text-sm text-slate-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="primary" size="sm" asChild>
                      <Link href={`/case-studies/${study.slug}`}>Ver Caso Completo</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
