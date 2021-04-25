import Head from 'next/head'
import React from "react";
import Footer from "../components/footer";
import Image from 'next/image'
import NavMenu from "../components/navMenu";

export default function Home() {

  return (
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <Image
          src="/kingsbrook.png"
          alt="Kingsbrook QR Code"
          layout="responsive"
          width={500}
          height={500}
        />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>


  )
}
