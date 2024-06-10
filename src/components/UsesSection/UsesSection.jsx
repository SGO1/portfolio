import "./UsesSection.css";
import PropTypes from "prop-types";
import UseCard from "../UseCard/UsesCard.jsx";

const UsesSection = ({ items }) => (
  <section className="flex flex-col py-10">
    <div className="flex flex-col gap-y-16">
      {items.map((group, index) => (
        <div
          className="flex flex-row justify-start gap-x-8 pl-4 border-solid border-l-2 border-zinc-400/40"
          key={index}
        >
          <h2 className="text-lg font-bold min-w-32 text-zinc-800 dark:text-zinc-100">{group.groupName}</h2>
          <div className="flex flex-col gap-y-8">
            {group.items.map((item, index) => (
              <UseCard title={item.title} content={item.description} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
