import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SparklesCore } from "./ui/sparkles";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center z-10 relative">
        <div>
          <h1 className="py-4 m-auto">
            Kia Ora, I'm <span className="text-[#f54444]">Erickson</span>.
          </h1>
          <h1 className="pb-4 ">A Front-End Developer</h1>
          {/* <p className="py-2max-w-[70%] m-auto">
            I'm a passionate front-end developer with a keen eye for detail and
            a commitment to crafting engaging digital experiences.
          </p> */}
          <p className="uppercase text-sm tracking-widest text-gray-100">
            Let's turn your digital vision into an experience
          </p>
          <div className="relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
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
        particleDensity={60}
        className="m-auto absolute inset-0 w-full h-[35rem] z-0"
        particleColor="#FFFFFF"
      />
    </div>
  );
}

export default Main;
