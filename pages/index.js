import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erickson | Front-End Developer</title>
        <link rel="icon" href="/assets/navLogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ericksonguinto.vercel.app/" />
        <meta
          property="og:description"
          content="Erickson Guinto's Portfolio Website"
        />
        <meta property="og:image" content="/previewImage.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
