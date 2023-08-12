import Image from "next/image";
import React, { useState } from "react";
import { New_Rocker, Sanchez } from "next/font/google";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";

const sanchez = Sanchez({ weight: "400", subsets: ["latin"] });
const frijole = New_Rocker({ weight: "400", subsets: ["latin"] });

const Homes = () => {
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;
  return (
    <div
      className={`${frijole.className} min-h-screen  w-screen  font-sans flex fixed items-center justify-center z-10 `}
    >
      <div className=" hidden md:block text-[200px] mb-[250px]">CycGods</div>
      <Image
        src="/assets/image/9.png"
        width={isMobile ? 470 : 620}
        height={isMobile ? 470 : 620}
        alt="Loading"
        className=" block md:hidden  bottom-0 fixed "
      />
      <div
        className={`${sanchez.className} flex justify-between items-center w-[350px] md:w-[400px] h-[10%] fixed bottom-[10%] right-[4%] bg-[#D46A54] rounded-[10px]`}
      >
        <div className="flex flex-[0.5] justify-end items-center">
          <div className="left-[1%] bottom-0 max-w-[100%] max-h-[160px] absolute object-contain">
            <Image
              src="/assets/image/5.png"
              width={110}
              height={110}
              alt="mint"
            />
          </div>
          <div className="text-sm flex justify-center items-start flex-col font-bold">
            <p className="text-white">NOW OPEN</p>
            <p className="text-white">
              MINT <span>{`//`}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-[0.5] justify-end items-center pr-[1em] h-full">
          <button className="rounded-lg  text-lg flex border-none w-[90%] h-[70%] bg-[#f4fbff] text-black font-bold justify-center cursor-pointer items-center gap-[10px] hover:scale-105">
            <Link href="/">MINTING NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
