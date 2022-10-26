import type { NextPage } from 'next'
import { HeroSection } from '@/modules/home/components/HeroSection/HeroSection'
import { HowIsEasySection } from '@/modules/home/components/HowIsEasySection/HowIsEasySection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <HowIsEasySection />
    </>
  )
}

export default Home
