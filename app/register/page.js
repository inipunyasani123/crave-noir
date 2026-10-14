import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Daftar — Positive Crave',
  description: 'Buat akun Positive Crave tanpa nama asli — cukup surel untuk konfirmasi pesanan.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/register' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="daftar" />
}
