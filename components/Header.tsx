import { Menu } from "lucide-react";

type HeaderProps = {
  name: string;
  role: string;
};

export default function Header({ name, role }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-20 px-8 pt-6">
      <div className="flex items-center justify-between text-slate-700">
        <div className="flex flex-1 gap-2">
          <h1 className="text-lg font-semibold font-serif">{name}</h1>
          <p className="text-lg font-semibold uppercase">{role}</p>
        </div>

        <button aria-label="Menu">
          <Menu size={28} />
        </button>
      </div>

      <div className="mt-4 h-px w-full bg-slate-800" />
    </header>
  );
}
