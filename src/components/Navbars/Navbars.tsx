import Image from "next/image";
import Link from "next/link";

const Navbars: React.FC = () => {
  return (
    <nav className="nav w-full top-0 p-4 max-w-7xl m-auto z-40 ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src="/assets/Logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div>
          <ul className="list-none flex uppercase opacity-80 hover:opacity-100 text-md font-semibold font-mono">
            <li className="p-5 rounded flex items-center hover:scale-110 cursor-pointer">
              <Link href="https://twitter.com/CycGods">
                <div className="flex items-center space-x-2">
                  <span>Discord</span>
                </div>
              </Link>
            </li>
            <li className="p-5 rounded flex items-center hover:scale-110 cursor-pointer">
              <Link href="https://twitter.com/CycGods">
                <div className="flex items-center space-x-2">
                  <span>Twitter</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
