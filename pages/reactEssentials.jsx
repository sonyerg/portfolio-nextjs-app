import React from "react";
import Image from "next/image";
import Link from "next/link";
import reactEssentialsImg from "../public/assets/projects/reactEssentialsImg.png";
import { RiRadioButtonFill } from "react-icons/ri";

const reactEssentials = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          // style={{ objectPosition: "center" }}
          src={reactEssentialsImg}
        />

        <div className="text-white absolute z-10 py-2 px-6 top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Nexus</h2>
          <h3>React / Vite / Vitest</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto py-2 px-6 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#f54444]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>
            This is a webapp with fundamental React concepts that will be needed
            for almost any app!
          </p>
          <p>
            It displays and demonstrate the concepts of Components, JSX, Props,
            and State; which are all core concepts of React.
          </p>
          <a
            href="https://sonyerg-react-essentials.netlify.app/"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/sonyerg/react-essentials" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>

        <div className="bg-[#1F2937] col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4 md:p-2">
          <div className="">
            <p className="text-center font-bold pb-2">Technologies</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="tex-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              React
            </p>
            <p className="tex-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              Vite
            </p>
            <p className="tex-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              Vitest
            </p>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default reactEssentials;
