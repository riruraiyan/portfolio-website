import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type ProjectCardProps = {
  image: any
  company: string
  title: string
  description: string
  year: string
}

export default function ProjectCard({ image, company, title, description, year }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[#3FA9F5] via-[#1F6FEB] to-[#0B2545]">
        {image ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <Image
              src={urlFor(image).width(900).height(600).url()}
              alt={title}
              width={900}
              height={600}
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-white/50">
            No image
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#111111]">{company}</span>
        <span className="text-[10px] text-text-muted">{year}</span>
      </div>
      <h3 className="mt-1 text-[17px] font-semibold text-[#111111]">{title}</h3>
      <p className="mt-1 text-[11px] leading-relaxed text-text-muted">{description}</p>
    </div>
  )
}