/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";

const SkillsWidget = ({ title, content, skills }) => {
  return (
    //Write your code here
    <section
      data-testid="skillsWidget"
      className="flex flex-col p-6 border-2 border-solid border-zinc-100 dark:border-zinc-700/40 rounded-md w-full gap-y-3 xl:max-w-md"
    >
      <h2 data-testid="skillsWidgetTitle" className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <p data-testid="skillsWidgetContent" className="text-base text-zinc-600 dark:text-zinc-400">
        {content}
      </p>
      <ul className="flex flex-col gap-y-6">
        {skills.map((skill, index) => (
          <li key={index} data-testid={`skillsWidgetItem${index}`}>
            <div className="flex flex-row gap-x-2 items-center">
              <img
                src={`./${skill.icon}`}
                alt={skill.name}
                data-testid={`skillsWidgetItemLogo${index}`}
                className="w-14 h-14 dark:border-2 border-solid rounded-full dark:border-zinc-700/40 dark:bg-zinc-800"
              />
              <div className="flex-grow flex flex-col gap-y-1">
                <h3
                  data-testid={`skillsWidgetItemName${index}`}
                  className="flex-shrink text-base font-bold text-zinc-900 dark:text-zinc-100"
                >
                  {skill.name}
                </h3>
                <div className="flex flex-row gap-x-2 items-center h-8 bg-zinc-900/10 dark:bg-zinc-700/40 rounded-md">
                  <div
                    data-testid={`skillsWidgetItemProficiency${index}`}
                    className="h-full bg-purple-500 dark:bg-purple-600 rounded-md"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
