"use client";
import { useState } from "react";
// import "./NavDropdown.module.css";
import PropTypes from "prop-types";

const Dropdown = ({ goHome, goAbout, goProjects, goUses }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div data-testid={"dropdown"} className="relative">
      <button
        data-testid={"menuButton"}
        className={`px-4 py-2 mt-2 mx-2 min-w-24 font-base cursor-pointer bg-white/90 dark:bg-zinc-800/90 border-2 border-solid border-purple-800 dark:border-purple-300 ${
          !isOpen && "rounded-3xl"
        } ${isOpen && "rounded-t-3xl"} text-zinc-800 dark:text-zinc-200 font-bold`}
        onClick={toggleOpen}
      >
        Menu ▾
      </button>
      {isOpen && (
        <div className="min-w-24 mx-2 rounded-b-3xl absolute z-10 overflow-hidden bg-white/90 dark:bg-zinc-800/90 border-2 border-solid border-purple-800 dark:border-purple-300">
          <button data-testid="homeButton" className={`dropdown-item`} onClick={goHome}>
            Home
          </button>
          <button data-testid="aboutButton" className={`dropdown-item`} onClick={goAbout}>
            About
          </button>
          <button data-testid="projectsButton" className={`dropdown-item`} onClick={goProjects}>
            Projects
          </button>
          <button data-testid="usesButton" className={`dropdown-item`} onClick={goUses}>
            Uses
          </button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onPreview: PropTypes.func,
  onEdit: PropTypes.func,
  onClone: PropTypes.func,
  onDelete: PropTypes.func,
};

Dropdown.defaultProps = {
  onPreview: () => {},
  onEdit: () => {},
  onClone: () => {},
  onDelete: () => {},
};

export default Dropdown;
