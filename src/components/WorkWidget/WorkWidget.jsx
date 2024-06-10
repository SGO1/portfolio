import "./WorkWidget.css";
import PropTypes from "prop-types";

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section
      data-testid="workWidget"
      className="work-widget flex flex-col p-6 border-2 border-solid border-zinc-100 dark:border-zinc-700/40 rounded-md w-full xl:max-w-md gap-y-3"
    >
      <h2 data-testid="workWidgetTitle" className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <p data-testid="workWidgetContent" className="text-base text-zinc-600 dark:text-zinc-400">
        {content}
      </p>
      <ul className="flex flex-col gap-y-6">
        {experiences.map((value, index) => (
          <li data-testid={`workWidgetItem${index}`} key={index}>
            <div className="flex flex-row gap-x-2 items-center">
              <img
                data-testid={`workWidgetItemLogo${index}`}
                src={/* /public */ `/${value.logo}.png`}
                alt={`${value.organization} Logo`}
                className="w-10 h-10 rounded-full dark:bg-zinc-800 dark:border-zinc-700/40 border-solid border-2"
              />
              <div className="flex-grow flex flex-col gap-y-1">
                <h3
                  data-testid={`workWidgetItemTitle${index}`}
                  className="flex-shrink text-base font-bold text-zinc-900 dark:text-zinc-100"
                >
                  {value.organization}
                </h3>
                <div className="flex flex-row justify-between items-center">
                  <p
                    data-testid={`workWidgetItemContent${index}`}
                    className="text-xs uppercase text-zinc-500 dark:text-zinc-400"
                  >
                    {value.jobTitle}
                  </p>
                  <span
                    data-testid={`workWidgetItemDates${index}`}
                    className="text-sm text-zinc-400 dark:text-zinc-500"
                  >
                    {value.startYear}-{value.endYear}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
