import { SkillCard, SkillCardSmall } from "./SkillCard";

export default function Skills() {
  return (
    <section className=" min-h-screen">
      <h3 className="text-3xl py-10 mb-0 pb-0  dark:text-white">
        Languages and Skills
      </h3>
      <h4 className="text-md py-10 mt-0 pt-2  dark:text-white">
        Technologies I have worked on
      </h4>
      <div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex gap-5 py-8 lg:py-10 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Front-end Technologies"} />
            <SkillCardSmall name={"HTML"} />
            <SkillCardSmall name={"CSS"} />
            <SkillCardSmall name={"JavaScript"} />
            <SkillCardSmall name={"React JS"} />
            <SkillCardSmall name={"Tailwind CSS"} />
            <SkillCardSmall name={"NEXT JS"} />
            <SkillCardSmall name={"Material UI"} />
          </div>
          <div className="flex gap-5 py-8 lg:py-10 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Back-end Technologies"} />
            <SkillCardSmall name={"Node JS"} />
            <SkillCardSmall name={"Express JS"} />
            <SkillCardSmall name={"Java"} />
            <SkillCardSmall name={"python"} />
          </div>
          <div className="flex gap-5 py-8 lg:py-10 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Networking"} />
            <SkillCardSmall name={"DNS"} />
            <SkillCardSmall name={"TCP/IP"} />
            <SkillCardSmall name={"Nginx"} />
            <SkillCardSmall name={"python"} />
          </div>
          <div className="flex gap-5 py-8 lg:py-10 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Databases"} />
            <SkillCardSmall name={"MySQL"} />
            <SkillCardSmall name={"MongoDB"} />
            <SkillCardSmall name={"PostgreSQL"} />
            <SkillCardSmall name={"Oracle"} />
          </div>
        </div>
      </div>
    </section>
  );
}
