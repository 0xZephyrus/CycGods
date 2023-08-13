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
import Link from "next/link";
import { readContract } from "@wagmi/core";
import ConnectWallet from "../ConnectButton/ConnectWallet";
import { CYCGODS_ABI, CYCGODS_ADDRESS } from "@/abi";
import { base, baseGoerli } from "wagmi/chains";
import { Address, parseEther } from "viem";
import { utils } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorAlert, successAlert } from "@/utils/toastGroup";

const MintCard = () => {
  const [totalTokensMinted, setTotalTokensMinted] = useState<bigint>(BigInt(0));
  const [Price, setPrice] = useState<bigint>(BigInt(0));
  const [maxSupply, setMaxSupply] = useState<bigint>(BigInt(0));
  const [addressMinted, setAddressMinted] = useState<bigint>(BigInt(0));
  const [mintAmount, setMintAmount] = useState(1);
  const { error } = useConnect();
  const { chain } = useNetwork();
  const { isConnected, address } = useAccount();
  const [isMintSuccess, setIsMintSuccess] = useState(false);
  const [isErrors, setErrors] = useState(false);

  const {
    config: mintConfig,
    error: Errors,
    isSuccess: SuccessS,
  } = usePrepareContractWrite({
    address: CYCGODS_ADDRESS,
    abi: CYCGODS_ABI,
    functionName: "mint",
    args: [mintAmount],
    value: parseEther((0.00071 * mintAmount).toString()),
    chainId: baseGoerli.id,
  });

  const { write: publicWrite, data: publicData } = useContractWrite(mintConfig);

  const {
    isError: publicTxError,
    isLoading: publicTxLoading,
    isSuccess: publicMintSuccess,
  } = useWaitForTransaction({
    hash: publicData?.hash,
  });

  const handleDecrement = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1);
    }
  };

  const handleIncrement = () => {
    if (mintAmount < (BigInt(25) - addressMinted)) {
      setMintAmount(mintAmount + 1);
    }
  };

  const getMinted = async () => {
    let minted = await readContract({
      address: CYCGODS_ADDRESS,
      abi: CYCGODS_ABI,
      functionName: "numberOfToken",
    });
    setTotalTokensMinted(minted as bigint);
  };

  const getMaxSupply = async () => {
    let supply = await readContract({
      address: CYCGODS_ADDRESS,
      abi: CYCGODS_ABI,
      functionName: "MAX_SUPPLY",
    });
    setMaxSupply(supply as bigint);
  };

  const getPrice = async () => {
    let price = await readContract({
      address: CYCGODS_ADDRESS,
      abi: CYCGODS_ABI,
      functionName: "mintPrice",
    });
    setPrice(price as bigint);
  };

  const getAddressMinted = async (address: string | undefined) => {
    console.log(address);
    if(address){
      let minted = await readContract({
        address: CYCGODS_ADDRESS,
        abi: CYCGODS_ABI,
        functionName: "balanceOf",
        args: [address]
      });
      setAddressMinted(minted as bigint);
    }
  };

  useEffect(() => {
    getMinted();
    getMaxSupply();
    getPrice();
    if(isConnected){
      getAddressMinted(address);
    }

    if (publicMintSuccess) {
      setIsMintSuccess(true);
      successAlert(`
      Successfully minted your NFT!
    `);
    }
    if (Errors) {
      setErrors(true);
      errorAlert(`
      Calling the minting function will fail for this reason: ${Errors.message}
    `);
    }
  }, [chain, isConnected, SuccessS, Errors, publicMintSuccess]);

  return (
    <div className="w-[300px] rounded-xl  bg-gradient-to-br from-gray-300 to-white shadow-xl border-black border border-tertiary p-4">
      <div className="w-full justify-center text-center flex items-center bg-tertiary px-3 rounded-sm">
        <ConnectWallet />
      </div>
      <div className="flex justify-center p-4">
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
          <p className="font-primaryBold text-tertiary text-sm">{`${totalTokensMinted} / ${maxSupply}`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-tertiary uppercase font-semibold text-xs">Price</p>
          <p className="font-primaryBold text-tertiary text-sm">
            {utils.formatEther(Price)} ETH
          </p>
        </div>
      </div>

      {publicMintSuccess && (
        <div className=" text-[#0052FF] flex justify-center items-center">
          <Link
            target="blank"
            href={`https://goerli.basescan.org/tx/${publicData?.hash}`}
          >
            Basescan
          </Link>
        </div>
      )}

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
        <button
          disabled={!publicWrite}
          onClick={() => publicWrite?.()}
          className="w-full h-[32px] rounded-lg bg-black font-primaryBold text-primary hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:ring focus:ring-offset-1 focus:ring-black text-xs"
        >
          <p className="text-white uppercase font-semibold">
            {publicTxLoading
              ? "Waiting for minting..."
              : publicTxError
              ? "Transaction error"
              : "mint"}
          </p>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MintCard;
