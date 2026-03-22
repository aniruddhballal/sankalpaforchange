import type { Metadata } from 'next';
import { Source_Serif_4, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal'],
  variable: '--font-serif',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sankalpa For Change',
    template: '%s | Sankalpa For Change',
  },
  description: 'Sankalpa For Change works with schools and communities across Karnataka to equip children with life skills, emotional well-being tools, and counselling support.',
  keywords: [
    'Sankalpa For Change',
    'children education Karnataka',
    'life skills for children',
    'emotional well-being children',
    'school counselling Karnataka',
    'child mental health India',
    'youth life skills program',
    'Bangalore NGO children',
    'sankalpaforchange',
  ],
  authors: [{ name: 'Sankalpa For Change' }],
  metadataBase: new URL('https://sankalpaforchange.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Sankalpa For Change',
    title: 'Sankalpa For Change — Nurturing Young Minds',
    description: 'Equipping children with life skills and emotional tools to thrive in a complex world.',
    url: 'https://sankalpaforchange.com',
    images: [{ url: '/images/parental workshop.jpeg', width: 1200, height: 630, alt: 'Sankalpa For Change' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankalpa For Change',
    description: 'Equipping children with life skills and emotional tools to thrive in a complex world.',
    images: ['/images/parental workshop.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
    verification: {
    google: 'Yys3adWW_7fWGJPSc5yXM5zTbjWb6LgS66ZPaiG9Phw',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${jakartaSans.variable}`}>
        <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
          <footer className="site-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="navbar-logo-icon">
                <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                  <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" opacity="0.9"/>
                  <path d="M10 6C10 6 7 8.5 7 11C7 12.657 8.343 14 10 14C11.657 14 13 12.657 13 11C13 8.5 10 6 10 6Z" fill="rgba(255,255,255,0.4)"/>
                </svg>
              </div>
              <div>
                <div className="navbar-logo-text">Sankalpa For Change</div>
                <div className="navbar-logo-sub">Nurturing young minds</div>
              </div>
            </div>
            <p className="footer-copy">© 2025 Sankalpa For Change. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}