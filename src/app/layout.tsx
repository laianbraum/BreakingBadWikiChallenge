import "@/styles/globals.css";
import type { Metadata } from "next";

import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Breaking Bad Wiki",
  description:
    "See birthdate, status, occupations and featured episodes from all breaking bad characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
