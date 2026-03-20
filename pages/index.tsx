import type { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import BackgroundParticleImage from '../components/BackgroundParticleImage'
import SEO from '../components/SEO'

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <BackgroundParticleImage />
      </main>
    </div>
  )
}

export default Home;
