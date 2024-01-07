import React from "react";
import ProjectItem from "./ProjectItem";
import nexusImg from "../public/assets/projects/nexusApp.jpg";
import moreProjects from "../public/assets/projects/moreProjects.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-6">
      <div className="max-w-6xl mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#f54444]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Nexus"
            projectPlatform="Flutter"
            backgroundImg={nexusImg}
            projectUrl="/nexus"
          />
          <div
            className="bg-[#1F2937] relative flex items-center justify-center h-auto w-full shadow-xl shadow-black 
    rounded-xl p-4 group hover:bg-gradient-to-r from-[#f54444] to-[#ec9292] "
          >
            <h2 className="text-center">More Projects coming soon... 🚀🚀🚀</h2>
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
