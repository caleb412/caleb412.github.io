import type { Metadata } from 'next';
import { fontVariables } from './fonts';
import { profile } from '@/content';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
