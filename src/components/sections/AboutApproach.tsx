import Container from '@/components/ui/Container'
import ApproachCard from '@/components/ui/ApproachCard'
import FadeUp from '@/components/ui/FadeUp'
import { getAbout } from '@/lib/fetchData'

export default async function AboutApproach() {
  const about = await getAbout()
  const cards = about?.approachCards || []

  return (
    <section className="bg-white py-[110px]">
      <Container>
        <div className="mx-auto max-w-[980px]">
          <FadeUp>
            <p className="text-[9px] font-medium uppercase tracking-widest text-[#1197E5]">
              {about?.approachEyebrow || 'Approach'}
            </p>
            <h2 className="mt-3 text-[44px] font-bold leading-[1.0] tracking-tight text-[#080B10]">
              {about?.approachTitle || 'How I work.'}
            </h2>
          </FadeUp>

          {cards.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {cards.map((card: { icon: string; title: string; description: string }, index: number) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <ApproachCard icon={card.icon} title={card.title} description={card.description} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}