'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Lab', href: '#lab' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Work')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-bg-dark/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-[64px] items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-sm font-medium text-white">
            <span className="text-primary">&#10022;</span>
            Mosharaf Robin.
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActive(link.label)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  active === link.label
                    ? 'bg-white text-[#111111]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white"
            >
              &#9728;
            </button>
            <Link
              href="#contact"
              className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              Say Hi &#128075;
            </Link>
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
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} className="text-lg text-white">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={closeMenu} className="text-lg text-white">
              Say Hi
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  )
}