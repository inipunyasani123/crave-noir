'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Koleksi', href: '/koleksi' },
  { label: 'Pengiriman', href: '/pengiriman' },
  { label: 'Arsip', href: '/jurnal' },
  { label: 'Tanya Jawab', href: '/#tanya' },
  { label: 'Bantuan', href: '/#kontak' },
]

const aktif = (pathname, href) => !href.startsWith('/#') && (pathname === href || pathname.startsWith(href + '/'))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const tombolRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Laci menu: kunci scroll, fokus pindah ke dalam laci dan berputar di
  // dalamnya (Tab / Shift+Tab), Escape menutup, lalu fokus kembali ke tombol menu.
  useEffect(() => {
    if (!open) return
    const tombol = tombolRef.current
    const fokusan = () =>
      Array.from(panelRef.current?.querySelectorAll('a[href], button') ?? [])
    const t = window.setTimeout(() => fokusan()[0]?.focus(), 30)
    const onKey = (e) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab') return
      const el = fokusan()
      if (!el.length) return
      const awal = el[0], akhir = el[el.length - 1]
      if (e.shiftKey && document.activeElement === awal) { e.preventDefault(); akhir.focus() }
      else if (!e.shiftKey && document.activeElement === akhir) { e.preventDefault(); awal.focus() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      tombol?.focus()
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? 'border-chalk/10 bg-void/92 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="PositiveCrave — beranda">
          <span aria-hidden="true" className="h-4 w-4 bg-neon" />
          <span className="text-base font-extrabold tracking-tight text-chalk">
            Positive<span className="text-neon">Crave</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={aktif(pathname, n.href) ? 'page' : undefined}
              className={`micro transition-colors hover:text-chalk ${aktif(pathname, n.href) ? 'text-neon' : 'text-ash'}`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/masuk"
            className="micro bg-neon px-5 py-3 text-void transition-colors hover:bg-chalk"
          >
            Masuk
          </Link>
        </nav>

        <button
          ref={tombolRef}
          className="-mr-2 p-2 text-chalk md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={2} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-void/70 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div ref={panelRef}
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-void-2 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-chalk/10 px-6 py-4">
                <span className="micro text-ash">Menu</span>
                <button onClick={() => setOpen(false)} className="-mr-2 p-2 text-chalk" aria-label="Tutup menu">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <nav className="flex-1 px-6" aria-label="Navigasi mobile">
                {NAV.map((n, i) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-chalk/10 py-5 text-lg font-bold text-chalk"
                  >
                    <span aria-hidden="true" className="micro text-neon">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6">
                <Link
                  href="/masuk"
                  onClick={() => setOpen(false)}
                  className="micro block bg-neon py-4 text-center text-void"
                >
                  Masuk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
