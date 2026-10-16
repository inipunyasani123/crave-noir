import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { PENGIRIM, PRODUK, labelSituasi, produkBySlug, rupiah } from '@/lib/katalog'
import { meta, SITE } from '@/lib/seo'

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) return {}
  // Deskripsi lengkap bila muat 155 karakter; bila tidak, cukup ringkasan + kotak polos.
  const panjang = `${p.ringkas} Dikirim dalam kotak cokelat polos ${p.kotak.ukuran}, tanpa nama merek di resi.`
  const pendek = `${p.ringkas} Dikirim dalam kotak cokelat polos.`
  return meta({ title: p.nama, description: panjang.length <= 155 ? panjang : pendek.length <= 155 ? pendek : p.ringkas, path: `/produk/${p.slug}` })
}

export default async function ProdukPage({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) notFound()

  const serupa = PRODUK.filter((x) => x.slug !== p.slug && x.situasi === p.situasi).slice(0, 3)
  const lain = serupa.length ? serupa : PRODUK.filter((x) => x.slug !== p.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nama,
    description: p.ringkas,
    image: `${SITE}${p.image}`,
    offers: { '@type': 'Offer', priceCurrency: 'IDR', price: p.harga, availability: 'https://schema.org/InStock' },
  }

  return (
    <>
      <section className="relative overflow-clip bg-void pt-28 pb-20 md:pt-36 md:pb-24">
        <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-ash">
            <Link href="/" className="transition-colors hover:text-neon">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/koleksi#${p.situasi}`} className="transition-colors hover:text-neon">{labelSituasi(p.situasi)}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-chalk" aria-current="page">{p.nama}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-square overflow-hidden border border-chalk/10 bg-void-2">
                <Image src={p.image} alt={p.nama} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="micro mb-4 flex flex-wrap items-center gap-3 text-neon">
                Tingkat {p.tingkat.toLowerCase()}
                <span aria-hidden="true" className="redact h-2.5 w-6 text-chalk/25" />
                <span className="text-ash">{labelSituasi(p.situasi)}</span>
              </p>
              <h1 className="text-[2.4rem] leading-[1.02] md:text-[3.1rem]">{p.nama}</h1>

              <div className="mt-6 space-y-4 leading-relaxed text-ash">
                {p.cerita.map((c) => <p key={c.slice(0, 24)}>{c}</p>)}
              </div>

              <p className="mt-8 text-3xl font-extrabold tracking-tight text-chalk">{rupiah(p.harga)}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/checkout?produk=${p.slug}`}
                  className="inline-flex flex-1 items-center justify-center bg-neon px-8 py-4 text-sm font-bold text-void transition-colors duration-300 hover:bg-chalk"
                >
                  Pesan dalam kotak polos
                </Link>
                <Link
                  href="/#kontak"
                  className="inline-flex items-center justify-center border border-chalk/25 px-8 py-4 text-sm font-bold text-chalk transition-colors duration-300 hover:border-chalk/60"
                >
                  Tanya dulu
                </Link>
              </div>

              {/* Label resi — yang akan tercetak di paket barang ini */}
              <figure className="mt-10 border border-chalk/10 bg-void-2">
                <figcaption className="flex items-center justify-between border-b border-chalk/10 px-6 py-4">
                  <span className="micro text-chalk">Label resi untuk barang ini</span>
                  <Link href="/pengiriman" className="micro text-neon hover:text-chalk">Lihat perjalanannya →</Link>
                </figcaption>
                <div className="grid gap-6 p-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                  <div aria-hidden="true" className="kraft-grain relative aspect-[4/3] bg-kraft/85 sm:aspect-square">
                    <span className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 bg-kraft" />
                    <span className="absolute right-2 bottom-2 left-2 bg-chalk/95 p-1.5">
                      <span className="redact block h-1 w-full text-void/25" />
                      <span className="redact mt-1 block h-1 w-2/3 text-void/25" />
                    </span>
                  </div>
                  <dl className="divide-y divide-chalk/10 text-sm">
                    {[
                      ['Pengirim', PENGIRIM],
                      ['Isi paket', 'Perlengkapan pribadi'],
                      ['Ukuran kotak', p.kotak.ukuran],
                      ['Berat', p.kotak.berat],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0">
                        <dt className="micro text-ash">{k}</dt>
                        <dd className="text-right font-semibold text-chalk">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </figure>

              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="micro mb-4 text-chalk">Spesifikasi</h2>
                  <dl className="divide-y divide-chalk/10 border-t border-chalk/10">
                    {p.spek.map(([k, v]) => (
                      <div key={k} className="py-3">
                        <dt className="micro text-ash">{k}</dt>
                        <dd className="mt-1 text-sm text-chalk">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h2 className="micro mb-4 text-chalk">Di dalam kotak</h2>
                  <ul className="divide-y divide-chalk/10 border-t border-chalk/10">
                    {p.isiKotak.map((x, i) => (
                      <li key={x} className="flex gap-4 py-3 text-sm text-chalk">
                        <span className="micro pt-0.5 text-neon">{String(i + 1).padStart(2, '0')}</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="micro mt-10 leading-[1.7] text-ash">
                Nama, harga, dan spesifikasi di atas adalah contoh untuk keperluan purwarupa desain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-chalk/10 bg-void-2 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-[1.8rem] leading-[1.1] md:text-[2.3rem]">
              {serupa.length ? `Juga ${labelSituasi(p.situasi).toLowerCase()}` : 'Mungkin juga cocok'}
            </h2>
            <Link href="/koleksi" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon hover:border-neon">
              Seluruh koleksi
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {lain.map((x) => (
              <li key={x.slug}><ProductCard p={x} /></li>
            ))}
          </ul>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
