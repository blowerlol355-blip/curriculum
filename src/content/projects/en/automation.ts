import preview from "../../../assets/images/projects/automation/automation-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Automatizaciones",
  theme: "dark",
  tags: ["iot", "arduino", "node-red", "mqtt", "home-assistant"],
  videoBorder: false,
  live: "#",
  description:
    "Desarrollo e integración de sistemas de automatización inteligentes para el hogar e industria. Control de iluminación, sensores de temperatura, telemetría en tiempo real y flujos automatizados eficientes mediante protocolos MQTT y tableros interactivos personalizados.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Panel de control de automatización inteligente",
        caption: "Interfaz de monitoreo y control industrial/hogar en tiempo real",
      },
    },
  ],
} as const satisfies ProjectContent;
