"use client";

import Hero from "@/sections/Hero";
import { useState } from "react";

export default function Home() {
  const [showHeroText, setShowHeroText] = useState(true);
  return (
    <Hero
      rolefirstname="Software"
      rolesecondname="Engineer"
      description="I AM A DEVELOPER BASED IN SRI LANKA. I HAVE GOOD EXPERIENCING IN CONSULTING ALL AREAS OF DIGITAL. I LOVE MINIMAL AND CREATIVE DESIGN. I LOVE NATURE, MUSIC AND CRICKET."
      buttontext="CONTACT ME"
      showText={showHeroText}
      onToggleText={setShowHeroText}
    />
  );
}
