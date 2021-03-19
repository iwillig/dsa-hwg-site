import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';
import { css, cx } from '@emotion/css'


export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <ul>
          <li>Our Work</li>
          <li>Resources</li>
          <li>About</li>
          <li>Media</li>
          <li>Contact</li>
        </ul>

        <ul>
          <SocialIcon url="https://twitter.com/nycdsa_health" />
          <SocialIcon url="https://www.facebook.com/nycdsahealthcarewg" />
        </ul>

        <h1 className={styles.title}>
          NYC DSA Healthcare Working Group
        </h1>

        <h2>Upcoming Events</h2>


      </main>

      <footer className={styles.footer}>

      </footer>

    </div>


  )
}
