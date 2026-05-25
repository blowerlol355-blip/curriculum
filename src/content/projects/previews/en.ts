import thumbnailAutomation from "../../../assets/thumbnails/automation.png";
import thumbnailDashboard from "../../../assets/thumbnails/dashboard.png";
import thumbnailWebPage from "../../../assets/thumbnails/webpage.png";
import thumbnailWebApp from "../../../assets/thumbnails/webapp.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Automatizaciones",
    slug: "automation",
    thumbnail: thumbnailAutomation,
    description: "Sistemas inteligentes de control y automatización de procesos",
  },
  {
    title: "Dashboard Analítico",
    slug: "dashboard",
    thumbnail: thumbnailDashboard,
    description: "Panel de control y visualización de datos en tiempo real",
  },
  {
    title: "Páginas Web",
    slug: "webpage",
    thumbnail: thumbnailWebPage,
    description: "Sitios web modernos y landing pages con diseño premium",
  },
  {
    title: "Aplicaciones Web",
    slug: "webapp",
    thumbnail: thumbnailWebApp,
    description: "Aplicaciones SaaS y herramientas interactivas a medida",
  },
] as const satisfies ProjectPreview[];
