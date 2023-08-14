import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

interface FrontMatter {
  category: string;
}

const Header = ({
  setPosts,
  posts,
  categories,
}: {
  setPosts: any;
  posts: FrontMatter[];
  categories: string[];
}) => {
  const handleClick = (e: any) => {
    const category = e.currentTarget.innerText.toLowerCase();

    const filteredPosts = posts.filter((post) => {
      if (category === 'all posts') {
        return post;
      } else {
        return post.category.toLowerCase() === category;
      }
    });

    setPosts(filteredPosts);
  };

  return (
    <header
      className={`${inter.className} font-mono pt-9 p-8 lg:py-16 bg-primary grid gap-y-8 gap-x-7 lg:grid-cols-[2fr_auto]`}
    >
      <div className="font-mono flex flex-wrap max-lg:justify-center items-center gap-y-5 gap-x-8 lg:gap-x-12">
        <div>
          <h1 className="lg:text-8xl max-lg:leading-[85%] text-[min(17vw,4.5rem)] text-white font-semibold">
            Johurul <br />
            Haque
          </h1>
          <p className="text-grey text-lg mt-3">Front-end developer</p>
        </div>
        <Image
          src={'/johurul_haque.jpg'}
          width={1500}
          height={1500}
          className="bg-slate-300 -order-1 w-full max-w-xs"
          alt="Picture of Johurul Haque"
        />
      </div>

      <div
        role="tablist"
        className="flex text-sm gap-x-6 lg:flex-col gap-y-6 text-grey max-lg:justify-center lg:items-start lg:justify-self-end font-mono w-full overflow-x-auto px-2 pb-3"
      >
        <button onClick={handleClick}>All posts</button>
        {categories.map((category) => (
          <button key={category} onClick={handleClick}>
            {category}
          </button>
        ))}
      </div>
    </header>
  );
};
export default Header;
