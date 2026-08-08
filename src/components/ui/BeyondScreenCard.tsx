import BeyondScreenIcon from '@/components/ui/BeyondScreenIcon'

type BeyondScreenCardProps = {
  icon: string
  title: string
  description: string
}

export default function BeyondScreenCard({ icon, title, description }: BeyondScreenCardProps) {
  return (
    <div className="flex h-[92px] items-center gap-4 rounded-2xl border border-[#D8DEE6] bg-white px-6">
      <BeyondScreenIcon name={icon} />
      <div>
        <p className="text-[16px] font-semibold text-[#111111]">{title}</p>
        <p className="text-[14px] leading-[1.4] text-[#536174]">{description}</p>
      </div>
    </div>
  )
}