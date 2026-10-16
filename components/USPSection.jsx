import { ShieldCheck, Package, HeartHandshake, MessageCircle } from 'lucide-react'

const jaminan = [
  {
    icon: Package,
    title: 'Kemasan polos',
    desc: 'Kotak cokelat tanpa cetakan, tanpa logo. Isi tertulis "perlengkapan pribadi", dan nama merek tidak muncul di resi maupun mutasi rekening.',
  },
  {
    icon: ShieldCheck,
    title: 'Material medical-grade',
    desc: 'Silikon tidak berpori dan bebas BPA — tidak menyerap, bisa dibersihkan sampai benar-benar bersih, dan aman bersentuhan lama dengan kulit.',
  },
  {
    icon: HeartHandshake,
    title: 'Dikurasi untuk berdua',
    desc: 'Setiap barang dipilih untuk dipakai bersama, bukan sekadar dijual. Yang tidak lolos uji pakai kami, tidak masuk katalog.',
  },
  {
    icon: MessageCircle,
    title: 'Dijawab manusia',
    desc: 'Pertanyaan Anda dibalas orang, bukan bot. Tidak ada yang menghakimi, dan tidak ada yang menawari produk sebagai jawaban.',
  },
]

export default function USPSection() {
  return (
    <section id="jaminan" className="relative overflow-hidden bg-void-2 py-16 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="micro mb-5 text-neon">Jaminan</p>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.7rem]">
            Empat hal yang kami jamin, tertulis
          </h2>
          <p className="mt-5 leading-relaxed text-ash">
            Bukan janji suasana, tapi hal-hal yang bisa Anda periksa sendiri saat paketnya sampai.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px bg-chalk/10 lg:grid-cols-4">
          {jaminan.map((j) => (
            <div key={j.title} className="bg-void-2 p-4 sm:p-7">
              <j.icon className="mb-4 h-5 w-5 text-neon sm:mb-6 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden="true" />
              <dt className="text-sm font-bold text-chalk sm:text-base">{j.title}</dt>
              <dd className="mt-2 text-[0.8125rem] leading-relaxed text-ash sm:mt-3 sm:text-sm">{j.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
