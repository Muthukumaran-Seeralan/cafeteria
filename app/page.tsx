"use client"

import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { GrainCanvas } from "@/components/grain-canvas"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { SignatureDrinksSection } from "@/components/signature-drinks-section"
import { CraftSection } from "@/components/craft-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <GrainCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <SignatureDrinksSection />
        <CraftSection />
        <GallerySection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
