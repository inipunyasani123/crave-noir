import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ARSIP, arsipBySlug } from '@/lib/arsip'

const SITE = 'https://crave-noir.pintuweb.id'

export function generateStaticParams() {
  return ARSIP.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = arsipBySlug(slug)
  if (!a) return {}
  return {
    title: `${a.judul} — Arsip Positive Crave`,
    description: a.ringkas,
    alternates: { canonical: `${SITE}/jurnal/${a.slug}` },
    openGraph: { type: 'article' },
  }
}

function Blok({ b }) {
  if (b.h) return <h2 className="mt-12 text-[1.5rem] leading-[1.2] md:text-[1.75rem]">{b.h}</h2>
  if (b.list)
    return (
      <ul className="mt-6 space-y-3 border-l border-neon/40 pl-6">
        {b.list.map((x) => (
          <li key={x} className="leading-relaxed text-chalk/85">{x}</li>
        ))}
      </ul>
    )
  if (b.note)
    return (
      <aside className="mt-8 flex gap-4 border border-chalk/10 bg-void-2 p-6">
        <span aria-hidden="true" className="h-6 w-6 shrink-0 bg-kraft" />
        <p className="text-sm leading-relaxed text-chalk/85">{b.note}</p>
      </aside>
    )
  if (b.redacted)
    return (
      <p className="my-10 text-xl leading-snug font-bold text-chalk md:text-2xl">
        {b.redacted[0]}{' '}
        <span className="bg-neon px-1.5 text-void">{b.redacted[1]}</span>
        {b.redacted[2]}
      </p>
    )
  return <p className="mt-5 text-[1.05rem] leading-[1.8] text-ash">{b.p}</p>
}

export default async function ArtikelPage({ params }) {
  const { slug } = await params
  const a = arsipBySlug(slug)
  if (!a) notFound()
  const i = ARSIP.findIndex((x) => x.slug === a.slug)
  const berikut = ARSIP[(i + 1) % ARSIP.length]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.judul,
    description: a.ringkas,
    author: { '@type': 'Organization', name: 'Positive Crave' },
    mainEntityOfPage: `${SITE}/jurnal/${a.slug}`,
  }

  return (
    <article className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-72" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <nav aria-label="Remah roti" className="micro mb-10 flex items-center gap-2 text-ash">
          <Link href="/jurnal" className="hover:text-neon">Arsip</Link>
          <span aria-hidden="true">/</span>
          <span className="text-chalk">Berkas No. {a.no}</span>
        </nav>

        <header className="border-b border-chalk/15 pb-10">
          <p className="micro flex flex-wrap items-center gap-3 text-neon">
            {a.topik}
            <span aria-hidden="true" className="redact h-2.5 w-6 text-chalk/25" />
            <span className="text-ash">{a.menit} menit baca</span>
          </p>
          <h1 className="mt-6 text-[2.3rem] leading-[1.02] md:text-[3.2rem]">{a.judul}</h1>
          <p className="mt-6 text-lg leading-relaxed text-chalk/80">{a.ringkas}</p>
        </header>

        <div className="pt-4">
          {a.isi.map((b, k) => <Blok key={k} b={b} />)}
        </div>

        <footer className="mt-16 border-t border-chalk/15 pt-10">
          <p className="micro text-ash">Berkas berikutnya · No. {berikut.no}</p>
          <Link href={`/jurnal/${berikut.slug}`} className="mt-3 block text-2xl font-extrabold tracking-tight text-chalk transition-colors hover:text-neon">
            {berikut.judul} →
          </Link>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
