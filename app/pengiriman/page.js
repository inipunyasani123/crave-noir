import Link from 'next/link'
import LihatSebagai from '@/components/LihatSebagai'
import { PENGIRIM } from '@/lib/katalog'

export const metadata = {
  title: 'Perjalanan Kotak Polos — Positive Crave',
  description:
    'Dari gudang sampai pintu rumah: apa yang dilihat kurir, penghuni rumah, rekening bank, dan kotak masuk Anda saat memesan di Positive Crave.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/pengiriman' },
}

const LANGKAH = [
  { no: '01', judul: 'Anda memesan', isi: 'Pembayaran diproses atas nama ' + PENGIRIM + '. Konfirmasi dikirim dengan subjek berisi nomor pesanan saja.', waktu: 'Menit ke-0' },
  { no: '02', judul: 'Dikemas', isi: 'Barang masuk kantong satin hitam, lalu kotak cokelat polos dari tiga ukuran standar yang juga dipakai toko pakaian.', waktu: '< 24 jam' },
  { no: '03', judul: 'Diserahkan ke kurir', isi: 'Kurir hanya menerima alamat dan keterangan "perlengkapan pribadi". Tidak ada daftar isi yang ikut berpindah tangan.', waktu: 'Hari ke-1' },
  { no: '04', judul: 'Tiba', isi: 'Ke rumah, kantor, loker paket, atau agen kurir — Anda yang memilih saat checkout. Tulis "tanpa bel" bila perlu.', waktu: 'Hari ke-2–4' },
  { no: '05', judul: 'Setelahnya', isi: 'Tidak ada surel promosi kecuali Anda berlangganan. Riwayat pesanan bisa dihapus dari akun kapan saja.', waktu: 'Seterusnya' },
]

const TITIK = [
  ['Rumah', 'Paling praktis. Tambahkan catatan "tanpa bel" dan kurir akan menelepon.'],
  ['Kantor', 'Diterima resepsionis sebagai paket biasa — tidak ada yang berbeda dari paket belanja lain.'],
  ['Loker paket', 'Diambil sendiri dengan kode sekali pakai, kapan pun Anda sempat.'],
  ['Titip di agen', 'Diambil di agen kurir terdekat dengan menunjukkan nomor resi.'],
]

export default function PengirimanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-void pt-28 pb-16 md:pt-36 md:pb-20">
        <div aria-hidden="true" className="dim-glow absolute inset-x-0 top-0 h-80" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="micro mb-6 flex items-center gap-3 text-neon">
            Pengiriman
            <span aria-hidden="true" className="redact h-2.5 w-8 text-chalk/25" />
            <span className="text-ash">Berkas terbuka</span>
          </p>
          <h1 className="max-w-4xl text-[2.5rem] leading-[0.98] sm:text-6xl lg:text-[4.4rem]">
            Satu paket, lima pasang mata.{' '}
            <span className="text-kraft">Tidak ada yang tahu isinya.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash">
            &ldquo;Aman&rdquo; itu kata yang murah. Jadi kami tunjukkan saja: pilih siapa pun yang
            bersinggungan dengan pesanan Anda, dan lihat persis apa yang sampai ke mata mereka.
          </p>
        </div>
      </section>

      <section className="bg-void pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <LihatSebagai />
        </div>
      </section>

      <section className="border-y border-chalk/10 bg-void-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="micro mb-5 text-neon">Perjalanan</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">Dari gudang ke pintu, lima titik</h2>
          </div>
          <ol className="relative grid gap-0 md:grid-cols-5">
            {LANGKAH.map((l) => (
              <li key={l.no} className="relative border-t border-chalk/15 pt-8 pb-10 md:pr-6">
                <span aria-hidden="true" className="absolute -top-[5px] left-0 h-2.5 w-2.5 bg-neon" />
                <p className="micro text-ash">{l.waktu}</p>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-chalk/45">{l.no}</p>
                <h3 className="mt-2 text-lg font-bold">{l.judul}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{l.isi}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-void py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="micro mb-5 text-neon">Titik antar</p>
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.5rem]">Anda yang memilih di mana kotaknya berhenti</h2>
            <p className="mt-5 leading-relaxed text-ash">
              Keempat pilihan ini ada di halaman checkout. Harga ongkos kirimnya sama.
            </p>
          </div>
          <dl className="grid gap-px border border-chalk/10 bg-chalk/10 sm:grid-cols-2">
            {TITIK.map(([k, v]) => (
              <div key={k} className="bg-void p-7">
                <dt className="text-lg font-bold text-chalk">{k}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-ash">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-chalk/10 bg-void py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-chalk">
            Masih ada yang mengganjal? Baca{' '}
            <Link href="/jurnal/apa-yang-tertulis-di-resi" className="text-neon underline underline-offset-4 hover:text-chalk">
              Arsip No. 01
            </Link>{' '}
            — kami membongkar satu resi sungguhan, baris demi baris.
          </p>
          <Link href="/koleksi" className="inline-flex shrink-0 items-center justify-center bg-neon px-8 py-4 text-sm font-bold text-void transition-colors hover:bg-chalk">
            Lihat koleksi
          </Link>
        </div>
      </section>
    </>
  )
}
