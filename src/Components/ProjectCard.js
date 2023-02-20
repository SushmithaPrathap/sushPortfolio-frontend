// import Image from "next/Image";

const ProjectCard = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col justify-center items-start p-4 border-2 border-gray-500 rounded-lg hover:z-10 cursor-pointer hover:bottom-3 relative bottom-0 transition-all shadow-2xl w-96 -m-6">
      {/* <img src={image} /> */}
      <img src={image} width={100} height={100} className="text-center" />
      <div>
        <h4 className="text-2xl py-10 mt-0 pt-2  dark:text-white">{heading}</h4>
        <p className="py-2 mt-0  dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-10 mx-0"
          href="#"
        >
          Check it Out
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
