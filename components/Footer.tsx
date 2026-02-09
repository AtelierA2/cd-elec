import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navigation = {
  services: [
    { name: "Installation électrique", href: "/services#installation" },
    { name: "Rénovation électrique", href: "/services#renovation" },
    { name: "Mise aux normes", href: "/services#normes" },
    { name: "Dépannage", href: "/services#depannage" },
    { name: "Tableau électrique", href: "/services#tableau" },
    { name: "Éclairage", href: "/services#eclairage" },
  ],
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
    { name: "Mentions légales", href: "/mentions-legales" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/CD_ELEC_LOGO_PICTO_TEXTE.png"
                alt="CD-ELEC Logo"
                width={120}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Votre électricien professionnel à Saïx et Castres. Nous intervenons
              dans tout le Tarn pour vos travaux d&apos;installation, rénovation et
              dépannage électrique.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors">
              <span className="text-sm font-medium">Devis gratuit</span>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Nos services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              {navigation.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0608274902"
                  className="flex items-start gap-3 text-sm transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>06 08 27 49 02</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@cd-elec.fr"
                  className="flex items-start gap-3 text-sm transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>contact@cd-elec.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>
                    534 Chemin de Rouquette
                    <br />
                    81710 Saïx
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <div>
                    <p>Lun - Ven : 8h - 18h</p>
                    <p>Sam : 8h - 12h</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CD-ELEC. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span>Zone d&apos;intervention : Saïx, Castres et le Tarn (81)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
