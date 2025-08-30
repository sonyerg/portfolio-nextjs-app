import React from "react";
import myImage from "../public/assets/myImage.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-6 flex items-center py-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f54444] ">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2">
            After graduating with a degree of <i>Mechanical Engineering</i>, I
            decided to pursue my passion for programming. I started taking
            online courses in web and mobile development specifically{" "}
            <i>React</i>, <i>NextJs</i>, and <i>Flutter</i> frameworks.
          </p>
          <p className="py-2">
            I started my developer career in 2022 when I took an intership job
            at a startup company and built a mobile app using Flutter framework.
            This gave me an opportunity to gain development experience and show
            my skills and also experienced working in a team.
          </p>
          <p className="py-2">
            I continued improving my programming skills delving into backend development with Node.js and Flask.
            I've also started doing freelancing jobs as a full stack developer.
          </p>
          <p className="py-2">
            <i>When I'm not coding,</i> I enjoy playing video games, reading
            history, science, and philosphy books, drawing, and playing the
            guitar. And I also regularly go to the gym 💪.
          </p>
          <p className="py-2">
            I am deeply committed to expanding my skills and knowledge and also
            actively seeking opportunities to delve deeper into more advanced
            concepts and frameworks.
          </p>
          <p className="py-2 underline cursor-pointer">
            <Link href="/#projects">Check out some of my projects.</Link>
          </p>
        </div>
        <div className="bg-[#1F2937] w-full h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <Image className="rounded-xl" src={myImage} alt="My image" />
        </div>
      </div>
    </div>
  );
}
