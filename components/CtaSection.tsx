import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CtaSection({
  title,
  description,
  primaryLabel = "Demander un devis gratuit",
  primaryHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="bg-neutral-800 py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={primaryHref}>
              {primaryLabel}
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
  );
}
