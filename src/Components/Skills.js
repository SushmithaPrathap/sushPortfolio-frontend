import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import reaxt from "../assets/reaxt.png";
import sql from "../assets/sql.png";
import java from "../assets/java.png";
import express from "../assets/express.png";
import python from "../assets/python.png";

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
            <SkillCardSmall image={html} name={"HTML"} />
            <SkillCardSmall image={css} name={"CSS"} />
            <SkillCardSmall image={javascript} name={"JavaScript"} />
            <SkillCardSmall image={reaxt} name={"React JS"} />
            <SkillCardSmall image={tailwind} name={"Tailwind CSS"} />
            <SkillCardSmall image={next} name={"NEXT JS"} />
            <SkillCardSmall image={next} name={"Material UI"} />
          </div>
          <div className="flex gap-5 py-8 lg:py-10 flex-row flex-wrap justify-start items-center">
          <SkillCard name={"Back-end Technologies"} />
            <SkillCardSmall image={node} name={"Node JS"} />
            <SkillCardSmall image={express} name={"Express JS"} />
            <SkillCardSmall image={java} name={"Java"} />
            <SkillCardSmall image={python} name={"python"} />
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
