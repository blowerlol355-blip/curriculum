import preview from "../../../assets/images/projects/dashboard/dashboard-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Dashboard Analítico",
  theme: "dark",
  tags: ["react", "typescript", "tailwind", "chartjs", "dashboard"],
  videoBorder: false,
  live: "#",
  description:
    "Hochleistungs-Analyse-Dashboard zur Visualisierung kritischer Geschäfts-, Finanz- und Serverleistungskennzahlen. Mit interaktiven Komponenten, dynamischen Diagrammen mit flüssigen Animationen und Responsive Design mit modernem Glassmorphismus und grünen Akzenten.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Hauptansicht des Analyse-Dashboards",
        caption: "Interaktive Diagramme und Finanzkennzahlen-Panels in Echtzeit",
      },
    },
  ],
} as const satisfies ProjectContent;
