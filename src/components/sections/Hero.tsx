import Link from 'next/link'
import Container from '@/components/ui/Container'
import FadeUp from '@/components/ui/FadeUp'
import { getHero } from '@/lib/fetchData'

export default async function Hero() {
  const hero = await getHero()

  const taglineLines = (hero?.tagline || 'Designer for AI &\nproducts.')
    .split('\n')
    .filter(Boolean)

  return (
    <section className="bg-bg-dark pt-[140px] pb-[90px] sm:pt-[170px] lg:pt-[190px]">
      <Container>
        <FadeUp>
          <h1 className="max-w-3xl text-[48px] font-extrabold leading-[0.97] tracking-tight sm:text-[64px] lg:text-[84px]">
            <span className="block text-white">{hero?.name || 'Your Name.'}</span>
            {taglineLines.map((line: string, i: number) => (
              <span key={i} className="block text-[#5A6472]">
                {line}
              </span>
            ))}
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-[380px] text-[12px] leading-[1.4] text-text-muted">
            {hero?.subheading || 'A short line about what you do and where you are based.'}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-7 flex gap-2.5">
            <Link
              href={hero?.primaryButtonLink || '#work'}
              className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              {hero?.primaryButtonText || 'View Work'}
            </Link>
            <Link
              href={hero?.secondaryButtonLink || '#contact'}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:text-white"
            >
              {hero?.secondaryButtonText || 'Contact'}
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}