import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Johurul Haque</title>
      </Head>
      <Header />
      <main
        className={`flex-1 ${inter.className} bg-primary grid md:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] py-5 px-8 justify-center`}
      >
        {Array.from({ length: 18 }, (_, i) => i + 1).map((id) => (
          <article
            key={id}
            className="outline aspect-square transition-colors duration-200 hover:bg-white/10 outline-grey outline-1 font-mono p-4 max-w-xs mx-auto"
          >
            <Link href={'/'} className="min-h-full flex flex-col">
              <div className={`text-tinted-blue`}>
                <span className="sr-only">Category </span> CSS
              </div>
              <time dateTime="2023-07-23" className="text-grey">
                August 23
              </time>
              <h2 className="text-white text-[min(13vw,2.15rem)] mt-6 mb-2 flex-1 line-clamp-3">
                Animating Link Underlines
              </h2>
              <Link href={'/'} className="text-grey flex items-center">
                <span className="w-4 h-[.5px] mr-1 inline-block bg-grey"></span>
                Read More
              </Link>
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}
