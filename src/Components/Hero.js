import { TypeAnimation } from "react-type-animation";
import deved from "../assets/memoji.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 md:pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h2 className="text-5xl font-extrabold py-2 text-gray-800 md:text-6xl lg:text-6xl dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              {" "}
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Sushmitha Prathap",
                1000,
                "a Full-Stack Devloper",
                1000,
                "a Software Developer",
                1000,
                "a DevOps Enthuiast",
                1000,
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
            I’m an experienced full-stack developer, currently a graduate
            student at Northeastern University, Boston. I'm passionate about
            building web applications and I enjoying creating web designs.
          </p>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-2xl   dark:text-white">
            Join me down below and let's get cracking!
          </p>

          <div>
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-b from-cyan-500 to-teal-500 hover:bg-slate-200 text-black"
              onClick={() => {
                let element = document.getElementById("contact");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire Me
            </button>
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white m"
              onClick={() => {
                let element = document.getElementById("contact");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-b from-gray-800 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative">
            <img
              src={deved}
              alt="My Memoji"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              width={380}
              height={380}
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
