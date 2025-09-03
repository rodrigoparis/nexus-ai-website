export interface Service {
  id: string
  slug: string
  title: string
  description: string
  detailedDescription: string
  iconKeywords: {
    icon: string
    keyword: string
  }[]
  technologies: string[]
  image: string
  icon: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  technologies: string[]
  bannerImage: string
  featured: boolean
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
}

export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: string
  image: string
}

export const services: Service[] = [
  {
    id: "1",
    slug: "automation-workflows",
    title: "Automation Workflows",
    description: "Diseñamos flujos de trabajo inteligentes que eliminan tareas repetitivas y maximizan la productividad.",
    detailedDescription:
      "Creamos sistemas de automatización que manejan tareas repetitivas, minimizan errores y permiten a tu equipo enfocarse en el crecimiento estratégico. Nuestras soluciones se adaptan a tus procesos existentes y escalan con tu negocio.",
    iconKeywords: [
      { icon: "zap", keyword: "Velocidad" },
      { icon: "shield", keyword: "Precisión" },
      { icon: "infinity", keyword: "Escalable" },
    ],
    technologies: ["UiPath", "Power Automate", "Python", "API Integration", "Custom AI"],
    image: "/images/services/automation.jpg",
    icon: "robot",
  },
  {
    id: "2",
    slug: "process-optimization",
    title: "Process Optimization",
    description: "Optimizamos operaciones empresariales usando IA para identificar y eliminar ineficiencias.",
    detailedDescription:
      "Analizamos tus operaciones actuales y aplicamos IA para identificar cuellos de botella, mejorar la eficiencia y generar resultados medibles. Transformamos procesos complejos en flujos de trabajo optimizados.",
    iconKeywords: [
      { icon: "trending-up", keyword: "Eficiencia" },
      { icon: "target", keyword: "Resultados" },
      { icon: "dollar-sign", keyword: "Ahorro" },
    ],
    technologies: ["Process Mining", "AI Analytics", "Workflow Automation", "Business Intelligence"],
    image: "/images/services/data-analytics.jpg",
    icon: "chart",
  },
  {
    id: "3",
    slug: "custom-ai",
    title: "Custom AI Solutions",
    description: "Desarrollamos soluciones de IA personalizadas que automatizan decisiones complejas.",
    detailedDescription:
      "Creamos sistemas de IA que automatizan la toma de decisiones, predicen tendencias y optimizan recursos. Nuestras soluciones se integran perfectamente con tus sistemas existentes para maximizar el ROI.",
    iconKeywords: [
      { icon: "brain", keyword: "Inteligente" },
      { icon: "clock", keyword: "Automático" },
      { icon: "bar-chart", keyword: "Medible" },
    ],
    technologies: ["TensorFlow", "PyTorch", "AWS", "Azure AI", "Custom Models"],
    image: "/images/services/machine-learning.jpg",
    icon: "brain",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "retail-optimization",
    title: "AI Workflow Improves Inventory Availability by 92%",
    client: "RetailMax Corp",
    challenge:
      "Pérdidas millonarias por gestión manual de inventario: exceso de stock en algunos productos y faltantes en otros.",
    solution:
      "Automatización inteligente del proceso de inventario que predice la demanda y ajusta los niveles de stock automáticamente.",
    results: [
      { metric: "Reducción de costos de inventario", value: "35%" },
      { metric: "Mejora en disponibilidad de productos", value: "92%" },
      { metric: "ROI del proyecto", value: "280%" },
      { metric: "Tiempo de implementación", value: "4 meses" },
    ],
    technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "React"],
    bannerImage: "/images/Gemini_Generated_Image_e0mavle0mavle0ma.png",
    featured: true,
  },
  {
    id: "2",
    slug: "financial-fraud-detection",
    title: "Automation Reduces Financial Fraud by 99.2%",
    client: "SecureBank",
    challenge:
      "Pérdidas significativas por fraudes y alta tasa de falsos positivos que afectaban la experiencia del cliente.",
    solution:
      "Sistema automatizado de detección que evalúa transacciones en tiempo real y toma decisiones instantáneas con alta precisión.",
    results: [
      { metric: "Detección de fraudes", value: "99.2%" },
      { metric: "Reducción de falsos positivos", value: "78%" },
      { metric: "Tiempo de respuesta", value: "<100ms" },
      { metric: "Ahorro anual estimado", value: "$2.5M" },
    ],
    technologies: ["Python", "Apache Kafka", "Redis", "MongoDB", "Docker"],
    bannerImage: "/images/Gemini_Generated_Image_e0mavle0mavle0ma (1).png",
    featured: true,
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Ana Martínez",
    position: "CEO & Chief Data Scientist",
    bio: "PhD en Machine Learning con 15 años de experiencia en IA empresarial. Ex-Google y Microsoft.",
    image: "/images/team/ana-martinez.jpg",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    position: "CTO & ML Engineer",
    bio: "Ingeniero en Sistemas especializado en arquitecturas de ML escalables. Ex-Amazon Web Services.",
    image: "/images/team/carlos-rodriguez.jpg",
  },
  {
    id: "3",
    name: "María González",
    position: "Lead Data Analyst",
    bio: "Experta en análisis de datos y visualización con certificaciones en Tableau y Power BI.",
    image: "/images/team/maria-gonzalez.jpg",
  },
]

export const insights: Insight[] = [
  {
    id: "1",
    slug: "future-of-ai-2024",
    title: "El Futuro de la IA en 2024: Tendencias que Transformarán los Negocios",
    excerpt: "Exploramos las principales tendencias de IA que definirán el panorama empresarial en 2024.",
    content: "Contenido completo del artículo...",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    image: "/images/insights/ai-trends-2024.jpg",
  },
]

// Función para obtener servicios
export function getServices(): Service[] {
  return services
}

// Función para obtener un servicio por slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

// Función para obtener casos de estudio
export function getCaseStudies(): CaseStudy[] {
  return caseStudies
}

// Función para obtener casos de estudio destacados
export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured)
}

// Función para obtener un caso de estudio por slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

// Función para obtener miembros del equipo
export function getTeamMembers(): TeamMember[] {
  return teamMembers
}

// Función para obtener insights
export function getInsights(): Insight[] {
  return insights
}

// Función para obtener un insight por slug
export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug)
}
