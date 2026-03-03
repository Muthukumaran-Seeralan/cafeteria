"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Find Us", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2218]/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a97e] transition-colors duration-300 group-hover:bg-[#b8935f]">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Coffee cup */}
                <rect x="6" y="12" width="14" height="12" rx="2" fill="#0a0a0a" />
                <rect x="8" y="14" width="10" height="3" rx="1" fill="#3d2b1a" opacity="0.6" />
                {/* Cup handle */}
                <path d="M20 15c3 0 4 1.5 4 3.5S23 22 20 22" stroke="#0a0a0a" strokeWidth="2" fill="none" />
                {/* Steam lines */}
                <path d="M10 10c0-2 1.5-3 0-5" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                <path d="M14 10c0-2 1.5-3 0-5" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                {/* Saucer */}
                <ellipse cx="13" cy="25.5" rx="10" ry="1.5" fill="#0a0a0a" opacity="0.4" />
              </svg>
            </div>
            <span className="font-sans text-xl font-bold tracking-wide text-[#f5f0eb] transition-colors duration-300 group-hover:text-[#c8a97e]">
              PEARL<span className="font-light text-[#c8a97e]"> HAVEN</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase text-[#a89882] transition-colors duration-300 hover:text-[#c8a97e]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reserve"
              className="rounded-sm bg-[#c8a97e] px-5 py-2 font-[var(--font-body)] text-xs font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] transition-all duration-300 hover:bg-[#b8935f]"
            >
              Reserve
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#f5f0eb] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0a0a0a]/98 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-sans text-2xl text-[#f5f0eb] transition-colors hover:text-[#c8a97e]"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#reserve"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 rounded-sm bg-[#c8a97e] px-8 py-3 font-[var(--font-body)] text-sm font-semibold tracking-[0.15em] uppercase text-[#0a0a0a]"
            >
              Reserve
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
