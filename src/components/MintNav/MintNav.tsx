import { useRef } from "react";
import { useInView } from "framer-motion";

import MovingText from "../MovingText";

const MintNav: React.FC = () => {
  const mintNavRef = useRef(null);
  const isInView = useInView(mintNavRef);
  return (
    <div
      ref={mintNavRef}
      className=" font-mono bg-gradient-to-r from-[#D4D2C2] to-[#c9a784] w-screen h-[50px] z-20  flex justify-center items-center fixed top-0  "
    >
      {isInView && (
        <MovingText text="'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive // 'CycGods' MintLive //  &nbsp;" />
      )}
    </div>
  );
};

export default MintNav;
