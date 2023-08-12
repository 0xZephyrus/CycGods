import { FC } from "react";
import Image from "next/image";

import { useWindowSize } from "@/hooks/useWindowSize";
import DocumentHead from "@/components/Molecules/DocumentHead";
import Link from "next/link";
import MintCard from "@/components/MintCard";
import MintNav from "@/components/MintNav";
import Twitter from "@/components/@icon/Twitter";
import Discord from "@/components/@icon/Discord";

const MintPage: FC = () => {
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;
  return (
    <>
      <DocumentHead
        title="CycGods - MINT LIVE!"
        description="CycGods!"
        baseUrl="https://cycgods.vercel.app/"
        favicon="/assets/Eyes.png"
        siteName="CycGods"
        image="/assets/Logo.png"
      />
      <div>
        <MintNav />
        <div className="relative w-full min-h-screen md:h-screen flex flex-col items-center">
          <div className="  absolute items-center justify-center flex mt-[80px] md:mt-[85px] pr-[0px] md:pr-[350px]">
            <MintCard />
          </div>
          <Image
            src={`/assets/image/13back.png`}
            width={isMobile ? 250 : 420}
            height={isMobile ? 250 : 420}
            alt="mop and bucket"
            className="absolute bottom-0 right-0 hidden md:block"
          />
        </div>
        <div className=" uppercas  font-semibold font-mono flex absolute bottom-0 md:bottom-2  left-10 space-x-5">
          <Link
            href="/"
            className=" text-md opacity-80  hover:opacity-100 hover:scale-105"
          >
            {`<- BACK HOME`}
          </Link>
          <Link
            href="https://twitter.com/CycGods"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Discord className="w-7 opacity-80  hover:opacity-100 hover:scale-105" />
          </Link>
          <Link
            href="https://twitter.com/CycGods"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Twitter className="w-7 opacity-80  hover:opacity-100 hover:scale-105" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MintPage;
