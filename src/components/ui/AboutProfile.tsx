import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type AboutProfileProps = {
  image: any
  caption: string
}

export default function AboutProfile({ image, caption }: AboutProfileProps) {
  return (
    <div className="lg:w-[38%]">
      <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[22px]">
        {image ? (
          <Image
        src={urlFor(image).width(840).height(1050).url()}
        alt={image?.alt || caption || 'Profile photo'}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-cover"
        />
        ) : (
          <div className="h-full w-full bg-[#E5E5E5]" />
        )}
      </div>
      {caption && (
        <p className="mt-[18px] text-[9px] uppercase tracking-[0.2em] text-text-muted">{caption}</p>
      )}
    </div>
  )
}