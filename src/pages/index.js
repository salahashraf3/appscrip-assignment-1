import EarnNow from "@/components/EarnNow/EarnNow";
import Elevate from "@/components/Elevate/Elevate";
import Elevate2 from "@/components/Elevate2/Elevate2";
import Footer from "@/components/Footer/Footer";
import GirlsBanner from "@/components/GirlsBanner/GirlsBanner";
import Hero from "@/components/Hero/Hero";
import Join from "@/components/Join/Join";
import Learn from "@/components/Learn/Learn";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LOGO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Elevate />
        <Elevate2 />
        <Join />
        <GirlsBanner />
        <EarnNow />
        <Learn />
        <Footer/>
      </main>
    </>
  );
}