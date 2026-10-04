import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Come Café",
  description: "A beautiful café; feel the vibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
