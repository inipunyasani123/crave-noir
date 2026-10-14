import { Suspense } from 'react'
import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Selesaikan pemesanan Anda. Paket dikirim dalam kotak polos tanpa nama merek, ke rumah, kantor, loker, atau agen.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/checkout' },
  robots: { index: false, follow: true },
}

// useSearchParams (?produk=…) butuh batas Suspense agar halaman tetap bisa diprerender.
export default function CheckoutRoute() {
  return (
    <Suspense fallback={<section className="min-h-screen bg-void" />}>
      <CheckoutPage />
    </Suspense>
  )
}
