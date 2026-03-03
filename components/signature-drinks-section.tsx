"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const drinks = [
  {
    name: "Gold Leaf Latte",
    price: "$8.50",
    description: "24k Gold Flakes & Wild Honey Infusion. A velvet-smooth experience for the senses.",
    image: "/images/gold-leaf-latte.jpg",
  },
  {
    name: "Velvet Mocha",
    price: "$7.50",
    description: "Single-Origin Ecuadorian Cacao & Silky Microfoam. Deep, dark, and perfectly balanced.",
    image: "/images/velvet-mocha.jpg",
  },
  {
    name: "Cold Brew Reserve",
    price: "$9.00",
    description: "18-Hour Slow Drip with Oak-Aged Notes. Served over a single hand-carved ice sphere.",
    image: "/images/cold-brew.jpg",
  },
]

export function SignatureDrinksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" ref={ref} className="relative bg-[#f5f0eb] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-[#e8621c]">
              Curated Selection
            </p>
            <h2 className="font-sans text-3xl font-bold text-[#1a1612] md:text-4xl lg:text-5xl">
              Signature Masterpieces
            </h2>
            <p className="mt-3 font-[var(--font-body)] text-base text-[#6b4d2c]">
              Indulge in our most celebrated seasonal creations.
            </p>
          </div>
          <a
            href="#"
            className="font-[var(--font-body)] text-sm font-semibold text-[#e8621c] transition-colors hover:text-[#c8a97e]"
          >
            View Full Menu &rarr;
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-lg font-semibold text-[#1a1612]">
                    {drink.name}
                  </h3>
                  <span className="font-[var(--font-body)] text-lg font-bold text-[#e8621c]">
                    {drink.price}
                  </span>
                </div>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-[#6b4d2c]">
                  {drink.description}
                </p>
                <button className="mt-4 w-full rounded-sm border border-[#e0d0b8] py-2.5 font-[var(--font-body)] text-xs font-semibold tracking-[0.1em] uppercase text-[#6b4d2c] transition-all duration-300 hover:border-[#c8a97e] hover:bg-[#c8a97e] hover:text-white">
                  Quick Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
