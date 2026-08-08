type AboutCopyProps = {
  paragraph1: string
  paragraph2: string
}

export default function AboutCopy({ paragraph1, paragraph2 }: AboutCopyProps) {
  return (
    <div className="mt-10 max-w-[650px] space-y-6">
      {paragraph1 && (
        <p className="text-[17px] leading-[1.5] text-[#405064] sm:text-[18px]">{paragraph1}</p>
      )}
      {paragraph2 && (
        <p className="text-[17px] leading-[1.5] text-[#405064] sm:text-[18px]">{paragraph2}</p>
      )}
    </div>
  )
}