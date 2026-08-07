import Container from '@/components/ui/Container'
import { getCTA } from '@/lib/fetchData'

export default async function CTA() {
  const cta = await getCTA()

  return (
    <section id="contact" className="bg-primary py-[120px]">
      <Container>
        <div className="text-center">

          <h2 className="text-[56px] font-extrabold leading-[1.05] text-white sm:text-[72px] lg:text-[88px]">
            {cta?.heading || 'Say Hello'}
          </h2>

          <a
            href={cta?.email ? 'mailto:' + cta.email : '#'}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[18px] font-medium text-primary transition-transform duration-200 hover:scale-105"
          >
            {cta?.buttonText || 'Get In Touch'}
          </a>

          <div className="mt-12 flex flex-col items-center gap-3 text-white/90 sm:flex-row sm:justify-center sm:gap-8">
            {cta?.email && <span>{cta.email}</span>}

            {cta?.linkedin && (
              <a
                href={cta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            )}

            {cta?.location && <span>{cta.location}</span>}
          </div>

        </div>
      </Container>
    </section>
  )
}