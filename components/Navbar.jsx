import React, { useState } from "react";
import Image from "next/image";
import navLogo from "../public/assets/navLogo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} width={70} height={50} />
        <div>
          <ul className="hidden md:flex space-x-4 pr-4 text-gray-100">
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">projects</li>
            </Link>
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden"
            : "hidden"
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#09141d] p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={navLogo} width={40} alt="Logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[45%] md:w-[90%] py-2">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href={"/"}>
                <li className="py-3 text-sm">Home</li>
                <li className="py-3 text-sm">About</li>
                <li className="py-3 text-sm">Skills</li>
                <li className="py-3 text-sm">Projects</li>
                <li className="py-3 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-[20%]">
              <p className="uppercase tracking-widest text-[#565e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
