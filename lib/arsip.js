/* ============================================================================
   "Arsip" — jurnal konsep Noir. Tiap tulisan diberi nomor berkas, karena
   bahasa rupa varian ini adalah dokumen yang disensor. Nadanya lugas dan
   sedikit nakal: berani menyebut hal yang biasanya dibisikkan.
   Blok: { p } paragraf, { h } subjudul, { list } daftar, { note } catatan
   samping, { redacted } kalimat dengan bagian yang disensor.
   ========================================================================== */

export const ARSIP = [
  {
    slug: 'apa-yang-tertulis-di-resi',
    no: '01',
    judul: 'Apa yang sebenarnya tertulis di resi Anda',
    ringkas:
      'Kami membongkar satu paket sungguhan, baris demi baris — dari label kurir sampai notifikasi mutasi rekening.',
    menit: 4,
    topik: 'Pengiriman',
    isi: [
      { p: 'Pertanyaan yang paling sering masuk ke kotak bantuan kami bukan soal produk. Bunyinya kira-kira begini: "Kalau paketnya diterima ibu saya, beliau bakal tahu nggak?" Jawaban singkatnya: tidak. Jawaban panjangnya ada di bawah, karena Anda berhak tahu persis apa yang terlihat — bukan sekadar dijanjikan "aman".' },
      { h: 'Label kurir' },
      { p: 'Label yang ditempel di kotak hanya berisi empat hal: nama dan alamat penerima, nama pengirim, berat paket, dan keterangan isi. Nama pengirim selalu nama badan usaha induk, bukan nama toko. Keterangan isi selalu "perlengkapan pribadi". Tidak ada kata lain, tidak ada kode produk yang bisa dicari di internet.' },
      { redacted: ['Isi paket:', 'perlengkapan pribadi', '— tidak pernah nama barangnya.'] },
      { h: 'Kotaknya sendiri' },
      { p: 'Kotak cokelat polos, satu lapis lakban bening, tanpa cetakan. Ukurannya kami pilih dari tiga ukuran standar yang juga dipakai toko pakaian dan aksesori, supaya dari luar tidak ada yang "khas". Di setiap halaman produk, kami mencantumkan ukuran dan berat kotaknya — jadi Anda bisa membayangkan apa yang akan tiba sebelum memesan.' },
      { h: 'Mutasi rekening dan dompet digital' },
      { p: 'Di sinilah banyak toko lupa. Pembayaran Anda diproses atas nama badan usaha induk, sehingga yang muncul di mutasi rekening, notifikasi m-banking, maupun riwayat dompet digital adalah nama itu. Positive Crave tidak pernah muncul.' },
      { h: 'Surel dan notifikasi' },
      { list: ['Subjek surel: "Pesanan Anda #PC-xxxx sudah dikirim" — tanpa nama barang.', 'Pratinjau notifikasi di layar kunci: hanya nomor pesanan.', 'Tidak ada surel promosi kecuali Anda sendiri yang berlangganan.'] },
      { note: 'Mau lebih rapat lagi? Tulis di catatan pesanan: "tanpa bel". Kurir akan menghubungi lewat telepon, bukan memanggil dari depan rumah.' },
      { h: 'Yang tidak bisa kami kendalikan' },
      { p: 'Kami tidak bisa mencegah orang lain membuka paket yang bukan miliknya. Kalau itu kekhawatiran Anda, pilih alamat kantor, loker paket, atau titip di agen kurir terdekat — semua pilihan itu tersedia saat checkout.' },
    ],
  },
  {
    slug: 'membicarakannya-tanpa-canggung',
    no: '02',
    judul: 'Membicarakannya dengan pasangan tanpa canggung',
    ringkas:
      'Bagian tersulit bukan memilih barangnya, tapi membuka obrolannya. Lima kalimat pembuka yang sudah dicoba pembaca kami.',
    menit: 5,
    topik: 'Hubungan',
    isi: [
      { p: 'Kami sering mendengar hal yang sama: "Saya penasaran, tapi takut pasangan saya merasa kurang." Wajar. Mengusulkan sesuatu yang baru di ranjang gampang terdengar seperti kritik, padahal niatnya justru ingin lebih dekat.' },
      { p: 'Kabar baiknya, cara membukanya bisa dipelajari. Ini bukan naskah — anggap saja pemanas.' },
      { h: 'Pilih waktunya dulu' },
      { p: 'Jangan di tengah-tengah, jangan juga tepat sesudahnya. Waktu terbaik justru saat santai dan tidak ada yang sedang ditunggu: jalan kaki sore, perjalanan pulang, atau sambil memasak. Tidak ada tekanan untuk langsung mencoba.' },
      { h: 'Lima kalimat pembuka' },
      { list: ['"Aku nemu sesuatu yang bikin penasaran. Mau lihat bareng?"', '"Ada nggak yang dari dulu pengin kamu coba tapi belum pernah bilang?"', '"Aku suka banget waktu kita … Mau lebih sering begitu?"', '"Kalau kita pilih satu barang buat berdua, kamu pilih yang mana?"', '"Nggak harus sekarang — aku cuma pengin kamu tahu aku terbuka."'] },
      { h: 'Kalau jawabannya "nggak dulu"' },
      { p: 'Itu jawaban yang sah, bukan penolakan terhadap Anda. Tanyakan satu hal saja: "Oke. Ada yang bikin kamu ragu?" Seringnya keraguan itu praktis — takut ketahuan, takut sakit, takut aneh — dan semuanya bisa dijawab. Soal ketahuan, misalnya, bisa dijawab dengan membaca Arsip No. 01 berdua.' },
      { redacted: ['Aturan kami sendiri:', 'tidak ada yang dipaksa', ', termasuk oleh toko ini.'] },
      { h: 'Mulai dari yang paling sederhana' },
      { p: 'Kalau obrolannya berjalan baik, jangan langsung memesan yang paling canggih. Kategori "Baru pertama" berisi barang dengan satu atau dua tombol saja. Semakin sedikit yang perlu dipelajari, semakin cepat Anda berdua bisa tertawa bersama — dan itu, anehnya, sering jadi bagian terbaiknya.' },
    ],
  },
  {
    slug: 'silikon-tpe-dan-label-aman',
    no: '03',
    judul: 'Silikon, TPE, dan kenapa label "aman" saja tidak cukup',
    ringkas:
      'Tidak semua bahan yang lembut itu sama. Cara membedakan material yang benar-benar aman untuk kontak lama dengan kulit.',
    menit: 4,
    topik: 'Material',
    isi: [
      { p: 'Di toko online mana pun, hampir semua produk mengaku "body-safe". Masalahnya, istilah itu tidak diatur. Siapa pun boleh menuliskannya. Jadi mari kita bicara soal bahan, bukan soal label.' },
      { h: 'Berpori atau tidak' },
      { p: 'Ini satu-satunya pertanyaan yang paling penting. Bahan berpori seperti TPE, jelly, atau karet murah punya rongga mikroskopis yang bisa menyimpan bakteri — bahkan setelah dicuci. Bahan tidak berpori seperti silikon medical-grade, kaca borosilikat, dan baja tahan karat bisa dibersihkan sampai benar-benar bersih.' },
      { list: ['Silikon medical-grade: tidak berpori, lembut, awet. Semua alat di katalog kami memakai ini.', 'TPE / TPR: lebih murah, berpori, cepat menyerap noda dan bau.', 'Jelly / PVC: sering mengandung ftalat; hindari.'] },
      { h: 'Tanda bahan yang bermasalah' },
      { p: 'Bau plastik yang tajam saat kotak dibuka, permukaan yang terasa lengket atau berminyak, dan warna yang mudah menempel ke kain. Kalau menemukan salah satunya, jangan dipakai.' },
      { h: 'Merawat silikon' },
      { list: ['Cuci dengan air hangat dan sabun tanpa pewangi sebelum dan sesudah dipakai.', 'Keringkan dengan diangin-anginkan, bukan dilap tisu yang meninggalkan serat.', 'Simpan terpisah di kantong masing-masing — silikon bisa bereaksi jika saling menempel lama.', 'Jangan memakai pelumas berbahan silikon untuk alat berbahan silikon.'] },
      { redacted: ['Aturan praktis:', 'kalau ragu dengan bahannya', ', tanyakan dulu sebelum membeli.'] },
      { note: 'Setiap halaman produk kami mencantumkan material, ketahanan air, dan cara perawatannya. Kalau ada yang tidak tertulis, itu kekurangan kami — silakan tanyakan.' },
    ],
  },
]

export const arsipBySlug = (slug) => ARSIP.find((a) => a.slug === slug)
