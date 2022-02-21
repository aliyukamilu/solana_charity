import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom"
import Image from 'next/image'


// import logo from "../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <a href={`#${title}`} className={`mx-4 cursor-pointer hover:translate-y-1 ease-in transition duration-600 ${classprops}`}>{title}</a>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex px-10 sm:pl-20 justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image width={150} height={40} src="/logo.png" className="w-32 cursor-pointer" alt="logo" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-end items-center flex-initial">
        {["About", "Partners", "Tokennomics", "Roadmap", "Information"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <Link to="/dashboard">
          <li className="bg-primary py-2 px-7 mx-4 rounded-full cursor-pointer">
            GAP DEX
          </li>
        </Link>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["About", "Partners", "Tokennomics", "Roadmap", "Information"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
