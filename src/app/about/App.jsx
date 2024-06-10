/* eslint-disable @next/next/no-img-element */
import ContactMe from "@/components/ContactMe/ContactMe";

const App = ({ paragraphs = [] }) => (
  <section className="flex flex-col xl:flex-row-reverse flex-wrap">
    <section className="w-full h-full flex-1 xl:pr-4 2xl:pl-10 ">
      <img src="/me_big.png" alt="Me" className="w-full h-full" />
      <section className="invisible xl:visible h-0 xl:h-auto">
        <ContactMe />
      </section>
    </section>
    <section className="flex-1 xl:pr-4 2xl:pr-10">
      <h1 className="flex-1 text-5xl xl:text-7xl font-bold text-zinc-800 dark:text-zinc-100 w-full">
        I&apos;m Spencer. I live in Salt Lake, where I develop the future
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg py-8 text-zinc-600 dark:text-zinc-400">
          {paragraph}
        </p>
      ))}
      {/* <p className="text-lg">I'm a software engineer with a passion for writing clean, efficient code. I'm currently working at Slack, where I'm building the next generation of tools for remote teams.</p> */}
    </section>
    <section className="xl:hidden">
      {/*order-1 sm:order-2*/}
      <ContactMe />
    </section>
  </section>
);

export default App;
