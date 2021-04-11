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

const OurHistory = () => {
  return (<div>
    <h3>Our History</h3>
    <p></p>
  </div>)
}

const Value = (props) => {
  return (<li>
    <div>
      <p>{props.value.displayName}</p>
    </div>
  </li>)
}

const OurValues = (props) => {
  return (<div>
    <h3>Our Values</h3>
    <ol>
      {props.ourValues.map((value) => {
        return <Value key={value.displayName} value={value} />
      })}
    </ol>
  </div>)
}

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
        <OurValues ourValues={renderInformation.aboutPage.ourValues}/>
        <OurHistory />
        <Signup />
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  </div>);
}