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
            {/* I am adept at creating front-end user interfaces that are
            mobile-responsive and integrate seamlessly with APIs and various
            backend systems. In my view, the mark of an excellent developer lies
            not in sticking to a single programming language, but in effectively
            selecting the most suitable tools for each project. */}
            After graduating with a degree of <i>Mechanical Engineering</i>, I
            decided to pursue my passion for programming. I started taking
            online courses in web and mobile development specifically{" "}
            <i>React</i>, <i>NextJs</i>, and <i>Flutter</i> frameworks.
          </p>
          <p className="py-2">
            I started my front-end developer career in 2022 when I took an
            intership job at a startup company and built a mobile app using
            Flutter framework. This gave me an opportunity to gain development
            experience and show my skills and also{" "}
            <i>experienced working in a team.</i>
          </p>
          <p className="py-2">
            <i>When I'm not coding,</i> I enjoy playing video games, reading
            history, science, and philosphy books, drawing, and playing the
            guitar. And I also regularly go to the gym 💪 (the picture on the
            right is AI generated but it looks just like me!).
          </p>
          <p className="py-2">
            I am currently looking for an entry level full-time position as a
            web developer. I am deeply committed to expanding my skills and
            knowledge and also actively seeking opportunities to delve deeper
            into more advanced concepts and frameworks.
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
