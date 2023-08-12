import { switchNetwork } from "@wagmi/core";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { readContract } from "@wagmi/core";
import { base, baseGoerli } from "wagmi/chains";
import abi from "@/abi/abi.json";
import { ethers } from "ethers";

const MintCard = () => {
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(-1);
  const [totalMinted, setTotalMinted] = useState<bigint>(BigInt(0));
  const [maxSupply, setMaxSupply] = useState<bigint>(BigInt(0));
  const [mintPrice, setMintPrice] = useState<bigint>(BigInt(0));
  const [mintAmount, setMintAmount] = useState(1);

  const { open, close } = useWeb3Modal();
  const { chain } = useNetwork();
  const { isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    value: BigInt(710000000000000 * mintAmount),
    address: "0x8b0d0b790b3f442d298770b669fcfeb5a4f16085",
    abi: abi,
    args: [mintAmount],
    functionName: "mint",
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const getMinted = async () => {
    let minted = await readContract({
      address: "0x8b0d0b790b3f442d298770b669fcfeb5a4f16085",
      abi: abi,
      functionName: "totalSupply",
    });
    setTotalMinted(minted as bigint);
  };

  const getMaxSupply = async () => {
    let supply = await readContract({
      address: "0x8b0d0b790b3f442d298770b669fcfeb5a4f16085",
      abi: abi,
      functionName: "MAX_SUPPLY",
    });
    setMaxSupply(supply as bigint);
  };

  const getPrice = async () => {
    let price = await readContract({
      address: "0x8b0d0b790b3f442d298770b669fcfeb5a4f16085",
      abi: abi,
      functionName: "mintPrice",
    });
    setMintPrice(price as bigint);
  };

  useEffect(() => {
    setConnected(isConnected);
    setChainId(chain!.id);
    getMinted();
    getMaxSupply();
    getPrice();
  }, [chain, isConnected, isSuccess]);

  const onAction = () => {
    if (isConnected) {
      if (chain?.id === baseGoerli.id) {
        write?.();
      } else {
        switchNetwork({ chainId: baseGoerli.id });
      }
    } else {
      open();
    }
  };

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 25) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div className="min-w-[350px] min-h-full rounded-xl bg-primary border-black flex flex-col border border-tertiary shadow-lg">
      {/* header */}
      <div className="w-full rounded-t-xl bg-black h-10 flex items-center bg-tertiary px-5 text-center justify-center">
        <p className="text-lg text-white uppercas  font-semibold font-mono">
          MINT LIVE
        </p>
      </div>
      <div className="items-center flex justify-center">
        <Image src="/assets/image/5.png" width={240} height={240} alt="MINT" />
      </div>
      <div className="h-16 py-2 flex items-center justify-between px-5">
        <div className="flex flex-col">
          <p className="text-sm text-tertiary uppercas  font-semibold font-mono">
            Supply
          </p>
          <p className="font-primaryBold text-tertiary">{`${totalMinted} / ${maxSupply}`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary uppercas  font-semibold font-mono">
            Price
          </p>
          <p className="font-primaryBold text-tertiary">{`${ethers.utils.formatEther(
            mintPrice ? mintPrice : 0
          )} ETH`}</p>
        </div>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input readOnly type="number" value={mintAmount} />
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="w-full px-5 pb-5">
        {isSuccess ? data?.hash : ""}
        <button className="w-full h-[40px]  rounded-xl bg-black font-primaryBold text-primary hover:scale-105">
          {connected ? (
            <>
              {chainId === baseGoerli.id ? (
                <p className=" text-white uppercas  font-semibold font-mono">
                  MINTING
                </p>
              ) : (
                <p className=" text-white uppercas  font-semibold font-mono">
                  SWITCH NETWORK
                </p>
              )}
            </>
          ) : (
            <p className=" text-white uppercas  font-semibold font-mono">
              CONNECT WALLET
            </p>
          )}
          <></>
        </button>
      </div>
    </div>
  );
};

export default MintCard;
