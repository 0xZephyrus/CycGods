import { switchNetwork } from "@wagmi/core";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { base } from 'wagmi/chains'

const MintCard = () => {

  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(-1);

  const { open, close } = useWeb3Modal();
  const { chain } = useNetwork();
  const { isConnected } = useAccount();

  useEffect(() => {
    setConnected(isConnected);
    setChainId(chain!.id);
  }, [chain, isConnected])

  // const { config } = usePrepareContractWrite({
  //   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  //   abi: [
  //     {
  //       name: 'mint',
  //       type: 'function',
  //       stateMutability: 'nonpayable',
  //       inputs: [],
  //       outputs: [],
  //     },
  //   ],
  //   functionName: 'mint',
  // })

  // const { data, write } = useContractWrite(config)
 
  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // })

  const onAction = () => {
    if(isConnected){
      if(chain?.id === base.id){

      } else {
        switchNetwork({ chainId: base.id});
      }
    } else {
      open();
    }
  }

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
          <p className="font-primaryBold text-tertiary">{`0 / 4343`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary uppercas  font-semibold font-mono">
            Price
          </p>
          <p className="font-primaryBold text-tertiary">{`0.0001 ETH`}</p>
        </div>
      </div>
      <div className="w-full px-5 pb-5">
        <button onClick={onAction} className="w-full h-[40px]  rounded-xl bg-black font-primaryBold text-primary hover:scale-105">
            {
              connected ? <>
              {
                chainId === base.id ?  
                <p className=" text-white uppercas  font-semibold font-mono">
                  MINTING
                </p> : 
                <p className=" text-white uppercas  font-semibold font-mono">
                  SWITCH NETWORK
                </p>
              }
              </> :
              <p className=" text-white uppercas  font-semibold font-mono">
                CONNECT WALLET
              </p>
            }
            <></>
        </button>
      </div>
    </div>
  );
};

export default MintCard;
