import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { PRODUK } from '@/lib/katalog'

export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan)

  return (
    <section id="produk" className="relative overflow-hidden bg-void-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-xl">
            <p className="micro mb-5 text-neon">Paling sering dipesan</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Tiga yang paling aman dicoba lebih dulu</h2>
          </div>
          <Link href="/koleksi" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
            Lihat semua
          </Link>
        </div>

        {/* Ponsel: tiga kartu dijajar mendatar (geser) — tiga foto persegi selebar
            layar dulu memanjangkan beranda hampir dua layar. */}
        <ul className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-1 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {unggulan.map((p) => (
            <li key={p.slug} className="w-[72%] shrink-0 snap-start md:w-auto"><ProductCard p={p} sizes="(min-width: 768px) 33vw, 72vw" /></li>
          ))}
        </ul>

        <p className="micro mt-8 leading-[1.7] text-ash">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
