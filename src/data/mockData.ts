import type { MenuItem, Testimonial, SeatingArea, OpeningHours, ContactInfo } from '@/types'

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Ribeye Steak',
    description: 'Tender steak with mashed potatoes and veggies.',
    price: 16.48,
    image: '/images/grilled-ribeye.png',
    category: 'Main'
  },
  {
    id: '2',
    name: 'Lemon Chicken',
    description: 'Crispy salmon with garlic butter sauce, quinoa.',
    price: 16.48,
    image: '/images/lemon-chicken.png',
    category: 'Main'
  },
  {
    id: '3',
    name: 'Seared Salmon',
    description: 'Tender steak with mashed potatoes and veggies.',
    price: 22.4,
    image: '/images/seared-salmon.png',
    category: 'Main'
  },
  {
    id: '4',
    name: 'Vegetable Lasagna',
    description: 'Pasta layered with ricotta, spinach, and marinara.',
    price: 16.48,
    image: '/images/vegetable-lasagna.png',
    category: 'Main'
  },
    {
    id: '5',
    name: 'Grilled Ribeye Steak',
    description: 'Tender steak with mashed potatoes and veggies.',
    price: 16.48,
    image: '/images/grilled-ribeye.png',
    category: 'Main'
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Abiola',
    rating: 5,
    comment: 'We came for a birthday dinner and left planning our next visit. Great food, attentive staff, and a vibe that\'s perfect for any celebration.',
    image: '/images/testimonial-1.png'
  },
  {
    id: '2',
    name: 'Anne James',
    rating: 5,
    comment: 'We came for a birthday dinner and left planning our next visit. Great food, attentive staff, and a vibe that\'s perfect for any celebration.',
    image: '/images/testimonial-1.png'
  },
  {
    id: '3',
    name: 'Nkunzi A.',
    rating: 3,
    comment: 'We came for a birthday dinner and left planning our next visit. Great food, attentive staff, and a vibe that\'s perfect for any celebration.',
    image: '/images/testimonial-2.png'
  }
]

export const seatingAreas: SeatingArea[] = [
  {
    id: '1',
    name: 'Indoor Lounge',
    title: 'Indoor Lounge',
    description: 'Enjoy an intimate atmosphere surrounded by warm lighting and elegant interiors perfect for date nights and quiet dinners.',
    image: '/images/seating-collage.svg'
  },
  {
    id: '2',
    name: 'Outdoor Patio',
    title: 'Outdoor Patio',
    description: 'Bask in the open air with beautiful natural surroundings. Ideal for sunny brunches, evening drinks, or group dinners under the stars.',
    image: '/images/seating-collage.svg'
  },
  {
    id: '3',
    name: 'Private Booths',
    title: 'Private Booths',
    description: 'Prefer privacy? Our booths offer a cozy and quiet escape for small gatherings, private convos, or work lunches.',
    image: '/images/seating-collage.svg'
  }
]

export const openingHours: OpeningHours[] = [
  {
    days: 'Mon - Fri',
    hours: '10:00 AM – 10:00 PM'
  },
  {
    days: 'Sat - Sun',
    hours: '09:00 AM – 11:00 PM'
  }
]

export const contactInfo: ContactInfo = {
  address: '123 Tasty Avenue, Lagos, Nigeria',
  phone: '+234 000 000 0000',
  email: 'biolakitchen@gmail.com'
}