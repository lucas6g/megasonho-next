import type { NextPage } from 'next'
import { HeroSection } from '@/modules/home/components/HeroSection/HeroSection'
import { HowIsEasySection } from '@/modules/home/components/HowIsEasySection/HowIsEasySection'
import { VideoSection } from '@/modules/home/components/VideoSection/VideoSection'
import { SectionFour } from '@/modules/home/components/SectionFour/SectionFour'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <HowIsEasySection />
      <VideoSection />
      <SectionFour />
    </>
  )
}

export default Home
