import ApproachIcon from '@/components/ui/ApproachIcon'

type ApproachCardProps = {
  icon: string
  title: string
  description: string
}

export default function ApproachCard({ icon, title, description }: ApproachCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#D9DEE5] p-8">
      <ApproachIcon name={icon} />
      <h3 className="mt-5 text-[22px] font-bold leading-[1.2] text-[#10151D]">{title}</h3>
      <p className="mt-3 text-[15px] leading-[1.5] text-[#5D6877]">{description}</p>
    </div>
  )
}