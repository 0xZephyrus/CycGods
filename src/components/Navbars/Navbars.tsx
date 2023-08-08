import Image from "next/image";
import React from "react";

const Navbars = () => {
  return (
    <nav className="nav w-full top-0 p-4 max-w-7xl m-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src="/assets/Logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div>
          <ul className=" list-none flex uppercase opacity-80 text-xs font-Inconsolata">
            <li className="p-5 flex items-center rounded hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer">
              world
            </li>
            <li className="p-5 rounded flex items-center hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer">
              gallery
            </li>
            <li className="p-5 rounded flex items-center hover:bg-opacity-40 hover:bg-[#CE8600] cursor-pointer">
              Connect
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
