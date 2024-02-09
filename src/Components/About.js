import { AiOutlineDownload } from "react-icons/ai";
import deved from "../assets/girl.png";
import resume from "../assets/SUSHMITHA PRATHAP main.pdf";

const About = () => {
  return (
    <section id="about" className=" my-40">
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <div className="text-justify max-w-3xl">
          <h3 className="text-3xl py-10  dark:text-white">About</h3>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            I'm a graduate student at Northeastern University studying
            Information Systems with a concentration in Application Engineering,
            Web development and tools. I am a creative problem-solver with a
            keen eye for detail, and committed to deliver high-quality,
            scalable, and user-friendly web applications.
          </p>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            Previously worked as Software Developer at Murmuration Solutions. I
            have a strong background in JavaScript, React and React Native,
            Express, and Node JS. Proficient in end-to-end delivery of highly
            responsive and dynamic applications. I'm skilled in creating designs
            catered to your needs following core desgin theory
          </p>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            In my free time I enjoy learning new dance forms, my current
            favorite is Samba. I love meeting new people and getting to know
            their life stories.
          </p>

          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            I am eager to bring my skills and experience to a new challenge and
            to continue growing as a developer. If you have any queries please
            feel free to reach out to me on -{" "}
            <a
              className="underline text-blue-500 dark:text-blue-400"
              href="mailto:sushmitha.prathap04@gmail.com"
            >
              sushmitha.prathap04@gmail.com
            </a>
          </p>

          <a
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-8 w-32 flex justify-between items-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
            href={resume}
            download="SushmithaResume.pdf"
          >
            Resume{" "}
            <AiOutlineDownload className=" cursor-pointer text-2xl font-bold text-white" />
          </a>
        </div>
        <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-1/3 md:w-1/3 items-start">
          <img src={deved} fill style={{ objectFit: "contain" }} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
