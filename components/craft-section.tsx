"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Flame, Globe, Paintbrush } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Precision Extraction",
    description:
      "Computer-controlled brewing temperatures ensure we never scald the delicate notes of our rare floral beans.",
  },
  {
    icon: Globe,
    title: "Boutique Sourcing",
    description:
      "We work exclusively with micro-lots from sustainable farms in Ethiopia and Colombia, harvesting only at peak ripeness.",
  },
  {
    icon: Paintbrush,
    title: "Artisanal Finishing",
    description:
      "From hand-applied gold leaf to house-made lavender infusions, every drink is a finished masterpiece.",
  },
]

export function CraftSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#f5f0eb] md:text-4xl lg:text-5xl">
              The Craft Behind{" "}
              <span className="block text-[#c8a97e]">the Brew</span>
            </h2>
            <p className="mt-6 font-[var(--font-body)] text-base leading-relaxed text-[#a89882]">
              Our signature collection isn&apos;t just about premium ingredients; it&apos;s about
              the precision of the process. We treat every bean as a unique canvas.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8621c]/10">
                    <feature.icon size={20} className="text-[#e8621c]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-body)] text-sm font-bold text-[#f5f0eb]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 font-[var(--font-body)] text-sm leading-relaxed text-[#a89882]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-sm lg:w-1/2"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/craft-brewing.jpg"
                alt="Barista crafting a latte"
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
