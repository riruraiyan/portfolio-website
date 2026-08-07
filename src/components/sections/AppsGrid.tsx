/*import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AppCard from '@/components/ui/AppCard'
import { getApps } from '@/lib/fetchData'

export default async function AppsGrid() {
  const apps = await getApps()

  return (
    <section className="bg-bg-dark py-[120px]">
      <Container>
        <SectionTitle>
          <span className="text-white">Apps & Products</span>
        </SectionTitle>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {apps?.length > 0 ? (
            apps.map((app: any) => (
              <AppCard
                key={app._id}
                image={app.image}
                title={app.title}
                description={app.description}
                category={app.category}
                year={app.year}
              />
            ))
          ) : (
            <p className="text-text-muted">No apps published yet — add some in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  )
}*/
/*=========================================== */

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import AppCard from '@/components/ui/AppCard'
import FadeUp from '@/components/ui/FadeUp'
import { getApps } from '@/lib/fetchData'

export default async function AppsGrid() {
  const apps = await getApps()

  return (
    <section className="bg-bg-dark py-[120px]">
      <Container>
        <FadeUp>
          <SectionTitle>Apps & Products</SectionTitle>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {apps?.length > 0 ? (
            apps.map((app: any, index: number) => (
              <FadeUp key={app._id} delay={index * 0.1}>
                <AppCard
                  image={app.image}
                  title={app.title}
                  description={app.description}
                  category={app.category}
                  year={app.year}
                />
              </FadeUp>
            ))
          ) : (
            <p className="text-text-muted">No apps published yet — add some in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  )
}