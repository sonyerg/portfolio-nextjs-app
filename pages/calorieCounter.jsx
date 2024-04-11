import calorieCounterImg from "../public/assets/projects/calorieCounterImg.png";
import ProjectPage from "../components/ProjectPage";

const calorieCounter = () => {
  return (
    <ProjectPage
      projectImg={calorieCounterImg}
      projectTitle="Calorie Counter JS "
      projectPlatform="Vanilla JS"
      projectDescription="In this web app, I learned how to validate user input, perform
              calculations based on that input, and dynamically update your
              interface to display the results."
      projectDemoLink="https://sonyerg.github.io/calorie-counter-js/"
      projectCodeLink="https://github.com/sonyerg/calorie-counter-js"
      techStacks={["JavaScript", "HTML and CSS", "Git"]}
    />
  );
};

export default calorieCounter;
