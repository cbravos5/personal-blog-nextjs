import type { NextPage } from "next";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <main className="home">
      <div className="name">
        <h1>Hi, I&apos;m Chrystopher</h1>
      </div>
      <h3 className="description">
        Typescript, React, Next.js... Here you&apos;ll learn fullstack tips and
        dive into the newest technologies of the web development world.
      </h3>
      <div className="button-container">
        <Button label="FEATURED" />
        <Button label="ALL POSTS" />
        <Button label="CONTACT" />
      </div>
    </main>
  );
};

export default Home;
