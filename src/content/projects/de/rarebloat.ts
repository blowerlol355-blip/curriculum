import preview from "../../../assets/images/projects/rarebloat/rarebloat-0.png";
import stack from "../../../assets/images/projects/rarebloat/rarebloat-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "RareBloat Labs",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "gsap", "supabase", "n8n"],
  videoBorder: false,
  live: "https://rarebloat.com/",
  description:
    "Professionelles Projekt: Website der Digitalagentur RareBloat Labs, die maßgeschneiderte Webentwicklung, Prozessautomatisierung mit n8n und KI sowie Growth-Marketing-Strategien anbietet. Enthält Produkt- und Template-Katalog, Leistungen, Preispläne, FAQ und Kontakt, mit GSAP-Animationen und eigenem Markendesign.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Startseite der RareBloat Labs Website",
        caption: "Hero-Bereich mit Animationen und Call-to-Actions",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: stack,
        alt: "Tech-Stack und Säulen von RareBloat Labs",
        caption: "Tech-Stack und ganzheitliche Lösungen für Unternehmen",
      },
    },
  ],
} as const satisfies ProjectContent;
