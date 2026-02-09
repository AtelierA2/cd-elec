interface HeroSectionProps {
  title: string;
  description?: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-16 md:py-24 pb-24 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-100 md:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
      {/* Gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
