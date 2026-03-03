"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section id="reserve" ref={ref} className="relative overflow-hidden bg-[#1a1612] py-24 lg:py-32">
      {/* Parallax background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-10"
      >
        <div
          className="h-[130%] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-coffee-shop.jpg')" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-4xl font-bold text-[#f5f0eb] md:text-5xl lg:text-6xl">
            Ready for a Tasting?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-[var(--font-body)] text-base leading-relaxed text-[#a89882] md:text-lg">
            Join us for a private sensory session or visit our flagship location to experience the
            Signature Collection firsthand.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-sm bg-[#e8621c] px-10 py-4 font-[var(--font-body)] text-xs font-semibold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-[#d4570f]"
            >
              Book a Private Tasting
            </a>
            <a
              href="#"
              className="rounded-sm border border-[#c8a97e] px-10 py-4 font-[var(--font-body)] text-xs font-semibold tracking-[0.15em] uppercase text-[#c8a97e] transition-all duration-300 hover:bg-[#c8a97e] hover:text-[#0a0a0a]"
            >
              Find a Location
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
