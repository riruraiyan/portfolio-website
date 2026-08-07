import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-[16px] font-medium transition-transform duration-200 hover:scale-105'
  const styles =
    variant === 'primary'
      ? 'bg-[#1F8FFF] text-white'
      : 'bg-transparent border border-[#E5E5E5] text-inherit'

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}