import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Myverse | About</title>
      </Head>
      <Navbar />
      <About />
    </div>
  );
}
