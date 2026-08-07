import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getHero } from '@/lib/fetchData'

export default async function Hero() {
  const hero = await getHero()

  return (
    <section className="flex min-h-screen items-center bg-bg-dark pt-[72px]">
      <Container>
        <div className="max-w-4xl py-24">
          <h1 className="text-[56px] font-extrabold leading-[1.05] text-white sm:text-[72px] lg:text-[96px]">
            {hero?.heading || 'Designer for AI & Products.'}
          </h1>

          <p className="mt-8 max-w-xl text-[18px] leading-relaxed text-text-muted">
            {hero?.subheading || 'I build clean, thoughtful digital products.'}
          </p>

          <div className="mt-10 flex gap-4">
            <Button href={hero?.primaryButtonLink || '#work'} variant="primary">
              {hero?.primaryButtonText || 'View Work'}
            </Button>
            <Button href={hero?.secondaryButtonLink || '#contact'} variant="secondary">
              {hero?.secondaryButtonText || 'Contact'}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}