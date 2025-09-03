'use client'

import Image from "next/image"
import { Container } from "@/components/ui/container"

export function SocialProofSection() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg mb-8">Con la confianza de empresas líderes</p>
        </div>

        <div className="flex justify-center">
          <div 
            className="relative h-12 w-48 rounded-lg p-2 cursor-pointer"
            style={{
              backgroundColor: 'var(--card)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.filter = 'none';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.filter = 'brightness(0) invert(1)';
                e.currentTarget.style.backgroundColor = 'var(--card)';
              }
            }}
          >
            <Image
              src="/images/logos/globant-logo.png"
              alt="Logo de Globant"
              fill
              style={{
                filter: 'brightness(0) invert(1)',
                transition: 'filter 0.3s ease'
              }}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
