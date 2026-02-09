import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  LayoutGrid,
  Lightbulb,
  Phone,
  ArrowRight,
  CheckCircle2,
  Home,
  Building2,
  Factory,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services électriques",
  description:
    "Découvrez nos services électriques : installation, rénovation, mise aux normes NF C 15-100, dépannage urgent, tableau électrique et éclairage à Saïx, Castres et dans le Tarn (81).",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services électriques | CD-ELEC",
    description:
      "Installation, rénovation, mise aux normes, dépannage électrique. Électricien professionnel à Saïx et Castres.",
  },
};

const services = [
  {
    id: "installation",
    icon: Zap,
    title: "Installation électrique",
    shortDesc: "Installation complète pour constructions neuves et extensions",
    description:
      "Nous réalisons l'installation électrique complète de votre maison neuve ou de votre extension. De l'étude à la mise en service, nous vous accompagnons dans toutes les étapes de votre projet électrique.",
    features: [
      "Étude et dimensionnement de l'installation",
      "Pose du tableau électrique",
      "Câblage complet de l'habitation",
      "Installation des prises et interrupteurs",
      "Raccordement au réseau ENEDIS",
      "Obtention du certificat de conformité (Consuel)",
    ],
    image: "/images/images_tri/Installation electrique/Pieuvre-électrique.jpg",
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Rénovation électrique",
    shortDesc:
      "Modernisation de votre installation pour plus de sécurité et de confort",
    description:
      "Votre installation électrique est ancienne ou ne répond plus à vos besoins ? Nous modernisons votre réseau électrique pour améliorer votre confort et votre sécurité au quotidien.",
    features: [
      "Diagnostic de l'installation existante",
      "Remplacement des câbles vétustes",
      "Ajout de prises et points lumineux",
      "Modernisation du tableau électrique",
      "Installation de la prise de terre",
      "Mise en sécurité de l'installation",
    ],
    image: "/images/images_tri/Intérieur particulier/IMG_4080.JPG",
  },
  {
    id: "normes",
    icon: ShieldCheck,
    title: "Mise aux normes NF C 15-100",
    shortDesc: "Diagnostic et mise en conformité de votre installation",
    description:
      "La norme NF C 15-100 garantit la sécurité de votre installation électrique. Nous réalisons un diagnostic complet et effectuons les travaux nécessaires pour mettre votre installation en conformité.",
    features: [
      "Diagnostic électrique complet",
      "Rapport détaillé des anomalies",
      "Travaux de mise en conformité",
      "Installation des protections obligatoires",
      "Délivrance de l'attestation de conformité",
      "Conseils pour l'entretien",
    ],
    image: "/images/images_tri/Tableau elec/IMG_0081.JPG",
  },
  {
    id: "depannage",
    icon: AlertTriangle,
    title: "Dépannage électrique",
    shortDesc: "Intervention rapide pour tous vos problèmes électriques",
    description:
      "Panne de courant, court-circuit, disjoncteur qui saute ? Nous intervenons rapidement pour diagnostiquer et résoudre tous vos problèmes électriques urgents.",
    features: [
      "Intervention rapide",
      "Diagnostic précis de la panne",
      "Réparation immédiate si possible",
      "Remplacement des éléments défectueux",
      "Conseils pour éviter les pannes futures",
      "Devis transparent avant intervention",
    ],
    image: "/images/IMG_3560.JPG",
  },
  {
    id: "tableau",
    icon: LayoutGrid,
    title: "Tableau électrique",
    shortDesc: "Installation et remplacement de tableaux aux normes actuelles",
    description:
      "Le tableau électrique est le cœur de votre installation. Nous installons et remplaçons vos tableaux électriques pour garantir la sécurité et le bon fonctionnement de votre réseau.",
    features: [
      "Installation de tableau neuf",
      "Remplacement de tableau ancien",
      "Ajout de modules de protection",
      "Installation de parafoudre",
      "Équilibrage des phases",
      "Étiquetage et repérage des circuits",
    ],
    image: "/images/images_tri/Tableau elec/IMG_7275.JPG",
  },
  {
    id: "eclairage",
    icon: Lightbulb,
    title: "Éclairage",
    shortDesc: "Solutions d'éclairage intérieur et extérieur, LED, domotique",
    description:
      "Nous concevons et installons des solutions d'éclairage adaptées à vos besoins : éclairage intérieur, extérieur, LED, spots encastrés, luminaires design et systèmes domotiques.",
    features: [
      "Étude d'éclairage personnalisée",
      "Installation de spots et luminaires",
      "Éclairage LED basse consommation",
      "Éclairage extérieur et jardin",
      "Variateurs et commandes intelligentes",
      "Éclairage de sécurité",
    ],
    image: "/images/images_tri/Intérieur particulier/IMG_3342.JPG",
  },
];

const clientTypes = [
  {
    icon: Home,
    title: "Particuliers",
    description:
      "Maisons individuelles, appartements, rénovations, extensions...",
  },
  {
    icon: Building2,
    title: "Professionnels",
    description: "Bureaux, commerces, locaux professionnels, restaurants...",
  },
  {
    icon: Factory,
    title: "Collectivités",
    description: "Bâtiments publics, écoles, associations, copropriétés...",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Nos services électriques
            </h1>
            <p className="text-lg text-primary-100 md:text-xl">
              Des solutions complètes pour tous vos besoins en électricité,
              réalisées par un professionnel qualifié dans le respect des normes
              en vigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h2>
                    <p className="mb-6 text-lg text-neutral-600">
                      {service.description}
                    </p>
                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Électricien CD-ELEC à Saïx et Castres`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Nous intervenons pour
            </h2>
            <p className="text-lg text-neutral-600">
              Que vous soyez un particulier, un professionnel ou une
              collectivité, nous avons la solution adaptée à vos besoins.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {clientTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {type.title}
                </h3>
                <p className="text-neutral-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-800 py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Un projet électrique ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            Contactez-nous pour discuter de votre projet. Nous vous proposons un
            devis gratuit et détaillé sous 48h.
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
