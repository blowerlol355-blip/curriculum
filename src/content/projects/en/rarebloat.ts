import preview from "../../../assets/images/projects/rarebloat/rarebloat-0.png";
import stack from "../../../assets/images/projects/rarebloat/rarebloat-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "RareBloat Labs",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "gsap", "supabase", "n8n"],
  videoBorder: false,
  live: "https://rarebloat.com/",
  description:
    "Proyecto profesional: sitio web de la agencia digital RareBloat Labs, que ofrece desarrollo web a medida, automatización de procesos con n8n e IA y estrategias de growth marketing. Incluye catálogo de productos y templates, servicios, planes de precios, preguntas frecuentes y contacto, con animaciones GSAP y un diseño de marca propio.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Portada del sitio web de RareBloat Labs",
        caption: "Hero principal con animaciones y llamadas a la acción",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: stack,
        alt: "Sección de stack tecnológico y pilares de RareBloat Labs",
        caption: "Stack tecnológico y soluciones integrales para negocios",
      },
    },
  ],
} as const satisfies ProjectContent;
