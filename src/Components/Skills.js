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
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Front-end Technologies"} />
            <SkillCardSmall name={"HTML"} />
            <SkillCardSmall name={"CSS"} />
            <SkillCardSmall name={"JavaScript"} />
            <SkillCardSmall name={"React JS"} />
            <SkillCardSmall name={"Tailwind CSS"} />
            <SkillCardSmall name={"NEXT JS"} />
            <SkillCardSmall name={"Material UI"} />
            <SkillCardSmall name={"Redux"} />
            <SkillCardSmall name={"React Native"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Back-end Technologies"} />
            <SkillCardSmall name={"Node JS"} />
            <SkillCardSmall name={"Express JS"} />
            <SkillCardSmall name={"Java"} />
            <SkillCardSmall name={"python"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Cloud Technologies"} />
            <SkillCardSmall name={"AWS"} />
            <SkillCardSmall name={"Docker"} />
            <SkillCardSmall name={"Kubernetes"} />
            <SkillCardSmall name={"Terraform"} />
            <SkillCardSmall name={"Pulumi"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"DevOps and CI/CD"} />
            <SkillCardSmall name={"Git"} />
            <SkillCardSmall name={"Github and Github Actions"} />
            <SkillCardSmall name={"Packer"} />
            <SkillCardSmall name={"Jenkins"} />
            <SkillCardSmall name={"Jira"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Networking"} />
            <SkillCardSmall name={"DNS"} />
            <SkillCardSmall name={"TCP/IP"} />
            <SkillCardSmall name={"Nginx"} />
            <SkillCardSmall name={"python"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Databases"} />
            <SkillCardSmall name={"MySQL"} />
            <SkillCardSmall name={"MongoDB"} />
            <SkillCardSmall name={"PostgreSQL"} />
            <SkillCardSmall name={"Oracle"} />
            <SkillCardSmall name={"NoSQL"} />
          </div>
          <div className="flex gap-5 py-4 lg:py-5 flex-row flex-wrap justify-start items-center">
            <SkillCard name={"Other Techincal Skills"} />
            <SkillCardSmall name={"RESTful APIs"} />
            <SkillCardSmall name={"GraphQL"} />
            <SkillCardSmall name={"UI/UX Design"} />
            <SkillCardSmall name={"Design Theory"} />
            <SkillCardSmall name={"Linux"} />
            <SkillCardSmall name={"CI/CD Technology"} />
            <SkillCardSmall name={"MVC Architecture"} />
            <SkillCardSmall name={"SEO"} />
            <SkillCardSmall name={"GIT"} />
            <SkillCardSmall name={"AWS"} />
          </div>
        </div>
      </div>
    </section>
  );
}
