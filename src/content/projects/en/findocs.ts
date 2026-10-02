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
    "Proyecto personal: plataforma SaaS multiusuario para consultar documentos financieros (facturas, contratos, estados de cuenta) en lenguaje natural con respuestas citadas al documento y la página de origen. Usa RAG sobre Supabase Postgres + pgvector, OCR con visión, un agente con herramientas para buscar, convertir y comprimir archivos, y streaming de respuestas por SSE. Incluye demo pública sin registro.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: preview,
        alt: "Listado de documentos financieros en FinDocs AI",
        caption: "Gestión de documentos procesados listos para consultar en el chat",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: login,
        alt: "Pantalla de acceso de FinDocs AI",
        caption: "Acceso con cuenta o demo pública con 50 documentos de ejemplo",
      },
    },
  ],
} as const satisfies ProjectContent;
