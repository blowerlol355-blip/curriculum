export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "iot"
  | "arduino"
  | "node-red"
  | "mqtt"
  | "home-assistant"
  | "typescript"
  | "tailwind"
  | "chartjs"
  | "dashboard"
  | "vue"
  | "nuxt"
  | "pinia"
  | "firebase"
  | "ai-api"
  | "animations"
  | "seo"
  | "supabase"
  | "prisma"
  | "n8n"
  | "gsap"
  | "stripe"
  | "python"
  | "fastapi"
  | "rag"
  | "gemini"
  | "pgvector"
  | "responsive"
  | "whatsapp";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  iot: "IoT",
  arduino: "Arduino",
  "node-red": "Node-RED",
  mqtt: "MQTT",
  "home-assistant": "Home Assistant",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  chartjs: "Chart.js",
  dashboard: "Dashboard",
  vue: "Vue.js",
  nuxt: "Nuxt.js",
  pinia: "Pinia",
  firebase: "Firebase",
  "ai-api": "AI API",
  animations: "Animations",
  seo: "SEO",
  supabase: "Supabase",
  prisma: "Prisma",
  n8n: "n8n",
  gsap: "GSAP",
  stripe: "Stripe",
  python: "Python",
  fastapi: "FastAPI",
  rag: "RAG",
  gemini: "Gemini AI",
  pgvector: "pgvector",
  responsive: "Responsive",
  whatsapp: "WhatsApp",
} as const satisfies Record<TagVariant, string>;
