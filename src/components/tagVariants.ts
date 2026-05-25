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
  | "seo";

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
} as const satisfies Record<TagVariant, string>;
