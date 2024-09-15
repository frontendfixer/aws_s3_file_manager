import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { constructMetadata } from '~/lib/nextjs_utils';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
