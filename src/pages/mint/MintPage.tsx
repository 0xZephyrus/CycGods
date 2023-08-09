import { FC } from "react";
import Image from "next/image";

import { useWindowSize } from "@/hooks/useWindowSize";
import DocumentHead from "@/components/Molecules/DocumentHead";
import Link from "next/link";
import MintCard from "@/components/MintCard";
import MintNav from "@/components/MintNav";

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
          <div className="absolute items-center justify-center flex pt-[80px] md:pt-[80px] pr-[0px] md:pr-[300px]">
            <MintCard />
          </div>
          <Image
            src={`/assets/image/13.png`}
            width={isMobile ? 250 : 420}
            height={isMobile ? 250 : 420}
            alt="mop and bucket"
            className="absolute bottom-0 right-0 hidden md:block"
          />
          <Link
            href="/"
            className="absolute bottom-5  left-10 text-xl font-mono"
          >
            {`<- BACK HOME`}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MintPage;
