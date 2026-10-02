import preview from "../../../assets/images/projects/findocs/findocs-0.png";
import login from "../../../assets/images/projects/findocs/findocs-1.png";
import type { ProjectContent } from "../../types";

export default {
  title: "FinDocs AI",
  theme: "dark",
  tags: ["next", "typescript", "python", "fastapi", "supabase", "pgvector", "rag", "gemini"],
  videoBorder: false,
  live: "https://inventory-ia-eight.vercel.app",
  source: "https://github.com/blowerlol355-blip/inventory_IA",
  description:
    "Persönliches Projekt: Mandantenfähige SaaS-Plattform, um Finanzdokumente (Rechnungen, Verträge, Kontoauszüge) in natürlicher Sprache abzufragen, mit Antworten samt Quellenangabe zu Dokument und Seite. Nutzt RAG auf Supabase Postgres + pgvector, OCR mit Vision-Modellen, einen Agenten mit Werkzeugen zum Suchen, Konvertieren und Komprimieren von Dateien sowie Streaming per SSE. Mit öffentlicher Demo ohne Registrierung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Liste der Finanzdokumente in FinDocs AI",
        caption: "Verwaltung verarbeiteter Dokumente, bereit zur Abfrage im Chat",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: login,
        alt: "Anmeldebildschirm von FinDocs AI",
        caption: "Anmeldung mit Konto oder öffentliche Demo mit 50 Beispieldokumenten",
      },
    },
  ],
} as const satisfies ProjectContent;
