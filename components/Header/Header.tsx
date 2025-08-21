"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Plants",
    link: "/plants",
  },
  {
    title: "Pets",
    link: "/pets",
  },
];

const Header = () => {
  const [menu, setMenu] = useState();

  return (
    <header className="container mx-auto">
      <nav className="flex justify-between px-5 items-center">
        <div className="flex justify-center items-center gap-3">
          <Image
            className="w-15"
            width={80}
            height={80}
            src="/logo/gag-logo.png"
            alt="Logo of Gaghub"
          />
          <h2 className="text-3xl font-bold text-emerald-500">GAGHub</h2>
        </div>

        <div>
          <ul className="flex gap-5">
            {navigationLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="hover:text-emerald-300 hover:bg-slate-400/50 py-1 px-2 rounded text-xl font-medium transition-all duration-75 "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
