/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  return (
    <div className="lg:w-full xl:w-11/12 2xl:w-10/12 bg-white dark:bg-zinc-900">
      <Header
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects", selected: true },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <main className="flex flex-col px-24">
        <section className="flex-1 xl:pr-4 2xl:pr-10 xl:w-9/12">
          <h1 className="text-zinc-800 dark:text-zinc-100 text-5xl xl:text-7xl py-8">
            Things I&apos;ve made trying to put my dent in the universe.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Most projects here are not yet public, or open-source. Programming Languages are specified in each project&apos;s description.
          </p>
        </section>
        <section className="flex flex-row py-10 flex-wrap">
          {[
            {
              title: "Portfolio",
              description: "My portfolio project. [HTML, CSS, JavaScript, React, TailwindCSS, Next.js]",
              url: "https://github.com/SGO1/portfolio",
            },
            {
              title: "Amazing Minecraft",
              description: "A 2D Game inspired by Minecraft. Programmed entirely in HTML, CSS, JavaScript since approximately 2014.",
              url: "https://ensign.edu/",
            },
            {
              title: "JS Assembly",
              description: "A Emulator for the Commandore 32 Minecraft Computer built in JavaScript. [HTML, CSS, JavaScript]",
              url: "https://ensign.edu/",
            },
            {
              title: "Minecraft Warzone",
              description: "A Minecraft Server Plugin that adds a new minigame based on Halo 5's Warzone Firefight mode to Minecraft. [Java]",
              url: "https://ensign.edu/",
            },
            {
              title: "Minecraft Survival Data Pack(WIP Title)",
              description: "A Minecraft Data Pack that makes survival more difficult, but more dynamic in difficulty. [Minecraft Commands, and Data Pack JSON]",
              url: "https://ensign.edu/",
            },
            {
              title: "Minecraft Cooking Plus (Data Pack)",
              description: "A Minecraft Data Pack that expands the cooking system in Minecraft. [Minecraft Commands, and Data Pack JSON]",
              url: "https://ensign.edu/",
            }
          ].map((project, index) => (
              <section key={index} className="flex flex-col py-8 w-full lg:w-1/2 xl:w-1/3">
                <img
                  src="./svg.svg"
                  alt=""
                  className="w-8 h-8 border-2 rounded-full border-zinc-300 dark:border-zinc-600 outline-offset-2"
                />
                <div className="w-full lg:w-2/3">
                  <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 font-bold py-2">{project.title}</h2>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 py-4">{project.description}</p>
                </div>
                <a
                  href={project.url}
                  className="inline-flex items-center w-fit text-lg text-zinc-500 dark:text-zinc-400/70 my-3  hover:underline border-b-2 border-solid border-transparent hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white"
                >
                  <img src="./link.svg" alt="View the Project" className="p-px" />
                  {project.url}
                </a>
              </section>
            ))}
        </section>
      </main>
      <Footer
        links={[
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Projects", url: "/projects" },
          { title: "Uses", url: "/uses" },
        ]}
      />
    </div>
  );
}
