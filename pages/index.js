import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import NavMenu from "../components/navMenu";
import SplashScreen from "../components/splashScreen";
import Footer from "../components/footer";
// import SocialMedia from "../components/socialMedia";
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

      <header >
      <nav  >
        <NavMenu />
      </nav>
        <SplashScreen />
      </header>

      <main>
        <UpComingEvents />
        <RecentPress/>
        <Signup />
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>


  )
}
