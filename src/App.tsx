import { HeroSection } from '@/components/organisms/HeroSection'
import { StoriesSection } from '@/components/organisms/StoriesSection'
import { SeatingSection } from '@/components/organisms/SeatingSection'
import { MenuSection } from '@/components/organisms/MenuSection'
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection'
import { GallerySection } from '@/components/organisms/GallerySection'
import { MobileAppSection } from '@/components/organisms/MobileAppSection'
import { Footer } from '@/components/organisms/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <StoriesSection />
      <SeatingSection />
      <MenuSection />
      <TestimonialsSection />
      <GallerySection />
      <MobileAppSection />
      <Footer />
    </div>
  )
}

export default App