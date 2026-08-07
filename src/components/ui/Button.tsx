'use client'

import Link from 'next/link'
import { ReactNode, useRef, useState } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-[16px] font-medium transition-transform duration-200'
  const styles =
    variant === 'primary'
      ? 'bg-[#1F8FFF] text-white'
      : 'bg-transparent border border-[#E5E5E5] text-inherit'

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  )
}