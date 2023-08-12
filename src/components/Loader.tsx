import Image from "next/image";
import { useEffect, useState } from "react";

const Loading: React.FC = () => {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen overflow-hidden my-auto backdrop-blur-md bg-white/30 z-50">
      <Image src="/assets/loading.gif" width={500} height={500} alt="Loading" />
    </div>
  );
};

export default Loading;
