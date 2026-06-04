import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenric Company | Premium Financial Modeling & Data Toolkits",
  description:
    "Enterprise-grade 13-week cash flow forecasting models, data schemas, and management consulting frameworks engineered to optimize corporate liquidity and retail operations.",
  metadataBase: new URL("https://ramon.kenriccompany.com"),
  openGraph: {
    title: "Kenric Company | Premium Financial Modeling & Data Toolkits",
    description:
      "Enterprise-grade 13-week cash flow forecasting models, data schemas, and management consulting frameworks engineered to optimize corporate liquidity and retail operations.",
    url: "https://ramon.kenriccompany.com",
    siteName: "Kenric Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenric Company | Premium Financial Modeling & Data Toolkits",
    description:
      "Enterprise-grade 13-week cash flow forecasting models, data schemas, and management consulting frameworks engineered to optimize corporate liquidity and retail operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
