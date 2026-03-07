"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type ItemsNav = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const itemsNav: ItemsNav[] = [
    { name: "Home", href: "/" },
    { name: "Competition", href: "/competition" },
    { name: "Lensa Ajisaka", href: "/lensa-ajisaka" },
    { name: "About Us", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
  ];

  const pathname = usePathname();

  const isActive = (item: string) => {
    if (item === "home") return pathname === "/";
    return pathname.startsWith(`/${item.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 mt-1 z-50 relative text-white">
      {/* Logo */}
      <button
        className="w-auto h-auto px-3 sm:px-4 md:px-5 py-1 bg-white flex items-center justify-center rounded-[100px] shadow-md z-50 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo-ajisaka.png"
          alt="Logo Ajisaka"
          width={500}
          height={500}
          className="w-14 sm:w-16 md:w-18 h-5 sm:h-6 md:h-7 object-cover drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:inline-flex items-center justify-center gap-6 xl:gap-10 px-6 xl:px-10 py-2.5 rounded-full border border-white/90 bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {itemsNav.map((item, index) => (
          <span
            key={index}
            className={`text-xs font-montserrat tracking-[-0.2px] leading-normal cursor-pointer hover:font-bold transition-all duration-300 ease-in-out ${isActive(item.name) ? "font-semibold" : "font-light"}`}
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Desktop Daftar Button */}
      <button
        className="hidden lg:inline-flex h-auto px-4 py-1.5 items-center rounded-full text-sm font-montserrat font-light cursor-pointer shadow-xl z-50 hover:font-bold transition-all duration-300 ease-in-out overflow-hidden relative group hover:scale-105 hover:shadow-[0_0_30px_rgba(154,65,131,0.8)]"
        style={{
          background:
            "linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)",
        }}
        onClick={() => router.push("/competition")}
      >
        <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        <span className="relative z-10">Daftar Lomba</span>
      </button>

      {/* Hamburger Button - Mobile/Tablet */}
      <button
        className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md cursor-pointer border border-white/90 bg-white/10 backdrop-blur-md z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full right-4 sm:right-6 mt-2 w-56 sm:w-64 rounded-sm border border-white/30 bg-[rgba(30,30,60,0.95)] backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex flex-col py-3">
          {itemsNav.map((item, index) => (
            <span
              key={index}
              className={`px-5 py-3 text-sm font-montserrat tracking-[-0.2px] leading-normal 
                            cursor-pointer ${isActive(item.name) ? "font-medium" : "font-light"}`}
              onClick={() => router.push(item.href)}
            >
              {item.name}
            </span>
          ))}
          <div className="mx-4 my-2 border-t border-white/20" />
          <button
            className="mx-4 mb-2 px-4 py-2 rounded-full text-sm font-montserrat font-light cursor-pointer text-center overflow-hidden relative group hover:scale-105 hover:shadow-[0_0_30px_rgba(154,65,131,0.8)] transition-all duration-300"
            style={{
              background:
                "linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)",
            }}
            onClick={() => router.push("/competition")}
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Daftar Lomba</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
