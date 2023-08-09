import { useRef } from "react";
import { useInView } from "framer-motion";

import MovingText from "../MovingText";

const Footers: React.FC = () => {
  const footersRef = useRef(null);
  const isInView = useInView(footersRef);
  return (
    <div
      ref={footersRef}
      className=" font-mono bg-gradient-to-r from-[#D4D2C2] to-[#c9a784] w-screen h-[50px] z-20  flex justify-center items-center fixed bottom-0  "
    >
      {isInView && (
        <MovingText text="©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods // ©'2023'CycGods //  &nbsp;" />
      )}
    </div>
  );
};

export default Footers;
