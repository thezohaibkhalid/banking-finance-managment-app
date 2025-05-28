export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "BitBank",
  description: "BitBank is a modern banking platform for every users",
  icons: {
    icon: "/icons/logo.svg",
  },
  metadataBase: new URL("https://bitbuilders.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${IBMPlexSerif.variable}`}>
        <h6 className="text-3xl"></h6> {children}
      </body>
    </html>
  );
}
