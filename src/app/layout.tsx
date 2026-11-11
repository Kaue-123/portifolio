import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { content } from "@/content/content";
import { hasContactEmail } from "@/lib/env";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(content.seo.url),
  title: content.seo.title,
  description: content.seo.description,
  keywords: [
    "desenvolvedor full-stack",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Golang",
    "Docker",
    "AWS",
    "filas",
    "processamento assíncrono",
    "Kauê Carmo Carneiro",
  ],
  authors: [{ name: content.name, url: content.linkedin }],
  creator: content.name,
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title: content.seo.title,
    description: content.seo.description,
    siteName: content.name,
    url: content.seo.url,
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
  },
  robots: { index: true, follow: true },
};

function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.name,
    jobTitle: content.role,
    ...(hasContactEmail ? { email: `mailto:${content.email}` } : {}),
    url: content.seo.url,
    sameAs: [content.linkedin].filter(Boolean),
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Universidade Cruzeiro do Sul" },
      {
        "@type": "EducationalOrganization",
        name: "Etec Professor Adhemar Batista Heméritas",
      },
    ],
    knowsAbout: [...content.stack],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-ground">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
