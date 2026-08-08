import Container from '@/components/ui/Container'
import ElsewhereRow from '@/components/ui/ElsewhereRow'
import FadeUp from '@/components/ui/FadeUp'
import { getAbout } from '@/lib/fetchData'

export default async function AboutElsewhere() {
  const about = await getAbout()
  const entries = about?.elsewhereEntries || []

  return (
    <section className="border-t border-[#D9DEE5] bg-white pt-[55px] pb-[80px]">
      <Container>
        <div className="mx-auto max-w-[1050px]">
          <FadeUp>
            <h2 className="text-[27px] font-bold text-[#080B10]">
              {about?.elsewhereHeading || 'Also showing up elsewhere.'}
            </h2>
          </FadeUp>

          {entries.length > 0 && (
            <div className="mt-8">
              {entries.map((entry: { category: string; title: string; description: string }, index: number) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <ElsewhereRow category={entry.category} title={entry.title} description={entry.description} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}