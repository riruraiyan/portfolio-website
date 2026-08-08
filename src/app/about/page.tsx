import Navbar from '@/components/layout/Navbar'
import AboutIntro from '@/components/sections/AboutIntro'
import AboutApproach from '@/components/sections/AboutApproach'
import AboutExperience from '@/components/sections/AboutExperience'
import AboutElsewhere from '@/components/sections/AboutElsewhere'
import AboutTestimonials from '@/components/sections/AboutTestimonials'
import AboutBeyondScreen from '@/components/sections/AboutBeyondScreen'
import AboutFinalCTA from '@/components/sections/AboutFinalCTA'
import { getAbout } from '@/lib/fetchData'
import Footer from '@/components/layout/Footer'

export default async function AboutPage() {
  const about = await getAbout()

  return (
    <main>
      <Navbar />
      <AboutIntro />
      <AboutApproach />
      <AboutExperience />
      <AboutElsewhere />
      <AboutTestimonials
        heading={about?.testimonialsHeading || "Kind words from people I've worked with"}
        testimonials={about?.testimonials || []}
      />
      <AboutBeyondScreen
        eyebrow={about?.beyondScreenEyebrow || 'Beyond the screen'}
        heading={about?.beyondScreenHeading || 'Off the clock.'}
        items={about?.beyondScreenItems || []}
      />
      <AboutFinalCTA
        headingBefore={about?.ctaHeadingBefore || "Let's make something "}
        headingHighlight={about?.ctaHeadingHighlight || 'good.'}
        sayHiLabel={about?.ctaSayHiLabel || 'Say hi'}
        sayHiUrl={about?.ctaSayHiUrl || '/about'}
        resumeLabel={about?.ctaResumeLabel || 'Download resume'}
        resumeUrl={about?.ctaResumeUrl || '#'}
        backToWorkLabel={about?.ctaBackToWorkLabel || 'Back to work'}
      />
      <Footer />
    </main>
  )
}