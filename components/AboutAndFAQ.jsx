'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const tanya = [
  {
    q: 'Apa yang tertulis di paket dan resi?',
    a: 'Kotak cokelat polos tanpa cetakan apa pun. Di resi tertera nama badan usaha induk — bukan nama toko — dan keterangan isi "perlengkapan pribadi". Nama Positive Crave tidak muncul di mana pun, termasuk di mutasi rekening Anda.',
  },
  {
    q: 'Apakah kurir tahu isinya?',
    a: 'Tidak. Kurir hanya menerima data alamat dan keterangan isi umum yang sama seperti tertera di resi.',
  },
  {
    q: 'Bagaimana kalau saya belum pernah beli yang seperti ini?',
    a: 'Mulai dari kategori "Baru pertama" — isinya barang paling sederhana tanpa banyak pengaturan. Atau tanyakan dulu lewat bantuan; kami sarankan satu titik mulai tanpa mendorong Anda membeli yang lebih mahal.',
  },
  {
    q: 'Materialnya aman?',
    a: 'Semua alat memakai silikon medical-grade yang tidak berpori dan bebas BPA. Tidak menyerap cairan, bisa dibersihkan menyeluruh, dan aman untuk kontak lama dengan kulit.',
  },
  {
    q: 'Apa beda tahan percik dan tahan air?',
    a: 'Tahan percik berarti boleh terkena air saat dibersihkan, tapi tidak untuk direndam. Tahan air penuh boleh direndam. Salah membaca keduanya adalah penyebab kerusakan yang paling sering kami terima.',
  },
  {
    q: 'Kalau barangnya rusak?',
    a: 'Ada masa garansi untuk kerusakan yang bukan akibat pemakaian keliru. Penggantian dikirim dalam kemasan polos yang sama.',
  },
]

export default function AboutAndFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="tanya" className="relative overflow-clip bg-void-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="micro mb-5 text-neon">Tanya Jawab</p>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">
            Pertanyaan yang biasanya ditahan dulu
          </h2>
          <p className="mt-5 leading-relaxed text-ash">
            Enam hal yang paling sering ditanyakan sebelum orang memutuskan memesan — dijawab apa
            adanya.
          </p>
        </div>

        <dl className="border-t border-chalk/12">
          {tanya.map((t, i) => {
            const terbuka = open === i
            return (
              <div key={t.q} className="border-b border-chalk/12">
                <dt>
                  <button
                    onClick={() => setOpen(terbuka ? null : i)}
                    aria-expanded={terbuka}
                    aria-controls={`n-jwb-${i}`}
                    className="flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span aria-hidden="true" className="micro mt-1.5 shrink-0 text-neon">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-base font-bold text-chalk md:text-lg">{t.q}</span>
                    <Plus
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-chalk transition-transform duration-300 ${
                        terbuka ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {terbuka && (
                    <motion.dd
                      id={`n-jwb-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-11 text-sm leading-relaxed text-ash">{t.a}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
