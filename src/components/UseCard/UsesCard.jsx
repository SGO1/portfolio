/* DON'T CHANGE ME */
import "./UsesCard.css";
import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className="flex flex-col g-y-4 w-full">
      <h3 className="text-zinc-800 dark:text-zinc-100 text-lg font-bold">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{content}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
