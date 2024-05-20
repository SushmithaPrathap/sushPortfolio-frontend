import { AiOutlineDownload } from "react-icons/ai";
import deved from "../assets/girl.png";
import resume from "../assets/SUSHMITHA PRATHAP main.pdf";

const About = () => {
  return (
    <section id="about" className="pb-20 pt-20">
      <div className="flex flex-col justify-between items-center xl:flex-row">
        <div className="text-justify max-w-3xl">
          <h3 className="text-3xl py-10  dark:text-white">About</h3>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            Hello there! 👋 I'm Sushmitha Prathap, and I'm delighted to share a
            little about my journey with you.
          </p>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            Diving into the world of technology has always been a thrilling
            adventure for me. It began with earning my Bachelor's degree in
            Computer Science Engineering in the vibrant city of Bangalore, where
            I first got to flex my problem-solving muscles. Hungry for more
            knowledge, I ventured to the prestigious Northeastern University to
            pursue a Master's degree in Information Systems.
          </p>
          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            As a frontend-heavy Full Stack Engineer, I've found my sweet spot in
            the tech world. My career started by building robust applications,
            but as I delved deeper, the harmony of front-end and back-end
            development captivated me, soon blossoming into my passion. There's
            something magical about weaving together code and creativity to
            bring digital experiences to life.
          </p>

          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            But my life isn't all code and interfaces. Dance is my soul's
            expression, and connecting with people is the rhythm I live by.
            Whether it's through the art of movement or the warm conversations
            sparked at a cafe, these interactions add vibrant colors to my
            canvas of life.
          </p>

          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            Speaking of cafes, my part-time job at at Tatte Bakery and cafe,
            Northeastern as a cafe counter person and barista is more than just
            work—it's a way of life. It's where my love for coffee and people
            percolates into a rich blend of joy and enthusiasm. Serving others
            with passion and a dash of love, I find myself in the heart of human
            connections, all while staying close to the aroma of coffee that I
            adore.
          </p>

          <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
            Every day is a new opportunity for growth, not just as a Full Stack
            Engineer but as an individual with a myriad of interests. I'm eager
            to see where this exciting path takes me, always ready to learn,
            innovate, and dance my way through the incredible journey of life.
            Let's see what the future brews! 🚀🎼☕
          </p>
          <div className="flex justify-start items-center">
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-8 w-32 flex justify-between items-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
              href={resume}
              download="SushmithaResume.pdf"
            >
              Resume{" "}
              <AiOutlineDownload className=" cursor-pointer text-2xl font-bold text-white" />
            </a>
            <a
              className="underline text-gray-700 dark:text-white mx-4 text-lg text-bold"
              href="mailto:sushmitha.prathap04@gmail.com"
            >
              Say Hello!
            </a>
          </div>
        </div>
        <div className="relative bg-teal-500 rounded-full w-80 h-80 overflow-hidden xl:h-1/3 xl:w-1/3 md:h-1/2 md:w-1/2 items-start">
          <img src={deved} fill style={{ objectFit: "contain" }} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
