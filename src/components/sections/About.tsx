import Container from '@/components/ui/Container'
import FadeUp from '@/components/ui/FadeUp'
import { getAbout } from '@/lib/fetchData'
import {
  PortableText,
  type PortableTextComponents,
} from 'next-sanity'

const portableTextComponents: PortableTextComponents = {
  marks: {
    highlight: ({ children }) => (
      <span className="text-[#24B8FF]">{children}</span>
    ),
  },
}

export default async function About() {
  const about = await getAbout()

  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-[720px]">
          {/* Eyebrow */}
          <FadeUp>
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#999999]">
              About
            </p>
          </FadeUp>

          {/* Main Content */}
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.8fr_1fr] lg:gap-12">
            {/* LEFT COLUMN */}
            <div>
              <FadeUp delay={0.1}>
                <div className="text-[22px] font-medium leading-[1.2] tracking-[-0.025em] text-[#111111] sm:text-[25px]">
                  {about?.story ? (
                    <PortableText
                      value={about.story}
                      components={portableTextComponents}
                    />
                  ) : (
                    <p>
                      My story goes here — add it in Sanity Studio under
                      About Section.
                    </p>
                  )}
                </div>
              </FadeUp>

              {/* Info Pills */}
              <FadeUp delay={0.2}>
                {about?.infoPills?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {about.infoPills.map(
                      (
                        pill: {
                          label: string
                          value: string
                        },
                        i: number
                      ) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-[#F7F7F6] px-2.5 py-1 text-[8px] leading-none text-[#666666]"
                        >
                          {pill.label ? `${pill.label} ` : ''}
                          {pill.value}
                        </span>
                      )
                    )}
                  </div>
                )}
              </FadeUp>
            </div>

            {/* RIGHT COLUMN */}
            <FadeUp delay={0.15}>
              <div>
                <p className="max-w-[240px] text-[10px] leading-[1.5] text-[#777777]">
                  {about?.shortDescription ||
                    'A short description about you goes here.'}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="#about"
                    className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#E2E2E2] bg-white px-3.5 text-[10px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F4]"
                  >
                    More about me
                  </a>

                  <a
                    href={about?.resumeUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[32px] items-center justify-center rounded-full bg-[#111111] px-3.5 text-[10px] font-medium text-white transition-colors hover:bg-[#222222]"
                  >
                    Download resume
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}