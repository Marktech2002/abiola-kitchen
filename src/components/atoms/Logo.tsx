interface LogoProps {
  className?: string
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <img 
      src="/images/logo.png" 
      alt="Biola's Kitchen Logo" 
      className={`h-24 w-auto object-cover ${className}`}
    />
  )
}