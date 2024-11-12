"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, AlignJustify } from "lucide-react";


type NavbarPops = {
  bgColor: string;
  color: string;
};

export default function Navbar({ bgColor, color }: NavbarPops) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolledin, setScrolledin] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolledin(true);
      } else setScrolledin(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolledin ? "bg-zinc-50 text-black" : `${bgColor} ${color}`
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto flex justify-between h-20 items-center md:px-12 px-4">
        <div className="flex items-center justify-between  w-full md:w-auto">
          <div className="flex items-center">
            <Image
              src="/logo2.png"
              alt="Agriswara-logo"
              height={40}
              width={40}
              className="mt-1"
            />
            <span className="text-2xl font-semibold">Agriswara</span>
          </div>
          <div className="block md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <X
                className={`w-8 h-8 ${
                  scrolledin ? "text-black" : `${color}`
                }`}
              />
            ) : (
              <AlignJustify
                className={`w-8 h-8 ${
                   scrolledin ? "text-black" : `${color}`
                }`}
              />
            )}
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center">
          <button className="text-lg">Sign in</button>
          <button className="bg-zinc-800 text-white rounded-xl px-4 py-2 ml-4 font-semibold hover:bg-zinc-950">
            Sign up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-zinc-50 text-black w-full px-4 py-4 ">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <button className="text-lg w-full text-left" onClick={toggleMenu}>
                Sign in
              </button>
            </li>
            <li>
              <button
                className="bg-zinc-800 hover:bg-zinc-950 text-zinc-50 rounded-xl px-4 py-2 font-semibold w-full text-left"
                onClick={toggleMenu}
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
