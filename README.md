# Positive Crave — Konsep Noir

Landing page Positive Crave konsep "Noir": intimacy essentials untuk pasangan — berani, playful, dan percaya diri.

**Demo live:** https://crave-noir.pintuweb.id

![Tangkapan layar Positive Crave](public/og.jpg)

> Konsep desain untuk kontes brief Positive Crave, bukan toko resmi. Checkout dan login hanya purwarupa.

## Konsep

Konsep "Noir" dengan bahasa rupa **Tanpa Label**, karena nilai jual utama brief ini adalah kerahasiaan: bidang hitam pekat, blok sensor, warna kraft kotak polos, dan satu aksen merah muda neon yang dipakai sehemat mungkin.

## Halaman

`/` · `/checkout` · `/forgot` · `/masuk` · `/produk` · `/register`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon)
- Font: Inter Tight, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

## Kredit foto & ilustrasi

Daftar lengkap (berkas, pembuat, sumber, lisensi) ada di [`public/images/SUMBER.md`](public/images/SUMBER.md). Ringkasnya: foto hero CC0, ilustrasi produk buatan sendiri (`scripts/ilustrasi/produk.mjs`), varian WebP di `public/_img/` dibuat oleh `scripts/static-images.mjs`.

---

Bagian dari koleksi 9 entri kontes desain web di [PortalKontes](https://www.pintuweb.id/kontes-desain). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
