import projectManagementImg from "../public/assets/projects/projectManagementImg.png";
import ProjectPage from "../components/ProjectPage";

const projectManagement = () => {
  return (
    <ProjectPage
      projectImg={projectManagementImg}
      projectTitle="Project Management React App"
      projectPlatform="React / Vite"
      projectCodeLink="https://github.com/sonyerg/project-management-react-app"
      projectDemoLink="https://project-management-react-app.vercel.app/"
      techStacks={["React", "Vite", "Vercel"]}
      projectDescription="Project Management web app is a simple project manager and tasks
      tracker. You can add due dates and add tasks on each project;
      applying basic CRUD functionality. It also uses advanced state management method such as React's
              Context API."
    />
    // <div className="w-full h-auto">
    //   <div className="w-screen h-[30vh] lg:h-[40vh] relative">
    //     <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
    //     <Image
    //       className="absolute z-1"
    //       layout="fill"
    //       objectFit="cover"
    //       // style={{ objectPosition: "center" }}
    //       src={projectManagementImg}
    //     />

    //     <div className="text-white absolute z-10 py-2 px-6 top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
    //       <h2 className="py-2">Project Management App</h2>
    //       <h3>React / Vite</h3>
    //     </div>
    //   </div>

    //   <div className="max-w-[1240px] mx-auto py-2 px-6 grid md:grid-cols-5 gap-8 pt-8">
    //     <div className="col-span-4">
    //       <p className="uppercase text-xl tracking-widest text-[#f54444]">
    //         Project
    //       </p>
    //       <h2 className="py-4">Overview</h2>
    //       <p>
    // Project Management web app is a simple project manager and tasks
    // tracker. You can add due dates and add tasks on each project;
    // applying basic CRUD functionality.
    //       </p>
    //       <br />
    //       <p>
    //         It also uses advanced state management method such as React's
    //         Context API.
    //       </p>
    //       <br />
    //       <a
    //         href="https://project-management-react-app.vercel.app/"
    //         target="_blank"
    //       >
    //         <button className="px-8 py-2 mt-4 mr-8">Demo</button>
    //       </a>
    //       <a
    //         href="https://github.com/sonyerg/project-management-react-app"
    //         target="_blank"
    //       >
    //         <button className="px-8 py-2 mt-4">Code</button>
    //       </a>
    //     </div>

    //     <div className="bg-[#1F2937] col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4 md:p-2">
    //       <div className="">
    //         <p className="text-center font-bold pb-2">Technologies</p>
    //       </div>
    //       <div className="grid grid-cols-3 md:grid-cols-1">
    //         <p className="tex-gray-600 py-2 flex items-center">
    //           <RiRadioButtonFill className="pr-1" />
    //           React
    //         </p>
    //         <p className="tex-gray-600 py-2 flex items-center">
    //           <RiRadioButtonFill className="pr-1" />
    //           Vite
    //         </p>
    //         <p className="tex-gray-600 py-2 flex items-center">
    //           <RiRadioButtonFill className="pr-1" />
    //           Vercel
    //         </p>
    //       </div>
    //     </div>
    //     <Link href="/#projects">
    //       <p className="underline cursor-pointer">Back</p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default projectManagement;
