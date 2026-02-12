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

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none">
              <h2>1. Éditeur du site</h2>
              <p>Le site cdelec.fr est édité par :</p>
              <ul>
                <li>
                  <strong>Raison sociale :</strong> CD-ELEC
                </li>
                <li>
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </li>
                <li>
                  <strong>Gérant :</strong> Didier Cabaret
                </li>
                <li>
                  <strong>Adresse :</strong> 534 Chemin de Rouquette, 81710 Saïx,
                  France
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:0608274902">06 08 27 49 02</a>
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@cdelec.fr">contact@cdelec.fr</a>
                </li>
                <li>
                  <strong>SIRET :</strong> [Numéro SIRET à renseigner]
                </li>
                <li>
                  <strong>Code APE :</strong> 4321A - Travaux d&apos;installation
                  électrique dans tous locaux
                </li>
              </ul>

              <h2>2. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul>
                <li>
                  <strong>Hébergeur :</strong> [Nom de l&apos;hébergeur à renseigner]
                </li>
                <li>
                  <strong>Adresse :</strong> [Adresse de l&apos;hébergeur]
                </li>
                <li>
                  <strong>Téléphone :</strong> [Téléphone de l&apos;hébergeur]
                </li>
              </ul>

              <h2>3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos,
                graphismes, etc.) est la propriété exclusive de CD-ELEC, sauf
                mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de CD-ELEC.
              </p>

              <h2>4. Protection des données personnelles</h2>
              <h3>4.1 Collecte des données</h3>
              <p>
                Les données personnelles collectées sur ce site (nom, prénom,
                email, téléphone, message) le sont uniquement dans le cadre de
                demandes de contact ou de devis. Ces données sont destinées
                exclusivement à CD-ELEC et ne sont en aucun cas transmises à des
                tiers.
              </p>

              <h3>4.2 Durée de conservation</h3>
              <p>
                Les données personnelles sont conservées pendant une durée
                maximale de 3 ans à compter du dernier contact avec la personne
                concernée.
              </p>

              <h3>4.3 Droits des utilisateurs</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants concernant vos données
                personnelles :
              </p>
              <ul>
                <li>Droit d&apos;accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par email à{" "}
                <a href="mailto:contact@cdelec.fr">contact@cdelec.fr</a> ou par
                courrier à l&apos;adresse indiquée ci-dessus.
              </p>

              <h3>4.4 Responsable du traitement</h3>
              <p>
                Le responsable du traitement des données personnelles est Didier
                Cabaret, gérant de CD-ELEC.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l&apos;expérience
                utilisateur. Les cookies sont de petits fichiers stockés sur
                votre appareil qui permettent de mémoriser vos préférences.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies.
                Cependant, certaines fonctionnalités du site pourraient ne pas
                fonctionner correctement sans cookies.
              </p>
              <p>Types de cookies utilisés :</p>
              <ul>
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au
                  fonctionnement du site
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> permettent d&apos;analyser
                  l&apos;utilisation du site (si applicable)
                </li>
              </ul>

              <h2>6. Limitation de responsabilité</h2>
              <p>
                CD-ELEC s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, CD-ELEC ne peut
                garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
                informations mises à disposition sur ce site.
              </p>
              <p>
                CD-ELEC décline toute responsabilité pour toute imprécision,
                inexactitude ou omission portant sur des informations disponibles
                sur ce site.
              </p>

              <h2>7. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers d&apos;autres sites. CD-ELEC
                n&apos;exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu ou leur fonctionnement.
              </p>

              <h2>8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>

              <h2>9. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales, vous
                pouvez nous contacter :
              </p>
              <ul>
                <li>
                  Par email :{" "}
                  <a href="mailto:contact@cdelec.fr">contact@cdelec.fr</a>
                </li>
                <li>
                  Par téléphone : <a href="tel:0608274902">06 08 27 49 02</a>
                </li>
                <li>
                  Par courrier : CD-ELEC, 534 Chemin de Rouquette, 81710 Saïx
                </li>
              </ul>

              <p className="mt-8 text-sm text-neutral-500">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
              </p>
            </div>

            <div className="mt-12 text-center">
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
      <WaveDivider color="#171717" className="bg-white" />
    </>
  );
}
