export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`
}

export const formatGuestCount = (count: number): string => {
  return `${count} Guest${count !== 1 ? 's' : ''}`
}

export const formatTimeRange = (start: string, end: string, timezone: string): string => {
  return `${start} - ${end} ${timezone}`
}

export const formatOpeningHours = (days: string, hours: string): string => {
  return `${days}: ${hours}`
}