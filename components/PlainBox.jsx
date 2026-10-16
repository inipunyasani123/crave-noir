import Link from 'next/link'

/* ============================================================================
   Bagian penanda varian ini: "Kotak Polos".
   Menjawab pertanyaan yang paling sering menahan orang untuk memesan —
   apa yang terlihat oleh kurir, tetangga, dan penghuni rumah. Ditampilkan
   sebagai dua sisi berdampingan: yang dilihat orang lain vs yang Anda terima.
   ========================================================================== */

const surat = [
  ['Nama pengirim', 'Badan usaha induk, bukan nama toko'],
  ['Isi paket', 'Perlengkapan pribadi'],
  ['Logo merek', 'Tidak ada'],
  ['Keterangan lain', 'Tidak ada'],
]

const jaminan = [
  'Kotak cokelat polos tanpa cetakan apa pun',
  'Nama merek tidak muncul di resi maupun mutasi rekening',
  'Segel utuh, hanya bisa dibuka sekali',
  'Kurir tidak menerima rincian isi paket',
]

export default function PlainBox() {
  return (
    <section id="privasi" className="relative overflow-hidden bg-void py-16 md:py-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-64" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="micro mb-5 text-neon">Privasi</p>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">
            Yang sampai ke rumah Anda cuma{' '}
            <span className="text-kraft">kotak cokelat polos</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ash">
            Bagian tersulit dari memesan produk seperti ini bukan memilihnya, melainkan
            membayangkan siapa saja yang tahu. Karena itu kami sengaja membuat paketnya
            membosankan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Sisi kiri — apa yang dilihat orang lain */}
          <figure className="overflow-hidden border border-chalk/10 bg-void-2">
            <figcaption className="flex items-center justify-between border-b border-chalk/10 px-6 py-4">
              <span className="micro text-ash">Yang dilihat orang lain</span>
              <span className="micro text-ash">Resi &amp; kemasan</span>
            </figcaption>

            {/* Kotak kraft */}
            <div className="p-8">
              <div className="kraft-grain relative aspect-[4/3] w-full bg-kraft/85">
                {/* Lakban dan lipatan kotak */}
                <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-7 -translate-y-1/2 bg-kraft" />
                <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/15" />

                {/* Label resi — semuanya disensor */}
                <div className="absolute right-5 bottom-5 w-[62%] bg-chalk/95 p-3.5">
                  <p className="text-[0.6rem] font-bold tracking-widest text-void/70 uppercase">
                    Kirim ke
                  </p>
                  <span aria-hidden="true" className="redact mt-2 block h-2 w-full text-void/25" />
                  <span aria-hidden="true" className="redact mt-1.5 block h-2 w-4/5 text-void/25" />
                  <span aria-hidden="true" className="redact mt-1.5 block h-2 w-2/3 text-void/25" />
                  <p className="mt-3 border-t border-void/15 pt-2 text-[0.6rem] font-bold tracking-widest text-void/70 uppercase">
                    Isi: perlengkapan pribadi
                  </p>
                </div>
              </div>

              <dl className="mt-8 divide-y divide-chalk/10 border-t border-chalk/10">
                {surat.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="micro text-ash">{k}</dt>
                    <dd className="text-sm font-semibold text-chalk">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </figure>

          {/* Sisi kanan — janji tertulis */}
          <div className="flex flex-col justify-between border border-chalk/10 bg-void-2 p-8">
            <div>
              <p className="micro mb-6 text-neon">Yang kami jamin</p>
              <ul className="space-y-5">
                {jaminan.map((j, i) => (
                  <li key={j} className="flex gap-4 border-b border-chalk/10 pb-5 last:border-b-0">
                    <span className="micro shrink-0 pt-0.5 text-neon">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-chalk/85">{j}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="text-sm leading-relaxed text-ash">
                Kalau masih ada yang mengganjal soal pengiriman, tanyakan lebih dulu — kami jawab
                sebelum Anda memesan.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/pengiriman" className="micro inline-block border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
                  Lihat perjalanan paketnya
                </Link>
                <Link href="/#kontak" className="micro inline-block border-b border-chalk/25 pb-1 text-ash transition-colors hover:text-chalk">
                  Tanya soal pengiriman
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
