type AboutHeadlineProps = {
  line1: string
  line2: string
  accent: string
  line4: string
}

export default function AboutHeadline({ line1, line2, accent, line4 }: AboutHeadlineProps) {
  return (
    <h1 className="text-[44px] font-extrabold leading-[0.98] tracking-tight text-[#080B10] sm:text-[64px] lg:text-[84px]">
      {line1 && <span className="block">{line1}</span>}
      {line2 && <span className="block">{line2}</span>}
      {accent && <span className="block text-[#1197E5]">{accent}</span>}
      {line4 && <span className="block">{line4}</span>}
    </h1>
  )
}