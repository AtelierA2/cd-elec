import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import {
  Zap,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  LayoutGrid,
  Lightbulb,
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

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Installation électrique",
        description: "Installation électrique complète pour constructions neuves et extensions. Respect des normes NF C 15-100.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Rénovation électrique",
        description: "Modernisation de votre installation existante pour plus de sécurité et de confort.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Mise aux normes NF C 15-100",
        description: "Diagnostic et mise en conformité de votre installation électrique.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Dépannage électrique",
        description: "Intervention rapide pour tous vos problèmes électriques urgents.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Tableau électrique",
        description: "Installation et remplacement de tableaux électriques aux normes actuelles.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Éclairage",
        description: "Solutions d'éclairage intérieur et extérieur, LED, domotique.",
        provider: { "@type": "LocalBusiness", name: "CD-ELEC" },
        areaServed: { "@type": "AdministrativeArea", name: "Tarn (81)" },
      },
    },
  ],
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
      {/* Schema.org Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <HeroSection
        title="Nos services électriques"
        description="Des solutions complètes pour tous vos besoins en électricité, réalisées par un professionnel qualifié dans le respect des normes en vigueur."
      />

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <article
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
                        quality={80}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-white">
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
                className="rounded-2xl bg-neutral-50 p-8 text-center"
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

      <CtaSection
        title="Un projet électrique ?"
        description="Contactez-nous pour discuter de votre projet. Nous vous proposons un devis gratuit et détaillé sous 48h."
      />
    </>
  );
}
