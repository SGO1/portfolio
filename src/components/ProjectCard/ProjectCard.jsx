import PropTypes from "prop-types";

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div data-testid="projectCard" className="flex flex-col p-6 w-full xl:w-2/3 gap-3">
      <div>
        <img src={logo} alt="name" data-testid="projectCardLogo" className="w-16 h-16 rounded-full p-1" />
        <h1 data-testid="projectCardName" className="my-6 text-5xl font-bold text-zinc-800 dark:text-zinc-100">
          {name}
        </h1>
      </div>
      <div>
        <p
          data-testid="projectCardContent"
          className="text-base text-zinc-600 dark:text-zinc-400 overflow-hidden flex flex-col pb-3"
        >
          {content}
        </p>
        <a
          href={link}
          data-testid="projectCardLink"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-base text-zinc-500 dark:text-zinc-400/70 hover:underline pb-1 border-b-2 border-solid border-transparent hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white"
        >
          <img src="/github.svg" alt="" className="w-6 h-6 mr-2" />
          View Public Projects
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
