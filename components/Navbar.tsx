"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Easing } from "framer-motion";

import { Github, Linkedin, Mail, X } from "lucide-react";

type NavbarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const navLinks = ["Home", "About Me", "Projects", "Skills", "Contact Me"];
  const socialIcons = [
    { icon: <Github />, link: "https://github.com/yourusername" },
    { icon: <Mail />, link: "mailto:youremail@example.com" },
    { icon: <Linkedin />, link: "https://linkedin.com/in/yourprofile" },
  ];

  const variants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { duration: 0.5, ease: ["easeIn", "easeOut"] as Easing[] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.4, ease: ["easeIn", "easeOut"] as Easing[] },
    },
  };

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="fixed top-0 right-0 h-full bg-black/90 backdrop-blur-md w-2/7 z-50 flex flex-col justify-between p-8 text-white"
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="cursor-pointer">
              <X size={28} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 mt-12 text-xl font-medium">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() =>
                  handleNavigate(
                    link.toLowerCase().replace(" ", "").replace("me", "")
                  )
                }
                className="hover:text-stone-500 transition-colors text-2xl text-left"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex gap-4 mt-12">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
