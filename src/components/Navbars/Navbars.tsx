import Image from "next/image";
import React from "react";

const Navbars = () => {
  return (
    <div className=" absolute w-full  h-20 flex items-center justify-center">
      <Image
        src="/assets/Logo.png"
        width={300}
        height={300}
        alt="White fries logo"
      />
    </div>
  );
};

export default Navbars;
