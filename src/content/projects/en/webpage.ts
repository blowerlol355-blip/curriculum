import preview from "../../../assets/images/projects/webpage/webpage-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Páginas Web",
  theme: "dark",
  tags: ["html", "css", "javascript", "animations", "seo"],
  videoBorder: false,
  live: "#",
  description:
    "Sitios web corporativos y landing pages optimizados con animaciones premium y efectos de transición interactivos. Enfocados en una experiencia de usuario sobresaliente (UX), diseño visual de impacto (UI), optimización SEO y velocidad de carga ultrarrápida.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Vista principal de la página web premium",
        caption: "Diseño elegante con esquemas de color contrastados y animaciones fluidas",
      },
    },
  ],
} as const satisfies ProjectContent;
