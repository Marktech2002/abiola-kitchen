import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, ChevronDown } from 'lucide-react'
import type { BookingFormData, SittingArea } from '@/types'

export const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: 'Ahmed Abiola',
    sittingArea: 'Outdoor',
    totalGuests: "4 Guest",
    date: 'Mon, 14 Apr 2025',
    time: '18:00 - 19:00 WAT'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black/60 rounded-2xl p-6 flex flex-col gap-4 w-full h-fit md:w-[420px]">
      <h3 className="text-white text-2xl font-medium">Book a Table</h3>
      
      <div className="flex flex-col gap-2">
        <label className="text-white font-normal text-sm">Name</label>
        <Input 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-transparent border-input text-white/70 text-sm px-3 py-6"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-normal text-sm">Sitting Area</label>
        <Select value={formData.sittingArea ? formData.sittingArea : "Outdoor"} onValueChange={(value) => setFormData({ ...formData, sittingArea: value as SittingArea })}>
          <SelectTrigger className="bg-transparent border-input px-3 py-6 font-normal text-white/70 w-full text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Indoor">Indoor</SelectItem>
            <SelectItem value="Outdoor">Outdoor</SelectItem>
            <SelectItem value="Private Booth">Private Booth</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white font-normal text-sm">Total Guest</label>
        <Select value={formData.totalGuests ? formData.totalGuests : "4 Guest"} onValueChange={(value) => setFormData({ ...formData, totalGuests: value as SittingArea })}>
          <SelectTrigger className="bg-transparent border-input px-3 py-6 font-normal text-white/70 w-full text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

   
      {/* Date & Time stacked on mobile */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-white font-normal text-sm">Date</label>
          <div className="flex items-center gap-2 px-3 py-3 rounded-lg border border-input">
            <span className="text-white/70 text-sm flex-1">{formData.date}</span>
            <Calendar size={18} className="text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label className="text-white font-normal text-sm">Time</label>
          <div className="flex items-center gap-2 px-3 py-3 rounded-lg border border-input">
            <span className="text-white/70 text-sm flex-1">{formData.time}</span>
            <ChevronDown size={12} className="text-white" />
          </div>
        </div>
      </div>


      <Button type="submit" className="w-full bg-white text-black font-medium text-base py-3 rounded-3xl hover:bg-white/90 flex items-center justify-center gap-2">
        Confirm Booking
        <Calendar size={20} />
      </Button>
    </form>
  )
}