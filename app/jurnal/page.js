import Link from 'next/link'
import { ARSIP } from '@/lib/arsip'

export const metadata = {
  title: 'Arsip — Positive Crave',
  description:
    'Tulisan Positive Crave tentang hal yang biasanya dibisikkan: apa yang tertulis di resi, cara membuka obrolan dengan pasangan, dan memilih material yang benar-benar aman.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/jurnal' },
}

export default function ArsipPage() {
  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="micro mb-6 flex items-center gap-3 text-neon">
          Arsip
          <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
          <span className="text-ash">{ARSIP.length} berkas dibuka</span>
        </p>
        <h1 className="max-w-3xl text-[2.5rem] leading-[1] md:text-[3.6rem]">
          Hal-hal yang biasanya <span className="redact px-2 text-neon"><span className="text-void">dibisikkan</span></span>, kami tulis terang-terangan.
        </h1>

        <ol className="mt-16 border-t border-chalk/15">
          {ARSIP.map((a) => (
            <li key={a.slug} className="group relative border-b border-chalk/15">
              <div className="grid gap-4 py-10 md:grid-cols-[9rem_minmax(0,1fr)_10rem] md:items-baseline md:gap-10">
                <p className="micro text-ash">
                  Berkas No.
                  <span className="mt-2 block text-5xl font-extrabold tracking-tight text-chalk/45 transition-colors group-hover:text-neon">
                    {a.no}
                  </span>
                </p>
                <div>
                  <h2 className="text-2xl leading-[1.15] md:text-[2rem]">
                    <Link href={`/jurnal/${a.slug}`} className="after:absolute after:inset-0">
                      {a.judul}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ash">{a.ringkas}</p>
                </div>
                <p className="micro flex gap-4 text-ash md:flex-col md:gap-2 md:text-right">
                  <span className="text-neon">{a.topik}</span>
                  <span>{a.menit} menit baca</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
