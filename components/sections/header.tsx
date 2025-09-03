"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "@/components/icons/menu"
import { CloseIcon } from "@/components/icons/close"

const navigation = [
  { name: "Servicios", href: "/services" },
  { name: "Estudios de Caso", href: "/case-studies" },
  { name: "Perspectivas", href: "/insights" },
  { name: "Sobre Nosotros", href: "/about" },
  { name: "Contacto", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 border-b border-border/20 transition-colors duration-200 ${
        scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Nexus AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Comenzar Proyecto</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="sm" className="w-full" asChild>
                  <Link href="/contact">Comenzar Proyecto</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
