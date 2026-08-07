import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import ProjectGrid from '@/components/sections/ProjectGrid'
import AppsGrid from '@/components/sections/AppsGrid'
import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectGrid />
      <AppsGrid />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}