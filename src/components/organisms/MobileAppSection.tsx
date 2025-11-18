import { useEffect, useRef } from 'react'

export const MobileAppSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    // Dynamically import gsap if it exists
    const loadGsap = async () => {
      try {
        const gsap = (await import('gsap')).default
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
          // Set initial states
          gsap.set(imageRef.current, {
            opacity: 0,
            x: -100,
            rotation: -5
          })

          gsap.set([headingRef.current, textRef.current, buttonsRef.current], {
            opacity: 0,
            x: 50
          })

          // Create timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          })

          tl.to(imageRef.current, {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: 'power3.out'
          })
          .to(headingRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
          }, '-=0.6')
          .to(textRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
          }, '-=0.6')
          .to(buttonsRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
          }, '-=0.6')

          // Floating animation for phone
          gsap.to(imageRef.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          })
        }, sectionRef)

        return () => ctx.revert()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log('GSAP not available, skipping animations')
      }
    }

    loadGsap()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black py-12 sm:py-16 lg:py-20 px-5 sm:px-10 lg:px-18">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex-1 w-full lg:-ml-18 flex justify-center lg:justify-start">
          <img
            ref={imageRef}
            src="/images/phone-mockup.png"
            alt="Mobile app"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[600px] h-auto lg:h-[585px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 sm:gap-6 text-center lg:text-left px-4 sm:px-0">
          <h2 
            ref={headingRef}
            className="text-white font-semibold text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-snug lg:leading-[84px] font-[Montserrat]"
          >
            Get Deliciousness<br /> On-the-Go
          </h2>
          <p 
            ref={textRef}
            className="text-white/70 max-w-full lg:max-w-[651px] text-base sm:text-lg lg:text-2xl leading-6 sm:leading-7 lg:leading-9 font-[Lato] mx-auto lg:mx-0"
          >
            Order ahead, skip the line, reserve your table, and earn exclusive rewards all from our mobile app.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-4 items-center justify-center lg:justify-start"
          >
            <img
              src="/images/google-play.png"
              alt="Download on Google Play"
              className="w-auto h-10 sm:h-12 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
            <img
              src="/images/apple-store.png"
              alt="Download on App store"
              className="w-auto h-10 sm:h-12 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}