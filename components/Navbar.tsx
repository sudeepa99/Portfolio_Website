"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { useState, useEffect } from "react";

type NavbarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialIcons = [
    {
      icon: <Github size={24} />,
      link: "https://github.com/sudeepa99",
      label: "GitHub",
    },
    {
      icon: <Mail size={24} />,
      link: "mailto:sudeepa1234nisal@gmail.com",
      label: "Email",
    },
    {
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/sudeepa-nisal/",
      label: "LinkedIn",
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, navLinks]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const linkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full bg-linear-to-br from-black via-gray-900 to-black w-full sm:w-112.5 lg:w-125 z-50 flex flex-col p-8 sm:p-12 text-white overflow-y-auto"
          >
            <div className="flex justify-end mb-16">
              <button
                onClick={onClose}
                className="group relative p-3 hover:bg-white/10 rounded-full transition-all duration-300"
                aria-label="Close menu"
              >
                <X
                  size={32}
                  className="text-white group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-2 -mt-16">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.button
                    key={link.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    onClick={() => handleNavigate(link.id)}
                    className="group relative text-left py-4 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-lg" />

                    <span
                      className={`
                      relative block text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-300
                      ${
                        isActive
                          ? "text-amber-500"
                          : "text-white group-hover:text-amber-500 group-hover:translate-x-4"
                      }
                    `}
                    >
                      {link.label}
                    </span>

                    <span
                      className={`
                      absolute bottom-2 left-0 h-1 bg-amber-500 transition-all duration-500
                      ${isActive ? "w-20" : "w-0 group-hover:w-16"}
                    `}
                    />

                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-amber-500 rounded-r-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            <motion.div
              className="flex flex-col gap-4 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                Connect With Me
              </p>
              <div className="flex gap-4">
                {socialIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group relative p-3 bg-white/5 hover:bg-amber-500 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="relative z-10 block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
