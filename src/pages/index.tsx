import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import Head from 'next/head'
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
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Realize o sonho de viajar para Disney"
        />
        <meta
          property="og:description"
          content="É GRÁTIS! Se inscreva e concorra à viagem dos seus sonhos para a Disney"
        />
        <meta
          property="og:image"
          content="https://www.megasonho.com.br/images/disney-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://www.megasonho.com.br" />
        <meta property="og:site_name" content="MEGASONHO" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Realize o sonho de viajar para  Walt Disney World"
        />
        <meta
          name="twitter:description"
          content="É GRÁTIS! Se inscreva e concorra à viagem dos seus sonhos para a Disney"
        />
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="É GRÁTIS! Se inscreva e concorra à viagem dos seus sonhos para a Disney com família e amigos."
        />
      </Head>
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
