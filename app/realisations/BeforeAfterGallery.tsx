"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Composant Slider Avant/Après
const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden bg-neutral-100 cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* Image Après (fond) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        quality={75}
      />

      {/* Image Avant (au-dessus, clippée) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          quality={75}
        />
      </div>

      {/* Ligne de séparation et poignée */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Poignée centrale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
          <div className="flex items-center gap-0.5">
            <ChevronLeft className="h-4 w-4 text-primary -mr-1" />
            <ChevronRight className="h-4 w-4 text-primary -ml-1" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
        AVANT
      </div>
      <div className="absolute bottom-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-20">
        APRÈS
      </div>

      {/* Instruction */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full z-20 opacity-70">
        ← Glissez pour comparer →
      </div>
    </div>
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: { src: string; alt: string }[];
  details?: string[];
  isBeforeAfter?: boolean;
  hasEVIcon?: boolean;
}

// Icône SVG Borne de recharge
const EVChargerIcon = () => (
  <svg
    viewBox="0 0 437.16 219.94"
    className="h-7 w-auto text-primary"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M119.04,103.7c-1.89,40.19,11.01,41.38,10.04,69.61-.33,9.54-4.8,16.74-13.4,20.52-19.2,8.44-26.61-4.69-42.13-18.14-4.13-3.58-8.66-6.37-14.2-4.38-15.17,5.44-24.66-5.09-35.22-14.47-3.72-3.3-8.37-6.46-9.91-11.66-.73-2.49,3.44-6.24,5.01-8.11,3.14-3.75-1.53-6.58-4.01-8.78-4.94-4.37-9.35-8.73-13.86-13.51-2.58-2.74-1.07-7.6,1.1-9.22,3.49-2.6,6.49-.6,9.43,2.09l16.81,15.34c1.31,1.16,5.75-3.23,4.55-4.54-5.84-6.37-12.53-12.39-18.53-17.85-1.59-1.45-1.33-7.11.29-8.54,4.31-3.83,10.22-.8,13.59,3.22,4.15,4.94,9.81,9.44,14.63,13.4,2.75-2.42,5.12-4.52,7.01-4.57,2.41-.06,4.83,1.51,6.69,3.33,9.68,9.47,26.87,21.09,23.57,36.09-1.8,8.18,2.3,12.55,8.15,17.31l9.1,7.4c1.05.85,3.19,1.75,4.35,1.83s2.37-3.61,2.07-4.89l-7.05-30.53C82.83,72.68,124.03,10.43,187.19,1.64c36.2-5.04,72.33,1.59,104.97,18.65,38,19.86,73.08,43.43,107.04,69.64,13.63,10.52,27.08,22.12,34.27,37.89,10.19,22.35-1.77,48.17-22.6,59.47-14.53,7.88-29.74,11.02-46.12,13.46-5.42,11.11-14.8,17.8-26.95,18.87-12.14,1.07-24.11-3.71-30.39-14.6-1.56-2.7-4.3-5.11-7.84-5.11h-96.86c-3.19-.01-5.94,1.87-7.45,4.47-9.6,16.56-31.36,20.04-46.52,9.82-15.6-10.52-18.52-32.06-7.37-47.44,14.19-19.57,41.97-13.97,51.18-1.3l6.87,9.45h102.67c4.44-4.21,7.28-9.91,11.62-13.59,14.06-11.94,37.99-9.82,49.36,8.43,1.72,2.76,2.72,5.78,6.98,4.93,13.06-2.62,35.75-9.97,38.73-24.41,3.88-18.79-20.11-30.37-33.63-37.49l-29.61-15.58c-11.38-5.99-21.68-12.83-31.03-21.74-21.12-20.13-43.37-38.8-73.48-44.63-19.22-3.72-39.37-5.43-58.87-1.92-36.71,6.6-61.38,38-63.1,74.81ZM163.15,176.54c-6.63,3.09-8.63,9.9-5.84,15.63,2.47,5.07,9.09,8.07,14.71,5.18,5.32-2.73,7.74-8.31,6.13-14-1.65-5.86-9.01-9.61-15-6.82ZM330.7,176.42c-6.58,2.56-9,9.79-6.11,15.75,2.51,5.18,9.18,7.41,13.53,5.63,6.84-2.81,9.69-9.11,7.7-14.29-2.43-6.33-9.05-9.45-15.12-7.09Z"/>
  </svg>
);

const projects: Project[] = [
  // 1. Particuliers en premier — c'est ce que cherchent la majorité des visiteurs
  {
    id: 3,
    title: "Particuliers",
    category: "Éclairage",
    description:
      "Installation électrique et éclairage pour particuliers : luminaires design, spots LED encastrés, éclairage de caves à vin et intérieurs haut de gamme.",
    images: [
      { src: "/images/images_tri/Intérieur particulier/IMG_3342.JPG", alt: "Luminaire design Vertigo installé" },
      { src: "/images/images_tri/Intérieur particulier/IMG_4080.JPG", alt: "Cave à vin avec spots LED" },
      { src: "/images/images_tri/Intérieur particulier/IMG_3308.JPG", alt: "Éclairage intérieur" },
      { src: "/images/images_tri/Intérieur particulier/IMG_3311.JPG", alt: "Installation spots" },
      { src: "/images/images_tri/Intérieur particulier/IMG_3508.JPG", alt: "Éclairage salon" },
      { src: "/images/images_tri/Intérieur particulier/IMG_3508 - Copie.JPG", alt: "Détail éclairage" },
      { src: "/images/images_tri/Intérieur particulier/IMG_4996.JPG", alt: "Luminaire design" },
      { src: "/images/images_tri/Intérieur particulier/IMG_5487.JPG", alt: "Spots encastrés" },
      { src: "/images/images_tri/Intérieur particulier/IMG_5815.JPG", alt: "Éclairage moderne" },
      { src: "/images/images_tri/Intérieur particulier/IMG_6012.JPG", alt: "Installation particulier" },
      { src: "/images/images_tri/Intérieur particulier/IMG_8188.JPG", alt: "Éclairage chambre" },
      { src: "/images/images_tri/Intérieur particulier/Photo 496.jpg", alt: "Travaux intérieur" },
      { src: "/images/images_tri/Intérieur particulier/Photo 499.jpg", alt: "Rénovation électrique" },
      { src: "/images/images_tri/Intérieur particulier/Photo 500.jpg", alt: "Installation lumineuse" },
      { src: "/images/images_tri/Intérieur particulier/Photo 501.jpg", alt: "Électricité maison" },
      { src: "/images/images_tri/Intérieur particulier/Photo 502.jpg", alt: "Travaux électriques" },
      { src: "/images/images_tri/Intérieur particulier/Photo 503.jpg", alt: "Installation complète" },
      { src: "/images/images_tri/Intérieur particulier/Photo 504.jpg", alt: "Éclairage particulier" },
      { src: "/images/images_tri/Intérieur particulier/Photo 505.jpg", alt: "Finitions électriques" },
      { src: "/images/images_tri/Intérieur particulier/Photo 506.jpg", alt: "Réalisation intérieur" },
      { src: "/images/images_tri/Intérieur particulier/Photo 594.jpg", alt: "Projet particulier" },
      { src: "/images/images_tri/Intérieur particulier/Photo 598.jpg", alt: "Installation résidentielle" },
    ],
    details: [
      "Luminaires suspendus design",
      "Spots LED encastrés au plafond",
      "Variateurs d'intensité",
      "Éclairage de caves à vin",
    ],
  },
  // 2. Tableaux électriques — service très courant
  {
    id: 2,
    title: "Tableaux électriques aux normes",
    category: "Tableau électrique",
    description:
      "Installation et mise aux normes de tableaux électriques pour particuliers et professionnels. Conformité NF C 15-100.",
    images: [
      { src: "/images/images_tri/Tableau elec/IMG_7275.JPG", alt: "Tableau électrique industriel aux normes" },
      { src: "/images/images_tri/Tableau elec/IMG_0081.JPG", alt: "Tableau électrique résidentiel moderne" },
      { src: "/images/images_tri/Tableau elec/IMG_0432.JPG", alt: "Installation tableau électrique" },
      { src: "/images/images_tri/Tableau elec/IMG_0458.JPG", alt: "Câblage tableau électrique" },
      { src: "/images/images_tri/Tableau elec/IMG_0645.JPG", alt: "Tableau électrique terminé" },
      { src: "/images/images_tri/Tableau elec/IMG_0990 - Copie (2).JPG", alt: "Détail tableau électrique" },
      { src: "/images/images_tri/Tableau elec/IMG_3449.JPG", alt: "Tableau électrique professionnel" },
      { src: "/images/images_tri/Tableau elec/IMG_6729.JPG", alt: "Mise aux normes tableau électrique" },
      { src: "/images/images_tri/Tableau elec/IMG_7038.JPG", alt: "Tableau électrique multi-rangées" },
      { src: "/images/images_tri/Tableau elec/IMG_9050.JPG", alt: "Tableau électrique câblé et repéré" },
    ],
    details: [
      "Tableaux multi-rangées avec disjoncteurs",
      "Protections différentielles 30mA",
      "Câblage organisé et repéré",
      "Mise aux normes NF C 15-100",
    ],
  },
  // 3. Rénovation — besoin fréquent des particuliers
  {
    id: 4,
    title: "Rénovation électrique complète",
    category: "Rénovation",
    description:
      "Rénovation complète d'installations électriques : pieuvres électriques précâblées, saignées et remise aux normes.",
    images: [
      { src: "/images/images_tri/Installation electrique/Pieuvre-électrique.jpg", alt: "Pieuvre électrique installation" },
      { src: "/images/images_tri/Installation electrique/pieuvres-electriques.jpg", alt: "Pieuvres électriques câblage" },
      { src: "/images/images_tri/Installation electrique/Saignee-et-electricite-016.jpg", alt: "Saignée électrique mur" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 1.jpg", alt: "Installation plancher chauffant" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 2.jpg", alt: "Plancher chauffant en cours de pose" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 3.jpg", alt: "Câblage plancher chauffant" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 4.jpg", alt: "Plancher chauffant détail" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 5.jpg", alt: "Plancher chauffant installation complète" },
      { src: "/images/images_tri/Installation electrique/Plancher chauffant 6.jpg", alt: "Plancher chauffant terminé" },
    ],
    details: [
      "Pieuvres électriques précâblées",
      "Saignées propres et rebouchées",
      "Remplacement câblage vétuste",
      "Mise en conformité totale",
    ],
  },
  // 4. Bornes de recharge — service tendance et recherché
  {
    id: 5,
    title: "Bornes de recharge",
    category: "Borne de recharge",
    description:
      "Installation de bornes de recharge pour véhicules électriques. Solutions adaptées aux particuliers et professionnels, conformes aux normes IRVE.",
    images: [
      { src: "/images/images_tri/Borne voiture/Borne voiture.JPG", alt: "Borne de recharge véhicule électrique installée" },
      { src: "/images/images_tri/Borne voiture/IMG_0178.JPG", alt: "Installation borne de recharge" },
      { src: "/images/images_tri/Borne voiture/IMG_8937.jpeg", alt: "Borne de recharge en fonctionnement" },
      { src: "/images/images_tri/Borne voiture/IMG_9733.JPG", alt: "Borne de recharge installée pour particulier" },
    ],
    hasEVIcon: true,
    details: [
      "Bornes de recharge certifiées IRVE",
      "Circuit dédié avec protection",
      "Puissance adaptée à vos besoins",
      "Installation aux normes",
    ],
  },
  // 5. Avant/Après — montre la transformation, très convaincant
  {
    id: 10,
    title: "Toilettes - Avant / Après",
    category: "Avant / Après",
    description:
      "Rénovation électrique de sanitaires : éclairage, ventilation et prises aux normes salle d'eau.",
    images: [
      { src: "/images/images_tri/Avant-Apres/Toilette 2.JPG", alt: "Avant - Toilettes avant rénovation" },
      { src: "/images/images_tri/Avant-Apres/Toilette 1.JPG", alt: "Après - Toilettes rénovées" },
    ],
    isBeforeAfter: true,
    details: [
      "Éclairage adapté aux sanitaires",
      "Ventilation mécanique contrôlée",
      "Prises conformes aux zones humides",
      "Installation aux normes NF C 15-100",
    ],
  },
  {
    id: 9,
    title: "Câblage & Branchements - Avant / Après",
    category: "Avant / Après",
    description:
      "Reprise complète du câblage et des branchements électriques : organisation des réseaux, passage de gaines et raccordements propres.",
    images: [
      { src: "/images/images_tri/Avant-Apres/Baie 1.JPG", alt: "Avant - Câblage désordonné" },
      { src: "/images/images_tri/Avant-Apres/Baie 2.JPG", alt: "Après - Câblage organisé et propre" },
    ],
    isBeforeAfter: true,
    details: [
      "Reprise du câblage existant",
      "Organisation des réseaux électriques",
      "Passage de gaines et chemins de câbles",
      "Raccordements propres et sécurisés",
    ],
  },
  // 6. Piscine — une seule galerie chronologique avec toutes les photos
  {
    id: 6,
    title: "Piscine - Du chantier au résultat",
    category: "Avant / Après",
    description:
      "Installation électrique complète pour piscine : du terrassement à la mise en eau. Éclairage subaquatique, alimentation pompe et système de filtration.",
    images: [
      { src: "/images/images_tri/Avant-Apres/Piscine 1.JPG", alt: "Piscine - Début du chantier" },
      { src: "/images/images_tri/Avant-Apres/Piscine 2.JPG", alt: "Piscine - Terrassement" },
      { src: "/images/images_tri/Avant-Apres/Piscine 3.JPG", alt: "Piscine - Installation électrique" },
      { src: "/images/images_tri/Avant-Apres/Piscine 4.JPG", alt: "Piscine - Câblage et gaines" },
      { src: "/images/images_tri/Avant-Apres/Piscine 5.JPG", alt: "Piscine - Finitions" },
      { src: "/images/images_tri/Avant-Apres/Piscine 6.JPG", alt: "Piscine - Résultat final" },
    ],
    details: [
      "Éclairage subaquatique LED",
      "Alimentation pompe et filtration",
      "Mise aux normes de sécurité piscine",
      "Protection différentielle 30mA",
    ],
  },
  // 7. Studios Radio — projet spécialisé impressionnant mais niche
  {
    id: 1,
    title: "Studios Radio",
    category: "Éclairage professionnel",
    description:
      "Installation électrique et éclairage professionnel pour les studios de radio (Chérie FM, Virgin Radio, NRJ). Équipements broadcast, éclairage d'ambiance et technique.",
    images: [
      { src: "/images/images_tri/Radio/IMG_5922 - Copie.JPG", alt: "Studio Chérie FM avec éclairage complet" },
      { src: "/images/images_tri/Radio/IMG_6932.JPG", alt: "Studio Virgin Radio équipé" },
      { src: "/images/images_tri/Radio/NRJ.JPG", alt: "Studio NRJ" },
      { src: "/images/images_tri/Radio/IMG_9760.JPG", alt: "Installation studio radio" },
      { src: "/images/images_tri/Radio/IMG_9765.JPG", alt: "Éclairage studio radio" },
      { src: "/images/images_tri/Radio/IMG_5508.JPG", alt: "Console radio" },
      { src: "/images/images_tri/Radio/IMG_5511.JPG", alt: "Équipement broadcast" },
      { src: "/images/images_tri/Radio/IMG_1524.JPG", alt: "Installation technique radio" },
      { src: "/images/images_tri/Radio/IMG_1527.JPG", alt: "Câblage studio" },
      { src: "/images/images_tri/Radio/IMG_1528.JPG", alt: "Détail installation" },
      { src: "/images/images_tri/Radio/IMG_E8281.JPG", alt: "Vue studio" },
      { src: "/images/images_tri/Radio/Photo 362.jpg", alt: "Installation radio" },
    ],
    details: [
      "Projecteurs professionnels et éclairage d'ambiance LED",
      "Alimentation équipements broadcast",
      "Prises techniques spécialisées",
      "Circuit ondulé pour équipements sensibles",
    ],
  },
  // 8. Travaux divers — en dernier, c'est le fourre-tout
  {
    id: 7,
    title: "Travaux divers",
    category: "Installation neuve",
    description:
      "Diverses interventions : installations neuves, rénovations et mises aux normes pour particuliers et professionnels.",
    images: [
      { src: "/images/IMG_9809.JPG", alt: "Salle de réunion éclairée" },
      { src: "/images/IMG_8279.JPG", alt: "Chantier installation électrique" },
      { src: "/images/IMG_8416.JPG", alt: "Intervention électrique" },
      { src: "/images/IMG_0216.JPG", alt: "Travaux électricité" },
      { src: "/images/IMG_7277.JPG", alt: "Tableau électrique détail" },
      { src: "/images/IMG_9758.JPG", alt: "Finitions électriques" },
      { src: "/images/IMG_4650.JPG", alt: "Spots LED installés" },
      { src: "/images/IMG_3495 - Copie.JPG", alt: "Éclairage design" },
    ],
    details: [
      "Installations neuves complètes",
      "Électrification locaux professionnels",
      "Dépannages et mises aux normes",
      "Interventions rapides et soignées",
    ],
  },
];

const categories = [
  "Tous",
  "Tableau électrique",
  "Éclairage",
  "Éclairage professionnel",
  "Borne de recharge",
  "Avant / Après",
  "Installation neuve",
  "Rénovation",
] as const;

// Composant Thumbnails avec barre de progression synchronisée
const ThumbnailStrip = ({
  projectId,
  images,
  currentIndex,
  onSelect,
}: {
  projectId: number;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Calcul de la progression basée sur l'image courante
  const imageProgress = images.length > 1 ? currentIndex / (images.length - 1) : 0;

  // Auto-scroll les thumbnails pour garder l'image active visible
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const thumbnailWidth = 64; // 56px + 8px gap
    const scrollTarget = currentIndex * thumbnailWidth - container.clientWidth / 2 + thumbnailWidth / 2;
    container.scrollTo({ left: scrollTarget, behavior: "smooth" });
  }, [currentIndex]);

  // Mise à jour de la progression du scroll
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    setScrollProgress(container.scrollLeft / maxScroll);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Drag sur la barre de progression pour naviguer
  const handleProgressDrag = useCallback((clientX: number) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newIndex = Math.round(ratio * (images.length - 1));
    onSelect(newIndex);
  }, [images.length, onSelect]);

  const handleProgressMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleProgressDrag(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => handleProgressDrag(e.clientX);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleProgressDrag]);

  // Largeur du thumb proportionnelle au viewport visible vs total
  const getThumbWidth = () => {
    const container = scrollRef.current;
    if (!container || container.scrollWidth <= container.clientWidth) {
      // Toutes les thumbnails visibles : progress = image-based
      return Math.max(15, (1 / images.length) * 100);
    }
    return Math.max(15, (container.clientWidth / container.scrollWidth) * 100);
  };

  const thumbWidth = getThumbWidth();

  return (
    <div className="bg-neutral-50">
      <div
        ref={scrollRef}
        className="flex gap-2 p-3 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`shrink-0 h-14 w-14 rounded-lg overflow-hidden transition-all ${
              i === currentIndex
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-cover"
              loading="lazy"
              quality={50}
            />
          </button>
        ))}
      </div>
      {/* Barre de progression custom */}
      <div
        ref={progressBarRef}
        className="relative h-1.5 mx-3 mb-3 bg-neutral-200 rounded-full cursor-pointer"
        onMouseDown={handleProgressMouseDown}
      >
        <div
          className="absolute top-0 h-full bg-neutral-400 rounded-full transition-all duration-200"
          style={{
            width: `${thumbWidth}%`,
            left: `${imageProgress * (100 - thumbWidth)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: number }>({});

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getCurrentImageIndex = (projectId: number) => {
    return selectedImages[projectId] || 0;
  };

  const setCurrentImageIndex = (projectId: number, index: number) => {
    setSelectedImages((prev) => ({ ...prev, [projectId]: index }));
  };

  const nextImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const currentIndex = getCurrentImageIndex(project.id);
    const newIndex = currentIndex === project.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImageIndex(project.id, newIndex);
  };

  const prevImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const currentIndex = getCurrentImageIndex(project.id);
    const newIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    setCurrentImageIndex(project.id, newIndex);
  };

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrer par catégorie">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all hover:scale-105 ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const currentIndex = getCurrentImageIndex(project.id);

          return (
            <div
              key={project.id}
              className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-xl"
            >
              {/* Before/After Slider Layout */}
              {project.isBeforeAfter ? (
                <BeforeAfterSlider
                  beforeSrc={project.images[0].src}
                  afterSrc={project.images[1].src}
                  beforeAlt={project.images[0].alt}
                  afterAlt={project.images[1].alt}
                />
              ) : (
                <>
                  {/* Images Preview - Normal Layout */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    {/* Only render current and adjacent images for performance */}
                    {project.images.map((img, i) => {
                      const isVisible = i === currentIndex;
                      const isAdjacent = Math.abs(i - currentIndex) <= 1 ||
                        (currentIndex === 0 && i === project.images.length - 1) ||
                        (currentIndex === project.images.length - 1 && i === 0);
                      if (!isVisible && !isAdjacent) return null;
                      return (
                        <Image
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={`object-contain transition-opacity duration-300 ${
                            isVisible ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          quality={75}
                        />
                      );
                    })}

                    {/* Navigation arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => prevImage(e, project)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-2 text-white transition-all opacity-0 group-hover:opacity-100 hover:bg-black/70"
                          aria-label="Image précédente"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={(e) => nextImage(e, project)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-2 text-white transition-all opacity-0 group-hover:opacity-100 hover:bg-black/70"
                          aria-label="Image suivante"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Photo count badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full z-20">
                        {currentIndex + 1} / {project.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnails + Progress Bar */}
                  {project.images.length > 1 && (
                    <ThumbnailStrip
                      projectId={project.id}
                      images={project.images}
                      currentIndex={currentIndex}
                      onSelect={(i) => setCurrentImageIndex(project.id, i)}
                    />
                  )}
                </>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.isBeforeAfter
                      ? "bg-gradient-to-r from-neutral-200 to-primary-100 text-primary-700"
                      : "bg-primary-50 text-primary"
                  }`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900 flex items-center gap-2">
                  {project.title}
                  {project.hasEVIcon && <EVChargerIcon />}
                </h3>
                <p className="mb-4 text-sm text-neutral-600">
                  {project.description}
                </p>

                {/* Details */}
                {project.details && (
                  <ul className="mb-4 space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
