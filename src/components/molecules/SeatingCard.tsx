import { Card } from '@/components/ui/card'
import type { SeatingArea } from '@/types'

interface SeatingCardProps {
  area: SeatingArea
  imageSrc: string
}

export const SeatingCard = ({ area, imageSrc }: SeatingCardProps) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl border-none shadow-none h-[310px]">
      <img 
        src={imageSrc} 
        alt={area.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white text-xl font-medium mb-2">{area.title}</h3>
        <p className="text-white/80 text-base leading-6">{area.description}</p>
      </div>
    </Card>
  )
}