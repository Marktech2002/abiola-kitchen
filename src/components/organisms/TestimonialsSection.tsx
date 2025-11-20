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
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.from(".testimonials-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 80%",
        }
      })

      // Animate cards on scroll
      gsap.from(".testimonial-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-scroll",
          start: "top 80%",
        }
      })
    })

    // Cleanup - properly kill all animations and ScrollTriggers
    return () => {
      ctx.revert()
    }
  }, [])

  const scrollToCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    
    const container = scrollRef.current
    const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0
    const gap = 48 // gap-12 = 48px
    const scrollAmount = cardWidth + gap
    
    // Get current scroll position
    const currentScroll = container.scrollLeft
    
    // Calculate the card index we're currently at
    const currentIndex = Math.round(currentScroll / scrollAmount)
    
    // Calculate new index
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(testimonials.length - 1, currentIndex + 1)
    
    // Scroll to the exact position of the card
    const targetScroll = newIndex * scrollAmount
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  return (
    <section className="lg:py-20 lg:px-18 sm:py-16 px-5 py-8">
      {/* Header */}
      <div className="testimonials-header flex flex-col gap-3 mb-12">
        <h2 className="text-mobile-header md:text-heading text-foreground">
          What Our Guests Are Saying
        </h2>
        <p className="md:text-[20px] text-mobile-paragraph text-muted-foreground md:max-w-[630px]">
          Step into a space where every corner tells a story. Our seating is designed for both casual bites and memorable evenings.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="testimonials-scroll flex gap-12 overflow-x-auto pb-8 scrollbar-hide touch-pan-x snap-x snap-mandatory md:snap-none scroll-px-5 md:scroll-px-0"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card shrink-0 w-[calc(100vw-40px)] md:w-auto snap-center md:snap-align-none"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={() => scrollToCard('left')}
          className="w-12 h-12 rounded-[10px] border-2 border-foreground flex items-center cursor-pointer justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scrollToCard('right')}
          className="w-12 h-12 rounded-[10px] border-2 border-foreground flex items-center cursor-pointer justify-center hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}