import type { NextPage } from 'next'
import { HeroSection } from '@/modules/home/components/HeroSection/HeroSection'
import { HowIsEasySection } from '@/modules/home/components/HowIsEasySection/HowIsEasySection'
import { VideoSection } from '@/modules/home/components/VideoSection/VideoSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <HowIsEasySection />
      <VideoSection />
    </>
  )
}

export default Home
