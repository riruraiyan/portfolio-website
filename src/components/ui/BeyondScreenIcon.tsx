import { MapPin, Coffee, Music, Briefcase, Plane, Globe } from 'lucide-react'

const iconMap = {
  location: MapPin,
  coffee: Coffee,
  music: Music,
  briefcase: Briefcase,
  plane: Plane,
  globe: Globe,
}

export default function BeyondScreenIcon({ name }: { name: string }) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || Globe

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5F3FF]">
      <IconComponent size={18} className="text-[#1197E5]" />
    </div>
  )
}