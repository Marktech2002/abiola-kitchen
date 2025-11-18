"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TestimonialCard } from "@/components/molecules/TestimonialCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/mockData"

gsap.registerPlugin(ScrollTrigger)

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Animate mobile stars
    gsap.from(".stars-mobile", {
      y: 10,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.2,
    })
  }, [])

  const scrollLeft = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <section className="lg:py-20 lg:px-18 sm:py-16 px-5 py-12">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-12">
        <h2 className="text-mobile-header md:text-heading text-foreground">
          What Our Guests Are Saying
        </h2>
        <p className="md:text-[20px] text-mobile-paragraph text-muted-foreground md:max-w-[630px]">
          Step into a space where every corner tells a story. Our seating is designed for both casual bites and memorable evenings.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        {/* <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" /> */}

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide touch-pan-x"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-[10px] border-2 border-foreground flex items-center cursor-pointer justify-center hover:bg-foreground hover:text-background transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-[10px] border-2 border-foreground flex items-center cursor-pointer justify-center hover:bg-foreground hover:text-background transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}
