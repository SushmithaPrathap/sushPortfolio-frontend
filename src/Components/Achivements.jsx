import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  {
    metric: "Courses Completed",
    value: "40",
    postfix: "+",
  },
  {
    // prefix: "~",
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
//   {
//     metric: "Certifications",
//     value: "2",
//   },
  {
    metric: "Years Of Experience",
    value: "3",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="pt-40 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#fafafa] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-2"
            >
              <h2 className="dark:text-white text-gray-900 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="dark:text-white text-gray-900 text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="dark:text-white text-gray-700 text-base text-center">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
