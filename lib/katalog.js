/* ============================================================================
   Katalog konsep "Noir" — satu sumber untuk beranda, /koleksi, /produk/[slug],
   dan ringkasan /checkout. Semua nama, harga, dan spesifikasi adalah contoh
   untuk purwarupa desain kontes.

   Ciri khas varian ini: setiap produk membawa "data kotak" — ukuran, berat,
   dan apa yang tertulis di resi — karena nilai jual Noir adalah kerahasiaan.
   ========================================================================== */

export const SITUASI = [
  { id: 'berdua', label: 'Untuk berdua', desc: 'Dipakai bersama, dikendalikan bergantian.' },
  { id: 'pertama', label: 'Baru pertama', desc: 'Paling sederhana, tanpa banyak pengaturan.' },
  { id: 'jarak', label: 'Jarak jauh', desc: 'Terhubung lewat aplikasi saat tidak sekota.' },
  { id: 'perawatan', label: 'Perawatan', desc: 'Pelumas dan minyak — yang habis pakai.' },
]

/* Nama di resi & mutasi rekening: badan usaha induk yang netral, bukan nama toko.
   Nama aslinya mengikuti data klien — di purwarupa ini sengaja ditulis sebagai
   keterangan, dan di tiruan resi/mutasi ditampilkan sebagai blok sensor. */
export const PENGIRIM = 'Badan usaha induk'

export const PRODUK = [
  {
    slug: 'pulse-duo',
    nama: 'Pulse Duo',
    situasi: 'berdua',
    tingkat: 'Sedang',
    harga: 1290000,
    image: '/images/produk/duo.webp',
    unggulan: true,
    ringkas: 'Dua motor terpisah, sepuluh pola getaran. Dikendalikan bergantian, bukan sendiri-sendiri.',
    cerita: [
      'Pulse Duo dirancang untuk satu hal: dipakai berdua tanpa harus ada yang jadi "operator". Bentuknya melengkung mengikuti tubuh dan cukup ramping untuk tetap di tempat saat Anda berdua bergerak.',
      'Dua motornya bisa diatur terpisah. Satu tombol mengganti pola, satu lagi mengatur kekuatan — cukup sederhana untuk ditemukan dalam gelap.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Ketahanan air', 'Tahan percik — tidak untuk direndam'],
      ['Daya', 'Isi ulang USB-C, ±2 jam pemakaian'],
      ['Kebisingan', 'Di bawah 45 dB pada mode terendah'],
    ],
    isiKotak: ['Alat', 'Kabel USB-C', 'Kantong simpan satin hitam', 'Panduan singkat'],
    kotak: { ukuran: '22 × 15 × 8 cm', berat: '0,6 kg' },
  },
  {
    slug: 'bullet-satu',
    nama: 'Bullet Satu',
    situasi: 'pertama',
    tingkat: 'Lembut',
    harga: 349000,
    image: '/images/produk/bullet.webp',
    unggulan: false,
    ringkas: 'Sebesar lipstik, satu tombol. Titik mulai yang paling tidak mengintimidasi.',
    cerita: [
      'Kalau ini pertama kalinya, mulailah dari yang paling kecil. Bullet Satu hanya punya satu tombol: tekan untuk menyala, tekan lagi untuk berganti tiga tingkat kekuatan.',
      'Ukurannya muat di kantong tas kosmetik — tidak ada yang akan mengira isinya selain lipstik.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
      ['Daya', 'Baterai AAA, ±3 jam'],
      ['Kebisingan', 'Di bawah 40 dB'],
    ],
    isiKotak: ['Alat', '1 baterai AAA', 'Kantong simpan'],
    kotak: { ukuran: '14 × 8 × 5 cm', berat: '0,2 kg' },
  },
  {
    slug: 'wand-hening',
    nama: 'Wand Hening',
    situasi: 'pertama',
    tingkat: 'Lembut',
    harga: 990000,
    image: '/images/produk/wand.webp',
    unggulan: true,
    ringkas: 'Kepala besar yang lembut, motor paling senyap di katalog. Untuk rumah berdinding tipis.',
    cerita: [
      'Nama "hening" bukan hiasan. Di mode terendah, suaranya lebih pelan dari kipas angin di kamar sebelah — kami menganggap itu bagian dari kerahasiaan, sama pentingnya dengan kotak polos.',
      'Kepalanya lebar dan empuk, jadi tidak ada titik tekan yang terlalu tajam. Cocok untuk pijat punggung juga, kalau memang itu yang ingin Anda katakan ke orang lain.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, gagang ABS'],
      ['Ketahanan air', 'Tahan percik'],
      ['Daya', 'Isi ulang USB-C, ±2,5 jam'],
      ['Kebisingan', 'Di bawah 38 dB pada mode terendah'],
    ],
    isiKotak: ['Alat', 'Kabel USB-C', 'Kantong simpan', 'Panduan singkat'],
    kotak: { ukuran: '30 × 10 × 8 cm', berat: '0,7 kg' },
  },
  {
    slug: 'link-jarak',
    nama: 'Link Jarak',
    situasi: 'jarak',
    tingkat: 'Sedang',
    harga: 1590000,
    image: '/images/produk/remote.webp',
    unggulan: false,
    ringkas: 'Dikendalikan lewat aplikasi dari kota lain. Aplikasinya pun tidak memakai nama merek.',
    cerita: [
      'Untuk pasangan yang sedang berjauhan: pasangan Anda mengatur pola dan kekuatan dari ponselnya, di mana pun ia berada, selama keduanya tersambung internet.',
      'Ikon aplikasinya bernama "Link" dengan logo polos. Notifikasinya tidak pernah menyebut apa pun selain "sambungan aktif".',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Ketahanan air', 'Tahan percik'],
      ['Koneksi', 'Bluetooth 5.0 + aplikasi (Android & iOS)'],
      ['Daya', 'Isi ulang magnetik, ±90 menit'],
    ],
    isiKotak: ['Alat', 'Kabel magnetik', 'Kartu kode aplikasi', 'Kantong simpan'],
    kotak: { ukuran: '18 × 12 × 7 cm', berat: '0,4 kg' },
  },
  {
    slug: 'set-penjelajah',
    nama: 'Set Penjelajah',
    situasi: 'berdua',
    tingkat: 'Kuat',
    harga: 1450000,
    image: '/images/produk/set.webp',
    unggulan: false,
    ringkas: 'Empat bentuk dalam satu kotak, untuk pasangan yang sudah tahu apa yang mereka suka.',
    cerita: [
      'Bukan untuk pemula — dan kami lebih suka mengatakannya terus terang. Set ini berisi empat bentuk dengan tingkat yang berbeda, supaya Anda berdua bisa mencoba tanpa membeli satu per satu.',
      'Semuanya disimpan dalam satu kotak kaku bersekat, dengan tutup magnet dan tanpa cetakan di luar.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
      ['Jumlah bentuk', '4, masing-masing tanpa motor'],
      ['Perawatan', 'Cuci air hangat + sabun tanpa pewangi'],
    ],
    isiKotak: ['4 alat', 'Kotak simpan bersekat', 'Panduan singkat'],
    kotak: { ukuran: '26 × 20 × 9 cm', berat: '0,9 kg' },
  },
  {
    slug: 'paket-berdua',
    nama: 'Paket Berdua',
    situasi: 'berdua',
    tingkat: 'Lembut',
    harga: 1750000,
    image: '/images/produk/kit.webp',
    unggulan: true,
    ringkas: 'Pulse Duo, pelumas, minyak pijat, dan pembersih — cukup untuk memulai tanpa membeli terpisah.',
    cerita: [
      'Paket paling sering dipesan sebagai hadiah. Isinya semua yang dibutuhkan untuk malam pertama mencoba: satu alat untuk berdua, dan tiga barang habis pakai yang biasanya lupa dibeli.',
      'Dikirim dalam satu kotak cokelat polos — tidak ada pita, tidak ada kartu, kecuali Anda sendiri yang meminta kartu kosong.',
    ],
    spek: [
      ['Isi', 'Pulse Duo + Silken Pelumas + Minyak Pijat Sitrus + pembersih'],
      ['Hemat', 'Rp 240.000 dibanding membeli terpisah'],
      ['Garansi alat', '12 bulan'],
      ['Kartu ucapan', 'Kosong, bila diminta di catatan'],
    ],
    isiKotak: ['Pulse Duo', 'Pelumas 100 ml', 'Minyak pijat 50 ml', 'Pembersih 100 ml'],
    kotak: { ukuran: '28 × 22 × 10 cm', berat: '1,3 kg' },
  },
  {
    slug: 'silken-pelumas',
    nama: 'Silken Pelumas',
    situasi: 'perawatan',
    tingkat: 'Lembut',
    harga: 189000,
    image: '/images/produk/pelumas.webp',
    unggulan: false,
    ringkas: 'Berbahan air, mudah dibilas, dan aman dipakai bersama alat berbahan silikon.',
    cerita: [
      'Pelumas berbahan silikon merusak alat berbahan silikon — itu kesalahan yang paling sering kami temui. Silken berbahan air, jadi aman untuk semua alat di katalog ini.',
      'Tanpa pewangi, tanpa gliserin, dan tidak lengket saat mengering.',
    ],
    spek: [
      ['Bahan dasar', 'Air, tanpa gliserin & paraben'],
      ['Isi', '100 ml'],
      ['Aman untuk', 'Semua alat silikon & kondom lateks'],
      ['Setelah dibuka', 'Pakai dalam 12 bulan'],
    ],
    isiKotak: ['Botol 100 ml dengan tutup pompa'],
    kotak: { ukuran: '12 × 8 × 5 cm', berat: '0,2 kg' },
  },
  {
    slug: 'minyak-pijat-sitrus',
    nama: 'Minyak Pijat Sitrus',
    situasi: 'perawatan',
    tingkat: 'Lembut',
    harga: 165000,
    image: '/images/minyak-pijat.webp',
    unggulan: false,
    ringkas: 'Aroma sitrus yang tipis. Menyerap perlahan, tidak meninggalkan noda di seprai.',
    cerita: [
      'Kadang yang paling dibutuhkan bukan alat, melainkan alasan untuk memperlambat. Minyak ini dibuat untuk pijat panjang: licin cukup lama, lalu menyerap tanpa rasa lengket.',
      'Hanya untuk pemakaian luar dan tidak untuk dipakai bersama kondom lateks.',
    ],
    spek: [
      ['Bahan dasar', 'Minyak biji anggur & jojoba'],
      ['Isi', '50 ml'],
      ['Aroma', 'Kulit jeruk, sangat tipis'],
      ['Catatan', 'Tidak untuk kondom lateks'],
    ],
    isiKotak: ['Botol kaca 50 ml dengan pipet'],
    kotak: { ukuran: '12 × 8 × 5 cm', berat: '0,2 kg' },
  },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const produkBySlug = (slug) => PRODUK.find((p) => p.slug === slug)
export const labelSituasi = (id) => SITUASI.find((s) => s.id === id)?.label ?? id
