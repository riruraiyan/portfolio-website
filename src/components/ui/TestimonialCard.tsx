import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type TestimonialCardProps = {
  name: string
  initial: string
  avatarImage?: any
  role: string
  company: string
  quote: string
}

export default function TestimonialCard({ name, initial, avatarImage, role, company, quote }: TestimonialCardProps) {
  return (
    <div className="flex h-full min-h-[475px] w-full flex-col rounded-2xl bg-white p-9">
      {avatarImage ? (
        <div className="relative h-[58px] w-[58px] overflow-hidden rounded-full">
          <Image src={urlFor(avatarImage).width(116).height(116).url()} alt={name} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#E2F2FF] text-[17px] font-semibold text-[#1197E5]">
          {initial}
        </div>
      )}

      <p className="mt-8 text-[21px] font-medium text-[#080B10]">{name}</p>
      <p className="mt-1 text-[16px] text-[#536174]">
        {role}{company ? ', ' + company : ''}
      </p>

      <p className="mt-6 text-[25px] font-medium leading-[1.3] text-[#080B10]">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  )
}