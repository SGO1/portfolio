"use client";
import NavDropdown from "../NavDropdown/NavDropdown";
import Navbar from "../Navbar/Navbar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = ({ options }) => (
  <header>
    <header className="flex justify-between pt-6 px-24 pb-2">
      <div className="invisible mr-auto xl:visible">
        <Navbar options={options} />
      </div>
      <div className="xl:invisible xl:w-0">
        <NavDropdown
          goHome={() => {
            document.location.href = "./";
          }}
          goAbout={() => {
            document.location.href = "./about";
          }}
          goProjects={() => {
            document.location.href = "./projects";
          }}
          goUses={() => {
            document.location.href = "./uses";
          }}
        />
      </div>
      <div className="w-6">
        <ThemeSwitcher darkClassName="dark" />
      </div>
    </header>
  </header>
);

export default Header;
