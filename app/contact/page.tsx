import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Devis gratuit",
  description:
    "Contactez CD-ELEC pour vos travaux d'électricité à Saïx et Castres. Devis gratuit au 06 08 27 49 02. Installation, rénovation, dépannage électrique dans le Tarn (81). Réponse sous 24h.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Devis gratuit | CD-ELEC",
    description:
      "Demandez votre devis gratuit pour vos travaux d'électricité. Électricien à Saïx et Castres dans le Tarn.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le devis est-il gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous proposer une solution adaptée.",
      },
    },
    {
      "@type": "Question",
      name: "Dans quels délais pouvez-vous intervenir ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un dépannage urgent, nous intervenons généralement dans la journée ou sous 24h. Pour les travaux planifiés, nous définissons ensemble le calendrier qui vous convient.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous chez les professionnels ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous intervenons aussi bien chez les particuliers que chez les professionnels : commerces, bureaux, locaux industriels, etc.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des facilités de paiement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous acceptons différents modes de paiement : chèque, virement, espèces. Pour les travaux importants, un échelonnement peut être envisagé.",
      },
    },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "06 08 27 49 02",
    href: "tel:0608274902",
    description: "Du lundi au samedi",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@cd-elec.fr",
    href: "mailto:contact@cd-elec.fr",
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "534 Chemin de Rouquette",
    content2: "81710 Saïx",
    href: "https://maps.google.com/?q=534+Chemin+de+Rouquette+81710+Saïx",
    description: "Tarn, Occitanie",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven : 8h - 18h",
    content2: "Samedi : 8h - 12h",
    description: "Urgences 7j/7",
  },
];

const faqItems = faqSchema.mainEntity;

export default function ContactPage() {
  return (
    <>
      {/* FAQ Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection
        title="Contactez-nous"
        description="Un projet électrique ? Une question ? Contactez-nous pour obtenir un devis gratuit et personnalisé sous 48h."
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-neutral-900">
                Demande de devis gratuit
              </h2>
              <p className="mb-8 text-neutral-600">
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs délais.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-neutral-900">
                Nos coordonnées
              </h2>
              <p className="mb-8 text-neutral-600">
                Vous pouvez également nous contacter directement par téléphone ou
                par email.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 font-semibold text-neutral-900">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("https") ? "_blank" : undefined}
                        rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="block text-primary hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-neutral-700">{info.content}</p>
                    )}
                    {info.content2 && (
                      <p className="text-neutral-700">{info.content2}</p>
                    )}
                    <p className="mt-1 text-sm text-neutral-500">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.name} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    {faq.name}
                  </h3>
                  <p className="text-neutral-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
