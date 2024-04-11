import jsRpgImg from "../public/assets/projects/jsRpgImg.png";
import ProjectPage from "../components/ProjectPage";

const jsRpg = () => {
  return (
    <ProjectPage
      projectImg={jsRpgImg}
      projectTitle="JavaScript RPG"
      projectDescription="In this web app, I learned fundamental programming concepts in
    JavaScript by coding a Role Playing Game in Vanilla JS."
      projectCodeLink="https://github.com/sonyerg/js-rpg"
      projectDemoLink="https://sonyerg.github.io/js-rpg/"
      techStacks={["JavaScript", "HTML and CSS", "Git"]}
    />
  );
};

export default jsRpg;
