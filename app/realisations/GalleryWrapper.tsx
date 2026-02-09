"use client";

import { useState, useEffect } from "react";
import BeforeAfterGallery from "./BeforeAfterGallery";

export default function GalleryWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[400px]" />;
  }

  return <BeforeAfterGallery />;
}
