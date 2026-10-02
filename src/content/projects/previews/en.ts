import thumbnailAutomation from "../../../assets/thumbnails/automation.png";
import thumbnailDashboard from "../../../assets/thumbnails/dashboard.png";
import thumbnailWebPage from "../../../assets/thumbnails/webpage.png";
import thumbnailWebApp from "../../../assets/thumbnails/webapp.png";
import thumbnailRareBloat from "../../../assets/thumbnails/rarebloat.png";
import thumbnailChaguacars from "../../../assets/thumbnails/chaguacars.png";
import thumbnailFinDocs from "../../../assets/thumbnails/findocs.png";
import thumbnailStockPilot from "../../../assets/thumbnails/stockpilot.png";

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
  {
    title: "RareBloat Labs",
    slug: "rarebloat",
    thumbnail: thumbnailRareBloat,
    description: "Proyecto profesional: sitio web de agencia digital, desarrollo y automatización",
  },
  {
    title: "Chaguacars Express",
    slug: "chaguacars",
    thumbnail: thumbnailChaguacars,
    description: "Proyecto profesional: sitio web para taller de cajas automáticas",
  },
  {
    title: "FinDocs AI",
    slug: "findocs",
    thumbnail: thumbnailFinDocs,
    description: "Proyecto personal: consulta de documentos financieros con IA y RAG",
  },
  {
    title: "StockPilot",
    slug: "stockpilot",
    thumbnail: thumbnailStockPilot,
    description: "Proyecto personal: sistema de gestión de inventario para pymes",
  },
] as const satisfies ProjectPreview[];
