import React from "react";
import ProjectItem from "./ProjectItem";
import nexusImg from "../public/assets/projects/nexusApp.jpg";

const Projects = () => {
  return (
    <div className="w-full lg:h-screen p-6">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
