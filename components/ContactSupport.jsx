'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Bantuan versi Noir: pertanyaan boleh dikirim tanpa nama. Kanal resmi klien
   (chat, surel, telepon) belum ada di brief, jadi tidak ada nomor atau alamat
   karangan di sini — yang ditawarkan konsep ini adalah cara bertanya. */
const janji = [
  'Boleh tanpa nama — surel hanya kalau ingin dibalas',
  'Dijawab orang, tanpa tawaran barang di dalam jawabannya',
  'Surel balasan tanpa nama merek di subjek maupun pengirim',
]

export default function ContactSupport() {
  const [terkirim, setTerkirim] = useState(false)

  return (
    <section id="kontak" className="relative overflow-hidden bg-void py-16 md:py-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 bottom-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-neon">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Tanya dulu tidak apa-apa</h2>
            <p className="mt-5 max-w-md leading-relaxed text-ash">
              Tidak ada pertanyaan yang kami anggap terlalu dasar, dan tidak ada jawaban yang
              berujung tawaran barang. Kalau memang belum perlu membeli, akan kami bilang begitu.
            </p>
            <ul className="mt-8 space-y-3">
              {janji.map((j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-chalk/90">
                  <span aria-hidden="true" className="redact h-2 w-5 shrink-0 text-neon" />
                  {j}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-chalk/10 bg-void-2 p-6 sm:p-8">
            {terkirim ? (
              <div role="status" className="flex h-full flex-col justify-center py-6">
                <p className="micro text-neon">Tercatat</p>
                <p className="mt-3 text-xl font-bold text-chalk">Terima kasih sudah bertanya.</p>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Ini purwarupa desain untuk kontes, jadi pertanyaan Anda tidak terkirim ke mana pun.
                </p>
                <div className="mt-6 flex flex-wrap gap-5">
                  <button type="button" onClick={() => setTerkirim(false)} className="micro border-b border-neon/50 pb-1 text-neon hover:border-neon">
                    Tulis pertanyaan lain
                  </button>
                  <Link href="/koleksi" className="micro border-b border-chalk/30 pb-1 text-chalk hover:border-chalk">
                    Lihat koleksi
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setTerkirim(true)
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="tanya" className="micro mb-2.5 block text-ash">
                    Pertanyaan Anda
                  </label>
                  <textarea
                    id="tanya"
                    name="tanya"
                    required
                    rows={4}
                    placeholder="Mis. apa beda tahan percik dan tahan air?"
                    className="w-full resize-y border border-chalk/15 bg-void px-4 py-3 text-sm text-chalk placeholder:text-ash focus:border-neon focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="surel-balas" className="micro mb-2.5 block text-ash">
                    Surel untuk balasan <span className="normal-case tracking-normal">(boleh dikosongkan)</span>
                  </label>
                  <input
                    id="surel-balas"
                    name="surel"
                    type="email"
                    autoComplete="email"
                    className="w-full border border-chalk/15 bg-void px-4 py-3 text-sm text-chalk focus:border-neon focus:outline-none"
                  />
                </div>
                <button type="submit" className="w-full bg-neon py-4 text-sm font-bold text-void transition-colors duration-300 hover:bg-chalk">
                  Kirim pertanyaan
                </button>
                <p className="text-xs leading-relaxed text-ash">Purwarupa desain — formulir ini tidak mengirim data.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
