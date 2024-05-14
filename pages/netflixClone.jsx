import ProjectPage from "../components/ProjectPage";
import netflixCloneImg from "../public/assets/projects/netflixCloneImg.png";

const netflixClone = () => {
  return (
    <ProjectPage
      projectImg={netflixCloneImg}
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
  );
};

export default netflixClone;
