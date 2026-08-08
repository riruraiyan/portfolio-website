export default function AboutQuote({ quote }: { quote: string }) {
  if (!quote) return null

  return (
    <blockquote className="mt-7 border-l-[3px] border-[#1197E5] py-1 pl-5">
      <p className="text-[18px] leading-[1.45] text-[#111111]">&ldquo;{quote}&rdquo;</p>
    </blockquote>
  )
}