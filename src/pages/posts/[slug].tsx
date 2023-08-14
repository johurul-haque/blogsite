import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';

const inter = Inter({ subsets: ['latin'] });

interface FrontMatter {
  title: string;
  date: string;
  category: string;
  dateTime: string;
}

const Post = ({
  frontMatter: { title, date, category, dateTime },
  content,
}: {
  frontMatter: FrontMatter;
  content: any;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="bg-primary px-8 h-10 flex items-center justify-center">
        <Link
          href={'/'}
          className="text-gray-400 block max-sm:ml-auto max-sm:text-right text-center"
        >
          <span className="max-sm:hidden">&larr;</span> Back
        </Link>
      </header>
      <main
        className={`${inter.className} w-full sm:w-[calc(100%-4.5rem)] p-8 flex-1 max-w-full`}
      >
        <article>
          <div className="flex gap-x-3 font-mono max-w-5xl mx-auto">
            <div
              className={`
                  ${
                    category === 'HTML'
                      ? 'text-brown'
                      : category === 'CSS'
                      ? 'text-tinted-blue'
                      : 'text-yellow-300'
                  } font-bold`}
            >
              <span className="sr-only">Category </span> {category}
            </div>
            <time dateTime={dateTime} className="text-grey">
              {date}
            </time>
          </div>
          <h1 className="font-mono text-[clamp(min(7vw,2.7rem),2rem,2.7rem)] font-bold leading-[125%] lg:text-6xl max-w-5xl mx-auto mt-4 mb-8 lg:mb-16">
            {title} {title}
          </h1>
          <Markdown className="prose lg:max-w-2xl mx-auto">{content}</Markdown>
        </article>
      </main>
    </>
  );
};
export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return { params: { slug: frontMatter.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}
