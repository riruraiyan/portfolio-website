import Container from '@/components/ui/Container'
import AboutProfile from '@/components/ui/AboutProfile'
import AboutHeadline from '@/components/ui/AboutHeadline'
import AboutCopy from '@/components/ui/AboutCopy'
import AboutQuote from '@/components/ui/AboutQuote'
import AboutActions from '@/components/ui/AboutActions'
import { getAbout } from '@/lib/fetchData'

export default async function AboutIntro() {
  const about = await getAbout()

  return (
    <section className="bg-white py-[90px]">
      <Container>
        <div className="mx-auto flex max-w-[1300px] flex-col gap-12 lg:flex-row lg:gap-16">
          <AboutProfile image={about?.profileImage} caption={about?.imageCaption} />

          <div className="lg:w-[60%]">
            <AboutHeadline
              line1={about?.headlineLine1}
              line2={about?.headlineLine2}
              accent={about?.headlineAccent}
              line4={about?.headlineLine4}
            />
            <AboutCopy paragraph1={about?.paragraph1} paragraph2={about?.paragraph2} />
            <AboutQuote quote={about?.quote} />
            <AboutActions
              sayHiLabel={about?.sayHiLabel}
              sayHiUrl={about?.sayHiUrl}
              resumeLabel={about?.resumeLabel}
              resumeUrl={about?.resumeUrl}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}