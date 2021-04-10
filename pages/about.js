import Head from "next/head";
import NavMenu from "../components/navMenu";
import SocialMedia from "../components/socialMedia";
import SplashScreen from "../components/splashScreen";
import AboutInfo from "../components/aboutInfo";
import AboutDSA from "../components/aboutDSA";
import Signup from "../components/signup";
import DonateLink from "../components/donateLink";
import Footer from "../components/footer";
import React from "react";
import {renderInformation} from "../data/displayData";

export default function About() {
  return (<div>
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <SplashScreen />
        <AboutInfo description={renderInformation.aboutPage.description}/>
        <AboutDSA />
        <Signup />
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  </div>);
}