import Container from '@/components/ui/Container'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeUp from '@/components/ui/FadeUp'
import { getProjects } from '@/lib/fetchData'

export default async function ProjectGrid() {
  const projects = await getProjects()

  return (
    <section id="work" className="bg-bg-light py-[120px]">
      <Container>
        <div className="mx-auto max-w-[940px]">
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-text-muted">Portfolio</p>
                <h2 className="mt-1 text-[42px] font-bold leading-[1.05] text-[#111111]">Selected work</h2>
              </div>
              <p className="max-w-[220px] text-right text-[11px] leading-relaxed text-text-muted">
                Work I&apos;m most proud of — projects I led that shipped to real users.
              </p>
            </div>
          </FadeUp>

          {projects?.length > 0 ? (
            <div
              className={
                projects.length === 1
                  ? 'mt-10 flex justify-center'
                  : 'mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2'
              }
            >
              {projects.map((project: any, index: number) => (
                <FadeUp key={project._id} delay={index * 0.1}>
                  <div className={projects.length === 1 ? 'w-full sm:max-w-[460px]' : ''}>
                    <ProjectCard
                      image={project.image}
                      company={project.company}
                      title={project.title}
                      description={project.description}
                      year={project.year}
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-text-muted">No projects published yet — add some in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  )
}