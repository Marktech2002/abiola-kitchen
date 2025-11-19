"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Navigation } from "@/components/molecules/Navigation";
import { BookingForm } from "@/components/molecules/BookingForm";
import { StarRating } from "@/components/atoms/StarRating";
import { Avatar } from "@/components/ui/avatar";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[834px] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero-background.png')",
      }}
    >
      <div className="relative z-10">
        <Navigation />
      </div>


      <div className="px-6 md:px-18 py-28 md:py-16">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row justify-center md:justify-between items-center md:items-start gap-12 md:gap-16">
          {/* Left Content */}
          <div className="flex flex-col md:max-w-[650px] w-full gap-12 md:gap-16">
            {/* Heading */}
            <div className="flex flex-col gap-6 fade-in text-center md:text-left">
              <h1 className="md:text-hero text-hero-mobile text-white">
                Authentic dining, modern experience.
              </h1>
              <p className="md:text-subheading text-mobile-subheading flex justify-center text-center md:text-left text-white md:max-w-[634px] md:leading-[36px]">
                From expertly grilled meats to fresh, seasonal veggies enjoy meals crafted with care and tradition.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-6 fade-in items-center md:items-start">
              <div className="flex items-center gap-4">
                <StarRating rating={5} size={28} />
                <span className="text-white text-[14px] md:text-xl font-medium">
                  4.9 (1200+ Reviews)
                </span>
              </div>

              <div className="relative bg-black/40 rounded-lg p-4 w-full md:w-fit">
                <div
                  className="absolute -bottom-4 left-4 w-6 h-5 bg-black/40"
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
                />
                <p className="text-white font-medium text-base leading-6 max-w-full md:max-w-[475px]">
                  "These skewers? Unreal. Juicy, smoky, flavorful — everything felt
                  homemade and special. Can't wait to come back" — Michelle A.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
                <Avatar key={6} className="w-14 h-14 fade-in">
                  <img src={`https://i.pravatar.cc/56?u=customer6`} alt={`Customer 6`} />
                </Avatar>
                <div className="flex -space-x-2 fade-in">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="w-14 h-14">
                      <img
                        src={`https://i.pravatar.cc/56?u=customer${i}`}
                        alt={`Customer ${i}`}
                      />
                    </Avatar>
                  ))}
                </div>
                <div className="bg-black/40 rounded-4xl px-5 py-4 w-fit text-white font-medium text-base fade-in">
                  <p>View all</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="fade-in w-full md:w-auto mt-8 md:mt-0">
            <BookingForm />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-6 fade-in text-center">
            <h1 className="text-hero-mobile text-white">
              Authentic dining, modern experience.
            </h1>
            <p className="text-mobile-subheading leading-4 flex justify-center text-center text-white">
              From expertly grilled meats to fresh, seasonal veggies enjoy meals crafted with care and tradition.
            </p>
          </div>

          {/* Booking Form - Shows first on mobile */}
          <div className="fade-in w-full">
            <BookingForm />
          </div>

             <div className="flex mr-12 items-center justify-start gap-4">
              <StarRating rating={5} size={20} />
              <span className="text-white text-[14px]  block font-medium">
                4.9 (1200+ Reviews)
              </span>
            </div>

          {/* Reviews - Shows after booking form on mobile */}
          <div className="flex flex-col gap-6 fade-in items-center w-full">
            <div className="relative bg-black/40 rounded-lg p-4 w-full">
              <div
                className="absolute -bottom-4 left-4 w-6 h-5 bg-black/40"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
              />
              <p className="text-white font-medium text-[14px] leading-6">
                "These skewers? Unreal. Juicy, smoky, flavorful — everything felt
                homemade and special. Can't wait to come back" — Michelle A.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Avatar key={6} className="w-10 h-10 fade-in">
                <img src={`https://i.pravatar.cc/40?u=customer6`} alt={`Customer 6`} />
              </Avatar>
              <div className="flex -space-x-2 fade-in">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="w-10 h-10">
                    <img
                      src={`https://i.pravatar.cc/40?u=customer${i}`}
                      alt={`Customer ${i}`}
                    />
                  </Avatar>
                ))}
              </div>
              {/* <div className="bg-black/40 rounded-4xl ml-10 px-3 py-3 w-fit text-white font-medium text-[14px] fade-in">
                <p>View all</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};