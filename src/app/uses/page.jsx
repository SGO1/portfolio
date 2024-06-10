import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import UsesSection from "@/components/UsesSection/UsesSection";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "18” Lenovo Yoga 7i",
        description:
          "I was using an Intel-based 14” Lenovo Chromebook prior to this and the difference is night and day. The fans haven't turn on except under heavy loads I put it through.",
      },
      {
        title: "Dell D3218HN 32” Monitor",
        description:
          "I have one of these monitors and they’re great. It is a nice size to be able to watch videos on and have multiple windows open side by side.",
      },
      {
        title: "MSI Optix G274 27” 170HZ Monitor",
        description:
          "This is a great FHD gaming monitor even though it doesn't have HDR capabilities it has a matte finish, great refresh rate response time, and overall brightness.",
      },
      {
        title: "Sades SA-902 Headset",
        description:
          "I’ve been using these headphones for a few years now and they’re great. They’re comfortable and sound good. They have a built in microphone that is decent for gaming and video calls.",
      },
    ],
  },
  {
    groupName: "Development",
    items: [
      {
        title: "VS Codium",
        description:
          "I use VS Codium for all of my development work. It also doesn't have any of Microsoft's telemetry either. It’s fast, has great extensions, and is just as customizable as Microsoft's VS Code.",
      },
      {
        title: "Git",
        description:
          "I use Git as my version control system. It’s a great solution for software development.",
      },
    ],
  },
  {
    groupName: "Design",
    items: [
      {
        title: "GIMP",
        description:
          "I use GIMP for my project artwork. It’s unstable development version has an imporoved modern look.",
      },
      {
        title: "Paint.net",
        description:
          "I use Paint.net for all of my pixel art. It’s fast, has great features for making basic pixel art.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Obsidian",
        description:
          "I use Notion for some of my note-taking and knowledge management. It’s fast, and is highly customizable with community plugins.",
      },
      {
        title: "Notepad",
        description:
          "I use Notepad for my other note-taking needs. It’s fast, has basic features, and is easy to learn.",
      },
    ],
  },
];

export default function Uses() {
  return (
    <div className="lg:w-full xl:w-11/12 2xl:w-10/12 bg-white dark:bg-zinc-900">
      <Header
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses", selected: true },
        ]}
      />
      <main className="flex flex-col px-24">
        <section className="flex-1 xl:pr-4 2xl:pr-10 xl:w-9/12">
          <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl text-5xl xl:text-7xl py-8">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            A view into the tools, software, and hardware that I use on a weekly basis.
          </p>
        </section>
        <UsesSection items={items} />
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
