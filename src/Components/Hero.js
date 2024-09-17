import { TypeAnimation } from "react-type-animation";
import deved from "../assets/memoji.png";
import resume from "../assets/Sushmitha_Prathap_Resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-40">
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left h-[620px]  sm:h-[400px]">
          <h2 className="text-5xl font-extrabold py-2 text-gray-800 md:text-6xl lg:text-6xl dark:text-white">
            <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              {" "}
              Hello, I'm{" "}
            </span>
          
          </h2>

          <h2 className="text-5xl font-extrabold py-2 text-gray-800 md:text-6xl lg:text-6xl dark:text-white">
          <TypeAnimation
              sequence={[
                "Sushmitha Prathap",
                3000,
                "a Full-Stack Devloper",
                3000,
                "a Software Developer",
                3000,
                "a DevOps Enthuiast",
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3.75rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          {/* <h3 className="text-xl py-2 md:text-3xl  dark:text-white">
            MERN Stack Developer and Web Designer
          </h3> */}
          <p className="text-md py-5 leading-8 text-base sm:text-lg text-gray-800 md:text-xl md:max-w-2xl   dark:text-white">
          A creative and enthusiastic Full-Stack Software Engineer who loves to bring ideas to life. I thrive on building user experiences that are not just functional but delightful. 
          With over 3 years in the industry, I've embraced every challenge, whether it’s designing intuitive interfaces, architecting seamless backend systems, or exploring the possibilities of AI and machine learning.
          </p>
          {/* <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-2xl   dark:text-white">
            Join me down below and let's get cracking!
          </p> */}

          <div>
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit  m-2 bg-gradient-to-b from-cyan-500 to-teal-500 hover:bg-slate-200 text-black"
              onClick={() => {
                let element = document.getElementById("contact");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit m-2 bg-transparent hover:bg-slate-800 text-gray-800 border-gray-600 dark:text-white border dark:border-white ">
              <a href={resume} download={"SushmithaResume.pdf"}>
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10">
          <div className="rounded-full bg-gradient-to-b from-gray-800 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] relative">
            <img
              src={deved}
              alt="My Memoji"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px]"
              // width={380}
              // height={380}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
