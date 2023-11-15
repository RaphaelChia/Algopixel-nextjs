import IndexBanner from '@/components/Banners/indexbanner'
import Tracks from '@/components/Tracks'
import ScrollToTopButton from '@/components/Others/scrollup'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <IndexBanner/>
      <Tracks/>
    </main>
  )
}
