import { Card } from '@/components/ui/card'
import { StarRating } from '@/components/atoms/StarRating'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card
      className="
        flex w-full flex-col md:flex-row 
        justify-center items-center 
        gap-6 md:gap-9
        p-0 border-none shadow-none bg-transparent 
        rounded-xl overflow-hidden
      "
    >
      {/* Desktop image - hidden on mobile */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="
          hidden md:block
          md:w-[177px] md:h-[250px] 
          object-cover rounded-xl
        "
      />

      <div className="flex flex-col justify-center gap-4 md:gap-6 md:pt-12 md:text-left md:px-0 w-full md:w-fit">
        {/* Mobile: Text first */}
        <StarRating className='md:hidden block' rating={testimonial.rating} size={20} />
        <p className="
          md:hidden
          text-[#61656E] 
          text-[20px]
          py-2
          max-w-full
          font-medium 
          leading-tight">
          <span className="text-lg text-[#61656E] align-bottom leading-none inline-block">〝</span>
          {testimonial.comment}
          <span className="text-lg text-[#61656E] align-bottom leading-none inline-block">〞</span>
        </p>

        {/* Mobile: Name with small image beside it and stars above */}
        <div className="md:hidden flex flex-col gap-2 animate-fade-in-up">
          <div className="flex flex-row items-center gap-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className=''>
              <p className="text-foreground text-[18px] font-medium">
                {testimonial.name}
              </p>
            </div>

          </div>
        </div>

        {/* Desktop: Stars in original position */}
        <div className="hidden md:block">
          <StarRating rating={testimonial.rating} size={20} />
        </div>

        {/* Desktop: Text in original position */}
        <p className="
          hidden md:block
          text-[#61656E] 
          text-[20px] 
          font-medium 
          max-w-md
        ">
          <span className="text-xl text-[#61656E] align-bottom leading-none inline-block">
            〝
          </span>

          {testimonial.comment}

          <span className="text-xl text-[#61656E] align-bottom ml-1 leading-none inline-block">
            〞
          </span>
        </p>

        {/* Desktop: Name in original position */}
        <p className="hidden md:block text-foreground pt-6 text-[22px] font-medium">
          {testimonial.name}
        </p>
      </div>
    </Card>
  )
}