const temp = () => {
  return (
    <div>
      <section>
        <div>
          <h3 className="text-3xl py-10 mb-0 pb-0  dark:text-white">
            Projects
          </h3>
          <h4 className="text-md py-10 mt-0 pt-2  dark:text-white">
            Some of my Recent Works
          </h4>
          <p className="text-md py-2 text-gray-600 leading-8  dark:text-white">
            My goal is to continue to hone my skills in real-world applicatons
            while continuing to learn the most{" "}
            <span className="text-teal-500">cuttng-edge technologies</span> to
            become a more well-rounded developer
          </p>
          <p className="text-md py-2 text-gray-600 leading-8  dark:text-white">
            My goal is to continue to hone my skills in real-world applicaGons
            <span className="text-teal-500">cuttng-edge technologies</span> to
          </p>
        </div>
        <div className=" lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl scroll-py-10">
            <Image
              src={design}
              width={100}
              height={100}
              className="text-center"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Creating designs catered to your needs following core desgin
              theory
            </p>

            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className=" text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className=" text-gray-800 py-1  dark:text-white"></p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl scroll-py-10">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Creating designs catered to your needs following core desgin
              theory
            </p>

            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className=" text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className=" text-gray-800 py-1  dark:text-white"></p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl scroll-py-10">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Creating designs catered to your needs following core desgin
              theory
            </p>

            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className=" text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className=" text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className=" text-gray-800 py-1  dark:text-white"></p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-10  dark:text-white">Portfolio</h3>
          <p className="text-md py-2 text-gray-600 leading-8  dark:text-white">
            My goal is to continue to hone my skills in real-world applicatons
            while continuing to learn the most{" "}
            <span className="text-teal-500 ">cuttng-edge technologies</span> to
            become a more well-rounded developer
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className=" basis-1/3 flex-1">
            <Image
              src={web1}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={web2}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={web3}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={web4}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={web5}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={web6}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
