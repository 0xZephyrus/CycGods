import React from "react";
import { New_Rocker } from "next/font/google";

const frijole = New_Rocker({ weight: "400", subsets: ["latin"] });

const Footers = () => {
  return (
    <div className=" bg-blue-50 w-screen h-[50px] z-20  flex justify-center items-center fixed bottom-0  ">
      <div className=" text-black text-mono text-bold">
        © 2023 <span className={`text-bold ${frijole.className}`}>CycGods</span>{" "}
      </div>
    </div>
  );
};

export default Footers;
