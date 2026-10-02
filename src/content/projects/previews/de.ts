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
    category: "service",
    thumbnail: thumbnailAutomation,
    description: "Intelligente Steuerungs- und Prozessautomatisierungssysteme",
  },
  {
    title: "Dashboard Analítico",
    slug: "dashboard",
    category: "service",
    thumbnail: thumbnailDashboard,
    description: "Analytisches Dashboard und Echtzeit-Datenvisualisierung",
  },
  {
    title: "Páginas Web",
    slug: "webpage",
    category: "service",
    thumbnail: thumbnailWebPage,
    description: "Moderne Websites und optimierte Landingpages mit Premium-Design",
  },
  {
    title: "Aplicaciones Web",
    slug: "webapp",
    category: "service",
    thumbnail: thumbnailWebApp,
    description: "SaaS-Anwendungen und maßgeschneiderte interaktive Webtools",
  },
  {
    title: "RareBloat Labs",
    slug: "rarebloat",
    category: "project",
    thumbnail: thumbnailRareBloat,
    description: "Professionelles Projekt: Website einer Digitalagentur für Entwicklung und Automatisierung",
  },
  {
    title: "Chaguacars Express",
    slug: "chaguacars",
    category: "project",
    thumbnail: thumbnailChaguacars,
    description: "Professionelles Projekt: Website für eine Automatikgetriebe-Werkstatt",
  },
  {
    title: "FinDocs AI",
    slug: "findocs",
    category: "project",
    thumbnail: thumbnailFinDocs,
    description: "Persönliches Projekt: Finanzdokumente mit KI und RAG abfragen",
  },
  {
    title: "StockPilot",
    slug: "stockpilot",
    category: "project",
    thumbnail: thumbnailStockPilot,
    description: "Persönliches Projekt: Lagerverwaltungssystem für KMU",
  },
] as const satisfies ProjectPreview[];
