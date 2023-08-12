"use-client";

import React, { useEffect, useState } from "react";
import {
  useNetwork,
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
  useConnect,
} from "wagmi";
import ConnectWallet from "../ConnectButton/ConnectWallet";
import { CYCGODS_ABI, CYCGODS_ADDRESS } from "@/abi";
import { base, baseGoerli } from "wagmi/chains";
import { parseEther } from "viem";

const MintCard = () => {
  const [totalTokensMinted, setTotalTokensMinted] = useState(0);
  const [Price, setPrice] = useState(0);
  const [mintAmount, setMintAmount] = useState(1);
  const { error } = useConnect();

  const { config: mintConfig, error: publicMintContractError } =
    usePrepareContractWrite({
      address: CYCGODS_ADDRESS,
      abi: CYCGODS_ABI,
      functionName: "mint",
      args: [mintAmount],
      value: parseEther((0.00071 * mintAmount).toString()),
      chainId: baseGoerli.id,
    });

  const { write: publicWrite, data: publicData } = useContractWrite(mintConfig);

  const { isLoading: publicTxLoading, isSuccess: publicMintSuccess } =
    useWaitForTransaction({
      hash: publicData?.hash,
    });

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

  const GetPrice = useContractRead({
    address: CYCGODS_ADDRESS,
    abi: CYCGODS_ABI,
    functionName: "mintPrice",
    onSuccess(data: string) {
      console.log("token data:", parseInt(data));
    },
  });
  useEffect(() => {
    if (GetPrice && GetPrice.data) {
      const parsedGetPrice = parseInt(GetPrice.data);
      setPrice(parsedGetPrice);
    }
  }, [GetPrice]);

  const GetTotalMinted = useContractRead({
    address: CYCGODS_ADDRESS,
    abi: CYCGODS_ABI,
    functionName: "numberOfToken",
    onSuccess(data: string) {
      console.log("token data:", parseInt(data));
    },
  });
  useEffect(() => {
    if (GetTotalMinted && GetTotalMinted.data) {
      const parsedGetTotalMinted = parseInt(GetTotalMinted.data);
      setTotalTokensMinted(parsedGetTotalMinted);
    }
  }, [GetTotalMinted]);

  return (
    <div className="w-[300px] rounded-xl  bg-gradient-to-br from-gray-300 to-white shadow-xl border-black border border-tertiary p-4">
      <div className="w-full justify-center text-center flex items-center bg-tertiary px-3 rounded-sm">
        <ConnectWallet />
      </div>
      <div className="flex justify-center p-4">
        {/* <video src="/assets/CycGods.mov" controls autoPlay loop muted /> */}
        {/* <Image
          src="/assets/CycGods.gif"
          width={100}
          height={100}
          alt="Mint"
          className="w-[250px]"
        /> */}
        <img
          alt="Mint"
          src="/assets/CycGods.gif"
          style={{ width: 230, height: 230 }}
        />
      </div>
      <div className="h-12 flex items-center justify-between px-3">
        <div className="flex flex-col">
          <p className="text-tertiary uppercase font-semibold text-xs">
            Supply
          </p>
          <p className="font-primaryBold text-tertiary text-sm">{`${totalTokensMinted} / 5555`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-tertiary uppercase font-semibold text-xs">Price</p>
          <p className="font-primaryBold text-tertiary text-sm">{Price}</p>
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
          className="w-10 h-10 bg-gradient-to-br from-gray-300 to-white shadow-xl justify-center flex items-center text-center border border-tertiary rounded-lg text-xs"
        />
        <button
          onClick={handleIncrement}
          className="bg-black text-white px-3 py-2 bg-tertiary text-primary font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-tertiaryHover text-xs"
        >
          +
        </button>
      </div>
      <div className="px-3 pb-3">
        {!publicTxLoading && (
          <button
            disabled={!publicWrite}
            onClick={() => publicWrite?.()}
            className="w-full h-[32px] rounded-lg bg-black font-primaryBold text-primary hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring focus:ring-offset-1 focus:ring-black text-xs"
          >
            <p className="text-white uppercase font-semibold">
              {publicTxLoading ? "Waiting for minting..." : "mint"}
            </p>
          </button>
        )}
      </div>
      {publicTxLoading && publicData && (
        <p>The transaction was sent! The hash:{publicData.hash}</p>
      )}
      {publicMintContractError && (
        <p>
          Calling the presale minting function will fail for this reason:
          {publicMintContractError.message}
        </p>
      )}
      <p className="error">{error && <span>{error.message}</span>}</p>
    </div>
  );
};

export default MintCard;
