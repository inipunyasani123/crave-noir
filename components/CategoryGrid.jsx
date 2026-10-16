import Image from 'next/image'
import Link from 'next/link'
import { PRODUK, SITUASI } from '@/lib/katalog'

const FOTO = {
  berdua: '/images/kategori-berdua.webp',
  pertama: '/images/produk/bullet.webp',
  jarak: '/images/produk/remote.webp',
  perawatan: '/images/produk/pelumas.webp',
}

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-void py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-xl">
            <p className="micro mb-5 text-neon">Menurut situasi</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Mulai dari yang mana?</h2>
          </div>
          <Link href="/koleksi" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
            Seluruh koleksi · {PRODUK.length}
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-px border border-chalk/10 bg-chalk/10 lg:grid-cols-4">
          {SITUASI.map((k, i) => (
            <li key={k.id} className="group relative bg-void">
              <div className="duo relative aspect-[4/5] overflow-hidden">
                <Image src={FOTO[k.id]} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className="micro absolute top-4 left-4 z-10 text-chalk/80">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <h3 className="text-base font-bold text-chalk sm:text-lg">
                    <Link href={`/koleksi#${k.id}`} className="after:absolute after:inset-0">{k.label}</Link>
                  </h3>
                  <span className="micro text-ash">{PRODUK.filter((p) => p.situasi === k.id).length} barang</span>
                </div>
                <p className="mt-2.5 hidden text-sm leading-relaxed text-ash sm:block">{k.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
