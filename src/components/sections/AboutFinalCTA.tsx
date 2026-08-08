import Link from 'next/link'
import Container from '@/components/ui/Container'
import AboutActions from '@/components/ui/AboutActions'

type AboutFinalCTAProps = {
  headingBefore: string
  headingHighlight: string
  sayHiLabel: string
  sayHiUrl: string
  resumeLabel: string
  resumeUrl: string
  backToWorkLabel: string
}

export default function AboutFinalCTA({
  headingBefore,
  headingHighlight,
  sayHiLabel,
  sayHiUrl,
  resumeLabel,
  resumeUrl,
  backToWorkLabel,
}: AboutFinalCTAProps) {
  return (
    <section className="bg-white pt-[110px] pb-[105px]">
      <Container>
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2 className="text-[36px] font-semibold leading-[1.05] text-[#080B10] sm:text-[48px] lg:text-[54px]">
            {headingBefore}
            <span className="text-[#1197E5]">{headingHighlight}</span>
          </h2>

          <div className="mt-9 flex justify-center">
            <AboutActions
              sayHiLabel={sayHiLabel}
              sayHiUrl={sayHiUrl}
              resumeLabel={resumeLabel}
              resumeUrl={resumeUrl}
            />
          </div>

          <Link
            href="/#work"
            className="mt-12 text-[9px] uppercase tracking-[0.25em] text-[#536174] transition-colors hover:text-[#111111]"
          >
            &#8592; {backToWorkLabel}
          </Link>
        </div>
      </Container>
    </section>
  )
}