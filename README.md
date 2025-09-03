# Nexus AI Website

Sitio web corporativo de Nexus AI, desarrollado con Next.js y diseñado para mostrar nuestras soluciones de automatización con IA.

## 🚀 Características

- Diseño moderno y responsive
- Animaciones fluidas con Framer Motion
- Optimización de imágenes con Next.js
- Estilizado con Tailwind CSS
- Componentes reutilizables
- Efectos visuales premium

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 18 o superior)
- pnpm
- Git

### Instalación en Windows

#### 1. Node.js
1. Visitar https://nodejs.org/
2. Descargar la versión LTS
3. Ejecutar el instalador
4. Verificar instalación:
   ```bash
   node --version
   npm --version
   ```

#### 2. pnpm
1. Abrir PowerShell como administrador
2. Ejecutar:
   ```powershell
   iwr https://get.pnpm.io/install.ps1 -useb | iex
   ```
3. Verificar instalación:
   ```bash
   pnpm --version
   ```

#### 3. Git
1. Visitar https://git-scm.com/download/windows
2. Descargar e instalar
3. Verificar instalación:
   ```bash
   git --version
   ```

## 🚀 Inicio Rápido

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/rodrigoparis/nexus-ai-website.git
   cd nexus-ai-website
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000)

## 💻 Desarrollo

Para acceder desde otros dispositivos en la red local:
```bash
pnpm dev -- --host
```
Luego acceder usando la IP local (ej: http://192.168.1.100:3000)

## 🏗️ Estructura del Proyecto

```
nexus-ai-website/
├── app/                    # Rutas y páginas
├── components/            # Componentes reutilizables
│   ├── animations/       # Componentes de animación
│   ├── sections/        # Secciones principales
│   └── ui/             # Componentes de UI
├── lib/                # Utilidades y configuraciones
├── public/            # Archivos estáticos
└── styles/           # Estilos globales
```

## 🔧 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm start`: Inicia la aplicación construida
- `pnpm lint`: Ejecuta el linter

## 📱 Despliegue

El proyecto está desplegado en Vercel:
[https://vercel.com/rparisdv-gmailcoms-projects/v0-nexus-ai-website](https://vercel.com/rparisdv-gmailcoms-projects/v0-nexus-ai-website)

## 🔄 Sincronización con v0.app

Este repositorio se mantiene sincronizado automáticamente con los despliegues en [v0.app](https://v0.app). Cualquier cambio realizado en la aplicación desplegada se enviará automáticamente a este repositorio.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rparisdv-gmailcoms-projects/v0-nexus-ai-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/lN5z7gvpMJy)
