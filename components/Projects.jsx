import React from "react";
import ProjectItem from "./ProjectItem";
import nexusImg from "../public/assets/projects/nexusApp.jpg";
import jsRpgImg from "../public/assets/projects/jsRpgImg.png";
import calorieCounterImg from "../public/assets/projects/calorieCounterImg.png";
import investmentCalculatorImg from "../public/assets/projects/investmentCalculatorImg.png";
import reactTicTacToeImg from "../public/assets/projects/reactTicTacToeImg.png";
import projectManagementImg from "../public/assets/projects/projectManagementImg.png";
import foodOrderAppImg from "../public/assets/projects/foodOrderAppImg.png";
import netflixCloneImg from "../public/assets/projects/netflixCloneImg.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="uppercase text-xl tracking-widest text-[#f54444]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            projectPlatform="Next JS"
            backgroundImg={netflixCloneImg}
            projectUrl="/netflixClone"
          />
          <ProjectItem
            title="JS RPG"
            projectPlatform="Vanilla JS"
            backgroundImg={jsRpgImg}
            projectUrl="/jsRpg"
          />
          <ProjectItem
            title="Calorie Counter"
            projectPlatform="Vanilla JS"
            backgroundImg={calorieCounterImg}
            projectUrl="/calorieCounter"
          />
          <ProjectItem
            title="Tic Tac Toe"
            projectPlatform="Vite React"
            backgroundImg={reactTicTacToeImg}
            projectUrl="/reactTicTacToe"
          />
          <ProjectItem
            title="Investment Calculator"
            projectPlatform="Vite React"
            backgroundImg={investmentCalculatorImg}
            projectUrl="/investmentCalculator"
          />
          <ProjectItem
            title="Project Management App"
            projectPlatform="Vite React"
            backgroundImg={projectManagementImg}
            projectUrl="/projectManagement"
          />
          <ProjectItem
            title="Food Order App"
            projectPlatform="Vite React"
            backgroundImg={foodOrderAppImg}
            projectUrl="/foodOrderApp"
          />
          <ProjectItem
            title="Nexus"
            projectPlatform="Flutter"
            backgroundImg={nexusImg}
            projectUrl="/nexus"
          />
        </div>
        <div
          className="mt-4 bg-[#1F2937] relative flex items-center justify-center h-auto w-full shadow-xl shadow-black 
             rounded-xl p-4 group hover:bg-gradient-to-r from-[#f54444] to-[#ec9292] "
        >
          <h2 className="p-12 text-center">
            More Projects coming soon... 🚀🚀🚀
          </h2>
          <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
