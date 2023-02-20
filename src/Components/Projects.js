import one from "../assets/one.png";
import twi from "../assets/twi.png";
import three from "../assets/three.png";

const Projects = () => {
  return (
    <section id="project" className="min-h-screen">
      <h3 className="text-3xl py-10 mb-0 pb-0  dark:text-white">Projects</h3>
      <h4 className="text-md py-10 mt-0 pt-2  dark:text-white">
        Some of my Recent Works
      </h4>

      <div className="flex flex-col justify-center items-start mt-10 z-2 md:flex-row">
        {/* <ProjectCard image={one} heading={"Project 1"} />
        <ProjectCard image={twi} heading={"Project 2"} />
        <ProjectCard image={three} heading={"Project 3"} /> */}
        <div className="flex flex-col my-2 justify-center items-center p-8 rounded-lg cursor-pointer  hover:bottom-6 hover:z-20 relative bottom-0 transition-all shadow-2xl md:w-96 -m-3 bg-gray-800 dark:bg-white">
          <img src={one} width={100} height={100} className="text-center" alt="" />
          <div className="text-center">
            <h4 className="text-2xl py-10 mt-0 pt-2 text-white dark:text-gray-800">
              {"Hospital Management System"}
            </h4>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              Role-based access to different operations involved in the hospital
              eco-system
            </p>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              End-to-end management solution built for smoother performance in a
              hospital seHng using JAVA, JAVA Swing, and MySQL
            </p>
          </div>
          {/* <a
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-5 mx-0"
            href="#"
          >
            Check it Out
          </a> */}
        </div>

        <div className="flex flex-col my-2 justify-center items-center p-8 rounded-lg cursor-pointer  hover:bottom-6 hover:z-20 relative bottom-0 lg:z-20 transition-all shadow-2xl md:w-96 -m-3 bg-gray-800 dark:bg-white">

          <img src={twi} width={100} height={100} className="text-center" alt="" />
          <div className="text-center">
            <h4 className="text-2xl py-10 mt-0 pt-2 text-white dark:text-gray-800">
              {"Menu Masters"}
            </h4>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              Developed the web applicaGon using JavaScript and React and
              server-side language Node JS and Express JS. Used MongoDB as a
              persistent database
            </p>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              Implemented CRUD operaGons using RESTful routes and developed full
              log-in functionality
            </p>
          </div>
          {/* <a
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-5 mx-0"
            href="#"
          >
            Check it Out
          </a> */}
        </div>

        <div className="flex flex-col my-2 justify-center items-center p-8 rounded-lg cursor-pointer  hover:bottom-6 hover:z-20 relative bottom-0 transition-all shadow-2xl md:w-96 -m-3 bg-gray-800 dark:bg-white">

          <img src={three} width={100} height={100} className="text-center" alt="" />
          <div className="text-center">
            <h4 className="text-2xl py-10 mt-0 pt-2 text-white dark:text-gray-800">
              {"EliteFishin"}
            </h4>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              An app developed for fishing enthusiasts built for both android
              and IOS using React-Native and Typescript.
            </p>
            <p className="py-2 mt-0 text-justif text-white dark:text-gray-800">
              Executed the authentication module and managed the app on both the
              platforms
            </p>
          </div>
          {/* <a
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-5 mx-0"
            href="#"
          >
            Check it Out
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
