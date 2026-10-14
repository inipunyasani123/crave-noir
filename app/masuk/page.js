import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave untuk melacak paket. Tidak ada nama merek di surel maupun notifikasi.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/masuk' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="masuk" />
}
