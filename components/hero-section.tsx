"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import { ChevronDown } from "lucide-react"
import ThreeHero from "@/components/ThreeHero"

const CoffeeCupScene = dynamic(
  () => import("./coffee-cup-scene").then((mod) => ({ default: mod.CoffeeCupScene })),
  { ssr: false }
)

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <ThreeHero />
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale }}
      >
        <div
          className="h-[130%] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-coffee-shop.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6"
      >
        <div className="flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-[#c8a97e]"
            >
              Crafted for the Connoisseur
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-sans text-5xl font-bold leading-tight text-[#f5f0eb] md:text-7xl lg:text-8xl"
            >
              <span className="block">Elevate Your</span>
              <span className="block italic text-[#c8a97e]">Coffee Ritual</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 max-w-md font-[var(--font-body)] text-base leading-relaxed text-[#a89882] md:text-lg"
            >
              Experience the art of single-origin beans, roasted in small batches for a truly elevated experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#menu"
                className="group flex items-center gap-2 rounded-sm border border-[#c8a97e] bg-transparent px-8 py-3 font-[var(--font-body)] text-xs font-semibold tracking-[0.15em] uppercase text-[#c8a97e] transition-all duration-300 hover:bg-[#c8a97e] hover:text-[#0a0a0a]"
              >
                Explore Menu
              </a>
              <a
                href="#reserve"
                className="rounded-sm bg-[#e8621c] px-8 py-3 font-[var(--font-body)] text-xs font-semibold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-[#d4570f]"
              >
                Book a Table
              </a>
            </motion.div>
          </div>

          {/* 3D Coffee Cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.2 }}
            className="hidden h-[400px] w-[400px] lg:block xl:h-[500px] xl:w-[500px]"
          >
            <CoffeeCupScene />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-[var(--font-body)] text-[10px] tracking-[0.2em] uppercase text-[#a89882]">
              Scroll
            </span>
            <ChevronDown size={16} className="text-[#a89882]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
