import AkunForm from '@/components/AkunForm'
import { meta } from '@/lib/seo'

export const metadata = meta({
  title: 'Masuk',
  description:
    'Masuk ke akun Positive Crave untuk melacak paket. Tidak ada nama merek di surel maupun notifikasi.',
  path: '/masuk',
  index: false,
})

export default function Page() {
  return <AkunForm mode="masuk" />
}
