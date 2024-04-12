import ProjectPage from "../components/ProjectPage";
import foodOrderAppImg from "../public/assets/projects/foodOrderAppImg.png";

const projectDescription = `The Food Order App is a sleek and intuitive web
application that mirrors the seamless experience of contemporary food
delivery websites.

Key Features:
Advanced State and Context Management, Efficient Handling of HTTP Requests with custom hook.`;

export default function foodOrderApp() {
  return (
    <ProjectPage
      projectImg={foodOrderAppImg}
      projectTitle="Food Order App"
      projectPlatform="React / Vite"
      projectCodeLink="https://github.com/sonyerg/food-order-react-app"
      projectDemoLink="https://food-order-react-app-five.vercel.app/"
      techStacks={["React", "Vite", "Vercel"]}
      projectDescription={projectDescription}
    />
  );
}
