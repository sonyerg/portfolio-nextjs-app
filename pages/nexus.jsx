import React from "react";
import nexusImg from "../public/assets/projects/nexusApp.jpg";
import ProjectPage from "../components/ProjectPage";

const nexus = () => {
  return (
    <ProjectPage
      projectImg={nexusImg}
      projectTitle="Nexus"
      projectPlatform="Flutter / RESTful API / Git"
      projectDescription={`
      The Nexus mobile app is built using Flutter framework and is hosted
      by a custom backend. This app is made during my internship; it is a
      part of a system of water scanning technology that detects
      particulates on water.\n
      Users are able to scan a water sample and then upload that image to
      an AI server. The images, along with additional data, are fetched
      and users are able to view those infomation on the app.\n
      User authentication is also available so users can signup to their
      account via email address.
    `}
      techStacks={["Flutter", "RESTful API", "Git"]}
      projectDemoLink="https://dub.sh/d0mov0c"
    />
  );
};

export default nexus;
