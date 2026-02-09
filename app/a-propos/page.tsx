import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  Award,
  Users,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de CD-ELEC",
  description:
    "Découvrez CD-ELEC, votre électricien professionnel à Saïx et Castres. Plus de 40 ans d'expérience, travail soigné, respect des normes NF C 15-100. Didier Cabaret, artisan électricien dans le Tarn (81).",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos de CD-ELEC | Électricien Tarn",
    description:
      "Didier Cabaret, artisan électricien depuis 1985. Plus de 40 ans d'expérience à Saïx et Castres.",
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Qualité & sécurité",
    description:
      "Nous utilisons uniquement des matériaux de qualité et respectons scrupuleusement les normes en vigueur pour garantir votre sécurité.",
  },
  {
    icon: Clock,
    title: "Ponctualité",
    description:
      "Nous respectons nos engagements et nos délais. Votre temps est précieux, nous en avons conscience.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Artisan local, nous privilégions le contact humain et construisons une relation de confiance avec chaque client.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Plus de 40 ans d'expérience dans le métier nous permettent de répondre à tous vos besoins en électricité.",
  },
];

const certifications = [
  "Norme NF C 15-100",
  "Habilitation électrique",
  "Assurance décennale",
  "Garantie de parfait achèvement",
];

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              À propos de CD-ELEC
            </h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Votre électricien de confiance à Saïx et Castres depuis plus de 40
              ans. Découvrez notre histoire et nos engagements.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                <span>Artisan électricien depuis 2008</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
                Didier Cabaret, votre électricien
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Installé à Saïx depuis 2008, CD-ELEC est une entreprise
                  d&apos;électricité générale dirigée par Didier Cabaret, artisan
                  électricien passionné par son métier.
                </p>
                <p>
                  Fort de plus de 40 ans d&apos;expérience, je mets mes compétences
                  au service des particuliers et des professionnels pour tous
                  leurs travaux d&apos;électricité : installation neuve, rénovation,
                  mise aux normes, dépannage...
                </p>
                <p>
                  Mon objectif : vous offrir un travail de qualité, dans le
                  respect des normes et de vos attentes, avec un service de
                  proximité et des conseils personnalisés.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>534 Chemin de Rouquette, 81710 Saïx</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src="/images/images_tri/DIDIER_CABARET.JPG"
                  alt="Didier Cabaret - Électricien CD-ELEC au travail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">+40 ans</p>
                <p className="text-sm text-primary-100">d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Nos valeurs
            </h2>
            <p className="text-lg text-neutral-600">
              Des principes qui guident notre travail au quotidien pour vous
              offrir le meilleur service.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplôme Excellence Artisanale */}
      <section className="relative section-padding bg-gradient-to-br from-primary-900 via-primary to-primary-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="container-custom relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
                  <Image
                    src="/images/Diplome-excellence-Artisanale.png"
                    alt="Diplôme de l'Excellence Artisanale décerné à CD-ELEC"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                  <Award className="h-12 w-12 text-amber-900" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Distinction honorifique</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Diplôme de l&apos;Excellence Artisanale
              </h2>
              <p className="mb-6 text-lg text-primary-100">
                CD-ELEC est fier d&apos;avoir reçu le <strong className="text-white">Diplôme de l&apos;Excellence Artisanale</strong>,
                une distinction décernée par la Chambre des Métiers et de l&apos;Artisanat du Tarn.
              </p>
              <p className="mb-6 text-primary-100">
                Cette reconnaissance récompense notre engagement envers la qualité,
                notre savoir-faire et notre contribution à l&apos;excellence artisanale
                dans le domaine de l&apos;électricité.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold">+40 ans</p>
                  <p className="text-sm text-primary-200">d&apos;expérience</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-primary-200">clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
                Certifications & garanties
              </h2>
              <p className="mb-8 text-lg text-neutral-600">
                Nous sommes un professionnel qualifié et assuré. Toutes nos
                installations sont réalisées dans le respect des normes en
                vigueur et bénéficient des garanties légales.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium text-neutral-700">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-neutral-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                La norme NF C 15-100
              </h3>
              <p className="mb-4 text-neutral-600">
                La norme NF C 15-100 est la référence en matière de sécurité
                électrique en France. Elle définit les règles de conception, de
                réalisation et de vérification des installations électriques
                basse tension.
              </p>
              <p className="text-neutral-600">
                Toutes nos installations respectent cette norme pour vous
                garantir une installation sécurisée, performante et conforme aux
                exigences des assurances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Zone d&apos;intervention
            </h2>
            <p className="mb-8 text-lg text-neutral-600">
              Basé à Saïx, j&apos;interviens dans un rayon de 30 km pour tous vos
              travaux électriques. Que vous soyez à Castres, Mazamet,
              Labruguière ou ailleurs dans le Tarn, je me déplace chez vous.
            </p>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="grid gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
                {[
                  "Saïx",
                  "Castres",
                  "Labruguière",
                  "Mazamet",
                  "Aussillon",
                  "Lagarrigue",
                  "Navès",
                  "Burlats",
                  "Roquecourbe",
                  "Lautrec",
                  "Vielmur-sur-Agout",
                  "Et tout le Tarn (81)",
                ].map((zone) => (
                  <div key={zone} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-neutral-700">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-800 py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Faisons connaissance !
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            Vous avez un projet électrique ? Contactez-moi pour en discuter.
            Premier rendez-vous et devis gratuits.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Me contacter
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
