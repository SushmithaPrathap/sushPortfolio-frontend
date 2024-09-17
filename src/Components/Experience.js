import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline, MdSchool } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Experience = () => {
  return (
    <section className="min-h-screen">
      <h3 className="text-3xl py-10 mb-0 pb-0 text-gray-800 dark:text-white">
        My Experience
      </h3>
      <h4 className="text-md py-10 mt-0 pt-2 text-gray-800 dark:text-white">
        Let's get cracking
      </h4>

      <div className="z-1">
        <VerticalTimeline lineColor="#4c4c4c">
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Jul 2024 - present"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
            Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
            KeelWorks, Oak Harbor, WA
            </h4>
            {/* <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Mar 2024 - Jun 2024"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
            Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
            One Community Global, San Gabriel, CA
            </h4>
            {/* <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="May 2023 - May 2024"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Counter Position and Barista - Part Time
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tatte Bakery and Cafe, Northeastern University, Boston, MA
            </h4>
            {/* <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Sept 2022 - May 2024"
            iconStyle={{ background: "teal", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science in Information Systems
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northeastern University, Boston, MA
            </h4>
            {/* <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Nov 2020 - Apr 2021"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h4 className="vertical-timeline-element-title">
              Freelance Software Developer
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Yujana Infomedia, Bangalore
            </h4>

            {/* <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Jun 2020 - Jul 2022"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mumuration Solutions private limited, Bangalore
            </h4>
            {/* <p>Front-end components, User Experience, Visual Design</p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Jan 2019 - Feb 2020"
            iconStyle={{ background: "#374151", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h4 className="vertical-timeline-element-title">
              Software Developer
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
            Enmarq Technologies, Bangalore
            </h4>

            {/* <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#374151", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid #374151" }}
            date="Aug 2016 - May 2020"
            iconStyle={{ background: "teal", color: "#fff" }}
            icon={<MdSchool />}
            dateClassName={"text-white"}
        //    className="flex flex-row justify-between items-center bg-slate-600 "
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering in Computer Science Engineering
            </h3>
            <p>Nagarjuna College of Engineering and Technology</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "burlywood", color: "#fff" }}
            icon={<AiFillStar />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
