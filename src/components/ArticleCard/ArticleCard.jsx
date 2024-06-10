import "./ArticleCard.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article data-testid={"articleCard"} className="flex flex-col px-6 py-8">
      <div className="article-card-header">
        <time
          data-testid={"articleCardDate"}
          className="text-zinc-400 text-sm uppercase border-l-2 border-solid border-zinc-200 dark:border-zinc-500 pl-2"
        >
          {date}
        </time>
        <h2
          data-testid={"articleCardTitle"}
          className="text-zinc-800 dark:text-zinc-100 text-2xl capitalize my-4 font-bold"
        >
          {title}
        </h2>
      </div>
      <p data-testid={"articleCardContent"} className="text-zinc-600 dark:text-zinc-400 text-base mb-4">
        {content}
      </p>
      <a data-testid={"articleCardLink"} href={link} className="text-purple-500 text-base font-bold hover:underline">
        Read article {">"}
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: "#",
};

export default ArticleCard;
