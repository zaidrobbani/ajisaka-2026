import type { Metadata } from "next";

type PageMetadataConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const siteConfig = {
  name: "Festival Ajisaka UGM",
  description:
    "Festival Ajisaka UGM menghadirkan kompetisi, lensa kegiatan, dan informasi lengkap seputar rangkaian acara Ajisaka.",
  url: "https://ajisaka2026.com",
  ogImage: "/Logo%20Ajisaka.png",
  locale: "id_ID",
  keywords: [
    "Festival Ajisaka UGM",
    "Ajisaka UGM",
    "Kompetisi Ajisaka",
    "Lensa Ajisaka",
    "Festival mahasiswa",
    "Acara kampus UGM",
  ],
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "events",
};

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataConfig): Metadata => ({
  title,
  description,
  keywords: [...siteConfig.keywords, ...keywords],
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: path,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
});
