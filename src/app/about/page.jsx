import Footer from "@/components/Footer/Footer";
import App from "./App";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <div className="lg:w-full xl:w-11/12 2xl:w-10/12 bg-white dark:bg-zinc-900">
      <Header
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About", selected: true },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <main className="px-24">
        <App
          paragraphs={[
            "Lives in Salt Lake. Is currently studying to be a Software Engineer at Ensign College. Has a passion for coding and learning new things. Loves to play video games and watch movies.",
            "Started coding/programming in 2012 with HTML, CSS, and Javascript. Has since Learned basic C# and Java. Has been working on a 2D minecraft project in JavaScript, a JavaScript emulator for the Commandore 32 Computer built in Minecraft, and minecraft server mods and datapacks.",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
          ]}
        />
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
