import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen p-6">
      <div className="max-w-6xl m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#f54444]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="bg-[#1F2937] col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex justify-center">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="Image of a laptop"
                  width={500}
                  // height={400}
                />
              </div>
              <div>
                <h2 className="py-2">Erickson Guinto</h2>
                <p>Front-End Developer</p>
                <p>
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With me</p>
                <div className=" flex items-center justify-between p-4">
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
          {/* Right */}
          <div className="bg-[#1F2937] col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form
                className=""
                action="https://getform.io/f/8903d60a-71b1-4c17-8c1d-502414679d67"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="bg-[#d4dfe9] border-2 rounded-lg p-3 flex border-gray-200 text-black"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="bg-[#d4dfe9] border-2 rounded-lg p-3 flex border-gray-200 text-black"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="bg-[#d4dfe9] border-2 rounded-lg p-3 flex border-gray-200 text-black"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="bg-[#d4dfe9] border-2 rounded-lg p-3 flex border-gray-200 text-black"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="bg-[#d4dfe9] text-black border-2 rounded-lg p-3"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>

                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="_honeypot"
                  style={{ display: "none" }}
                />

                <button
                  type="submit"
                  className="w-full p-4 text-white mt-4 bg-gradient-to-r from-[#f54444] to-[#f76969]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-to-top button*/}
      <div className="flex justify-center py-12 h-auto bg-[#0a0a0a]">
        <Link href="/#home">
          <div className="bg-[#1F2937] rounded-full shadow-lg shadow-[#000000] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#f54444]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
