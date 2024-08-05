import ProjectPage from "../components/ProjectPage";
import jsCalculatorImg from "../public/assets/projects/jsCalculatorImg.png";

const javascriptCalculator = () => {
  return (
    <ProjectPage
      projectImg={jsCalculatorImg}
      projectTitle="JS Calculator"
      projectPlatform="React JS"
      projectDescription={`
        I built a Calculator out of Javascript! 
        This project showcases fundamental understanding of basic frontend development technologies.
        `}
      projectDemoLink="https://javascript-calculator-tawny.vercel.app"
      projectCodeLink="https://github.com/sonyerg/javascript-calculator"
      techStacks={["HTML", "CSS", "TypeScript", "React"]}
    />
  );
};

export default javascriptCalculator;
