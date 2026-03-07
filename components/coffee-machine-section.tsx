"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function CoffeeMachineSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section
            ref={ref}
            className="relative py-28 lg:py-36"
            style={{ background: "linear-gradient(160deg, #1c1c1c 0%, #141010 60%, #1a1208 100%)" }}
        >
            {/* Subtle radial glow behind the machine */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,140,60,0.12) 0%, transparent 70%)",
                }}
            />

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="relative z-10 mb-14 text-center"
            >
                <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: "#c8a97e" }}
                >
                    The Machine Behind the Magic
                </p>
                <h2
                    className="font-sans text-3xl font-bold text-[#f5f0eb] md:text-4xl lg:text-5xl"
                >
                    Precision Brewing,{" "}
                    <span className="text-[#c8a97e]">Every Pour</span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#a89882]">
                    Hover to witness our machine in action — from the first drip to the
                    perfect full cup.
                </p>
            </motion.div>

            {/* Coffee Machine Image — crossfade on hover */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 flex justify-center"
            >
                {/*
          Outer hover group — all hover effects stem from here.
          Fixed dimensions so no layout shift ever occurs.
        */}
                <div
                    className="group relative cursor-pointer"
                    style={{ width: "460px", maxWidth: "90vw" }}
                >
                    {/* Soft drop shadow / glow beneath the machine */}
                    <div
                        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
                        style={{
                            width: "70%",
                            height: "40px",
                            background: "radial-gradient(ellipse, rgba(200,140,60,0.55) 0%, transparent 80%)",
                        }}
                    />

                    {/* Steam wisps — animate continuously, extra visible on hover */}
                    <div
                        className="pointer-events-none absolute left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ top: "12%", width: "60px" }}
                    >
                        {["-12px", "0px", "12px"].map((xOffset, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -28, -52],
                                    opacity: [0, 0.55, 0],
                                    scaleX: [0.6, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    delay: i * 0.65,
                                    ease: "easeOut",
                                }}
                                className="absolute rounded-full"
                                style={{
                                    left: `calc(50% + ${xOffset})`,
                                    bottom: 0,
                                    width: "6px",
                                    height: "22px",
                                    background:
                                        "linear-gradient(to top, rgba(255,255,255,0.55), transparent)",
                                    filter: "blur(3px)",
                                    borderRadius: "50%",
                                }}
                            />
                        ))}
                    </div>

                    {/* Image stack — start on top, end fades in on hover */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative overflow-hidden rounded-3xl"
                        style={{
                            boxShadow:
                                "0 0 0 1px rgba(200,169,126,0.15), 0 32px 72px rgba(0,0,0,0.7)",
                        }}
                    >
                        {/* START image — always rendered, fades out on hover */}
                        <Image
                            src="/images/start.png"
                            alt="Coffee machine starting to pour"
                            width={460}
                            height={520}
                            className="block w-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                            style={{ display: "block" }}
                            priority
                        />

                        {/* END image — sits absolutely on top, fades in on hover */}
                        <Image
                            src="/images/end.png"
                            alt="Coffee machine with a full cup"
                            width={460}
                            height={520}
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                            style={{ top: 0, left: 0 }}
                        />

                        {/* Warm vignette overlay */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-3xl"
                            style={{
                                background:
                                    "linear-gradient(to bottom, transparent 55%, rgba(20,10,4,0.55) 100%)",
                            }}
                        />

                        {/* Golden border ring — appears on hover */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{
                                boxShadow: "inset 0 0 0 1.5px rgba(200,169,126,0.55)",
                            }}
                        />

                        {/* "Full Cup" badge — slides up on hover */}
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <span
                                className="whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                                style={{
                                    background: "rgba(200,169,126,0.92)",
                                    color: "#1c1c1c",
                                    backdropFilter: "blur(6px)",
                                }}
                            >
                                ☕ Full Cup Ready
                            </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
