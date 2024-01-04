import React from "react";
import Image from "next/image";
import nexusImg from "../public/assets/projects/nexusApp.jpg";

const nexus = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={nexusImg}
        />
        <div className="text-white absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Nexus</h2>
          <h3>Flutter / RESTful API / Git</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8"></div>
    </div>
  );
};

export default nexus;
