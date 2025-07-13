import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aria Lux Builders - Premium ADU Construction | Transform Your Property',
  description: 'Award-winning ADU construction that adds $200K+ property value. Expert permits, luxury design, guaranteed timelines. Free consultation available.',
  keywords: 'ADU construction, accessory dwelling unit, luxury home renovation, property value increase, San Francisco Bay Area',
  openGraph: {
    title: 'Aria Lux Builders - Premium ADU Construction',
    description: 'Transform your property into a luxury income generator with our award-winning ADU construction services.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}