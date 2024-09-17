import "./App.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Hero from "./Components/Hero";
import me from "./assets/me2.png";
import resume from "./assets/Sushmitha_Prathap_Resume.pdf";
import ProjectsSection from "./Components/ProjectSection.jsx";
import AchievementsSection from "./Components/Achivements";
import Certification from "./Components/Certification";

function App() {
  const [dark, setDark] = useState(true);
  const [show, setShow] = useState(false);
  const [atId, setAtId] = useState("Home");
  console.log("at id", atId);
  return (
    <main className={dark ? "dark" : ""}>
      <nav className="z-30 px-6 md:px-10 py-6 flex justify-between fixed top-0 bg-white dark:bg-gray-900 w-full items-center">
        <div className="flex flex-row items-center justify-center">
          <img
            src={me}
            className="rounded-full mx-1 md:mx-2"
            width={"50px"}
            height={"50px"}
            alt=""
          />
          <h1 className="text-md font-semibold font-burtons dark:text-white">
            Sushmitha Prathap
          </h1>
        </div>

        <ul className="lg:flex lg:items-center hidden ">
          <li
            className={
              atId === "Home"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("Home");
              let element = document.getElementById("home");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </li>
          <li
            className={
              atId === "About"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("About");
              let element = document.getElementById("about");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li
            className={
              atId === "Projects"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("Projects");
              let element = document.getElementById("project");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </li>
          <li
            className={
              atId === "certificate"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("certificate");
              let element = document.getElementById("certificate");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Certifications
          </li>
          <li
            className={
              atId === "Contact"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("Contact");
              let element = document.getElementById("contact");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </li>
        </ul>

        <ul className="lg:flex lg:items-center hidden gap-6 ">
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.linkedin.com/in/sushmitha-prathap/"}
          >
            <FaLinkedin className="w-6 h-6 cursor-pointer text-2xl text-blue-600 bg-white" />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://github.com/SushmithaPrathap"}
          >
            <FaGithub className="w-6 h-6  cursor-pointer text-2xl dark:text-white text-gray-900" />
          </a>
          <li>
            {dark ? (
              <BsFillSunFill
                className=" cursor-pointer text-2xl  dark:text-white"
                onClick={() => setDark(false)}
              />
            ) : (
              <BsFillMoonStarsFill
                className=" cursor-pointer text-2xl  dark:text-white"
                onClick={() => setDark(true)}
              />
            )}
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href={resume}
              download="SushmithaResume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex flex-row items-center justify-center  lg:hidden">
          {dark ? (
            <BsFillSunFill
              className=" cursor-pointer text-2xl mx-4  dark:text-white"
              onClick={() => setDark(false)}
            />
          ) : (
            <BsFillMoonStarsFill
              className=" cursor-pointer text-2xl mx-4  dark:text-white"
              onClick={() => setDark(true)}
            />
          )}

          <GiHamburgerMenu
            onClick={() => setShow(!show)}
            className="cursor-pointer text-2xl font-bold text-gray-500 dark:text-white"
          />
        </div>

        {show && (
          <div className="bg-white dark:bg-gray-700 absolute top-24 right-0 w-3/6 p-4 flex flex-col items-center justify-center rounded-xl">
            <ul className="text-center pb-4">
              <li
                className={
                  atId === "Home"
                    ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                    : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
                }
                onClick={() => {
                  setAtId("Home");
                  let element = document.getElementById("home");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShow(!show);
                }}
              >
                Home
              </li>
              <li
                className={
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
                }
                onClick={() => {
                  setAtId("About");
                  let element = document.getElementById("about");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShow(!show);
                }}
              >
                About
              </li>
              <li
                className={
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
                }
                onClick={() => {
                  setAtId("Projects");
                  let element = document.getElementById("project");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShow(!show);
                }}
              >
                Projects
              </li>
              <li
                className={
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
                }
                onClick={() => {
                  setAtId("certificate");
                  let element = document.getElementById("certificate");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShow(!show);
                }}
              >
                Certifications
              </li>
              <li
                className={
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
                }
                onClick={() => {
                  setAtId("Contact");
                  let element = document.getElementById("contact");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShow(!show);
                }}
              >
                Contact
              </li>
              <li className="m-4 place-self-center px-6">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={"https://www.linkedin.com/in/sushmitha-prathap/"}
                >
                  <FaLinkedin className="w-6 h-6 drop-shadow-2xl text-2xl text-blue-600 bg-white" />
                </a>
              </li>
              <li className="m-4 place-self-center justify-center px-6">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={"https://github.com/SushmithaPrathap"}
                >
                  <FaGithub className="w-6 h-6  drop-shadow-2xl text-2xl dark:text-white text-gray-900" />
                </a>
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-4"
                  href={resume}
                  download={"SushmithaResume.pdf"}
                >
                  Resume
                </a>
              </li>
              <li
                className="dark:text-white text-md font-burtons place-self-start m-4 underline "
                onClick={() => setShow(false)}
              >
                close
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900">
        <Hero />

        <AchievementsSection />

        <About />

        {/* <Projects /> */}
        <ProjectsSection />

        <Certification />

        <Skills />

        <Experience />

        <Contact />
      </div>
      <footer>
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 w-full text-center flex flex-col justify-around items-center sm:flex-row">
          <h4 className="sm:text-lg text-md m-1 sm:m-4">
            2024 © All Rights Reserved.
          </h4>
          <h4 className="sm:text-lg text-md m-1 sm:m-4">
            Made with <span className="text-red-600 text-bold">♡</span> by{" "}
            <span className="underline">Sushmitha Prathap</span>
          </h4>
          <a
            className="cursor-pointer text-gray-700 dark:text-white m-1 sm:m-4 sm:text-lg text-md text-md"
            href="mailto:sushmitha.prathap04@gmail.com"
          >
            Say Hello!
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
