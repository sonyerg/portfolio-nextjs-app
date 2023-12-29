import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erickson | Front-End Developer</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
