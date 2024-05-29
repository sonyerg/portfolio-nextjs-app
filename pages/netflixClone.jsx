import ProjectPage from "../components/ProjectPage";
import netflixCloneImg from "../public/assets/projects/netflixCloneImg.png";
import netflixCloneImg2 from "../public/assets/projects/netflixCloneImg2.png";
import ProjectScreenshots from "../components/ProjectScreenshots";

const screenShots = [
  { image: netflixCloneImg, alt: "Netflix clone screenshot" },
  { image: netflixCloneImg2, alt: "Netflix clone screenshot" },
];

const netflixClone = () => {
  return (
    <>
      <ProjectPage
        projectImg={netflixCloneImg2}
        projectTitle="Netflix Clone"
        projectDescription={`In this project, I tried to clone the Netflix website.
      It includes Github and Google OAuth using NextAuth and also Email for the user 
      to sign in. It also uses Prisma and Supabase for serverless backend and database. 
      \n In the app, you can view different categories: TV shows, movies, and recently added.
       And you can also add your own wishlist. Click on Demo to see the deployed app!`}
        projectCodeLink="https://github.com/sonyerg/netflix-clone-nextjs"
        projectDemoLink="https://netflixclone-nextjs-roan-eta.vercel.app/"
        techStacks={["NextJS", "Nextauth", "Prisma", "Supabase"]}
      />
      <ProjectScreenshots screenShots={screenShots} />
    </>
  );
};

export default netflixClone;
