import Header from '@/components/Header';
import fs from 'fs';
import matter from 'gray-matter';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface FrontMatter {
  title: string;
  date: string;
  dateTime: string;
  category: string;
  slug: string;
}

export default function Home({
  posts: data,
  categories,
}: {
  posts: FrontMatter[];
  categories: string[];
}) {
  const [posts, setPosts] = useState(data);
  return (
    <>
      <Head>
        <title>Johurul Haque</title>
      </Head>
      <Header setPosts={setPosts} posts={data} categories={categories} />
      <main
        className={`flex-1 ${inter.className} bg-primary grid sm:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] py-5 px-8 justify-center`}
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="outline aspect-square transition-colors duration-200 hover:bg-white/10 outline-grey outline-1 font-mono p-4 w-full max-sm:max-w-xs max-sm:mx-auto"
          >
            <Link
              href={`posts/${post.slug}`}
              className="min-h-full flex flex-col"
            >
              <div
                className={
                  post.category === 'HTML'
                    ? 'text-brown'
                    : post.category === 'CSS'
                    ? 'text-tinted-blue'
                    : 'text-yellow-300'
                }
              >
                <span className="sr-only">Category </span> {post.category}
              </div>
              <time dateTime={post.dateTime} className="text-grey">
                {post.date}
              </time>
              <h2 className="text-white flex-1 text-[min(13vw,2.15rem)] mt-6 mb-2 line-clamp-3">
                {post.title}
              </h2>

              <div className="text-grey flex items-center">
                <span className="w-4 h-[.5px] mr-1 inline-block bg-grey"></span>
                Read More
              </div>
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('src/posts');

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return frontMatter;
  });

  let categories: string[] = [];
  posts.forEach((post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
  });

  return {
    props: {
      posts,
      categories,
    },
  };
}
