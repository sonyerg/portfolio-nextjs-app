import React from "react";
import myImage from "../public/assets/myImage.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-6 flex items-center py-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f54444] ">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p>First sentence here</p>
          <p className="py-2">
            Your Bio here adl;fjal;skjdf asdlfjals;djk fl;asdfl; kjasdlf;kj
            asl;dkfj as;ldkjf l;askjdf l;askdjf;lkkjkjsa l;dkfj al;skjdfl;
            kajsdf sa alksjdfa;lskj dfas;ldjf. adl;fjal;skjdf asdlfjals;djk
            fl;asdfl; kjasdlf;kj asl;dkfj as;ldkjf l;askjdf l;askdjf;lkkjkjsa
            l;dkfj al;skjdfl; kajsdf sa alksjdfa;lskj dfas;ldjf
          </p>
          <p className="py-2">
            Your Bio here adl;fjal;skjdf asdlfjals;djk fl;asdfl; kjasdlf;kj
            asl;dkfj as;ldkjf l;askjdf l;askdjf;lkkjkjsa l;dkfj al;skjdfl;
            kajsdf sa alksjdfa;lskj dfas;ldjf. Jias;dflkja a;sdifi
            l;ksjadfl;ksdjf.
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of my projects.
          </p>
        </div>
        <div className="bg-[#0d1e2b] w-full h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <Image className="rounded-xl" src={myImage} alt="My image" />
        </div>
      </div>
    </div>
  );
};

export default About;
