export default function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-[20px] border border-[#E5E5E5] px-4 py-3">
      <span className="text-xs text-[#A0A0A0]">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}