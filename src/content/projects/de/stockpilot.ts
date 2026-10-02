import preview from "../../../assets/images/projects/stockpilot/stockpilot-0.png";
import products from "../../../assets/images/projects/stockpilot/stockpilot-1.png";
import reports from "../../../assets/images/projects/stockpilot/stockpilot-2.png";
import type { ProjectContent } from "../../types";

export default {
  title: "StockPilot",
  theme: "dark",
  tags: ["next", "react", "typescript", "postgresql", "prisma", "supabase", "tailwind"],
  videoBorder: false,
  live: "https://invetario-project.vercel.app",
  source: "https://github.com/blowerlol355-blip/invetario-project-",
  description:
    "Persönliches Projekt: Lagerverwaltungssystem für kleine und mittlere Unternehmen. Bestandskontrolle pro Lager in Echtzeit, Bestellungen mit Teillieferungen, Warnungen bei niedrigem Bestand, Dashboard mit KPIs, bewertete Berichte mit CSV- und PDF-Export, Rollen und Berechtigungen, vollständiges Audit-Log und eine öffentliche, mit OpenAPI dokumentierte REST-API.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Haupt-Dashboard von StockPilot",
        caption: "Dashboard mit KPIs, 30-Tage-Bewegungen und Top-Produkten nach Wert",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: products,
        alt: "Produktkatalog von StockPilot",
        caption: "Produktverwaltung mit Bestand pro Lager",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reports,
        alt: "Bestandsberichte von StockPilot",
        caption: "Bewerteter Bestand, Lagerkartei und Bewegungsberichte",
      },
    },
  ],
} as const satisfies ProjectContent;
