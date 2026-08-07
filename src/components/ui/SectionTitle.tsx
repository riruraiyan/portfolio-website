export default function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[48px] font-extrabold leading-tight">
      {children}
    </h2>
  )
}