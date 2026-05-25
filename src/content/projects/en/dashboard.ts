import preview from "../../../assets/images/projects/dashboard/dashboard-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Dashboard Analítico",
  theme: "dark",
  tags: ["react", "typescript", "tailwind", "chartjs", "dashboard"],
  videoBorder: false,
  live: "#",
  description:
    "Panel analítico de alto rendimiento para la visualización de métricas críticas de negocio, finanzas y rendimiento de servidores. Cuenta con componentes interactivos, gráficos dinámicos con animaciones fluidas, y diseño responsive con glassmorphism moderno y acentos verdes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Vista principal del Dashboard Analítico",
        caption: "Gráficos interactivos y paneles de métricas financieras en tiempo real",
      },
    },
  ],
} as const satisfies ProjectContent;
