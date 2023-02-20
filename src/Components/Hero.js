const Hero = () => {
  return (
    <section className="min-h-screen pt-28 md:pt-40">
      <div className="flex flex-col">
        <div className="text-left p-5 md:p-10">
          <h2 className="text-4xl py-2 text-gray-800 font-medium md:text-6xl dark:text-white">
            <span className="text-teal-600">Hi, </span>I'm Sushmitha Prathap
          </h2>
          <h3 className="text-xl py-2 md:text-3xl  dark:text-white">
            MERN Stack Developer and Web Designer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-2xl   dark:text-white">
            I’m an experienced full-stack developer, currently a graduate
            student at Northeastern University, Boston. I'm passionate about
            building web applications and I enjoying creating web designs.
          </p>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-2xl   dark:text-white">
            Join me down below and let's get cracking!
          </p>
        </div>
        <button
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 w-24 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
          onClick={() => {
            let element = document.getElementById("contact");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Connect
        </button>
        {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
    <AiFillLinkedin />
    <AiFillTwitterCircle />
  </div> */}
      </div>
    </section>
  );
};
export default Hero;
