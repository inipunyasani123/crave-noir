'use client'

import { useState } from 'react'

/* "Lihat sebagai" — tiap pihak yang bersinggungan dengan paket, dan persis apa
   yang mereka lihat. Visual tiruan dibuat dari CSS saja (tanpa gambar). */

const SUDUT = [
  {
    id: 'kurir',
    label: 'Kurir',
    lihat: ['Nama & alamat penerima', 'Pengirim: badan usaha induk', 'Isi: perlengkapan pribadi', 'Berat paket'],
    tidak: ['Nama merek', 'Nama barang', 'Harga'],
  },
  {
    id: 'rumah',
    label: 'Penghuni rumah',
    lihat: ['Kotak cokelat polos, lakban bening', 'Ukuran setara kotak pakaian'],
    tidak: ['Logo atau cetakan apa pun', 'Stiker "fragile" berwarna', 'Isi paket'],
  },
  {
    id: 'rekening',
    label: 'Mutasi rekening',
    lihat: ['Penerima dana: badan usaha induk', 'Nominal transaksi'],
    tidak: ['Nama Positive Crave', 'Nama barang'],
  },
  {
    id: 'surel',
    label: 'Kotak masuk',
    lihat: ['Subjek dengan nomor pesanan', 'Nama pengirim: badan usaha induk'],
    tidak: ['Nama barang di subjek', 'Surel promosi tanpa izin'],
  },
  {
    id: 'layar',
    label: 'Layar kunci',
    lihat: ['"Pesanan #PC-2381 dalam perjalanan"'],
    tidak: ['Nama aplikasi toko', 'Gambar produk'],
  },
]

function Tiruan({ id }) {
  if (id === 'kurir')
    return (
      <div className="kraft-grain relative mx-auto aspect-[4/3] w-full max-w-sm bg-kraft/85">
        <span className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-kraft" />
        <div className="absolute right-4 bottom-4 left-10 bg-chalk p-4 text-void">
          <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-75">Kirim ke</p>
          <p className="mt-1 text-sm font-bold">Ibu/Bapak penerima</p>
          <span aria-hidden="true" className="redact mt-1.5 block h-2 w-4/5 text-void/30" />
          <span aria-hidden="true" className="redact mt-1 block h-2 w-1/2 text-void/30" />
          <span className="sr-only">Alamat penerima</span>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-void/15 pt-2 text-[0.65rem]">
            <p><span className="block font-bold tracking-wider uppercase opacity-75">Dari</span><span aria-hidden="true" className="redact mt-1 block h-2 w-full text-void/45" /><span className="sr-only">Badan usaha induk</span></p>
            <p><span className="block font-bold tracking-wider uppercase opacity-75">Isi</span>Perlengkapan pribadi</p>
          </div>
        </div>
      </div>
    )
  if (id === 'rumah')
    return (
      <div className="relative mx-auto flex aspect-[4/3] w-full max-w-sm items-end justify-center">
        <div className="kraft-grain relative h-3/4 w-3/4 bg-kraft/85 shadow-[0_30px_40px_-20px_rgb(0_0_0/0.6)]">
          <span className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-chalk/15" />
          <span className="absolute inset-x-0 top-6 h-px bg-black/15" />
        </div>
      </div>
    )
  if (id === 'rekening')
    return (
      <div className="mx-auto w-full max-w-sm border border-chalk/15 bg-void p-5 font-mono text-xs text-chalk/85">
        <p className="micro mb-4 text-ash">Mutasi · 12 Okt</p>
        {[
          ['TRF ONLINE', 'PLN PASCABAYAR', '- 412.500'],
          ['TRF ONLINE', null, '- 1.315.000'],
          ['SETOR', 'GAJI OKTOBER', '+ 8.750.000'],
        ].map(([a, b, c]) => (
          <div key={b || 'induk'} className={`flex justify-between gap-3 border-t border-chalk/10 py-2.5 ${b ? '' : 'text-neon'}`}>
            <span className="min-w-0">
              <span className="block opacity-75">{a}</span>
              {b ? (
                <span className="block truncate">{b}</span>
              ) : (
                <>
                  <span aria-hidden="true" className="redact mt-1 block h-2.5 w-36 opacity-80" />
                  <span className="sr-only">Badan usaha induk</span>
                </>
              )}
            </span>
            <span className="shrink-0">{c}</span>
          </div>
        ))}
      </div>
    )
  if (id === 'surel')
    return (
      <div className="mx-auto w-full max-w-sm border border-chalk/15 bg-chalk text-void">
        {[
          [null, 'Pesanan #PC-2381 sudah dikirim', true],
          ['Kantor', 'Undangan rapat Kamis', false],
          ['Bank', 'e-Statement Oktober', false],
        ].map(([a, b, x]) => (
          <div key={b} className={`border-b border-void/10 px-4 py-3 text-xs ${x ? 'bg-neon/10' : ''}`}>
            {a ? <p className="font-bold">{a}</p> : <><span aria-hidden="true" className="redact block h-2.5 w-24 opacity-70" /><span className="sr-only">Badan usaha induk</span></>}
            <p className="opacity-70">{b}</p>
          </div>
        ))}
      </div>
    )
  return (
    <div className="mx-auto w-full max-w-[15rem] rounded-[2rem] border border-chalk/20 bg-gradient-to-b from-void-2 to-void p-4 pt-10">
      <p className="text-center text-4xl font-extralight text-chalk">21.47</p>
      <div className="mt-8 rounded-2xl bg-chalk/10 p-3 text-xs text-chalk backdrop-blur">
        <p className="font-bold">Pesanan</p>
        <p className="opacity-80">#PC-2381 dalam perjalanan</p>
      </div>
    </div>
  )
}

export default function LihatSebagai() {
  const [aktif, setAktif] = useState('kurir')
  const s = SUDUT.find((x) => x.id === aktif)

  return (
    <div className="border border-chalk/10 bg-void-2">
      <div className="overflow-x-auto border-b border-chalk/10 [scrollbar-width:none]" role="tablist" aria-label="Lihat paket sebagai">
        <div className="flex w-max">
          {SUDUT.map((x) => (
            <button
              key={x.id}
              type="button"
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={aktif === x.id}
              aria-controls="panel-sudut"
              onClick={() => setAktif(x.id)}
              className={`micro min-h-12 border-r border-chalk/10 px-5 transition-colors ${
                aktif === x.id ? 'bg-neon text-void' : 'text-ash hover:text-chalk'
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div id="panel-sudut" role="tabpanel" aria-labelledby={`tab-${s.id}`} className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
        <div className="flex items-center">
          <Tiruan id={s.id} />
        </div>
        <div className="grid content-center gap-8">
          <div>
            <p className="micro mb-4 text-chalk">Yang terlihat</p>
            <ul className="space-y-3">
              {s.lihat.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-chalk/85">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-chalk/70" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="micro mb-4 text-neon">Yang tidak pernah terlihat</p>
            <ul className="space-y-3">
              {s.tidak.map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm text-ash">
                  <span aria-hidden="true" className="redact h-2.5 w-8 shrink-0 text-neon/70" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
