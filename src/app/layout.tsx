import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LECTUS CLUB — Private Social Club",
  description: "L'excellence d'un lounge privé. Un espace exclusif dédié au raffinement et à la discrétion.",
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
