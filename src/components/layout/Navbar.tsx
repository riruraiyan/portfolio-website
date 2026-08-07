'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-300 ${
        scrolled ? 'bg-bg-dark/70 backdrop-blur-md' : 'bg-transparent'
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

          <Button href="#contact" variant="primary">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  )
}