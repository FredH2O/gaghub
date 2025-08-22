"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

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
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <header className="relative container mx-auto">
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

        <div className="lg:block hidden">
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

        {!menu ? (
          <GiHamburgerMenu
            className="text-2xl lg:hidden"
            onClick={handleOpenMenu}
          />
        ) : (
          <IoMdClose className="text-2xl lg:hidden" onClick={handleCloseMenu} />
        )}
        <AnimatePresence>
          {menu && (
            <>
              <div
                onClick={handleCloseMenu}
                className="absolute inset-0 top-0 left-0 z-50 bg-black/90 h-screen"
              ></div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: easeInOut }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute z-50 h-screen w-1/2 bg-slate-700 top-0 left-0 block lg:hidden"
              >
                <ul className="flex flex-col justify-center items-center pt-10 gap-5">
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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
