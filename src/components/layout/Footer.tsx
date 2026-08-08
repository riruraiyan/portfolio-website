'use client'

import Container from '@/components/ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/80">
            © {year} Mosharaf Robin. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              GitHub
            </a>

            <button
              onClick={scrollToTop}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Back to Top ↑
            </button>

          </div>
        </div>
      </Container>
    </footer>
  )
}