"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  {
    src: "/coffee-pour.mp4",
    type: "video",
    alt: "Artisanal coffee pour",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/images/hero-coffee-shop.jpg",
    type: "image",
    alt: "Pearl Haven coffee shop interior",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/gold-leaf-latte.jpg",
    type: "image",
    alt: "Gold leaf latte close-up",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/velvet-mocha.jpg",
    type: "image",
    alt: "Velvet mocha latte art",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/images/cold-brew.jpg",
    type: "image",
    alt: "Cold brew on wood board",
    span: "col-span-1 row-span-1"
  },
]

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" ref={ref} className="bg-[#1a1612] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-[#c8a97e]">
            Cinematic Experience
          </p>
          <h2 className="font-sans text-3xl font-bold text-[#f5f0eb] md:text-4xl lg:text-5xl">
            Our Visual Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group overflow-hidden rounded-lg ${item.span}`}
            >
              <div className="relative aspect-square h-full w-full overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-[#0a0a0a]/0 transition-all duration-300 group-hover:bg-[#0a0a0a]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
