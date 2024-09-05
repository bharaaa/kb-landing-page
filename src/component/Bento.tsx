import { LuArrowRight, LuInstagram } from "react-icons/lu";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import KeebaraLogo from "../assets/KeebaraLogo.png";
import TokopediaLogo from "../assets/TokopediaLogo.png";
import { useRef, useState } from "react";

export const Bento = () => {
  const [clickCount, setClickCount] = useState(0);
  const [easterEggRevealed, setEasterEggRevealed] = useState(false);
  const [bgColor, setBgColor] = useState("bg-zinc-200");
  const resetTimeoutRef = useRef<number | null>(null);

  const handleReveal = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 6) {
      window.open("https://monkeytype.com/", "_blank");
      setClickCount(0);
    } else if (clickCount + 1 < 6) {
      setEasterEggRevealed(true);
    }

    setBgColor("bg-red-500");
    setTimeout(() => setBgColor("bg-zinc-200"), 200);

    if (resetTimeoutRef.current !== null) {
      clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = window.setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-20 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-flow-dense grid-cols-12 gap-4">
        <LogoBlock onReveal={handleReveal} />
        <SocialBlock />
        <HeaderBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailBlock />
        <EasterEggBlock showText={easterEggRevealed} bgColor={bgColor} />
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
        "col-span-4 rounded-3xl border bg-zinc-200 p-6",
        className
      )}
      {...rest}
    />
  );
};

const EasterEggBlock = ({
  showText,
  bgColor,
}: {
  showText: boolean;
  bgColor: string;
}) => {
  return (
    <Block
      className={twMerge(
        "row-span-2 place-content-center hover:rounded-none hover:bg-zinc-600 transition-all duration-500",
        bgColor
      )}
    >
      {showText}
    </Block>
  );
};

const LogoBlock = ({ onReveal }: { onReveal: () => void }) => {
  return (
    <Block
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className="bg-blue-keebara row-span-2 place-content-center col-span-4"
    >
      <img src={KeebaraLogo} alt="" onClick={onReveal} />
    </Block>
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-8 text-black hover:text-white hover:bg-black hover:border-black">
      <h1 className="text-8xl font-dotty leading-tight transition-all duration-500">
        KeeBara
      </h1>
      <a
        href="https://wa.me/6285829487423"
        className="flex items-center gap-1 hover:font-bold transition-all duration-500"
        target="tab"
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
        className="col-span-2 bg-green-toko md:col-span-4"
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
        className="col-span-2 bg-purple-insta md:col-span-4"
      >
        <a
          href="https://www.instagram.com/keebbara?igsh=cjRlZmFndm92aWI0&utm_source=qr"
          className="grid h-full place-content-center text-3xl text-white"
          target="tab"
        >
          <LuInstagram />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug text-black hover:text-white hover:bg-black hover:border-black transition-all duration-500">
      <p className="">
        I passionate about gadget{" "}
        <span className="text-zinc-500">
          primarily with smartphone and mechanical keyboards. I love this stuff
          so much that I even built a website about it.
        </span>
      </p>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col row-span-2 place-content-center gap-4 md:col-span-4 text-black hover:font-bold hover:text-white hover:bg-black hover:border-black transition-all duration-500">
      <a
        href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLqrMM2D04szMS8nPSy3OTAQARUgG2A&q=indonesia&rlz=1C5CHFA_enID1082ID1084&oq=Indonesia&gs_lcrp=EgZjaHJvbWUqDQgBEC4YgwEYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyEAgCEAAYgwEYsQMYgAQYigUyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPTIGCAYQRRg9MgYIBxBFGEHSAQgyNzIyajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8"
        target="tab"
      >
        Indonesia
      </a>
    </Block>
  );
};

const EmailBlock = () => {
  return (
    <Block className="col-span-12 flex row-span-2 place-content-center flex-col items-center md:col-span-4 text-black hover:text-white hover:bg-black hover:border-black transition-all duration-500">
      <a href="mailto:bharalfhani@gmail.com" target="tab">
        My email
      </a>
    </Block>
  );
};
