import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LECTUS CLUB — En préparation",
  description: "Un espace en préparation. Quelque chose d'extraordinaire arrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=boska@400,500,700&f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
