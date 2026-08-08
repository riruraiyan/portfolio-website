type ElsewhereRowProps = {
  category: string
  title: string
  description: string
}

export default function ElsewhereRow({ category, title, description }: ElsewhereRowProps) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#D9DEE5] py-5 sm:flex-row sm:items-center sm:gap-6">
      <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#1197E5] sm:w-[100px] sm:shrink-0">
        {category}
      </span>
      <span className="text-[14px] font-semibold text-[#10151D] sm:w-[220px] sm:shrink-0">{title}</span>
      <span className="text-[13px] text-[#526276] sm:flex-1">{description}</span>
    </div>
  )
}