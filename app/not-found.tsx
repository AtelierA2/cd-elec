import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="container-custom py-20 text-center">
        <p className="mb-4 text-8xl font-bold text-primary md:text-9xl">404</p>
        <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
          Page introuvable
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-neutral-600">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Nous contacter
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <a
            href="tel:0608274902"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            06 08 27 49 02
          </a>
        </div>
      </div>
    </section>
  );
}
