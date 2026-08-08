import { Search, Users, Zap, Grid2x2 } from 'lucide-react'

const iconMap = {
  search: Search,
  users: Users,
  zap: Zap,
  grid: Grid2x2,
}

export default function ApproachIcon({ name }: { name: string }) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || Search

  return (
    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E5F3FF]">
      <IconComponent size={18} className="text-[#1197E5]" />
    </div>
  )
}