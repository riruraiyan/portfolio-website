'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-bg-dark/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="text-lg font-extrabold text-white">
            YourName.
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="#work" className="text-sm text-white/80 transition-colors hover:text-white">
              Work
            </Link>
            <Link href="#lab" className="text-sm text-white/80 transition-colors hover:text-white">
              Lab
            </Link>
            <Link href="#about" className="text-sm text-white/80 transition-colors hover:text-white">
              About
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="primary">
              Contact
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden bg-bg-dark transition-[max-height] duration-300 md:hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-6 py-8">
            <Link href="#work" onClick={closeMenu} className="text-lg text-white">
              Work
            </Link>
            <Link href="#lab" onClick={closeMenu} className="text-lg text-white">
              Lab
            </Link>
            <Link href="#about" onClick={closeMenu} className="text-lg text-white">
              About
            </Link>
            <Link href="#contact" onClick={closeMenu} className="text-lg text-white">
              Contact
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  )
}