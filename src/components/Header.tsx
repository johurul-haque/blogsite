import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const Header = () => {
  return (
    <header
      className={`${inter.className} font-mono p-8 lg:py-16 bg-primary grid gap-y-8 gap-x-7 lg:grid-cols-[2fr_auto]`}
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
          width={2899}
          height={2899}
          className="bg-slate-300 -order-1 w-full max-w-xs"
          alt="Picture of Johurul Haque"
        />
      </div>

      <div
        role="tablist"
        className="flex text-sm gap-x-6 lg:flex-col gap-y-6 text-grey max-lg:justify-center lg:items-start lg:justify-self-end font-mono w-full overflow-x-auto px-2"
      >
        <button className="text-white">All posts</button>
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
      </div>
    </header>
  );
};
export default Header;
