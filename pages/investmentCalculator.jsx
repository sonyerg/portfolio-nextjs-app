import React from "react";
import investmentCalculatorImg from "../public/assets/projects/investmentCalculatorImg.png";
import ProjectPage from "../components/ProjectPage";

const investmentCalculator = () => {
  return (
    <ProjectPage
      projectImg={investmentCalculatorImg}
      projectTitle="Investment Calculator"
      projectPlatform="React / Vite"
      projectDescription="Investment Calculator is a simple web application that can calculate
      investments using user's input. It has a very minimalistic design and can output results in seconds."
      projectCodeLink="https://github.com/sonyerg/investment-calculator"
      projectDemoLink="https://investment-calculator-beta-virid.vercel.app/"
      techStacks={["React", "Vite", "Vercel"]}
    />
  );
};

export default investmentCalculator;
