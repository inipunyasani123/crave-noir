import Link from 'next/link'

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — Positive Crave' },
  robots: { index: false, follow: true },
}

/* 404 versi Noir: halamannya ikut "disensor". */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-void pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <p className="micro mb-6 flex items-center gap-3 text-neon">
          404
          <span aria-hidden="true" className="redact h-2.5 w-10 text-chalk/25" />
        </p>
        <h1 className="text-[2.4rem] leading-[1.05] md:text-[3.4rem]">Halaman ini tidak ada di arsip.</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-ash">
          Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Paketnya tetap aman — mulai lagi dari sini.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/koleksi" className="inline-flex items-center justify-center bg-neon px-7 py-4 text-sm font-bold text-void transition-colors hover:bg-chalk">
            Lihat Koleksi
          </Link>
          <Link href="/" className="inline-flex items-center justify-center border border-chalk/20 px-7 py-4 text-sm font-bold text-chalk transition-colors hover:border-chalk/50">
            Ke beranda
          </Link>
        </div>
      </div>
    </section>
  )
}
