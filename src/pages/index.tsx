import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { HeroSection } from '@/modules/home/components/HeroSection/HeroSection'
import { HowIsEasySection } from '@/modules/home/components/HowIsEasySection/HowIsEasySection'
import VideoSection from '@/modules/home/components/VideoSection/VideoSection'

const SectionFour = dynamic(
  async () =>
    await import('../modules/home/components/SectionFour/SectionFour'),
  {
    suspense: true
  }
)
const Footer = dynamic(
  async () => await import('../shared/components/Footer/Footer'),
  {
    suspense: true
  }
)

const Home: NextPage = () => {
  const [isRenderVideo, setIsRenderVideo] = useState(false)
  useEffect(() => {
    setIsRenderVideo(true)
  }, [])

  return (
    <>
      <HeroSection />
      <HowIsEasySection />

      {isRenderVideo && <VideoSection />}

      <Suspense>
        <SectionFour />
        <Footer />
      </Suspense>
    </>
  )
}

export default Home
