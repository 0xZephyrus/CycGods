import Image from "next/image";
import React from "react";
import { New_Rocker } from "next/font/google";

const frijole = New_Rocker({ weight: "400", subsets: ["latin"] });

const Homes = () => {
  return (
    <div className=" bg-white w-screen h-[700px] flex justify-center items-center text-center mb-10">
      <div className="">
        <h1 className={`text-[150px] text-black ${frijole.className}`}>
          CycGods
        </h1>
      </div>
    </div>
  );
};

export default Homes;
