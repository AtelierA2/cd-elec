import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import GalleryWrapper from "./GalleryWrapper";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez nos réalisations en électricité : tableaux électriques aux normes, éclairage professionnel LED, installations neuves et rénovations. Chantiers à Saïx, Castres et dans le Tarn (81).",
  alternates: {
    canonical: "/realisations",
  },
  openGraph: {
    title: "Nos réalisations | CD-ELEC",
    description:
      "Galerie photos de nos chantiers : tableaux électriques, éclairage, installations neuves à Saïx et Castres.",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <HeroSection
        title="Nos réalisations"
        description="Découvrez nos chantiers réalisés. Chaque projet témoigne de notre savoir-faire et de notre engagement qualité."
      />

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <GalleryWrapper />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              La qualité visible
            </h2>
            <p className="mb-6 text-lg text-neutral-600">
              Ces photos illustrent notre travail au quotidien : installations
              électriques modernes, sécurisées et conformes aux normes. Chaque
              intervention est réalisée avec soin pour un résultat durable.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-neutral-600">Conformité normes</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">+200</p>
                <p className="text-sm text-neutral-600">Chantiers réalisés</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-primary">40 ans</p>
                <p className="text-sm text-neutral-600">D&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Envie d'une réalisation similaire ?"
        description="Contactez-nous pour discuter de votre projet. Nous vous proposons un diagnostic gratuit et un devis détaillé."
      />
    </>
  );
}
