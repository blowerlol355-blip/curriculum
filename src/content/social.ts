export const social = [
  { url: "mailto:blowerlord@gmail.com", name: "mail" },
  { url: "https://github.com/blowerlol355-blip", name: "github" },
  { url: "https://www.linkedin.com/feed/", name: "linkedin" },
  { url: "https://www.instagram.com/blowereduardo/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
