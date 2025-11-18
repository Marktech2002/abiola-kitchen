export type SittingArea = "Indoor" | "Outdoor" | "Private Booth"
export type MenuCategory = "All" | "Main" | "Starter" | "Deserts" | "Drinks"
export type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"

export interface BookingFormData {
  name: string
  sittingArea: SittingArea
  totalGuests: string
  date: string
  time: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: MenuCategory
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  image: string
}

export interface SeatingArea {
  id: string
  name: string
  title: string
  description: string
  image: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
}

export interface OpeningHours {
  days: string
  hours: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
}