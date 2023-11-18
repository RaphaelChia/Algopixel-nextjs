import IndexBanner from '@/components/Banners/indexbanner'
import Methodology from '@/components/Home/Methodology'
import Provide from '@/components/Provide'
import ImgRight from '@/components/Sections/ImgRight'
import Tracks from '@/components/Tracks'
import ScrollToTopButton from '@/components/scrollup'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <IndexBanner/>
      <Tracks/>
      <Provide/>
      <Methodology/>
    </main>
  )
}
