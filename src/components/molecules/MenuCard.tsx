import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { MenuItem } from '@/types'
import { formatPrice } from '@/lib/formatters'

interface MenuCardProps {
  item: MenuItem
}

export const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <Card
      className="
        w-full 
        max-w-[165px] sm:max-w-[180px] md:max-w-[306px] 
        border-none shadow-none
      "
    >
      <img
        src={item.image}
        alt={item.name}
        className="
          w-full 
          h-[130px] sm:h-[150px] md:h-[292px] 
          object-cover rounded-[10px] md:rounded-[12px]
        "
      />

      <div className="mt-3 md:mt-4 flex flex-col gap-1">
        <h3 className="text-foreground text-sm sm:text-base md:text-xl font-medium">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-[11px] sm:text-xs md:text-base leading-normal">
          {item.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3 md:mt-4">
        <span className="text-price-green text-[16px] sm:text-[18px] md:text-[28px] font-medium">
          {formatPrice(item.price)}
        </span>

        <Button
          className="
            bg-black text-white
            px-3 sm:px-4 md:px-6
            py-1.5 md:py-2
            rounded-full
            text-[10px] sm:text-xs md:text-sm 
            font-medium
            hover:bg-black/90
          "
        >
          Order
        </Button>
      </div>
    </Card>
  )
}

