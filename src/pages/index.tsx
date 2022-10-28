import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { NextPage } from 'next'
import { HeroSection } from '@/modules/home/components/HeroSection/HeroSection'
import { HowIsEasySection } from '@/modules/home/components/HowIsEasySection/HowIsEasySection'
const VideoSection = dynamic(
  async () =>
    await import('../modules/home/components/VideoSection/VideoSection'),
  {
    suspense: true
  }
)
const SectionFour = dynamic(
  async () =>
    await import('../modules/home/components/SectionFour/SectionFour'),
  {
    suspense: true
  }
)
const Footer = dynamic(
  async () => await import('../modules/home/components/Footer/Footer'),
  {
    suspense: true
  }
)

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <HowIsEasySection />
      <Suspense>
        <VideoSection />
        <SectionFour />
        <Footer />
      </Suspense>
    </>
  )
}

export default Home
