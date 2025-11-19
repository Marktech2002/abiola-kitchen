"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".fade-up");

      gsap.from(elements, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-18 py-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[96px] justify-center items-center">
        
        {/* Image */}
        <div className="flex-shrink-0 fade-up">
          <img
            src="/images/chef-collage.png"
            alt="Chef cooking"
            className="w-full max-w-[680px] md:w-[680px] md:h-[702px] rounded-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-11">
          <div className="flex flex-col gap-6 fade-up">
            <h2 className="md:text-heading text-mobile-header text-foreground">
              Stories Told Through Flavor.
            </h2>
            <div className="flex flex-col gap-6 md:text-body text-mobile-paragraph text-muted-foreground max-w-full md:max-w-[640px] md:leading-[48px] fade-up">
              <p>
                At Biola's Kitchen, every dish begins with a story rooted in tradition, inspired by nature, and crafted with care. We set out to create a space where people can connect over food that feels both familiar and special.
              </p>
              <p>
                From locally sourced ingredients to time-honored techniques, we pour love and intention into every plate. Whether it's a signature favorite or a new discovery, our goal is to make each bite warm, memorable, and deeply human.
              </p>
            </div>
          </div>

          <blockquote className="md:text-quote text-mobile-quote text-muted-foreground max-w-full md:max-w-[640px] fade-up">
            "Cooking is more than a recipe,  it's an experience shared from the heart." — <span className="fonts-satoshi not-italic">Chef Elena James</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
