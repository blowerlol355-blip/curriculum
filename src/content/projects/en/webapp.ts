import preview from "../../../assets/images/projects/webapp/webapp-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Aplicaciones Web",
  theme: "dark",
  tags: ["vue", "nuxt", "pinia", "firebase", "ai-api"],
  videoBorder: false,
  live: "#",
  description:
    "Aplicaciones web complejas basadas en la nube y herramientas SaaS con integración de IA. Incluye autenticación segura, bases de datos en tiempo real, chat interactivo avanzado con asistentes de inteligencia artificial, gestión de estado global y paneles interactivos interactuando con servidores API modernos.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Vista principal de la aplicación web de IA",
        caption: "Interfaz de chat inteligente y panel interactivo con asistente virtual",
      },
    },
  ],
} as const satisfies ProjectContent;
