import PropTypes from "prop-types";

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid={"footer"}
      className="footer flex flex-row justify-between justify-items-center bg-white border-t-zinc-100 dark:bg-zinc-900 dark:border-t-zinc-700/40 px-10 py-6"
    >
      <ul className="flex flex-row items-center gap-x-6">
        {links.map((link, index) => (
          <li data-testid={`footerLink${index}`} key={index}>
            <a
              href={`.${link.url}`}
              key={index}
              className="text-zinc-800 no-underline hover:text-zinc-400 active:text-purple-500 dark:text-zinc-300 dark:hover:text-zinc-500 dark:active:text-purple-400"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent" className="text-zinc-400 dark:text-zinc-500">
        &copy; {year}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
