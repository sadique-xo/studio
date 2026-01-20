import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sadique - Modern Web Designer',
    short_name: 'Sadique',
    description: 'A modern web designer with 7+ years experience, passionate about creating visually stunning and user-friendly designs that captivate and inspire.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#30475E',
    icons: [
      {
        src: '/Profile.PNG',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
