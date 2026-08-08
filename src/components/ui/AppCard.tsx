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
    <div className="group flex flex-col items-center text-center">
      <div className="flex h-[250px] w-full items-center justify-center">
        {image ? (
          <Image
            src={urlFor(image).width(300).height(600).url()}
            alt={title}
            width={300}
            height={600}
            className="h-[250px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-[250px] w-[125px] rounded-2xl bg-[#111111]" />
        )}
      </div>

      <h3 className="mt-6 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1.5 max-w-[220px] text-[10px] leading-relaxed text-text-muted">{description}</p>
      <p className="mt-2 text-[9px] uppercase tracking-wide text-text-muted/70">{category} &middot; {year}</p>
    </div>
  )
}