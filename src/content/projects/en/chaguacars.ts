import preview from "../../../assets/images/projects/chaguacars/chaguacars-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Chaguacars Express",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "seo", "whatsapp"],
  videoBorder: false,
  live: "http://chaguacars.com/",
  description:
    "Proyecto profesional: sitio web para Chaguacars Express, taller especialista en cajas automáticas en Caracas. Landing page orientada a conversión con servicios, señales de falla, trabajos reales, sección nosotros, preguntas frecuentes y contacto directo por WhatsApp y llamada, optimizada para SEO local y dispositivos móviles.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Portada del sitio web de Chaguacars Express",
        caption: "Hero con propuesta de valor y contacto directo por WhatsApp",
      },
    },
  ],
} as const satisfies ProjectContent;
