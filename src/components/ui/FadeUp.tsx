'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type FadeUpProps = {
  children: ReactNode
  delay?: number
}

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}