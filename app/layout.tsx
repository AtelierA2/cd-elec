import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CD-ELEC | Électricien à Saïx et Castres (81)",
    template: "%s | CD-ELEC",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  description:
    "CD-ELEC, votre électricien professionnel à Saïx et Castres dans le Tarn (81). Installation électrique, rénovation, mise aux normes NF C 15-100, dépannage urgent 7j/7. Devis gratuit au 06 08 27 49 02.",
  keywords: [
    "électricien Saïx",
    "électricien Castres",
    "électricien Tarn",
    "électricien 81",
    "électricien Labruguière",
    "électricien Mazamet",
    "électricien Aussillon",
    "électricien Lagarrigue",
    "installation électrique",
    "rénovation électrique",
    "mise aux normes NF C 15-100",
    "dépannage électrique urgent",
    "tableau électrique",
    "borne de recharge",
    "éclairage LED",
    "devis gratuit électricien",
    "artisan électricien Tarn",
    "CD-ELEC",
  ],
  authors: [{ name: "Didier Cabaret - CD-ELEC" }],
  creator: "CD-ELEC",
  publisher: "CD-ELEC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cd-elec.fr"),
  openGraph: {
    title: "CD-ELEC | Électricien à Saïx et Castres (81)",
    description:
      "Votre électricien professionnel à Saïx et Castres. Installation, rénovation, mise aux normes, dépannage. Devis gratuit.",
    url: "https://cd-elec.fr",
    siteName: "CD-ELEC",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/CD_ELEC_LOGO_FULL.png",
        width: 800,
        height: 600,
        alt: "CD-ELEC - Électricien professionnel dans le Tarn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CD-ELEC | Électricien à Saïx et Castres (81)",
    description:
      "Votre électricien professionnel à Saïx et Castres. Installation, rénovation, mise aux normes, dépannage. Devis gratuit.",
    images: ["/images/CD_ELEC_LOGO_FULL.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // À remplir avec vos codes de vérification
    // google: "votre-code-google",
    // yandex: "votre-code-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://cd-elec.fr",
              name: "CD-ELEC",
              image: "https://cd-elec.fr/images/CD_ELEC_LOGO_FULL.png",
              description:
                "Électricien professionnel à Saïx et Castres dans le Tarn. Installation électrique, rénovation, mise aux normes, dépannage. Plus de 40 ans d'expérience.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "534 Chemin de Rouquette",
                addressLocality: "Saïx",
                postalCode: "81710",
                addressRegion: "Occitanie",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.5766,
                longitude: 2.2033,
              },
              url: "https://cd-elec.fr",
              telephone: "+33608274902",
              email: "contact@cd-elec.fr",
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Check, Bank Transfer",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Saïx" },
                { "@type": "City", name: "Castres" },
                { "@type": "City", name: "Labruguière" },
                { "@type": "City", name: "Mazamet" },
                { "@type": "City", name: "Aussillon" },
                { "@type": "City", name: "Lagarrigue" },
                { "@type": "City", name: "Navès" },
                { "@type": "City", name: "Burlats" },
                { "@type": "City", name: "Roquecourbe" },
                { "@type": "City", name: "Lautrec" },
                { "@type": "City", name: "Vielmur-sur-Agout" },
                { "@type": "AdministrativeArea", name: "Tarn (81)" },
              ],
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services électriques",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Installation électrique",
                      description: "Installation électrique complète pour constructions neuves et extensions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rénovation électrique",
                      description: "Modernisation et mise en sécurité de votre installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mise aux normes NF C 15-100",
                      description: "Diagnostic et mise en conformité de votre installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dépannage électrique",
                      description: "Intervention rapide pour tous vos problèmes électriques",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Borne de recharge véhicule électrique",
                      description: "Installation de bornes IRVE pour véhicules électriques",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg">
          Aller au contenu principal
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
