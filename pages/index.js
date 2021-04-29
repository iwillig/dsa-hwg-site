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
import {getAllEvents} from "../src/modules/action-network/getCampaignEvents";

export default function Home(props) {

  return (
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <SplashScreen />
        <UpComingEvents events={props.events}/>
        <DonateLink />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>


  )
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events
    },
    revalidate: 3600
  };
};
