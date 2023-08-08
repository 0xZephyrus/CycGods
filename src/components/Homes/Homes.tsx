import Image from "next/image";
import React, { useState } from "react";
import { New_Rocker } from "next/font/google";

const frijole = New_Rocker({ weight: "400", subsets: ["latin"] });

const Homes = () => {
  return (
    <div
      className={`${frijole.className} h-screen w-screen  font-sans flex fixed items-center justify-center z-10 `}
    >
      <Image
        src="/assets/image/13.png"
        width={500}
        height={500}
        alt="Loading"
        className="w-1/2 md:w-1/3  bottom-0  fixed"
      />
    </div>
  );
};

export default Homes;
