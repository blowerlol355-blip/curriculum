import preview from "../../../assets/images/projects/chaguacars/chaguacars-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Chaguacars Express",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "seo", "whatsapp"],
  videoBorder: false,
  live: "http://chaguacars.com/",
  description:
    "Professionelles Projekt: Website für Chaguacars Express, eine auf Automatikgetriebe spezialisierte Werkstatt in Caracas. Conversion-orientierte Landingpage mit Leistungen, Fehlersymptomen, echten Arbeiten, Über-uns, FAQ und direktem Kontakt per WhatsApp und Anruf, optimiert für lokales SEO und mobile Geräte.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Startseite der Chaguacars Express Website",
        caption: "Hero-Bereich mit Wertversprechen und direktem WhatsApp-Kontakt",
      },
    },
  ],
} as const satisfies ProjectContent;
