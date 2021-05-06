import Head from "next/head";
import NavMenu from "../components/navMenu";
import SplashScreen from "../components/splashScreen";
import Signup from "../components/signup";
import DonateLink from "../components/donateLink";
import Footer from "../components/footer";
import React from "react";

export default function OurWork() {
  return (<div>
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <SplashScreen />
        <p>Our Work</p>
        <Signup />
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  </div>);
}