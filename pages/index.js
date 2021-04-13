import Head from 'next/head'
import React from "react";
import NavMenu from "../components/navMenu";
import SplashScreen from "../components/splashScreen";
import Footer from "../components/footer";
import SocialMedia from "../components/socialMedia";
import UpComingEvents from "../components/upcomingEvents";
import RecentPress from "../components/recentPress";
import Signup from "../components/signup";
import DonateLink from "../components/donateLink";

export default function Home() {

  return (
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <SplashScreen />
        <UpComingEvents />
        <Signup />
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>


  )
}
