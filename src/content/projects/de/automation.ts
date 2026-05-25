import preview from "../../../assets/images/projects/automation/automation-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Automatizaciones",
  theme: "dark",
  tags: ["iot", "arduino", "node-red", "mqtt", "home-assistant"],
  videoBorder: false,
  live: "#",
  description:
    "Entwicklung und Integration intelligenter Automatisierungssysteme für Haus und Industrie. Steuerung von Beleuchtung, Temperatursensoren, Echtzeit-Telemetrie und effiziente automatisierte Abläufe über MQTT-Protokolle und maßgeschneiderte interaktive Dashboards.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Steuerungspanel für intelligente Automatisierung",
        caption: "Echtzeit-Überwachungs- und Steuerungsschnittstelle für Industrie/Haus",
      },
    },
  ],
} as const satisfies ProjectContent;
