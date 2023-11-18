import IndexBanner from '@/components/Banners/indexbanner'
import CallToAction from '@/components/CallToAction'
import Provide from '@/components/Provide'
import Tracks from '@/components/Tracks'
import ScrollToTopButton from '@/components/scrollup'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <IndexBanner/>
      <Tracks/>
      <Provide/>
      <CallToAction/>
    </main>
  )
}
