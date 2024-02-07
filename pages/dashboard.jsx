import React from "react";
import Image from "next/image";
import Link from "next/link";
import dashboardImg from "../public/assets/projects/dashboardImg.png";
import { RiRadioButtonFill } from "react-icons/ri";

const nexus = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          //   style={{ objectPosition: "center" }}
          src={dashboardImg}
        />

        <div className="text-white absolute z-10 py-2 px-6 top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Next.js Financial Dashboard</h2>
          <h3>Next.js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto py-2 px-6 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#f54444]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <div>
            Building a simplified version of a financial dashboard that has:
            <ul>
              <li>- A public home page.</li>
              <li>- A login page.</li>
              <li>- Dashboard pages that are protected by authentication.</li>
              <li>
                - The ability for users to add, edit, and delete invoices.
              </li>
            </ul>
            <p>
              Enter this email and password to test the website out:
              user@nextmail.com | 123456
            </p>
          </div>
          <a
            href="https://nextjs-dashboard-pi-two-29.vercel.app/"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/sonyerg/nextjs-dashboard" target="_blank">
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
              Next.js
            </p>
            <p className="tex-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              NextAuth.js
            </p>
            <p className="tex-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              Vercel
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

export default nexus;
