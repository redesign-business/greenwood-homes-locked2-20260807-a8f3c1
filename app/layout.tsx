import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwood Homes | Award-Winning Custom Home Builder",
  description:
    "Award-winning custom home builder serving Lake Tahoe, Hawaii, Idaho, Utah, and California since 1998.",
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
