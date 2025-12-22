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
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-auto px-8 pt-6">
        <div className="flex items-center justify-between text-amber-800">
          <div className="flex flex-1 gap-2">
            <h1 className="text-lg font-semibold font-serif">{name}</h1>
            <p className="text-lg font-semibold uppercase">{role}</p>
          </div>

          <button
            aria-label="Menu"
            onClick={toggleMenu}
            className="cursor-pointer disabled:opacity-50"
          >
            <Menu size={28} />
          </button>
        </div>

        <div className="mt-4 h-px w-full bg-slate-800" />
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
