import Container from '@/components/ui/Container'
import BeyondScreenCard from '@/components/ui/BeyondScreenCard'
import FadeUp from '@/components/ui/FadeUp'

type BeyondScreenItem = {
  icon: string
  title: string
  description: string
  published?: boolean
}

type AboutBeyondScreenProps = {
  eyebrow: string
  heading: string
  items: BeyondScreenItem[]
}

export default function AboutBeyondScreen({ eyebrow, heading, items }: AboutBeyondScreenProps) {
  const published = (items || []).filter((i) => i.published !== false)

  return (
    <section className="border-b border-[#D8DEE6] bg-white pt-[95px] pb-[95px]">
      <Container>
        <div className="mx-auto max-w-[1270px]">
          <FadeUp>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#1197E5]">{eyebrow}</p>
            <h2 className="mt-3.5 text-[48px] font-semibold leading-[1.05] text-[#080B10]">{heading}</h2>
          </FadeUp>

          {published.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {published.map((item, index) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <BeyondScreenCard icon={item.icon} title={item.title} description={item.description} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}