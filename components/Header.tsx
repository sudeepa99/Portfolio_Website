"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";

type HeaderProps = {
  name: string;
  role: string;
  onToggleText?: (show: boolean) => void;
};

export default function Header({ name, role, onToggleText }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const willOpen = !prev;
      onToggleText?.(!willOpen);
      return willOpen;
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />

        <div className="relative px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight">
                {name}
              </h1>
              <p className="text-xs sm:text-sm text-amber-500 uppercase tracking-wider font-medium">
                {role}
              </p>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="group relative p-2 -m-2 text-white hover:text-amber-500 transition-all duration-300"
            >
              <Menu
                size={28}
                className="group-hover:rotate-90 transition-transform duration-300"
              />

              <span className="absolute inset-0 rounded-full bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </header>

      <Navbar
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          onToggleText?.(true);
        }}
      />
    </>
  );
}
