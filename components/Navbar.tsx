"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl py-4"
          : isScrolled
            ? "glass py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-black tracking-tight text-white">
          Yaseen Waseem<span className="text-[#ff2a2a]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-[#ff2a2a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold glass text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 pt-6 pb-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/80 hover:text-white font-semibold text-lg py-3 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block text-center px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold"
              >
                Hire Me
              </a>
              <p className="mt-6 text-xs text-white/40 font-mono">{profile.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
