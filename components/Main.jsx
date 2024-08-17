import React from "react";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SparklesCore } from "./ui/sparkles";
import Gradient from "./ui/gradient";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center z-10 relative">
        <div>
          <h1 className="py-4 m-auto">
            Kia Ora, I'm <span className="text-[#f54444]">Erickson</span>.
          </h1>
          <h1 className="pb-4 ">A Web Developer</h1>
          <p className="uppercase text-sm tracking-widest text-gray-100">
            Let's turn your digital vision into an experience
          </p>
          <Gradient />
          <div className="flex items-center justify-between max-w-[330px] m-auto py-5">
            <a
              className="bg-[#1F2937] rounded-full shadow-lg shadow-[#000000] p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/ericksonguinto/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="bg-[#1F2937] rounded-full shadow-lg shadow-[#000000] p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/sonyerg"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="bg-[#1F2937] rounded-full shadow-lg shadow-[#000000] p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="mailto:ericksonrguinto@gmail.com"
              target="_blank"
            >
              <AiOutlineMail />
            </a>
            <Link
              className="bg-[#1F2937] rounded-full shadow-lg shadow-[#000000] p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="/#contact"
            >
              <BsFillPersonLinesFill />
            </Link>
          </div>
        </div>
      </div>
      <SparklesCore
        background="transparent"
        minSize={0.2}
        maxSize={1.5}
        particleDensity={25}
        className="m-auto absolute inset-0 w-full h-[35rem] z-0 opacity-0 "
        particleColor="#FFFFFF"
      />
    </div>
  );
}

export default Main;
