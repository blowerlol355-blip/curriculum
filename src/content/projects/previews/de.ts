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
    description: "Intelligente Steuerungs- und Prozessautomatisierungssysteme",
  },
  {
    title: "Dashboard Analítico",
    slug: "dashboard",
    thumbnail: thumbnailDashboard,
    description: "Analytisches Dashboard und Echtzeit-Datenvisualisierung",
  },
  {
    title: "Páginas Web",
    slug: "webpage",
    thumbnail: thumbnailWebPage,
    description: "Moderne Websites und optimierte Landingpages mit Premium-Design",
  },
  {
    title: "Aplicaciones Web",
    slug: "webapp",
    thumbnail: thumbnailWebApp,
    description: "SaaS-Anwendungen und maßgeschneiderte interaktive Webtools",
  },
] as const satisfies ProjectPreview[];
