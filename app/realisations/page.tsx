import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Nos réalisations
            </h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Découvrez nos chantiers réalisés. Chaque projet témoigne de notre
              savoir-faire et de notre engagement qualité.
            </p>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="bg-neutral-800 py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Envie d&apos;une réalisation similaire ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            Contactez-nous pour discuter de votre projet. Nous vous proposons un
            diagnostic gratuit et un devis détaillé.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-neutral-900"
              asChild
            >
              <a href="tel:0608274902">
                <Phone className="mr-2 h-5 w-5" />
                06 08 27 49 02
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
