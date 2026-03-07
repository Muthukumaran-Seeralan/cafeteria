"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" ref={ref} className="relative bg-[#0a0a0a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Coffee Pouring Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group relative w-full overflow-hidden rounded-sm lg:w-1/2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <video
                src="/coffee pouring.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ objectPosition: "center" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <p className="mb-3 font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-[#c8a97e]">
              The Formula
            </p>
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#f5f0eb] md:text-4xl lg:text-5xl">
              Sourced with Purpose,{" "}
              <span className="text-[#c8a97e]">Brewed with Soul</span>
            </h2>
            <p className="mt-6 font-[var(--font-body)] text-base leading-relaxed text-[#a89882]">
              At Pearl Haven, we view coffee as more than just a morning necessity; it is a meticulous
              craft. Our beans are ethically sourced from single-estate farms, roasted in small batches
              to preserve their unique terroir, and served in an environment designed for quiet reflection.
            </p>
            <a
              href="#"
              className="mt-6 inline-block font-[var(--font-body)] text-sm font-semibold text-[#e8621c] transition-colors duration-300 hover:text-[#c8a97e]"
            >
              Read our full story &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
