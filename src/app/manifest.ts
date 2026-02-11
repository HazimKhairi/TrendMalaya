import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TrendMalaya - Mobile Specialist',
    short_name: 'TrendMalaya',
    description: 'Your trusted mobile phone repair specialist in Malaysia. Phone repair, mobile sales, and accessories across 9 locations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008AFC',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
