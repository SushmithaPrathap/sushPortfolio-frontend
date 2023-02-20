import "./App.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Hero from "./Components/Hero";
import me from "./assets/me.png";
import resume from "./assets/resume.pdf";

function App() {
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);
  const [atId, setAtId] = useState("Home");
  console.log("at id", atId);
  return (
    <div className={dark ? "dark" : ""}>
      <nav className="z-30 px-6 md:px-10 py-6 flex justify-between fixed top-0 bg-white dark:bg-gray-900 w-full items-center">
        <div className="flex flex-row items-center justify-center">
          <img
            src={me}
            className="rounded-full mx-1 md:mx-2"
            width={"50px"}
            height={"50px"}
          />
          <h1 className="text-md font-semibold font-burtons dark:text-white">
            Sushmitha Prathap
          </h1>
        </div>

        <ul className="md:flex md:items-center hidden ">
          <li
            className={
              atId === "Home"
                ? "text-md font-burtons mx-4 underline text-teal-600 drop-shadow-2xl cursor-pointer"
                : "text-md font-burtons mx-4 dark:text-white cursor-pointer"
            }
            onClick={() => {
              setAtId("Home");
              console.log("clicked home");
              let element = document.getElementById("about");
              console.log("clicked home", element);
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
          <li>
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

        <div className="flex flex-row items-center justify-center  md:hidden">
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
          <div className="bg-white dark:bg-gray-900 absolute top-24 right-0 w-3/6 p-4 flex flex-col items-center justify-center rounded-xl">
            <ul className="text-center pb-4">
              <li
                className={
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
                }
                onClick={() => {
                  setAtId("Home");
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
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
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
                  "text-md font-burtons text-gray-800 font-semibold drop-shadow-2xl cursor-pointer m-4 dark:text-white"
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

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-4"
                  href="/assets/resume.pdf"
                  download={"SushmithaResume.pdf"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <main className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>
      <footer>
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md w-full text-center">
          <h4 className="text-lg m-4">© Made By Sushmitha Prathap</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
