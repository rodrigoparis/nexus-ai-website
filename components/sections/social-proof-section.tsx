import { Container } from "@/components/ui/container"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateAI", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120" },
  { name: "SmartSystems", logo: "/placeholder.svg?height=60&width=120" },
  { name: "FutureLogic", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Globant", logo: "/images/logos/globant-logo.png" },
]

export function SocialProofSection() {
  return (
    <section className="py-16 bg-nexus-background">
      <Container>
        <div className="text-center mb-12">
          <p className="text-nexus-text-secondary text-lg mb-8">Con la confianza de empresas líderes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`Logo de ${client.name}`}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
