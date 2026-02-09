"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Veuillez entrer un numéro de téléphone valide"
    ),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: "", label: "Sélectionnez un type de projet" },
  { value: "Installation électrique neuve", label: "Installation électrique neuve" },
  { value: "Rénovation électrique", label: "Rénovation électrique" },
  { value: "Mise aux normes", label: "Mise aux normes" },
  { value: "Dépannage urgent", label: "Dépannage urgent" },
  { value: "Tableau électrique", label: "Tableau électrique" },
  { value: "Éclairage", label: "Éclairage" },
  { value: "Autre", label: "Autre" },
];

const WHATSAPP_NUMBER = "33608274902";

export default function ContactForm() {
  const [submitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Construire le message WhatsApp avec les infos du formulaire
    const lines = [
      `Bonjour, je souhaite un devis.`,
      ``,
      `*Nom :* ${data.name}`,
      `*Email :* ${data.email}`,
      `*Téléphone :* ${data.phone}`,
      `*Type de projet :* ${data.projectType}`,
      ``,
      `*Message :*`,
      data.message,
    ];

    const whatsappMessage = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Jean Dupont"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jean.dupont@email.com"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06 00 00 00 00"
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <Label htmlFor="projectType">Type de projet *</Label>
          <Select
            id="projectType"
            {...register("projectType")}
            aria-invalid={errors.projectType ? "true" : "false"}
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
          {errors.projectType && (
            <p className="text-sm text-red-500">{errors.projectType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Votre message *</Label>
        <Textarea
          id="message"
          placeholder="Décrivez votre projet ou votre besoin..."
          rows={5}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Error */}
      {submitError && (
        <div
          className="rounded-lg bg-red-50 p-4 text-sm text-red-700"
          role="alert"
          aria-live="assertive"
        >
          {submitError}
        </div>
      )}

      {/* Submit Button - Opens WhatsApp */}
      <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#1da851] text-white">
        <MessageCircle className="mr-2 h-5 w-5" />
        Envoyer via WhatsApp
      </Button>

      <p className="text-center text-xs text-neutral-500">
        En cliquant, votre demande sera envoyée directement sur WhatsApp avec les informations remplies ci-dessus.
      </p>
    </form>
  );
}
