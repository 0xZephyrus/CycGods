import Image from "next/image";
import React from "react";

const MintCard = () => {
  return (
    <div className="min-w-[350px] bg-primary border-black flex flex-col border border-tertiary shadow-lg">
      {/* header */}
      <div className="w-full bg-black h-10 flex items-center bg-tertiary px-5 text-center justify-center">
        <p className="text-lg text-white font-primaryBold">MINT LIVE</p>
      </div>
      <div className="items-center flex justify-center">
        <Image src="/assets/image/13.png" width={250} height={250} alt="MINT" />
      </div>
      <div className="h-16 py-2 flex items-center justify-between px-5">
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Supply</p>
          <p className="font-primaryBold text-tertiary">{`4343 / 4343`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Price</p>
          <p className="font-primaryBold text-tertiary">{`0.0001 ETH`}</p>
        </div>
      </div>
      <div className="w-full px-5 pb-5">
        <button className="w-full bg-black font-primaryBold text-primary h-[40px]">
          <div className="flex items-center justify-center gap-2">
            <p className=" text-white">MINTING</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MintCard;
