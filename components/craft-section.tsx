"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Flame, Globe, Paintbrush } from "lucide-react"
import Image from "next/image"

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

  // Video hover state
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Handle video play/pause based on hover state
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Video play was interrupted:", error)
          })
        }
      } else {
        videoRef.current.pause()
      }
    }
  }, [isHovered])

  return (
    <section ref={ref} id="craft" className="relative bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #c8a97e 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-sans text-4xl font-bold leading-tight text-[#f5f0eb] md:text-5xl lg:text-6xl">
              The Craft Behind{" "}
              <span className="block text-[#c8a97e]">the Brew</span>
            </h2>
            <p className="mt-6 font-[var(--font-body)] text-lg leading-relaxed text-[#a89882] max-w-xl">
              Our signature collection isn&apos;t just about premium ingredients; it&apos;s about
              the precision of the process. We treat every single bean as a unique canvas.
            </p>

            <div className="mt-12 space-y-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c8a97e]/10 transition-colors duration-300 group-hover:bg-[#c8a97e]/20">
                    <feature.icon size={24} className="text-[#c8a97e]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-[#f5f0eb] group-hover:text-[#c8a97e] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-[var(--font-body)] text-base leading-relaxed text-[#a89882]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interaction Card — High-end hover experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={isHovered ? {
                x: [0, -4, 4, -3, 3, -1, 1, 0],
                rotate: [0, -0.5, 0.5, -0.3, 0.3, 0],
                scale: 1.02
              } : { scale: 1 }}
              transition={isHovered ? {
                duration: 0.4,
                ease: "easeInOut",
              } : { duration: 0.3 }}
              className="relative cursor-pointer"
            >
              {/* Secondary Glow */}
              <div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-700 blur-3xl pointer-events-none ${isHovered ? 'opacity-40' : 'opacity-0'}`}
                style={{ background: 'radial-gradient(circle, #c8a97e 0%, transparent 70%)' }}
              />

              {/* Main Container */}
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-[#1a1a1a] shadow-2xl ring-1 ring-white/10 group">
                <AnimatePresence initial={false}>
                  {/* Static Cover Image */}
                  {!isHovered && (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="/images/craft-brewing.jpg"
                        alt="Coffee Brewing Craft"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </motion.div>
                  )}

                  {/* Dynamic Video */}
                  {isHovered && (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="absolute inset-0 bg-black"
                    >
                      <video
                        ref={videoRef}
                        src="/coffee design.mp4"
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-[#c8a97e]/30 transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />

                {/* Badge Context */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <motion.div
                    animate={isHovered ? {
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0px #c8a97e", "0 0 0 10px transparent"]
                    } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-3 w-3 rounded-full bg-[#c8a97e]"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-sans font-bold text-sm tracking-widest uppercase">
                      {isHovered ? "Live Performance" : "The Masterpiece"}
                    </span>
                    <span className="text-[#a89882] font-[var(--font-body)] text-xs">
                      {isHovered ? "Artist: Pearl Haven Barista" : "Click / Hover to see action"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
