import React, { useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import image1 from "../assets/portfolio.png";
import image2 from "../assets/bookbuddy.png";
import image3 from "../assets/submission.png";
import image4 from "../assets/mm.png";
import image5 from "../assets/airport.png";
import image6 from "../assets/roommate.png";
import image7 from "../assets/localloop.png";
import image8 from "../assets/echosphere.png";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "My Portfolio built using React and Tailwind CSS",
    image: image1,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SushmithaPrathap/sushPortfolio-frontend",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BookStore with Open AI Chatbot",
    description: "Next JS application with interactive chatbot",
    image: image2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SushmithaPrathap/openai-chatbot",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Assignment Submission DevOps Project",
    description:
      "Built using React and Deployed on AWS, automated using Github Actions",
    image: image3,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SushmithaPrathap/webapp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Menu Masters",
    description:
      "Responsive application built using React and Materilze. With Authentication and CRUD operations",
    image: image4,
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/neu-mis-info6150-fall-2022/final-project-menumasters",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Airport Management Application",
    description:
      "Management system built on Oracle SQL. Authentication, CRUD operations, Triggers, Functions and Permissions",
    image: image5,
    tag: ["All", "Data"],
    gitUrl: "https://github.com/SushmithaPrathap/Panchatantra",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Roommate Management Application",
    description:
      "Responsive application built using React and Materilze. With Authentication and CRUD operations",
    image: image6,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SushmithaPrathap/RoommateProject",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "LocalLoop - Figma Prototype Portfolio",
    description: "Figma portfolio for a local commumity connecting application",
    image: image7,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://www.figma.com/file/wzU1iRTDOMOs1092afxtG5/Untitled?type=design&node-id=1%3A293&mode=design&t=BZOSqnEhPO84Kdtp-1",
  },
  {
    id: 6,
    title: "EchoSphere - Figma Prototype Portfolio",
    description: "Figma portfolio for a Amazon X Twitter application",
    image: image8,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://www.figma.com/file/TtxJN0AmYQoT0E0owdz1AI/EchoSphere---Full?type=design&node-id=1%3A787&mode=design&t=WNfqU7071kXPfDQh-1",
  },
];

const ProjectsSection = () => {
  //   const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //   const handleTagChange = (newTag) => {
  //     setTag(newTag);
  //   };

  //   const filteredProjects = projectsData.filter((project) =>
  //     project.tag.includes(tag)
  //   );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" className="min-h-screen">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
