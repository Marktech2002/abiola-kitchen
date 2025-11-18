import { Logo } from '@/components/atoms/Logo';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { openingHours, contactInfo } from '@/data/mockData';


export const Footer = () => {
  const footerRef = useRef(null)
  const logoRef = useRef(null)
  const subscribeRef = useRef(null)
  const socialRef = useRef(null)
  const linksRef = useRef(null)
  const hoursRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Import GSAP
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script.async = true
    script.onload = () => {
      const { gsap } = window

      // Set initial states
      gsap.set([logoRef.current, subscribeRef.current, socialRef.current, linksRef.current, hoursRef.current, contactRef.current], {
        opacity: 0,
        y: 30
      })

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .to(subscribeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .to([linksRef.current, hoursRef.current, contactRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      }, '-=0.4')
    }

    // Load ScrollTrigger plugin
    const scrollTriggerScript = document.createElement('script')
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    scrollTriggerScript.async = true
    scrollTriggerScript.onload = () => {
      if (window.gsap) {
        // window.gsap.registerPlugin(window.ScrollTrigger)
      }
    }

    document.body.appendChild(scrollTriggerScript)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(scrollTriggerScript)
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white">
      <div className="px-5 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:gap-[400px] gap-12 mb-12">
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <div ref={logoRef}>
              <Logo/>
            </div>
            <div ref={subscribeRef} className="flex flex-col gap-4 w-full">
              <h3 className="text-xl sm:text-2xl font-medium">Join Our Foodie Circle</h3>
              <p className="text-white/80 max-w-full lg:max-w-[466px] text-base sm:text-xl">Subscribe for exclusive offers and seasonal specials.</p>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  placeholder="enter your email address"
                  className="bg-transparent w-full sm:w-[330px] border-white border px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white/70 placeholder:text-white/70 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-black px-6 py-3 sm:py-2 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
            <div ref={socialRef} className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <Facebook size={17} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-40">
            <div ref={linksRef} className="flex flex-col gap-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col gap-4 sm:gap-6">
                <a href="#" className="text-white/70 text-lg sm:text-xl hover:text-white transition-all duration-300 hover:translate-x-1">Home</a>
                <a href="#menu" className="text-white/70 text-lg sm:text-xl hover:text-white transition-all duration-300 hover:translate-x-1">Menu</a>
                <a href="#" className="text-white/70 text-lg sm:text-xl hover:text-white transition-all duration-300 hover:translate-x-1">Reservations</a>
                <a href="#about" className="text-white/70 text-lg sm:text-xl hover:text-white transition-all duration-300 hover:translate-x-1">About us</a>
                <a href="#contact" className="text-white/70 text-lg sm:text-xl hover:text-white transition-all duration-300 hover:translate-x-1">Contact us</a>
              </nav>
            </div>

            <div className="flex flex-col gap-8">
              <div ref={hoursRef} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase tracking-wider">Opening Hours</h4>
                <div className="flex flex-col gap-4 sm:gap-6">
                  {openingHours.map((hours, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1">
                      <Clock size={20} className="sm:w-[23px] sm:h-[23px] flex-shrink-0" />
                      <span className="text-white/70 text-base sm:text-xl">{hours.days}: {hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={contactRef} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase tracking-wider mt-2 sm:mt-4">Contact us</h4>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1">
                    <MapPin size={20} className="sm:w-[23px] sm:h-[23px] flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-base sm:text-xl">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1">
                    <Phone size={20} className="sm:w-[23px] sm:h-[23px] flex-shrink-0" />
                    <span className="text-white/70 text-base sm:text-xl">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1">
                    <Mail size={19} className="sm:w-[21px] sm:h-[21px] flex-shrink-0" />
                    <span className="text-white/70 text-base sm:text-xl break-all">{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-white/70 text-xs sm:text-base font-medium uppercase text-center sm:text-left">© 2024 BIOLA'S KITCHEN. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-white/70 text-xs sm:text-base font-medium uppercase hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="text-white/70 text-xs sm:text-base font-medium uppercase hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
        <p className='flex font-semi text-xl sm:text-2xl lg:text-[28px] fonts-mayfair text-white/70 justify-center mt-6 transition-all duration-300 hover:text-white'>NKUNZI 👨‍🍳</p>
      </div>
    </footer>
  )
}