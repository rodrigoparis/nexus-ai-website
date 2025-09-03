import { notFound } from "next/navigation"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { getInsights, getInsightBySlug } from "@/lib/data"

export async function generateStaticParams() {
  const insights = getInsights()
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

interface InsightPageProps {
  params: {
    slug: string
  }
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug)

  if (!insight) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nexus-background">
      <Header />
      <main>
        <Container>
          <article className="max-w-4xl mx-auto py-20 lg:py-32">
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-nexus-text-secondary mb-6">
                <time>{new Date(insight.publishedAt).toLocaleDateString("es-ES")}</time>
                <span>•</span>
                <span>{insight.readTime}</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-nexus-text-primary mb-6 text-balance">
                {insight.title}
              </h1>
              <p className="text-xl text-nexus-text-secondary leading-relaxed text-pretty">{insight.excerpt}</p>
            </header>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-nexus-text-secondary leading-relaxed">{insight.content}</p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
