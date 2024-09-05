import { LuArrowRight, LuYoutube, LuInstagram } from "react-icons/lu";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import KeebaraLogo from "../assets/KeebaraLogo.png";
import TokopediaLogo from "../assets/TokopediaLogo.png";

export const Bento = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-flow-dense grid-cols-12 gap-4">
        <LogoBlock />
        <SocialBlock />
        <HeaderBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailBlock />
        <Block />
      </div>
    </div>
  );
};

type Props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-3xl border bg-zinc-300 p-6",
        className
      )}
      {...rest}
    />
  );
};

const LogoBlock = () => {
  return (
    <Block className="bg-blue-keebara row-span-2 place-content-center col-span-4">
      <img src={KeebaraLogo} alt="" />
    </Block>
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-8">
      <h1 className="text-8xl font-dotty leading-tight text-black">KeeBara</h1>
      <a
        href="#"
        className="flex items-center gap-1 text-black hover:underline"
      >
        Contact me <LuArrowRight />
      </a>
    </Block>
  );
};

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{ rotate: "2.5deg", scale: 1.1 }}
        className="col-span-2 row-span-1 bg-green-toko md:col-span-4"
      >
        <a
          href="https://www.tokopedia.com/keebara"
          className="grid h-full place-content-center text-3xl text-white"
          target="tab"
        >
          <img src={TokopediaLogo} alt="" className="size-14" />
        </a>
      </Block>
      <Block
        whileHover={{ rotate: "2.5deg", scale: 1.1 }}
        className="col-span-2 row-span-1 bg-purple-insta md:col-span-4"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <LuInstagram />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p className="text-black">
        My passion is build{" "}
        <span className="text-zinc-500">
          primarily with React, Tailwind CSS, and Framer Motion. I love this
          stack so much that I even built a website about it. I've made over a
          hundred videos on the subject across YouTube and TikTok.
        </span>
      </p>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
      <p className="text-black">Indonesia</p>
    </Block>
  );
};

const EmailBlock = () => {
  return (
    <Block>
      <p className="text-black">My email</p>
    </Block>
  );
};
