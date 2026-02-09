import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
