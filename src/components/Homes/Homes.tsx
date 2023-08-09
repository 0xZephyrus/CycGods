import Image from "next/image";
import React, { useState } from "react";
import { New_Rocker, Sanchez } from "next/font/google";
import Link from "next/link";

const sanchez = Sanchez({ weight: "400", subsets: ["latin"] });
const frijole = New_Rocker({ weight: "400", subsets: ["latin"] });

const Homes = () => {
  return (
    <div
      className={`${frijole.className} min-h-screen  w-screen  font-sans flex fixed items-center justify-center z-10 `}
    >
      <div className=" hidden md:block text-[200px] mb-[250px]">CycGods</div>
      <Image
        src="/assets/image/13.png"
        width={1000}
        height={1000}
        alt="Loading"
        className=" block md:hidden w-[80%] md:w-[30%]  bottom-0  fixed"
      />
      <div
        className={`${sanchez.className} flex justify-between items-center w-[350px] md:w-[400px] h-[10%] fixed bottom-[10%] right-[4%] bg-[#D46A54] rounded-[10px]`}
      >
        <div className="flex flex-[0.5] justify-end items-center">
          <div className="left-[1%] bottom-0 max-w-[100%] max-h-[160px] absolute object-contain">
            <Image
              src="/assets/image/13.png"
              width={100}
              height={100}
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
          <button className="rounded-lg bg-white text-lg flex border-none w-[80%] h-[60%] bg-[rgba(38, 38, 38, 1)] font-bold justify-center cursor-pointer items-center gap-[10px]">
            <Link href="/mint">MINTING NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homes;
