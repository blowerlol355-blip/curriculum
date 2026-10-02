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
    "Proyecto personal: sistema de gestión de inventario para pequeñas y medianas empresas. Control de stock por almacén en tiempo real, órdenes de compra con recepción parcial, alertas de stock bajo, dashboard con KPIs, reportes valorizados exportables a CSV y PDF, roles y permisos, auditoría completa y API REST pública documentada con OpenAPI.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Dashboard principal de StockPilot",
        caption: "Dashboard con KPIs, movimientos de 30 días y top de productos por valor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: products,
        alt: "Catálogo de productos de StockPilot",
        caption: "Gestión de productos con stock por almacén",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reports,
        alt: "Reportes de inventario de StockPilot",
        caption: "Reportes de inventario valorizado, kardex y movimientos",
      },
    },
  ],
} as const satisfies ProjectContent;
