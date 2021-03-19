import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NYC DSA Healthcare Working Group
        </h1>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>


  )
}
