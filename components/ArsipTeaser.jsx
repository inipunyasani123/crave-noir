import Link from 'next/link'
import { ARSIP } from '@/lib/arsip'

export default function ArsipTeaser() {
  return (
    <section id="arsip" className="relative overflow-hidden border-t border-chalk/10 bg-void py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-xl">
            <p className="micro mb-5 flex items-center gap-3 text-neon">
              Arsip
              <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
            </p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Dibaca dulu, baru dipesan</h2>
          </div>
          <Link href="/jurnal" className="micro shrink-0 border-b border-neon/50 pb-1 text-neon transition-colors hover:border-neon">
            Semua berkas
          </Link>
        </div>

        <ul className="grid gap-3 sm:gap-6 md:grid-cols-3">
          {ARSIP.map((a) => (
            <li key={a.slug} className="group relative flex flex-col border border-chalk/10 bg-void-2 p-5 transition-colors hover:border-neon/40 sm:p-7">
              <p className="micro flex items-center justify-between text-ash">
                <span>Berkas No. {a.no}</span>
                <span className="text-neon">{a.topik}</span>
              </p>
              <h3 className="mt-4 text-lg leading-[1.2] font-bold text-chalk sm:mt-8 sm:text-xl">
                <Link href={`/jurnal/${a.slug}`} className="after:absolute after:inset-0">{a.judul}</Link>
              </h3>
              <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-ash sm:block">{a.ringkas}</p>
              <p className="micro mt-4 border-t border-chalk/10 pt-4 text-ash sm:mt-7 sm:pt-5">{a.menit} menit baca</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
