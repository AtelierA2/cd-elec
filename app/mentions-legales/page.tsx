import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site CD-ELEC, électricien à Saïx et Castres dans le Tarn (81). Informations sur l'éditeur, l'hébergeur et la politique de confidentialité.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <HeroSection title="Mentions légales" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl space-y-12">

            {/* 1. Éditeur du site */}
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                1. Éditeur du site
              </h2>
              <p className="mb-4 text-neutral-600">
                Le site cdelec.fr est édité par :
              </p>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Raison sociale :</strong> CD-ELEC
                </p>
                <p>
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </p>
                <p>
                  <strong>Gérant :</strong> Didier Cabaret
                </p>
                <p>
                  <strong>Adresse :</strong> 534 Chemin de Rouquette, 81710 Saïx, France
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:0608274902" className="text-primary hover:underline">06 08 27 49 02</a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@cdelec.fr" className="text-primary hover:underline">contact@cdelec.fr</a>
                </p>
                <p>
                  <strong>SIRET :</strong> 903 780 583 00022
                </p>
                <p>
                  <strong>Code APE :</strong> 4321A — Travaux d&apos;installation électrique dans tous locaux
                </p>
              </div>
            </div>

            {/* 2. Hébergement */}
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                2. Hébergement
              </h2>
              <p className="mb-4 text-neutral-600">
                Ce site est hébergé par :
              </p>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
                </p>
              </div>
            </div>

            {/* 3. Conception du site */}
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                3. Conception du site
              </h2>
              <p className="mb-4 text-neutral-600">
                Ce site a été conçu et réalisé par :
              </p>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Agence :</strong>{" "}
                  <a href="https://ateliera2.com" target="_blank" rel="noopener noreferrer" title="Création de site web Tarn - Ateliera2" className="text-primary hover:underline">Atelier A2</a>
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a href="https://ateliera2.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ateliera2.com</a>
                </p>
              </div>
            </div>

            {/* 4. Propriété intellectuelle */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                4. Propriété intellectuelle
              </h2>
              <p className="mb-3 text-neutral-600">
                L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes, etc.)
                est la propriété exclusive de CD-ELEC, sauf mention contraire.
              </p>
              <p className="text-neutral-600">
                Toute reproduction, représentation, modification, publication ou adaptation
                de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
                utilisé, est interdite sauf autorisation écrite préalable de CD-ELEC.
              </p>
            </div>

            {/* 5. Protection des données personnelles */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                5. Protection des données personnelles
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                    5.1 Collecte des données
                  </h3>
                  <p className="text-neutral-600">
                    Les données personnelles collectées sur ce site (nom, prénom, email,
                    téléphone, message) le sont uniquement dans le cadre de demandes de
                    contact ou de devis.
                  </p>
                  <p className="mt-2 text-neutral-600">
                    Ces données sont destinées exclusivement à CD-ELEC et ne sont en aucun
                    cas transmises à des tiers.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                    5.2 Durée de conservation
                  </h3>
                  <p className="text-neutral-600">
                    Les données personnelles sont conservées pendant une durée maximale de
                    3 ans à compter du dernier contact avec la personne concernée.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                    5.3 Droits des utilisateurs
                  </h3>
                  <p className="mb-3 text-neutral-600">
                    Conformément au Règlement Général sur la Protection des Données (RGPD),
                    vous disposez des droits suivants :
                  </p>
                  <ul className="mb-3 list-inside list-disc space-y-1 text-neutral-600">
                    <li>Droit d&apos;accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l&apos;effacement</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d&apos;opposition</li>
                  </ul>
                  <p className="text-neutral-600">
                    Pour exercer ces droits, contactez-nous par email à{" "}
                    <a href="mailto:contact@cdelec.fr" className="text-primary hover:underline">contact@cdelec.fr</a>{" "}
                    ou par courrier à l&apos;adresse indiquée ci-dessus.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-800">
                    5.4 Responsable du traitement
                  </h3>
                  <p className="text-neutral-600">
                    Le responsable du traitement des données personnelles est
                    Didier Cabaret, gérant de CD-ELEC.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cookies */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                6. Cookies
              </h2>
              <p className="mb-3 text-neutral-600">
                Ce site n&apos;utilise aucun cookie de tracking, de publicité ou d&apos;analyse
                de votre navigation.
              </p>
              <p className="mb-3 text-neutral-600">
                Seuls des cookies strictement nécessaires au fonctionnement technique du site
                peuvent être déposés par l&apos;hébergeur (Vercel).
                Ces cookies ne collectent aucune donnée personnelle.
              </p>
              <p className="text-neutral-600">
                Aucune bannière de consentement n&apos;est donc requise pour la navigation sur ce site.
              </p>
            </div>

            {/* 7. Limitation de responsabilité */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                7. Limitation de responsabilité
              </h2>
              <p className="mb-3 text-neutral-600">
                CD-ELEC s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site.
              </p>
              <p className="mb-3 text-neutral-600">
                Toutefois, CD-ELEC ne peut garantir l&apos;exactitude, la précision ou
                l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-neutral-600">
                CD-ELEC décline toute responsabilité pour toute imprécision, inexactitude
                ou omission portant sur des informations disponibles sur ce site.
              </p>
            </div>

            {/* 8. Liens hypertextes */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                8. Liens hypertextes
              </h2>
              <p className="text-neutral-600">
                Ce site peut contenir des liens vers d&apos;autres sites.
              </p>
              <p className="mt-3 text-neutral-600">
                CD-ELEC n&apos;exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu ou leur fonctionnement.
              </p>
            </div>

            {/* 9. Droit applicable */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                9. Droit applicable
              </h2>
              <p className="mb-3 text-neutral-600">
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p className="text-neutral-600">
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* 10. Contact */}
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                10. Contact
              </h2>
              <p className="mb-4 text-neutral-600">
                Pour toute question relative aux présentes mentions légales, vous pouvez
                nous contacter :
              </p>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@cdelec.fr" className="text-primary hover:underline">contact@cdelec.fr</a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:0608274902" className="text-primary hover:underline">06 08 27 49 02</a>
                </p>
                <p>
                  <strong>Courrier :</strong> CD-ELEC, 534 Chemin de Rouquette, 81710 Saïx
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <p className="text-center text-sm text-neutral-400">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>

            {/* Retour accueil */}
            <div className="text-center">
              <Link
                href="/"
                className="text-primary hover:text-primary-700 hover:underline"
              >
                &larr; Retour à l&apos;accueil
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Wave transition to footer */}
      <WaveDivider color="#262626" className="bg-white" />
    </>
  );
}
