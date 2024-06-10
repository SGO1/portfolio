import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import ArticleCard from "@/components/ArticleCard/ArticleCard.jsx";
import SignupWidget from "@/components/SignupWidget/SignupWidget.jsx";
import WorkWidget from "@/components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget.jsx";
import Header from "@/components/Header/Header.jsx";

const articles = [
  {
    date: "June 02, 2024",
    title: "Math Bug Fixed.",
    content:
      "I was able to solve a complex math bug that cause programs made for version 3.0 of the Commandore 32 emulator to not compile properly.",
    link: "https://ensign.edu",
  },
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];

const skills = [
  { name: "HTML", proficiency: 75, icon: "html5.png" },
  { name: "CSS", proficiency: 40, icon: "css3.png" },
  { name: "JavaScript", proficiency: 80, icon: "javascript.png" },
];

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <Header
        options={[
          { path: "/", label: "Home", selected: true },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <main className="px-24">
        <section className="flex flex-row">
          <ProjectCard
            name="Spencer Olsen"
            logo="/me_icon.png"
            content="Lives in Salt Lake. Has been programming since 2012. Has studied vanilla Javascript, React, Java, and C#. Understands data structures. Has been working on a 2D minecraft project in JavaScript, and a JavaScript emulator for the Commandore 32 Computer built in Minecraft."
            link="https://github.com/SGO1"
            className="w-2/3"
          />
        </section>
        <section className="flex flex-row flex-wrap justify-between">
          <div className="w-full xl:w-6/12">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
          </div>
          <aside className="flex flex-col gap-y-5">
            <SignupWidget
              title="Stay up to date"
              content="Get notified when I publish new articles, updates, or products, and unsubscribe at any time."
            />
            <WorkWidget
              title={"Programming Languages"}
              content={"My programming Language experience."}
              experiences={[
                {
                  logo: "./react",
                  organization: "React",
                  jobTitle: "School Work",
                  startYear: 2024,
                  endYear: null,
                },
                {
                  logo: "./javascript",
                  organization: "Vanilla JavaScript",
                  jobTitle: "Tinker/Hobbyist",
                  startYear: 2012,
                  endYear: null,
                },
                {
                  logo: "./java",
                  organization: "Java",
                  jobTitle: "School Work and Hobby",
                  startYear: 2016,
                  endYear: 2024,
                },
                {
                  logo: "./csharp",
                  organization: "C#",
                  jobTitle: "School Work",
                  startYear: 2015,
                  endYear: 2016,
                },
              ]}
            />
            <SkillsWidget
              title="Skills"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
              skills={skills}
            />
          </aside>
        </section>
      </main>
      <Footer
        links={[
          { title: "Home", url: "./" },
          { title: "About", url: "./about" },
          { title: "Projects", url: "./projects" },
          { title: "Uses", url: "./uses" },
        ]}
      />
    </div>
  );
}

export default App;
