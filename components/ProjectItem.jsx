import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, projectPlatform, backgroundImg, projectUrl }) => {
  return (
    <div
      className="bg-[#1F2937] relative flex items-center justify-center h-auto w-full shadow-xl shadow-black 
    rounded-xl p-4 group hover:bg-gradient-to-r from-[#f54444] to-[#ec9292] "
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        // height={300}
        width={200}
      />
      <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{projectPlatform}</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
