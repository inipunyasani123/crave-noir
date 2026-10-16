import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Daftar',
  description:
    'Buat akun Positive Crave tanpa nama asli — cukup surel untuk konfirmasi pesanan.',
  path: '/register',
  index: false,
})

export default function Page() {
  return <AkunForm mode="daftar" />
}
