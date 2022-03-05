import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Head from "next/head";

export default function contact() {
  return (
    <div>
      <Head>
        <title>Myverse | Contact</title>
      </Head>
      <Navbar />
      <Contact />
    </div>
  );
}
