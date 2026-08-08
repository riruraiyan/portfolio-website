type ExperienceRowProps = {
  dateRange: string
  company: string
  role: string
  location: string
}

export default function ExperienceRow({ dateRange, company, role, location }: ExperienceRowProps) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#D9DEE5] py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0 sm:h-[67px]">
      <span className="text-[9px] uppercase tracking-[0.18em] text-[#526276] sm:w-[110px] sm:shrink-0">
        {dateRange}
      </span>
      <span className="text-[23px] font-bold text-[#080B10] sm:w-[160px] sm:shrink-0">{company}</span>
      <span className="text-[13px] text-[#405064] sm:flex-1">{role}</span>
      <span className="text-[9px] uppercase tracking-[0.18em] text-[#526276] sm:w-[130px] sm:shrink-0 sm:text-right">
        {location}
      </span>
    </div>
  )
}