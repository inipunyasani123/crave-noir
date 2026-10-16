import HeroSection from '@/components/HeroSection'
import PlainBox from '@/components/PlainBox'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'
import ArsipTeaser from '@/components/ArsipTeaser'

/* Beranda Noir. Katalog lengkap ada di /koleksi, detail di /produk/[slug],
   perjalanan paket di /pengiriman, dan tulisan di /jurnal (Arsip).
   "Catatan Pembeli" dihapus: kutipan berinisial itu karangan, bukan dari brief. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <PlainBox />
      <CategoryGrid />
      <FeaturedProducts />
      <USPSection />
      <ArsipTeaser />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
