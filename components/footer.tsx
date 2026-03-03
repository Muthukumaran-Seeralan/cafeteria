"use client"

import { motion } from "framer-motion"
import { Globe, Leaf, Mail } from "lucide-react"

const footerLinks = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Press Kit", href: "#" },
  { name: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#2a2218] bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a97e]">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="12" width="14" height="12" rx="2" fill="#0a0a0a" />
                  <rect x="8" y="14" width="10" height="3" rx="1" fill="#3d2b1a" opacity="0.6" />
                  <path d="M20 15c3 0 4 1.5 4 3.5S23 22 20 22" stroke="#0a0a0a" strokeWidth="2" fill="none" />
                  <path d="M10 10c0-2 1.5-3 0-5" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                  <path d="M14 10c0-2 1.5-3 0-5" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                  <ellipse cx="13" cy="25.5" rx="10" ry="1.5" fill="#0a0a0a" opacity="0.4" />
                </svg>
              </div>
              <span className="font-sans text-xl font-bold tracking-wide text-[#f5f0eb]">
                PEARL<span className="font-light text-[#c8a97e]"> HAVEN</span>
              </span>
            </div>
            <p className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-[#a89882]">
              Elevating the everyday coffee ritual through artisanal craftsmanship and cinematic atmosphere.
            </p>
            <div className="mt-6 flex gap-4">
              {[Globe, Leaf, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2218] text-[#a89882] transition-all duration-300 hover:border-[#c8a97e] hover:text-[#c8a97e]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 font-[var(--font-body)] text-xs font-bold tracking-[0.2em] uppercase text-[#f5f0eb]">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {["Our Origins", "Roastery Tours", "Brewing Guides", "Membership"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-[var(--font-body)] text-sm text-[#a89882] transition-colors duration-300 hover:text-[#c8a97e]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 font-[var(--font-body)] text-xs font-bold tracking-[0.2em] uppercase text-[#f5f0eb]">
              Visit
            </h3>
            <p className="font-[var(--font-body)] text-sm text-[#a89882]">
              122 Cinema Drive
              <br />
              West Hollywood, CA 90048
            </p>
            <p className="mt-3 font-[var(--font-body)] text-sm text-[#a89882]">
              +1 (555) 123-4567
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a2218] pt-8 md:flex-row">
          <p className="font-[var(--font-body)] text-xs text-[#6b4d2c]">
            &copy; 2024 Pearl Haven Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-[var(--font-body)] text-xs text-[#6b4d2c] transition-colors duration-300 hover:text-[#c8a97e]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
