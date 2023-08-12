import Image from "next/image";
import React, { useState } from "react";
import { useConnect } from "wagmi";

const MintCard = () => {
  const { connect } = useConnect();
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1);
    }
  };

  const handleIncrement = () => {
    if (mintAmount < 25) {
      setMintAmount(mintAmount + 1);
    }
  };

  return (
    <div className="w-[300px] rounded-xl bg-primary border-black border border-tertiary shadow-lg p-4">
      <div className="w-full h-8 bg-black justify-center text-center flex items-center bg-tertiary px-3 rounded-sm">
        <p className="text-white uppercase font-semibold text-sm">Mint Live</p>
      </div>
      <div className="flex justify-center p-4">
        {/* <video src="/assets/CycGods.mov" controls autoPlay loop muted /> */}
        <Image
          src="/assets/CycGods.gif"
          width={100}
          height={100}
          alt="Mint"
          className="w-[250px]"
        />
      </div>
      <div className="h-12 flex items-center justify-between px-3">
        <div className="flex flex-col">
          <p className="text-tertiary uppercase font-semibold text-xs">
            Supply
          </p>
          <p className="font-primaryBold text-tertiary text-sm">
            {`5555 / 5555`}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-tertiary uppercase font-semibold text-xs">Price</p>
          <p className="font-primaryBold text-tertiary text-sm">{` 4 ETH`}</p>
        </div>
      </div>
      <div className="mb-1 flex items-center justify-center space-x-2 py-2">
        <button
          onClick={handleDecrement}
          className="bg-black text-white px-3 py-2 bg-tertiary text-primary font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-tertiaryHover text-xs"
        >
          -
        </button>
        <input
          readOnly
          type="number"
          value={mintAmount}
          className="w-10 h-10 justify-center flex items-center text-center border border-tertiary rounded-lg text-xs"
        />
        <button
          onClick={handleIncrement}
          className="bg-black text-white px-3 py-2 bg-tertiary text-primary font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-tertiaryHover text-xs"
        >
          +
        </button>
      </div>
      <div className="px-3 pb-3">
        <button className="w-full h-[32px] rounded-xl bg-black font-primaryBold text-primary hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring focus:ring-offset-1 focus:ring-black text-xs">
          <p className="text-white uppercase font-semibold">Connect Wallet</p>
        </button>
      </div>
    </div>
  );
};

export default MintCard;
