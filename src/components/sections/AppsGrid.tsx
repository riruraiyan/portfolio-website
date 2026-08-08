import Container from '@/components/ui/Container'
import AppCard from '@/components/ui/AppCard'
import FadeUp from '@/components/ui/FadeUp'
import { getApps } from '@/lib/fetchData'

export default async function AppsGrid() {
  const apps = await getApps()

  return (
    <section id="lab" className="bg-bg-dark py-[120px]">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <p className="text-[15px] font-medium uppercase tracking-widest text-text-muted">Labs</p>
                <h2 className="mt-1 text-[46px] font-extrabold leading-[0.98] tracking-tight">
                  <span className="block text-white">Apps I shipped,</span>
                  <span className="block text-[#24B8FF]">designed &amp; built.</span>
                </h2>
              </div>
              <p className="max-w-[260px] text-right text-[12px] leading-relaxed text-text-muted">
                Little experiments where I do it all — design, code, copy, and ship. Kept small so they stay fun.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </Container>
    </section>
  )
}