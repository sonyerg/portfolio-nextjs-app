import ProjectPage from "../components/ProjectPage";
import ecommerceStoreImg from "../public/assets/projects/ecommerceStoreImg.png";

const ecommerceStore = () => {
  return (
    <ProjectPage
      projectImg={ecommerceStoreImg}
      projectTitle="Frontend E-commerce Store"
      projectPlatform="Next JS"
      projectDescription={`
      This web app is built as a part of a full-stack e-commerce Next JS project. 
      It is a frontend ecommerce store that is managed by the ecommerce admin dashboard as its backend (available in my projects section). 
      It uses Prisma and Supabase for severless backend and Clerk for authentication and account management.
      I used Tailwind CSS for styling and headlessui for reusable components. 
      Users can browse different categories made from the dashboard, filter based on sizes and colors, add to cart, and buy products (for demonstration purposes only).`}
      projectDemoLink="https://ecommerce-store-app-dun.vercel.app/"
      projectCodeLink="https://github.com/sonyerg/ecommerce-store-app"
      techStacks={["NextJS", "Stripe", "Tailwind CSS", "headlessui"]}
    />
  );
};

export default ecommerceStore;
