import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Lupa Kata Sandi — Positive Crave',
  description: 'Atur ulang kata sandi akun Positive Crave. Subjek surelnya polos, tanpa nama merek.',
  alternates: { canonical: 'https://crave-noir.pintuweb.id/forgot' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="lupa" />
}
