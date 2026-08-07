/*import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import { getProjects } from '@/lib/fetchData'

export default async function ProjectGrid() {
  const projects = await getProjects()

  return (
    <section className="bg-bg-light py-[120px]">
      <Container>
        <SectionTitle>Selected Work</SectionTitle>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects?.length > 0 ? (
            projects.map((project: any) => (
              <ProjectCard
                key={project._id}
                image={project.image}
                company={project.company}
                title={project.title}
                description={project.description}
                year={project.year}
              />
            ))
          ) : (
            <p className="text-text-muted">No projects published yet — add some in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  )
}*/
/*===================================== */

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeUp from '@/components/ui/FadeUp'
import { getProjects } from '@/lib/fetchData'

export default async function ProjectGrid() {
  const projects = await getProjects()

  return (
    <section className="bg-bg-light py-[120px]">
      <Container>
        <FadeUp>
          <SectionTitle>Selected Work</SectionTitle>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects?.length > 0 ? (
            projects.map((project: any, index: number) => (
              <FadeUp key={project._id} delay={index * 0.1}>
                <ProjectCard
                  image={project.image}
                  company={project.company}
                  title={project.title}
                  description={project.description}
                  year={project.year}
                />
              </FadeUp>
            ))
          ) : (
            <p className="text-text-muted">No projects published yet — add some in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  )
}