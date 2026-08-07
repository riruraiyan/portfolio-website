import { getHero, getProjects, getApps, getAbout, getCTA, getSEO } from '@/lib/fetchData'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default async function TestConnection() {
  const [hero, projects, apps, about, cta, seo] = await Promise.all([
    getHero(),
    getProjects(),
    getApps(),
    getAbout(),
    getCTA(),
    getSEO(),
  ])

  return (
    <div style={{ padding: 40, background: 'black', color: 'white', minHeight: '100vh' }}>
      <Container>
        <SectionTitle>Test Section</SectionTitle>
        <Button href="/">Click Me</Button>
        <Badge label="Location" value="Remote" />
      </Container>

      <h2>Hero</h2>
      <pre>{JSON.stringify(hero, null, 2)}</pre>
      <h2>Projects</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <h2>Apps</h2>
      <pre>{JSON.stringify(apps, null, 2)}</pre>
      <h2>About</h2>
      <pre>{JSON.stringify(about, null, 2)}</pre>
      <h2>CTA</h2>
      <pre>{JSON.stringify(cta, null, 2)}</pre>
      <h2>SEO</h2>
      <pre>{JSON.stringify(seo, null, 2)}</pre>
    </div>
  )
}