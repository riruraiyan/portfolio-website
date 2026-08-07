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
      <div className="overflow-hidden rounded-card">
        {image ? (
          <Image
            src={urlFor(image).width(800).height(600).url()}
            alt={title}
            width={800}
            height={600}
            className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="aspect-[4/3] w-full bg-[#E5E5E5]" />
        )}
      </div>

      <div className="mt-5 transition-shadow duration-300">
        <p className="text-sm text-text-muted">{company}</p>
        <h3 className="mt-1 text-2xl font-extrabold text-[#111111]">{title}</h3>
        <p className="mt-2 text-[16px] text-text-muted">{description}</p>
        <p className="mt-2 text-sm text-text-muted">{year}</p>
      </div>
    </div>
  )
}