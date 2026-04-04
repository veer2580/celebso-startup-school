"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
    <header className="fixed top-6 inset-x-0 z-50 mx-auto w-full max-w-[1200px] px-4">
=======
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
      
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] text-white">

        {/* TOP BAR */}
<<<<<<< HEAD
        <div className="relative flex items-center justify-between px-6 py-4">
=======
        <div className="flex items-center justify-between px-6 py-4">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
<<<<<<< HEAD
            className="flex items-center gap-3 text-sm tracking-wide z-50 flex-shrink-0"
=======
            className="flex items-center gap-3 text-sm tracking-wide z-50"
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.span
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                className="absolute w-5 h-[2px] bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                className="absolute w-5 h-[2px] bg-white"
              />
            </div>

            <span>{open ? "Close" : "Menu"}</span>
          </button>

          {/* LOGO */}
<<<<<<< HEAD
          <Link href="/" className="hidden md:block absolute left-1/2 -translate-x-1/2">
=======
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            <img
              src="/assest/celebso.webp"
              alt="Celebso"
              className="w-28 object-contain"
            />
          </Link>

<<<<<<< HEAD
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <img
              src="/assest/celebso.webp"
              alt="Celebso"
              className="w-24 object-contain"
            />
          </Link>

          {/* CTA BUTTON */}
          <Link
            href="/enquiry"
            className="hidden md:inline-flex bg-[#fcb900] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e0a700] transition"
=======
          {/* CTA BUTTON */}
          <Link
            href="/enquiry"
            className="bg-[#fcb900] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e0a700] transition"
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
          >
            Apply Now
          </Link>
        </div>

        {/* DROPDOWN MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="border-t border-white/10 bg-black/90 backdrop-blur-xl rounded-b-2xl"
            >
              <nav className="flex flex-col items-center py-10 gap-6">

                {[
                  { name: "Home", href: "/" },
                  { name: "Programs", href: "/programs" },
                  { name: "About", href: "/about" },
                  { name: "Enquiry", href: "/enquiry" },
<<<<<<< HEAD
                  { name: "Apply Now", href: "/enquiry" },
=======
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
                  { name: "Login", href: "/login" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1 },
                    }}
                    exit={{ opacity: 0, y: 40 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl md:text-lg font-medium tracking-wide text-white/80 hover:text-[#fcb900] transition"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}