import React from "react";
import Image from "next/image";
import htmlLogo from "../public/assets/skills/html.png";
import githubLogo from "../public/assets/skills/github1.png";
import nextJsLogo from "../public/assets/skills/nextjs.png";
import tailwindLogo from "../public/assets/skills/tailwind.png";
import cssLogo from "../public/assets/skills/css.png";
import flutterLogo from "../public/assets/skills/flutter.png";
import jsLogo from "../public/assets/skills/javascript.png";
import reactLogo from "../public/assets/skills/react.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#f54444]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="p-10 grid md:grid-cols-2 gap-4">
          {/*HTML*/}

          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlLogo} alt="html logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/*CSS*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssLogo} alt="css logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/*JS*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsLogo} alt="css logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/*React*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactLogo} alt="css logo" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/*Nextjs*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={nextJsLogo}
                  alt="html logo"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>

          {/*Tailwind CSS*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwindLogo}
                  alt="tailwind logo"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          {/*Flutter*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={flutterLogo}
                  alt="flutter logo"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Flutter</h3>
              </div>
            </div>
          </div>

          {/*Github*/}
          <div className="bg-[#1F2937] p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={githubLogo}
                  alt="github logo"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
