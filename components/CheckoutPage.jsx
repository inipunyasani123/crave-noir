'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { PRODUK, produkBySlug, rupiah } from '@/lib/katalog'

const ONGKIR = 25000

const TITIK = [
  { id: 'rumah', label: 'Rumah', ket: 'Diantar ke alamat di bawah' },
  { id: 'kantor', label: 'Kantor', ket: 'Diterima resepsionis' },
  { id: 'loker', label: 'Loker paket', ket: 'Diambil dengan kode' },
  { id: 'agen', label: 'Titip agen', ket: 'Diambil dengan nomor resi' },
]

export default function CheckoutPage() {
  const q = useSearchParams()
  const p = produkBySlug(q.get('produk')) ?? PRODUK[0]
  const [titik, setTitik] = useState('rumah')
  const [proses, setProses] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    // Purwarupa desain — pemesanan disimulasikan, tanpa backend maupun pembayaran.
    setTimeout(() => {
      setProses(false)
      setSelesai(true)
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="micro mb-5 flex items-center gap-3 text-neon">
          Pemesanan
          <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
        </p>
        <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Satu langkah lagi</h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          {selesai ? (
            <div role="status" className="border border-chalk/10 bg-void-2 px-8 py-16 text-center">
              <span aria-hidden="true" className="mx-auto mb-6 block h-12 w-12 bg-kraft" />
              <h2 className="text-xl font-bold text-chalk">Kotaknya sedang disiapkan</h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ash">
                Ini purwarupa desain untuk kontes, jadi tidak ada pesanan, pembayaran, atau surel yang
                diproses. Di toko sungguhan, {p.nama} berangkat dalam kotak {p.kotak.ukuran} tanpa
                nama merek di resi.
              </p>
              <button onClick={() => setSelesai(false)} className="micro mt-8 border-b border-neon/50 pb-1 text-neon hover:border-neon">
                Kembali ke formulir
              </button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-9">
              <fieldset>
                <legend className="micro mb-4 text-chalk">1 · Di mana kotaknya berhenti</legend>
                <div className="grid gap-px border border-chalk/12 bg-chalk/12 sm:grid-cols-2">
                  {TITIK.map((t) => (
                    <label key={t.id} className={`flex cursor-pointer items-start gap-3 p-4 transition-colors ${titik === t.id ? 'bg-void-2' : 'bg-void hover:bg-void-2'}`}>
                      <input type="radio" name="titik" value={t.id} checked={titik === t.id} onChange={() => setTitik(t.id)} className="mt-1 accent-[#ff2d78]" />
                      <span>
                        <span className="block text-sm font-bold text-chalk">{t.label}</span>
                        <span className="block text-xs text-ash">{t.ket}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="space-y-7">
                <legend className="micro mb-4 text-chalk">2 · Penerima</legend>
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field label="Nama penerima (boleh samaran)" name="nama" auto="name" required />
                  <Field label="Telepon" name="telepon" type="tel" auto="tel" required />
                </div>
                <Field label="Surel" name="surel" type="email" auto="email" required />
                <div>
                  <label htmlFor="alamat" className="micro mb-3 block text-ash">
                    {titik === 'rumah' ? 'Alamat rumah' : titik === 'kantor' ? 'Alamat kantor' : titik === 'loker' ? 'Lokasi loker' : 'Kota / kecamatan agen'}
                    <span className="ml-1 text-neon">*</span>
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    rows={3}
                    required
                    autoComplete="street-address"
                    className="w-full resize-y border-b border-chalk/25 bg-transparent pb-2 text-sm text-chalk focus:border-neon focus:outline-none"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="micro mb-4 text-chalk">3 · Supaya lebih tenang</legend>
                <div className="space-y-3">
                  {['Tanpa bel — kurir menelepon saat tiba', 'Sertakan kartu ucapan kosong'].map((x) => (
                    <label key={x} className="flex cursor-pointer items-center gap-3 text-sm text-chalk/85">
                      <input type="checkbox" className="h-4 w-4 accent-[#ff2d78]" /> {x}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={proses}
                className="w-full bg-neon py-4 text-sm font-bold text-void transition-colors hover:bg-chalk disabled:opacity-70"
              >
                {proses ? 'Memproses…' : `Bayar ${rupiah(p.harga + ONGKIR)}`}
              </button>
              <p className="micro leading-[1.7] text-ash">
                Purwarupa desain — pemesanan disimulasikan, tidak ada pembayaran maupun data yang tersimpan.
              </p>
            </form>
          )}

          <aside className="h-fit border border-chalk/10 bg-void-2">
            <div className="flex gap-4 border-b border-chalk/10 p-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-void">
                <Image src={p.image} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-chalk">{p.nama}</p>
                <p className="mt-1 text-sm text-ash">Tingkat {p.tingkat.toLowerCase()}</p>
                <Link href={`/produk/${p.slug}`} className="micro mt-2 inline-block text-neon hover:text-chalk">Ubah</Link>
              </div>
            </div>
            <dl className="divide-y divide-chalk/10 px-6">
              {[
                [p.nama, rupiah(p.harga)],
                ['Pengiriman reguler', rupiah(ONGKIR)],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm text-ash">{k}</dt>
                  <dd className="text-sm font-bold text-chalk">{v}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-sm font-bold text-chalk">Total</dt>
                <dd className="text-lg font-bold text-neon">{rupiah(p.harga + ONGKIR)}</dd>
              </div>
            </dl>
            <div className="border-t border-chalk/10 p-6">
              <p className="micro mb-3 text-ash">Di mutasi rekening tertulis</p>
              <p className="flex items-center gap-3 font-mono text-sm text-chalk">
                <span aria-hidden="true" className="redact h-3.5 w-28 text-chalk/60" />
                <span className="text-xs text-ash">nama badan usaha induk</span>
              </p>
              <p className="micro mt-5 mb-3 text-ash">Di resi tertulis</p>
              <p className="text-sm text-chalk">Perlengkapan pribadi · {p.kotak.berat}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', auto, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="micro mb-3 block text-ash">
        {label}
        {required && <span className="ml-1 text-neon">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={auto}
        required={required}
        className="w-full border-b border-chalk/25 bg-transparent pb-2 text-sm text-chalk focus:border-neon focus:outline-none"
      />
    </div>
  )
}
