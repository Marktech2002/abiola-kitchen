/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Image arrays
const galleryOne = [
  "/images/slider1-image-one.png",
  "/images/silder1-image-two.png",
  "/images/slider1-image-three.png",
  "/images/slider1-image-four.png",
  "/images/slider1-image-five.png"
];

const galleryTwo = [
  "/images/slider3-image-three.png",
  "/images/slider2-image-two.png",
  "/images/slider2-image-two.png",
];

const galleryThree = [
  "/images/slider3-image-three.png",
  "/images/slider3-image-two.png",
  "/images/slider3-image-two.png",
];

export const GallerySection = () => {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  useEffect(() => {
    // Duplicate images for seamless loop
    const setupInfiniteScroll = (sliderRef:any, direction:any, duration:any) => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;
      const images = slider.querySelectorAll('img');
      
      // Clone images for seamless loop
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      images.forEach((img:any) => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
      });

      const totalWidth = slider.scrollWidth / 2;
      
      // Set initial position based on direction
      if (direction === 'right') {
        gsap.set(slider, { x: -totalWidth });
      }

      // Animate
      const animation = gsap.to(slider, {
        x: direction === 'left' ? -totalWidth : 0,
        duration: duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const value = parseFloat(x);
            if (direction === 'left') {
              return value <= -totalWidth ? 0 : value;
            } else {
              return value >= 0 ? -totalWidth : value;
            }
          })
        }
      });

      return animation;
    };

    // Setup animations with different speeds and directions
    const anim1 = setupInfiniteScroll(slider1Ref, 'left', 50);
    const anim2 = setupInfiniteScroll(slider2Ref, 'right', 45);
    const anim3 = setupInfiniteScroll(slider3Ref, 'left', 50);

    // Cleanup
    return () => {
      anim1?.kill();
      anim2?.kill();
      anim3?.kill();
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative overflow-x-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="space-y-3 md:space-y-4">
        {/* First gallery slider - moves left */}
        <div className="">
          <div 
            ref={slider1Ref}
            className='flex flex-row h-[120px] md:h-[189px] gap-3 md:gap-4'
          >
            {galleryOne.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-auto object-cover rounded-2xl md:rounded-3xl"
              />
            ))}
          </div>
        </div>

        {/* Second gallery slider - moves right */}
        <div className="">
          <div 
            ref={slider2Ref}
            className='flex flex-row h-[260px] md:h-[410px] gap-3 md:gap-4'
          >
            {galleryTwo.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-[864px] object-cover rounded-2xl md:rounded-3xl"
              />
            ))}
          </div>
        </div>

        {/* Third gallery slider - moves left */}
        <div className="">
          <div 
            ref={slider3Ref}
            className='flex flex-row h-[120px] md:h-[189px] gap-3 md:gap-4'
          >
            {galleryThree.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-[469px] object-cover rounded-2xl md:rounded-3xl"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex mt-6 md:mt-8 justify-center">
        <Button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-3xl md:rounded-[32px] text-base md:text-lg font-medium hover:bg-black/90 flex items-center gap-2 md:gap-3">
          View Full Gallery
          <Image size={18} className="md:w-5 md:h-5" />
        </Button>
      </div>
    </section>
  );
}