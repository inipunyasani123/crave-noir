import { PRODUK } from '@/lib/katalog'
import { ARSIP } from '@/lib/arsip'

const SITE = 'https://crave-noir.pintuweb.id'

export default function sitemap() {
  const now = new Date()
  return [
    { url: SITE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/koleksi`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/pengiriman`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/jurnal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...PRODUK.map((p) => ({ url: `${SITE}/produk/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })),
    ...ARSIP.map((a) => ({ url: `${SITE}/jurnal/${a.slug}`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 })),
  ]
}
