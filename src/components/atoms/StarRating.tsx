// Remove Lucide import
// import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
  className?: string
}

const CustomStar = ({
  filled,
  size,
}: {
  filled: boolean
  size: number
}) => {
  return (
    <svg
      width={size}
      height={size * (26 / 27)}
      viewBox="0 0 27 26"
      xmlns="http://www.w3.org/2000/svg"
      className={filled ? "fill-star-gold" : "fill-muted"}
    >
      <path d="M13.3148 0L16.458 9.67376H26.6296L18.4006 15.6525L21.5438 25.3262L13.3148 19.3475L5.0858 25.3262L8.22899 15.6525L-2.86102e-06 9.67376H10.1716L13.3148 0Z" />
    </svg>
  )
}

export const StarRating = ({
  rating,
  maxRating = 5,
  size = 20,
  className = "",
}: StarRatingProps) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <CustomStar
          key={index}
          size={size}
          filled={index < rating}
        />
      ))}
    </div>
  )
}
