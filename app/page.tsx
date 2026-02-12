import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import CtaSection from "@/components/CtaSection";
import WaveDivider from "@/components/WaveDivider";
import {
  Zap,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  LayoutGrid,
  Lightbulb,
  Phone,
  ArrowRight,
  Star,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Installation électrique",
    description:
      "Installation complète pour constructions neuves et extensions. Respect des normes NF C 15-100.",
  },
  {
    icon: Wrench,
    title: "Rénovation électrique",
    description:
      "Modernisation de votre installation existante pour plus de sécurité et de confort.",
  },
  {
    icon: ShieldCheck,
    title: "Mise aux normes",
    description:
      "Diagnostic et mise en conformité de votre installation électrique.",
  },
  {
    icon: AlertTriangle,
    title: "Dépannage urgent",
    description:
      "Intervention rapide pour tous vos problèmes électriques urgents.",
  },
  {
    icon: LayoutGrid,
    title: "Tableau électrique",
    description:
      "Installation et remplacement de tableaux électriques aux normes actuelles.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage",
    description:
      "Solutions d'éclairage intérieur et extérieur, LED, domotique.",
  },
];

const zones = [
  "Saïx",
  "Castres",
  "Labruguière",
  "Mazamet",
  "Aussillon",
  "Lagarrigue",
  "Navès",
  "Burlats",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="container-custom relative py-20 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                <span>Saïx, Castres et environs (Tarn 81)</span>
              </div>
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <Image
                    src="/images/didier_tete.png"
                    alt="Didier Cabaret - Gérant CD-ELEC"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    priority
                    quality={85}
                  />
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Votre électricien
                <span className="block text-primary">de confiance</span>
              </h1>
              <p className="mb-8 text-lg text-neutral-300 md:text-xl">
                CD-ELEC, artisan électricien professionnel pour tous vos travaux
                d&apos;installation, rénovation et dépannage électrique dans le
                Tarn.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-white" asChild>
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="tel:0608274902">
                    <Phone className="mr-2 h-5 w-5" />
                    06 08 27 49 02
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300 lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Intervention rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Travail soigné</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Devis gratuit</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
                <Image
                  src="/images/camionnette.JPG"
                  alt="Camionnette CD-ELEC - Électricien à Saïx et Castres"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  priority
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">+40 ans</p>
                    <p className="text-sm text-neutral-500">d&apos;expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider color="#ffffff" />
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Nos services électriques
            </h2>
            <p className="text-lg text-neutral-600">
              Des solutions complètes pour tous vos besoins en électricité,
              réalisées dans les règles de l&apos;art.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">
                Découvrir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/images_tri/Tableau elec/IMG_7275.JPG"
                  alt="Tableau électrique aux normes NF C 15-100 installé par CD-ELEC électricien Tarn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">+40 ans</p>
                <p className="text-sm text-primary-100">d&apos;expérience</p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
                Pourquoi choisir CD-ELEC ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-neutral-900">
                      Travail aux normes
                    </h3>
                    <p className="text-neutral-600">
                      Toutes nos installations respectent la norme NF C 15-100
                      pour votre sécurité.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-neutral-900">
                      Intervention rapide
                    </h3>
                    <p className="text-neutral-600">
                      Disponibilité et réactivité pour tous vos besoins urgents
                      ou planifiés.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-neutral-900">
                      Qualité garantie
                    </h3>
                    <p className="text-neutral-600">
                      Un travail soigné avec des matériaux de qualité pour une
                      installation durable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/a-propos">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              Zone d&apos;intervention
            </h2>
            <p className="mb-8 text-lg text-neutral-600">
              Nous intervenons à Saïx, Castres et dans un rayon de 50 km autour
              pour tous vos travaux électriques.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {zones.map((zone) => (
                <span
                  key={zone}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
                >
                  {zone}
                </span>
              ))}
              <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">
                + tout le Tarn (81)
              </span>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Besoin d'un électricien ?"
        description="Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Nous vous répondons sous 24h."
        primaryLabel="Demander un devis"
      />
    </>
  );
}
