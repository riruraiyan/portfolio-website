import type { Metadata } from 'next'
import { getSEO } from './fetchData'
import { urlFor } from './sanity'

export async function generateSiteMetadata(): Promise<Metadata> {
  const seo = await getSEO()

  if (!seo) {
    return {
      title: 'Portfolio',
      description: 'A premium portfolio website.',
    }
  }

  return {
    title: seo.metaTitle || 'Portfolio',
    description: seo.metaDescription || 'A premium portfolio website.',
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: seo.ogImage ? [urlFor(seo.ogImage).width(1200).height(630).url()] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  }
}