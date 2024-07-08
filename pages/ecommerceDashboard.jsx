import ProjectPage from "../components/ProjectPage";
import ecommerceDashboardImg from "../public/assets/projects/ecommerceDashboardImg.png";

const ecommerceDashboard = () => {
  return (
    <ProjectPage
      projectImg={ecommerceDashboardImg}
      projectTitle="Backend E-commerce Admin Dashboard"
      projectPlatform="Next JS"
      projectDescription={`
      This web app is built as a part of a full-stack e-commerce Next JS project. 
      It is a backend admin dashboard that is used to manage the frontend ecommerce store (available in my projects section). 
      It uses Prisma and Supabase for severless backend and Clerk for authentication and account management.
      I used Tailwind CSS for styling and shadcn/ui for reusable components. 
      Users can view their sales, add products, categories, sizes, colors and many more. `}
      projectDemoLink="https://ecommerce-admin-app-coral.vercel.app/"
      projectCodeLink="https://github.com/sonyerg/ecommerce-admin-app"
      techStacks={[
        "NextJS",
        "Prisma",
        "Supabase",
        "Clerk",
        "Tailwind CSS",
        "shadcn/ui",
      ]}
    />
  );
};

export default ecommerceDashboard;
