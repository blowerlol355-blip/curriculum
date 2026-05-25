import preview from "../../../assets/images/projects/webapp/webapp-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Aplicaciones Web",
  theme: "dark",
  tags: ["vue", "nuxt", "pinia", "firebase", "ai-api"],
  videoBorder: false,
  live: "#",
  description:
    "Komplexe cloudbasierte Webanwendungen und SaaS-Tools mit KI-Integration. Beinhaltet sichere Authentifizierung, Echtzeit-Datenbanken, fortgeschrittenen interaktiven Chat mit KI-Assistenten, globale Statusverwaltung und interaktive Panels, die mit modernen API-Servern interagieren.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Hauptansicht der KI-Webanwendung",
        caption: "Intelligente Chat-Schnittstelle und interaktives Panel mit virtuellem Assistenten",
      },
    },
  ],
} as const satisfies ProjectContent;
