import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio',
    short_name: 'Portfolio',
    description: 'A premium portfolio website.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080B10',
    theme_color: '#1F8FFF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}