import './globals.css'

const siteUrl = 'https://nidrosoft.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nidrosoft | Product Engineering & AI Automation',
    template: '%s | Nidrosoft',
  },
  description: 'From idea to impact. Senior product engineer helping startups build web apps, mobile apps, and AI solutions. Ship in weeks, not months.',
  keywords: [
    'product engineering',
    'full-stack developer',
    'AI automation',
    'web development',
    'mobile app development',
    'startup development',
    'MVP development',
    'React',
    'Next.js',
    'San Diego',
  ],
  authors: [{ name: 'Cyriac Zeh', url: siteUrl }],
  creator: 'Nidrosoft LLC',
  publisher: 'Nidrosoft LLC',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Nidrosoft',
    title: 'Nidrosoft | From Idea to Impact',
    description: 'Senior product engineer helping startups build web apps, mobile apps, and AI solutions. Ship in weeks, not months.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Nidrosoft - Product Engineering & AI Automation',
        type: 'image/svg+xml',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@zehcyriac',
    creator: '@zehcyriac',
    title: 'Nidrosoft | From Idea to Impact',
    description: 'Senior product engineer helping startups build web apps, mobile apps, and AI solutions. Ship in weeks, not months.',
    images: ['/og-image.svg'],
  },
  
  // Favicon & Icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your codes when ready)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
