"use client";

import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { useState } from "react";

export default function Home() {
  const [showHeroText, setShowHeroText] = useState(true);
  return (
    <>
      <Hero
        rolefirstname="Software"
        rolesecondname="Engineer"
        description="I AM A DEVELOPER BASED IN SRI LANKA. I HAVE GOOD EXPERIENCING IN CONSULTING ALL AREAS OF DIGITAL. I LOVE MINIMAL AND CREATIVE DESIGN. I LOVE NATURE, MUSIC AND CRICKET."
        buttontext="CONTACT ME"
        showText={showHeroText}
      />
      <AboutMe
        firstname="Hello I'm Sudeepa"
        fullname="Sudeepa Nisal"
        description="A passionate software engineering enthusiasts focused on building performant, user-centric web applications."
        caption="Actually this is not me"
        statuename="Micahealangelo's David"
      />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
