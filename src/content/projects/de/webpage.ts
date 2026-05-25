import preview from "../../../assets/images/projects/webpage/webpage-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Páginas Web",
  theme: "dark",
  tags: ["html", "css", "javascript", "animations", "seo"],
  videoBorder: false,
  live: "#",
  description:
    "Optimierte Firmenwebsites und Landingpages mit Premium-Animationen und interaktiven Übergangseffekten. Konzentriert auf eine hervorragende Benutzererfahrung (UX), wirkungsvolles visuelles Design (UI), SEO-Optimierung und ultraschnelle Ladegeschwindigkeit.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Hauptansicht der Premium-Website",
        caption: "Elegantes Design mit kontrastierenden Farbschemata und flüssigen Animationen",
      },
    },
  ],
} as const satisfies ProjectContent;
