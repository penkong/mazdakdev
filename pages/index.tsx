import type { NextPage } from 'next'
import Head from 'next/head'

import { LayoutProvider } from '../layout/'
import { HomeProvider } from '../components/v1'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <head>
          <meta name="text" content="nane" />
          <meta name="description" content="description" />
          <meta name="keywords" content="keywords" />
          <title>Penbeh - Mazdak</title>
        </head>
      </Head>
      <LayoutProvider>
        <HomeProvider />
      </LayoutProvider>
    </>
  )
}

export default Home
