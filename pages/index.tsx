import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Agustín</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='h-screen pt-20 px-2 pb-2 lg:pt-36'>
        <HeroSection />
      </main>
    </div>
  )
}

export default Home;
