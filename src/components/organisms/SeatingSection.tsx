"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SeatingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const seatingAreas = [
    {
      id: "1",
      title: "Indoor Lounge",
      description:
        "Enjoy an intimate atmosphere surrounded by warm lighting and elegant interiors perfect for date nights and quiet dinners.",
      image: "/images/find-spot-one.png",
    },
    {
      id: "2",
      title: "Outdoor Patio",
      description:
        "Bask in the open air with beautiful natural surroundings. Ideal for sunny brunches, evening drinks, or group dinners under the stars.",
      image: "/images/find-spot-two.png",
    },
    {
      id: "3",
      title: "Private Booths",
      description:
        "Prefer privacy? Our booths offer a cozy and quiet escape for small gatherings, private convos, or work lunches.",
      image: "/images/find-spot-three.png",
    },
    {
      id: "4",
      title: "Private Booths",
      description:
        "Prefer privacy? Our booths offer a cozy and quiet escape for small gatherings, private convos, or work lunches.",
      image: "/images/find-spot-three.png",
    },
  ];

  /** -----------------------
   * CARD TILT HOVER EFFECT
   * ----------------------*/
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      const glare = document.createElement("div");
      glare.className = "tilt-glare";
      card.appendChild(glare);

      card.addEventListener("mousemove", (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // tilt intensity
        const rotateY = ((x - centerX) / centerX) * 10;

        (card as HTMLElement).style.transform = `
          perspective(800px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.03)
        `;

        (card.querySelector(".tilt-glare") as HTMLElement).style.background = `
          radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4), transparent 40%)
        `;
      });

      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform =
          "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
        (card.querySelector(".tilt-glare") as HTMLElement).style.background =
          "none";
      });
    });
  }, []);

  /** -----------------------
   * GSAP SCROLL ANIMATION
   * ----------------------*/
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".seating-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
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
    //py-12 md:py-20 px-4 md:px-8
    <section ref={sectionRef} className="py-12 md:py-20 md:px-18 px-4 flex flex-col gap-16">
      {/* Heading */}
      <div className="flex flex-col gap-3">
        <h2 className="text-mobile-header md:text-heading text-foreground">Find Your Favorite Spot</h2>
        <p className="md:text-[18px] md:leading-[28px] text-mobile-paragraph text-muted-foreground max-w-[600px]">
          Step into a space where every corner tells a story. Our seating is designed for both casual bites and memorable evenings.
        </p>
      </div>

      {/* CARD SCROLLER */}
      <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none">
        {seatingAreas.map((area) => (
          <div key={area.id} className="shrink-0">
            {/* Inner card wrapper allows vertical overflow */}
            <div
              className="
                seating-card tilt-card
                w-[360px] sm:w-[360px] md:w-[416px]
                h-[360px] md:h-[418px]
                rounded-[12px] p-6 flex flex-col justify-end relative
                snap-center transition-transform duration-300
                will-change-transform
              "
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 22.56%, #000 100%), url('${area.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* GLARE LAYER */}
              <div className="tilt-glare pointer-events-none absolute inset-0"></div>

              <h3 className="text-[18px] sm:text-[20px] text-white font-medium leading-[30px]">
                {area.title}
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white/70">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>



      {/* CTA Button */}
      <div className="flex justify-center">
        <Button className="bg-black text-white px-8 py-4 rounded-[32px] text-lg font-medium hover:bg-black/90 flex items-center gap-3">
          Reserve Your Table
          <Calendar size={24} />
        </Button>
      </div>
    </section>
  );
};
