import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Breaking Bad Wiki",
    description:
      "See birthdate, status, occupations and featured episodes from all breaking bad characters",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
