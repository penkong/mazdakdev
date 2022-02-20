import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="text" content="nane" />
        <meta name="description" content="description" />
        <meta name="keywords" content="keywords" />
        <title>Penbeh - Mazdak</title>
      </Head>
      {/* <LayoutProvider>
        <HomeProvider />
      </LayoutProvider> */}
      <div className={styles.main}>
        <div>in persian we say : the potter drink from broken jar!</div>
        <div>currently dont have time to make beauty for myself</div>
        <div>mail : nazemi.works@gmail.com</div>
        <div>Best!</div>
      </div>
    </>
  )
}

export default Home
