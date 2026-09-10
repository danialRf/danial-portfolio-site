import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://danial-roshanfekr-ai.tungtungsahur15232.chatgpt.site'),
  title: 'Danial Roshanfekr AI',
  description: 'Cinematic AI video, realistic campaign imagery, creative direction, and practical generative AI education.',
  openGraph: { title: 'Danial Roshanfekr AI', description: 'AI visuals that feel art-directed, not automated.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Danial Roshanfekr AI', description: 'AI visuals that feel art-directed, not automated.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
