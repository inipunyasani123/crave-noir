import Link from 'next/link'
import Koleksi from '@/components/Koleksi'
import { PRODUK } from '@/lib/katalog'

export const metadata = {
  title: 'Koleksi — Positive Crave',
  description:
    'Seluruh koleksi Positive Crave, disaring menurut situasi: untuk berdua, baru pertama, jarak jauh, dan perawatan. Semua dikirim dalam kotak cokelat polos.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/koleksi' },
}

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Koleksi Positive Crave',
  itemListElement: PRODUK.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://crave-noir.pintuweb.id/produk/${p.slug}`,
    name: p.nama,
  })),
}

export default function KoleksiPage() {
  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="micro mb-5 flex items-center gap-3 text-neon">
              Koleksi
              <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
              <span className="text-ash">{PRODUK.length} barang</span>
            </p>
            <h1 className="text-[2.4rem] leading-[1] md:text-[3.4rem]">
              Dipilih menurut situasi,
              <br />
              <span className="text-neon">bukan menurut bentuknya.</span>
            </h1>
          </div>
          <p className="max-w-md leading-relaxed text-ash">
            Kebanyakan toko mengelompokkan barang seperti katalog teknik. Kami mengelompokkannya
            menurut pertanyaan yang sebenarnya Anda tanyakan: untuk siapa, dan seberapa jauh.
            Setiap barang dikirim dalam{' '}
            <Link href="/pengiriman" className="text-chalk underline decoration-kraft underline-offset-4 hover:text-neon">
              kotak cokelat polos
            </Link>
            .
          </p>
        </div>

        <div className="mt-14">
          <h2 className="sr-only">Daftar barang</h2>
          <Koleksi />
        </div>

        <p className="micro mt-12 leading-[1.7] text-ash">
          Nama, harga, dan spesifikasi di halaman ini adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  )
}
