import Container from '@/components/ui/Container'
import ExperienceRow from '@/components/ui/ExperienceRow'
import FadeUp from '@/components/ui/FadeUp'
import { getAbout } from '@/lib/fetchData'

export default async function AboutExperience() {
  const about = await getAbout()
  const entries = about?.experienceEntries || []

  return (
    <section className="bg-white pt-[110px] pb-[90px]">
      <Container>
        <div className="mx-auto max-w-[1050px]">
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-[40px] font-bold leading-[1.0] tracking-tight text-[#080B10]">
                {about?.experienceHeadingBefore || 'A working '}
                <span className="text-[#1197E5]">{about?.experienceHeadingAccent || 'decade.'}</span>
              </h2>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#526276]">
                {about?.experienceDateRange || '2017 — NOW'}
              </span>
            </div>
          </FadeUp>

          {entries.length > 0 && (
            <div className="mt-10 border-t border-[#D9DEE5]">
              {entries.map((entry: { dateRange: string; company: string; role: string; location: string }, index: number) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <ExperienceRow
                    dateRange={entry.dateRange}
                    company={entry.company}
                    role={entry.role}
                    location={entry.location}
                  />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}