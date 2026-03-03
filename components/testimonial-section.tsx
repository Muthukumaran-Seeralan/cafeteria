"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pearl Haven has redefined the luxury coffee experience. The Gold Leaf Latte isn't just a drink; it's a meditative journey through texture and taste. Truly the peak of contemporary cafe culture.",
    name: "Julian Vance",
    role: "Sommelier & Lifestyle Critic",
  },
  {
    quote:
      "Finally, a coffee shop that understands the science behind the roast. The pour-over service is a masterclass in flavor extraction.",
    name: "Fiona Rossi",
    role: "Food & Beverage Editor",
  },
]

export function TestimonialSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#f5f0eb] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quote size={40} className="mx-auto mb-8 text-[#e8621c]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-lg bg-white p-8 shadow-sm"
            >
              <p className="font-sans text-lg italic leading-relaxed text-[#3d2c1a] md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#e0d0b8]" />
                <div>
                  <p className="font-[var(--font-body)] text-sm font-bold text-[#1a1612]">
                    {testimonial.name}
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#e8621c]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
