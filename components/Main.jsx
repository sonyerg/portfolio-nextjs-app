import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-100">
            LET'S BUILD SOMETHING LEGENDARY TOGETHER
          </p>
          <h1 className="py-4 m-auto">
            Kia Ora, I'm <span className="text-[#f54444]">Erickson</span>.
          </h1>
          <h1 className="pb-4 ">A Front-End Developer</h1>
          <p className="py-2max-w-[70%] m-auto">
            I'm a passionate junior front-end developer with a keen eye for
            detail and a commitment to crafting engaging digital experiences.
            With a solid understanding of modern web technologies, I excel in
            translating design concepts into responsive, user-friendly apps.
            {/* Eager to bring
            fresh ideas and a collaborative spirit to a dynamic tech team, I'm
            ready to contribute and grow in a forward-thinking environment. */}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
    </div>
  );
}

export default Main;
