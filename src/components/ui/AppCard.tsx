import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type AppCardProps = {
  image: any
  title: string
  description: string
  category: string
  year: string
}

export default function AppCard({ image, title, description, category, year }: AppCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-card bg-[#111111] p-6">
        {image ? (
          <Image
            src={urlFor(image).width(400).height(800).url()}
            alt={title}
            width={400}
            height={800}
            className="mx-auto h-auto w-full max-w-[240px] rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="mx-auto aspect-[9/19] w-full max-w-[240px] rounded-2xl bg-[#222222]" />
        )}
      </div>

      <div className="mt-5">
        <p className="text-sm text-[#1F8FFF]">{category}</p>
        <h3 className="mt-1 text-xl font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-[16px] text-text-muted">{description}</p>
        <p className="mt-2 text-sm text-text-muted">{year}</p>
      </div>
    </div>
  )
}