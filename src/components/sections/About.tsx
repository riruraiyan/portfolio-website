import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { getAbout } from '@/lib/fetchData'
import { PortableText } from 'next-sanity'

export default async function About() {
  const about = await getAbout()

  return (
    <section id="about" className="bg-bg-light py-[120px]">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: Large story */}
          <div className="prose prose-lg max-w-none text-[#111111]">
            {about?.story ? (
              <PortableText value={about.story} />
            ) : (
              <p className="text-[18px] leading-relaxed text-[#111111]">
                My story goes here — add it in Sanity Studio under About Section.
              </p>
            )}
          </div>

          {/* Right: Short description + buttons + pills */}
          <div>
            <p className="text-[18px] leading-relaxed text-text-muted">
              {about?.shortDescription || 'A short description about you goes here.'}
            </p>

            <div className="mt-8 flex gap-4">
              <Button href={about?.resumeUrl || '#'} variant="primary">
                Resume
              </Button>
              <Button href="#contact" variant="secondary">
                Contact
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {about?.infoPills?.length > 0 ? (
                about.infoPills.map((pill: { label: string; value: string }, i: number) => (
                  <Badge key={i} label={pill.label} value={pill.value} />
                ))
              ) : (
                <>
                  <Badge label="Location" value="—" />
                  <Badge label="Experience" value="—" />
                  <Badge label="Coffee" value="—" />
                  <Badge label="Curiosity" value="—" />
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}