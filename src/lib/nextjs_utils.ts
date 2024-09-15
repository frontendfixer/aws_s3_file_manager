import { type Metadata } from 'next/types';

import { env } from '~/env';

export function constructMetadata({
  title = 'AWS S3 File Manager',
  description = 'A file manager for AWS S3 bucket with aws-sdk and drizzle',
  image = '/thumbnail.webp',
  icons = '/favicon.svg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@frontendfixer',
    },
    icons,
    metadataBase: new URL(
      env.NODE_ENV === 'development'
        ? env.LOCAL_FRONTEND_URL
        : env.PRODUCTION_FRONTEND_URL
    ),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
