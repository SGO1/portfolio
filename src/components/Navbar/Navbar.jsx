import PropTypes from "prop-types";

function Navbar({ options }) {
  const content = options
    ? options.map((page, index) => {
        return (
          <li data-testid={`li${index}`} key={index}>
            <a
              data-testid={`a${index}`}
              className={`${
                typeof page.selected !== "undefined"
                  ? "text-purple-500 dark:text-purple-500 underline decoration-1 hover:decoration-2"
                  : "text-zinc-800 dark:text-zinc-300 "
              } text-lg mx-4 underline-offset-4 hover:underline hover:decoration-purple-500 hover:decoration-2 active:text-purple-300 active:no-underline dark:hover:decoration-purple-400 dark:active:text-purple-300`}
              href={`.${page.path}`}
            >
              {page.label}
            </a>
          </li>
        );
      })
    : "";
  return (
    <nav
      data-testid="nav"
      className="inline-block border-b-4 border-purple-800 dark:border-purple-300 max-h-10 mx-2"
    >
      <ul data-testid="ul" className="inline-flex gap-x-6 px-6 justify-center items-center h-9">
        {content}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,
};

export default Navbar;
