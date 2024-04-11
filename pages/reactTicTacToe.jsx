import React from "react";
import reactTicTacToeImg from "../public/assets/projects/reactTicTacToeImg.png";
import ProjectPage from "../components/ProjectPage";

const reactEssentials = () => {
  return (
    <ProjectPage
      projectImg={reactTicTacToeImg}
      projectTitle="React Tic Tac Toe"
      projectPlatform="React / Vite"
      projectDescription="React Tic Tac Toe is a web application where you can play a game of
              tic tac toe. It has change name feature and has logs of the moves done by
                      players."
      projectDemoLink="https://tic-tac-toe-react-app-dun.vercel.app/"
      projectCodeLink="https://github.com/sonyerg/tic-tac-toe-react-app"
      techStacks={["React", "Vite", "Vercel"]}
    />
  );
};

export default reactEssentials;
