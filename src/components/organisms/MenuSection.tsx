import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MenuCard } from '@/components/molecules/MenuCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { menuItems } from '@/data/mockData'
import type { MenuCategory } from '@/types'

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Main')

  const categories: MenuCategory[] = ['All', 'Main', 'Starter', 'Deserts', 'Drinks']

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-8 px-6 md:px-18">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-12 gap-6 md:gap-0">

        <div className="flex flex-col gap-3">
          <h2 className="lg:text-heading text-foreground text-mobile-header">Our Menu</h2>
          <p className="md:text-[20px] text-mobile-paragraph md:font-medium text-muted-foreground max-w-md md:max-w-[550px]">
            Crafted with care. Served with style. Explore our chef-curated dishes by category.
          </p>
        </div>

        <Tabs
          className="pt-2 w-full md:w-auto"
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as MenuCategory)}
        >
          <TabsList
            className="
      bg-transparent
      flex gap-4 md:gap-12 
      overflow-x-scroll 
      whitespace-nowrap 
      scrollbar-hide
      px-1"
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="
          px-2       
          text-base
          md:text-2xl
          font-normal text-muted-foreground
          data-[state=active]:text-foreground data-[state=active]:font-medium
          border-x-0 border-t-0
          border-b-2 border-transparent 
          data-[state=active]:border-foreground
          rounded-none pb-1 cursor-pointer
        "
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

      </div>

      {/* GRID */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-10 md:mb-12"
      >
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      <div className="hidden md:flex justify-end gap-4">
        <button className="w-12 h-12 rounded-[10px] border-2 border-foreground flex cursor-pointer items-center justify-center hover:bg-foreground hover:text-background transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="w-12 h-12 rounded-[10px] border-2 border-foreground flex cursor-pointer items-center justify-center hover:bg-foreground hover:text-background transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>

    </section>
  )
}
