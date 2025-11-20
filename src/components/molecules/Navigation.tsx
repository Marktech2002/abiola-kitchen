import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/ui/button'
import { Globe, Calendar, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  active?: boolean
  dropdown?: boolean
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Our Menu', href: '#menu', dropdown: true },
  { label: 'About us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const desktopNavRef = useRef<HTMLDivElement>(null)
  const mobileBarRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  /* ======================================
       LOCK BODY SCROLL WHEN MENU OPENS
 ====================================== */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  /* ======================================
        DESKTOP NAV ANIMATION (ONCE)
  ====================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (desktopNavRef.current) {
        gsap.from(desktopNavRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
      }
    })

    return () => ctx.revert() // cleanup GSAP
  }, [])

  /* ======================================
        MOBILE BAR FADE-IN (ONCE)
  ====================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mobileBarRef.current) {
        gsap.from(mobileBarRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        })
      }
    })

    return () => ctx.revert()
  }, [])

  /* ======================================
        MOBILE MENU SLIDE-IN (DEPENDENT)
  ====================================== */
  useEffect(() => {
    if (!mobileMenuRef.current) return

    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        // Main menu slide in
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
        )

        // Stagger links
        gsap.from(".mobile-link", {
          x: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.12,
          delay: 0.25,
        })
      }
    })

    return () => ctx.revert() // kill animations when menu closes
  }, [isMenuOpen])


  return (
    <>

      {/* Desktop Navigation */}
      <nav
        ref={desktopNavRef}
        className="hidden md:flex items-center relative z-50 fonts-satoshi justify-between px-18 py-6"
      >
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? 'text-white font-bold text-base'
                  : item.dropdown
                    ? 'flex items-center gap-2 text-white/70 font-medium text-base'
                    : 'text-white/70 font-medium text-base hover:text-white transition-colors'
              }
            >
              {item.label}
              {item.dropdown && (
                <ChevronDown size={16} className="text-white" />
              )}
            </a>
          ))}
        </div>

        <Logo />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-3xl bg-black/20">
            <span className="text-white font-medium text-base">EN</span>
            <Globe size={20} className="text-white" />
          </div>
          <Button className="flex items-center gap-2 px-3 py-2 rounded-3xl bg-white text-black font-medium text-base hover:bg-white/90">
            Book Table
            <Calendar size={20} />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav
        ref={mobileBarRef}
        className="md:hidden fixed glassmorphic mt-2 mx-3 px-6 py-3 w-[93%] rounded-[32px] flex justify-between items-center"
      >
        <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />

        <Button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-3xl bg-white text-black font-medium text-sm hover:bg-white/90"
        >
          Menu
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 glassmorphic flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4">
            <img src="/images/logo.png" className="h-15 w-auto" />
            <Button
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 rounded-3xl bg-white text-black text-sm"
            >
              Close
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-link ${item.active
                  ? 'text-white font-bold text-2xl'
                  : 'text-white/70 font-medium text-2xl'
                  }`}
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-6 py-3 rounded-3xl bg-black/20">
                <span className="text-white font-medium text-base">EN</span>
                <Globe size={20} className="text-white" />
              </div>
              <Button className="px-6 py-3 rounded-3xl bg-white text-black">
                Book Table <Calendar size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
