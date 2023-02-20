

export const SkillCard = ({name}) => {
  return (
    <div className="rounded-lg m-1 flex flex-col justify-start items-center ">
      <h4 className="text-2xl py-2 dark:text-white text-gray-600">{name}</h4>
    </div>
  );
};

export const SkillCardSmall = ({ name }) => {
  return (
    <div className="dark:bg-white bg-gray-700 rounded-lg m-1 flex flex-col justify-center items-center ">
      <h4 className="text-lg py-2 px-6 dark:text-gray-600 text-white">{name}</h4>
    </div>
  );
};
