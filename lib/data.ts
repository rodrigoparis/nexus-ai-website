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
    slug: "machine-learning",
    title: "Machine Learning & IA",
    description: "Desarrollamos modelos de ML personalizados que transforman sus datos en insights accionables.",
    detailedDescription:
      "Nuestro equipo de expertos en machine learning diseña e implementa soluciones de IA personalizadas que se adaptan perfectamente a las necesidades específicas de su negocio. Desde algoritmos de predicción hasta sistemas de recomendación avanzados.",
    iconKeywords: [
      { icon: "zap", keyword: "Automatización" },
      { icon: "target", keyword: "Precisión" },
      { icon: "trending-up", keyword: "Optimización" },
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS SageMaker"],
    image: "/images/services/machine-learning.jpg",
    icon: "brain",
  },
  {
    id: "2",
    slug: "data-analytics",
    title: "Análisis de Datos Avanzado",
    description: "Convertimos datos complejos en estrategias empresariales claras y accionables.",
    detailedDescription:
      "Transformamos grandes volúmenes de datos en insights estratégicos que impulsan la toma de decisiones informadas. Utilizamos técnicas avanzadas de análisis para descubrir patrones ocultos y oportunidades de crecimiento.",
    iconKeywords: [
      { icon: "bar-chart", keyword: "Dashboards" },
      { icon: "search", keyword: "Insights" },
      { icon: "clock", keyword: "Tiempo Real" },
    ],
    technologies: ["Power BI", "Tableau", "Python", "R", "SQL", "Apache Spark"],
    image: "/images/services/data-analytics.jpg",
    icon: "chart",
  },
  {
    id: "3",
    slug: "automation",
    title: "Automatización Inteligente",
    description: "Implementamos soluciones de RPA e IA para optimizar sus procesos empresariales.",
    detailedDescription:
      "Diseñamos e implementamos sistemas de automatización inteligente que combinan RPA con IA para optimizar procesos empresariales complejos, reducir errores humanos y aumentar la eficiencia operacional.",
    iconKeywords: [
      { icon: "dollar-sign", keyword: "Ahorro" },
      { icon: "shield", keyword: "Confiabilidad" },
      { icon: "infinity", keyword: "Escalabilidad" },
    ],
    technologies: ["UiPath", "Blue Prism", "Automation Anywhere", "Python", "API Integration"],
    image: "/images/services/automation.jpg",
    icon: "robot",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "retail-optimization",
    title: "Optimización de Inventario con IA",
    client: "RetailMax Corp",
    challenge:
      "La empresa enfrentaba problemas de sobrestock y desabastecimiento, generando pérdidas millonarias y clientes insatisfechos.",
    solution:
      "Implementamos un sistema de predicción de demanda basado en ML que analiza patrones históricos, tendencias estacionales y factores externos para optimizar niveles de inventario.",
    results: [
      { metric: "Reducción de costos de inventario", value: "35%" },
      { metric: "Mejora en disponibilidad de productos", value: "92%" },
      { metric: "ROI del proyecto", value: "280%" },
      { metric: "Tiempo de implementación", value: "4 meses" },
    ],
    technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "React"],
    bannerImage: "/images/case-studies/retail-optimization-banner.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "financial-fraud-detection",
    title: "Sistema de Detección de Fraude Financiero",
    client: "SecureBank",
    challenge:
      "El banco necesitaba un sistema en tiempo real para detectar transacciones fraudulentas sin afectar la experiencia del cliente legítimo.",
    solution:
      "Desarrollamos un sistema de ML en tiempo real que analiza patrones de transacciones y comportamiento del usuario para identificar actividades sospechosas con alta precisión.",
    results: [
      { metric: "Detección de fraudes", value: "99.2%" },
      { metric: "Reducción de falsos positivos", value: "78%" },
      { metric: "Tiempo de respuesta", value: "<100ms" },
      { metric: "Ahorro anual estimado", value: "$2.5M" },
    ],
    technologies: ["Python", "Apache Kafka", "Redis", "MongoDB", "Docker"],
    bannerImage: "/images/case-studies/fraud-detection-banner.jpg",
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
