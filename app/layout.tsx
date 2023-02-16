import './globals.css';

import { Inter, Poppins } from '@next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
