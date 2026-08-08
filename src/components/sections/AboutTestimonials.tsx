'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import TestimonialCard from '@/components/ui/TestimonialCard'

type Testimonial = {
  name: string
  initial: string
  avatarImage?: any
  role: string
  company: string
  quote: string
  published?: boolean
}

type AboutTestimonialsProps = {
  heading: string
  testimonials: Testimonial[]
}

export default function AboutTestimonials({ heading, testimonials }: AboutTestimonialsProps) {
  const items = (testimonials || []).filter((t) => t.published !== false)
  const [index, setIndex] = useState(0)
  const perPage = 3

  const maxIndex = Math.max(items.length - perPage, 0)
  const canGoPrev = index > 0
  const canGoNext = index < maxIndex

  const goPrev = () => setIndex((i) => Math.max(i - 1, 0))
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex))

  if (items.length === 0) return null

  const current = String(index + 1).padStart(2, '0')
  const total = String(items.length).padStart(2, '0')

  return (
    <section className="bg-[#F5F6F8] py-[95px]">
      <Container>
        <div className="mx-auto max-w-[1220px]">
          <div className="flex items-start justify-between gap-6">
            <h2 className="max-w-[360px] text-[33px] font-semibold leading-[1.1] text-[#080B10]">
              {heading}
            </h2>

            <div className="flex shrink-0 gap-2.5">
              <button
                onClick={goPrev}
                disabled={!canGoPrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DCE4] text-[#080B10] transition-colors hover:bg-white disabled:opacity-30"
              >
                &#8592;
              </button>
              <button
                onClick={goNext}
                disabled={!canGoNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DCE4] text-[#080B10] transition-colors hover:bg-white disabled:opacity-30"
              >
                &#8594;
              </button>
            </div>
          </div>

          <p className="mt-6 text-[13px] text-[#536174]">
            {current} &mdash; {total}
          </p>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex gap-[18px] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${index} * (100% / ${perPage} + 18px / ${perPage})))` }}
            >
              {items.map((t, i) => (
                <div key={i} className="w-full shrink-0 sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-12px)]">
                  <TestimonialCard
                    name={t.name}
                    initial={t.initial}
                    avatarImage={t.avatarImage}
                    role={t.role}
                    company={t.company}
                    quote={t.quote}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}