import Link from "next/link"
import { Container } from "@/components/ui/container"

const navigation = {
  servicios: [
    { name: "Machine Learning & IA", href: "/services/machine-learning" },
    { name: "Análisis de Datos", href: "/services/data-analytics" },
    { name: "Automatización", href: "/services/automation" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Estudios de Caso", href: "/case-studies" },
    { name: "Perspectivas", href: "/insights" },
    { name: "Contacto", href: "/contact" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Términos de Servicio", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/30">
      <div className="absolute inset-x-0 -top-24 h-24 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 96"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 96L60 85.3C120 74.7 240 53.3 360 48C480 42.7 600 53.3 720 58.7C840 64 960 64 1080 58.7C1200 53.3 1320 42.7 1380 37.3L1440 32V96H1380C1320 96 1200 96 1080 96C960 96 840 96 720 96C600 96 480 96 360 96C240 96 120 96 60 96H0Z"
            className="fill-background"
          />
        </svg>
      </div>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">Nexus AI</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transformamos datos en ventaja competitiva decisiva. Consultora líder en IA y machine learning para
                empresas innovadoras.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
                <p>{process.env.NEXT_PUBLIC_CONTACT_PHONE}</p>
                <p>{process.env.NEXT_PUBLIC_CONTACT_ADDRESS}</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
              <ul className="space-y-3">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-3">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3 mb-6">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
              <ul className="space-y-3">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Nexus AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
