import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='grid min-h-screen place-content-center p-24'>
      <Image
        src={'/images/logo.svg'}
        alt='Thumbnail'
        width={440}
        height={440}
        className='mx-auto'
      />
      <h1 className='text-9xl font-extrabold'>AWS S3 File Manager</h1>
    </main>
  );
}
