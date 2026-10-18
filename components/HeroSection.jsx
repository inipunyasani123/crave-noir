import Image from 'next/image'
import Link from 'next/link'

const jaminan = [
  ['Kemasan', 'Polos, tanpa merek'],
  ['Material', 'Medical-grade, bebas BPA'],
  ['Dukungan', 'Dijawab manusia'],
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-[28rem]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <p className="micro mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-neon">
            Positive Crave
            <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
            <span className="text-ash">Untuk pasangan</span>
          </p>

          <h1 className="text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[4.2rem]">
            Explore Pleasure,
            <br />
            Together.
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-ash">
            Perlengkapan keintiman yang dipilih dengan selera — untuk pasangan yang ingin lebih
            dekat, lebih berani mencoba, dan tetap merasa aman. Dikirim dalam kotak polos yang
            tidak memberi tahu siapa pun apa isinya.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/koleksi"
              className="inline-flex items-center justify-center bg-neon px-8 py-4 text-sm font-bold text-void transition-colors duration-300 hover:bg-chalk"
            >
              Lihat Koleksi
            </Link>
            <Link
              href="/pengiriman"
              className="inline-flex items-center justify-center border border-chalk/25 px-8 py-4 text-sm font-bold text-chalk transition-colors duration-300 hover:border-chalk/60"
            >
              Bagaimana paketnya dikirim?
            </Link>
          </div>

          <dl className="mt-14 grid gap-7 border-t border-chalk/12 pt-8 sm:grid-cols-3">
            {jaminan.map(([k, v]) => (
              <div key={k}>
                <dt className="micro text-ash">{k}</dt>
                <dd className="mt-2.5 text-sm font-semibold text-chalk">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Gambar produk, dengan pita sensor sebagai motif */}
        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-void-2">
            <Image
              src="/images/hero.webp"
              alt="Dua tangan bergandengan, satu menuntun yang lain melewati bayangan daun, foto hitam-putih"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <figcaption className="absolute -bottom-5 left-5 flex items-center gap-3.5 bg-void px-5 py-4 sm:left-8">
            <span aria-hidden="true" className="h-9 w-9 shrink-0 bg-kraft" />
            <span>
              <span className="micro block text-ash">Dikirim sebagai</span>
              <span className="mt-1 block text-sm font-semibold text-chalk">
                Kotak cokelat polos
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
