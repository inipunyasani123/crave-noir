// Generator ilustrasi produk Positive Crave (semua varian; varian ini: noir).
// Cara membuat ulang: node scripts/ilustrasi/produk.mjs noir <folder> -> berkas HTML berisi SVG; render tiap berkas ke
// WebP 1200x1500 dengan peramban headless (Chrome), lalu salin ke public/images/produk/ (minyak -> public/images/minyak-pijat.webp)
// dan jalankan node scripts/static-images.mjs . . Font memakai Google Fonts varian (unduh lokal ke folder fonts/<varian>/fonts.css).
// Ilustrasi produk Positive Crave per varian (satu gaya per varian): SVG -> HTML (font varian) untuk render.mjs.
// Pemakaian: node produk.mjs <varian|semua> <folder-keluaran>   -> menulis <varian>/<produk>.html + batch.json
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const W = 1200, H = 1500, FLOOR = 1000

// ---------- warna ----------
const hx = (c) => { c = c.replace('#', ''); return [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16)) }
const toHex = (a) => '#' + a.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')
const mix = (a, b, t) => { const A = hx(a), B = hx(b); return toHex(A.map((v, i) => v + (B[i] - v) * t)) }
const shade = (c, t) => (t < 0 ? mix(c, '#000000', -t) : mix(c, '#ffffff', t))

// ---------- tema per varian ----------
export const TEMA = {
  noir: {
    font: { link: 'Inter+Tight:ital,wght@0,400;0,600;0,800;1,500', nama: "'Inter Tight', sans-serif", namaStyle: 'font-weight:800;letter-spacing:-0.02em', kecil: "'Inter Tight', sans-serif" },
    wall: ['#16121a', '#0e0b10', '#0b090d'], floor: ['#1a151d', '#0a080b'],
    glow: [{ cx: 0.72, cy: 0.22, r: 0.55, c: '#ff2d78', o: 0.20 }, { cx: 0.2, cy: 0.9, r: 0.5, c: '#5a1636', o: 0.25 }],
    vignette: 0.55, grain: 0.07, reflect: 0.22, rim: '#ff5c9a', rimO: 0.85, shadow: '#000000', shadowO: 0.75,
    silikon: ['#c2185b', '#e2477f', '#2a2430', '#f06292'], aksen: '#ff2d78',
    botol: { pelumas: '#2b2730', pompa: '#ff2d78', kaca: '#3a1d2c', tutup: '#141116', label: '#f3eef0', tinta: '#141116', aksen: '#ff2d78' },
    kotak: { kraft: '#a67c52', isi: '#141116' }, set: { kotak: '#121014', lapis: '#2b1a24', tepi: '#ff2d78' },
    minyak: { nama: 'Sitrus', sub: 'MINYAK NABATI', isi: '50 ml' }, pelumas: { nama: 'Silken', sub: 'BERBAHAN AIR', isi: '100 ml' },
    kit: ['kantong', 'pelumas', 'minyak', 'pembersih'], kantong: '#1f1b22', kantongTali: '#ff2d78',
  },
  amber: {
    font: { link: 'Manrope:wght@400;600;800', nama: "'Manrope', sans-serif", namaStyle: 'font-weight:800;letter-spacing:-0.01em', kecil: "'Manrope', sans-serif" },
    wall: ['#2c1d12', '#1f150d', '#170f09'], floor: ['#2f2116', '#120b06'],
    glow: [{ cx: 0.3, cy: 0.26, r: 0.6, c: '#ffb04f', o: 0.42 }, { cx: 0.85, cy: 0.75, r: 0.4, c: '#b85a1f', o: 0.18 }],
    vignette: 0.5, grain: 0.08, reflect: 0.0, rim: '#ffcf8a', rimO: 0.45, shadow: '#0c0603', shadowO: 0.7, bokeh: true,
    silikon: ['#b8643a', '#d08a52', '#7a3f22', '#e8c39a'], aksen: '#f2a23c',
    botol: { pelumas: '#efe2cf', pompa: '#6b3b1f', kaca: '#8a4a12', tutup: '#2a1a10', label: '#f6ead8', tinta: '#3a2416', aksen: '#c96f1e' },
    kotak: { kraft: '#a87b4f', isi: '#2a1a10' }, set: { kotak: '#2a1a10', lapis: '#5a3418', tepi: '#f2a23c' },
    minyak: { nama: 'Hangat', sub: 'KAYU MANIS & VANILA', isi: '100 ml' }, pelumas: { nama: 'Satin', sub: 'BERBAHAN AIR', isi: '100 ml' },
    kit: ['minyak', 'pelumas', 'lilin', 'kartu'],
  },
  grace: {
    font: { link: 'Playfair+Display:ital,wght@0,500;1,500&family=Inter:wght@400;600', nama: "'Playfair Display', serif", namaStyle: 'font-style:italic;font-weight:500', kecil: "'Inter', sans-serif" },
    wall: ['#f8f0ea', '#f2e6de', '#ecdcd1'], floor: ['#e8d6c9', '#d9c0ae'],
    glow: [{ cx: 0.72, cy: 0.18, r: 0.6, c: '#fffaf4', o: 0.9 }],
    vignette: 0.12, grain: 0.05, reflect: 0, rim: '#fff4ea', rimO: 0.5, shadow: '#6b4a3c', shadowO: 0.38, sutra: true,
    silikon: ['#c48a92', '#a8758a', '#ead9cc', '#b9898e'], aksen: '#a8834e',
    botol: { pelumas: '#f3ebe6', pompa: '#4a2338', kaca: '#9a5a1e', tutup: '#4a2338', label: '#fbf6f1', tinta: '#4a2338', aksen: '#a8834e' },
    kotak: { kraft: '#f1e6da', pita: '#4a2338', isi: '#4a2338' }, set: { kotak: '#4a2338', lapis: '#6b3a52', tepi: '#a8834e' },
    minyak: { nama: 'Sutra', sub: 'SITRUS & MELATI', isi: '50 ml' }, pelumas: { nama: 'Sutra', sub: 'BERBAHAN AIR', isi: '100 ml' },
    kit: ['lilin', 'minyak', 'pelumas', 'kartu'],
  },
  lumen: {
    font: { link: 'Lora:ital,wght@0,500;1,500&family=Inter:wght@400;600', nama: "'Lora', serif", namaStyle: 'font-weight:500', kecil: "'Inter', sans-serif" },
    wall: ['#f7f8f3', '#f0f2ea', '#e9ece2'], floor: ['#e2e6da', '#d3d8ca'],
    glow: [{ cx: 0.25, cy: 0.2, r: 0.7, c: '#ffffff', o: 0.85 }],
    vignette: 0.06, grain: 0.035, reflect: 0, rim: '#ffffff', rimO: 0.55, shadow: '#3e4a3c', shadowO: 0.34, jendela: true,
    silikon: ['#8fa58f', '#c3cbb8', '#b9b1cf', '#e9e4d8'], aksen: '#4d6a57',
    botol: { pelumas: '#f4f4ee', pompa: '#4d6a57', kaca: '#cfd8cc', tutup: '#4d6a57', label: '#ffffff', tinta: '#2f3d33', aksen: '#4d6a57', bening: true },
    kotak: { kraft: '#e9e4d8', isi: '#4d6a57' }, set: { kotak: '#f1f1ea', lapis: '#d7dfd2', tepi: '#4d6a57' },
    minyak: { nama: 'Netral', sub: 'JOJOBA & BIJI ANGGUR', isi: '100 ml' }, pelumas: { nama: 'Berbahan air', sub: 'pH 4,5 · TANPA GLISERIN', isi: '100 ml', fakta: true },
    kit: ['pelumas', 'pembersih', 'kantong'],
  },
  close: {
    font: { link: 'Instrument+Serif:ital@0;1&family=Inter:wght@400;600', nama: "'Instrument Serif', serif", namaStyle: 'font-style:italic', kecil: "'Inter', sans-serif" },
    wall: ['#e8eff5', '#dfe8f0', '#d6e2ec'], floor: ['#cbdae6', '#b6cadb'],
    glow: [{ cx: 0.3, cy: 0.22, r: 0.6, c: '#ffffff', o: 0.7 }, { cx: 0.8, cy: 0.35, r: 0.35, c: '#c9d7f0', o: 0.5 }],
    vignette: 0.1, grain: 0.045, reflect: 0, rim: '#ffffff', rimO: 0.5, shadow: '#2c4560', shadowO: 0.34, bulan: true,
    silikon: ['#7fa3c4', '#5d7f9e', '#aea8d4', '#e9eef4'], aksen: '#3d6a93',
    botol: { pelumas: '#f2f5f8', pompa: '#3d6a93', kaca: '#2f5a8a', tutup: '#1f3550', label: '#f8fafc', tinta: '#1f3550', aksen: '#3d6a93' },
    kotak: { kraft: '#a98058', isi: '#1f3550' }, set: { kotak: '#1f3550', lapis: '#32557a', tepi: '#9fc0de' },
    minyak: { nama: 'Teduh', sub: 'KAYU CENDANA', isi: '100 ml' }, pelumas: { nama: 'Tenang', sub: 'BERBAHAN AIR', isi: '100 ml' },
    kit: ['pelumas', 'minyak', 'pembersih', 'kartu'],
  },
}

// ---------- latar studio ----------
function studio(t, id) {
  const glows = t.glow.map((g, i) => `<radialGradient id="${id}g${i}" cx="${g.cx}" cy="${g.cy}" r="${g.r}"><stop offset="0" stop-color="${g.c}" stop-opacity="${g.o}"/><stop offset="1" stop-color="${g.c}" stop-opacity="0"/></radialGradient>`).join('')
  return {
    defs: `
    <linearGradient id="${id}wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.wall[0]}"/><stop offset="0.6" stop-color="${t.wall[1]}"/><stop offset="1" stop-color="${t.wall[2]}"/></linearGradient>
    <linearGradient id="${id}floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.floor[0]}"/><stop offset="1" stop-color="${t.floor[1]}"/></linearGradient>
    <linearGradient id="${id}hz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="0.5" stop-color="#000" stop-opacity="${t.reflect ? 0.25 : 0.06}"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    ${glows}
    <radialGradient id="${id}vig" cx="0.5" cy="0.45" r="0.75"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${t.vignette}"/></radialGradient>
    <filter id="${id}grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 1.2 -0.25"/></filter>
    <filter id="${id}b40" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="40"/></filter>
    <filter id="${id}b18" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="${id}b8" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="8"/></filter>
    <filter id="${id}b3" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3"/></filter>
    <linearGradient id="${id}refl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${t.reflect}"/><stop offset="0.35" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <mask id="${id}reflMask"><rect x="0" y="${FLOOR}" width="${W}" height="${H - FLOOR}" fill="url(#${id}refl)"/></mask>`,
    back: `
    <rect width="${W}" height="${FLOOR}" fill="url(#${id}wall)"/>
    <rect y="${FLOOR}" width="${W}" height="${H - FLOOR}" fill="url(#${id}floor)"/>
    <rect y="${FLOOR - 40}" width="${W}" height="80" fill="url(#${id}hz)"/>
    ${t.glow.map((g, i) => `<rect width="${W}" height="${H}" fill="url(#${id}g${i})"/>`).join('')}
    ${t.jendela ? jendela(id) : ''}${t.bulan ? `<circle cx="860" cy="330" r="150" fill="#ffffff" opacity="0.32" filter="url(#${id}b40)"/>` : ''}
    ${t.bokeh ? bokeh(id) : ''}${t.sutra ? sutra(id) : ''}`,
    front: `
    <rect width="${W}" height="${H}" fill="url(#${id}vig)"/>
    <rect width="${W}" height="${H}" filter="url(#${id}grain)" opacity="${t.grain}"/>`,
  }
}
const jendela = (id) => `<g opacity="0.55" filter="url(#${id}b18)"><path d="M120 120 L420 120 L560 ${FLOOR} L260 ${FLOOR} Z" fill="#ffffff"/><path d="M470 120 L620 120 L760 ${FLOOR} L610 ${FLOOR} Z" fill="#ffffff" opacity="0.7"/></g>
  <g opacity="0.16" filter="url(#${id}b8)"><path d="M260 ${FLOOR} L560 ${FLOOR} L700 1500 L330 1500 Z" fill="#ffffff"/></g>`
const bokeh = (id) => [[180, 300, 34, 0.35], [260, 210, 18, 0.3], [930, 260, 26, 0.22], [1010, 420, 14, 0.25], [140, 520, 12, 0.22], [880, 560, 40, 0.12]]
  .map(([x, y, r, o]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffc074" opacity="${o}" filter="url(#${id}b8)"/>`).join('')
const sutra = (id) => `
  <linearGradient id="${id}satin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e2dd"/><stop offset="0.45" stop-color="#e6cbc6"/><stop offset="1" stop-color="#d9b8b2"/></linearGradient>
  <linearGradient id="${id}satin2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.35" stop-color="#fff" stop-opacity="0.55"/><stop offset="0.6" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <path d="M0 ${FLOOR + 30} C 260 ${FLOOR - 10}, 470 ${FLOOR + 70}, 700 ${FLOOR + 40} C 900 ${FLOOR + 15}, 1060 ${FLOOR + 60}, 1200 ${FLOOR + 40} L1200 1500 L0 1500 Z" fill="url(#${id}satin)"/>
  <path d="M0 ${FLOOR + 30} C 260 ${FLOOR - 10}, 470 ${FLOOR + 70}, 700 ${FLOOR + 40} C 900 ${FLOOR + 15}, 1060 ${FLOOR + 60}, 1200 ${FLOOR + 40} L1200 ${FLOOR + 140} C 1000 ${FLOOR + 170}, 820 ${FLOOR + 110}, 600 ${FLOOR + 150} C 380 ${FLOOR + 190}, 200 ${FLOOR + 120}, 0 ${FLOOR + 150} Z" fill="url(#${id}satin2)" opacity="0.8"/>
  <path d="M0 ${FLOOR + 30} C 260 ${FLOOR - 10}, 470 ${FLOOR + 70}, 700 ${FLOOR + 40} C 900 ${FLOOR + 15}, 1060 ${FLOOR + 60}, 1200 ${FLOOR + 40}" fill="none" stroke="#fff8f5" stroke-width="5" opacity="0.7" filter="url(#${id}b3)"/>
  <path d="M0 ${FLOOR + 300} C 300 ${FLOOR + 250}, 520 ${FLOOR + 360}, 800 ${FLOOR + 320} C 980 ${FLOOR + 295}, 1100 ${FLOOR + 330}, 1200 ${FLOOR + 320}" fill="none" stroke="#c9a39d" stroke-width="40" opacity="0.18" filter="url(#${id}b18)"/>`
// ---------- bahan ----------
// gradien silikon satin: tepi gelap, pantulan lebar, sisi rim
const silikon = (id, c, t, a = 0) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(${a} 0.5 0.5)">
  <stop offset="0" stop-color="${shade(c, -0.45)}"/><stop offset="0.16" stop-color="${shade(c, -0.12)}"/><stop offset="0.36" stop-color="${shade(c, 0.22)}"/>
  <stop offset="0.6" stop-color="${c}"/><stop offset="0.86" stop-color="${shade(c, -0.32)}"/><stop offset="0.95" stop-color="${mix(shade(c, -0.2), t.rim, t.rimO * 0.7)}"/><stop offset="1" stop-color="${shade(c, -0.4)}"/></linearGradient>`
const bola = (id, c, t) => `<radialGradient id="${id}" cx="0.36" cy="0.32" r="0.75"><stop offset="0" stop-color="${shade(c, 0.38)}"/><stop offset="0.35" stop-color="${shade(c, 0.08)}"/><stop offset="0.78" stop-color="${shade(c, -0.3)}"/><stop offset="0.93" stop-color="${mix(shade(c, -0.25), t.rim, t.rimO * 0.6)}"/><stop offset="1" stop-color="${shade(c, -0.45)}"/></radialGradient>`
const bayang = (id, t, cx, cy, rx, ry, k = 1) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx * 1.25}" ry="${ry * 1.6}" fill="${t.shadow}" opacity="${t.shadowO * 0.55 * k}" filter="url(#${id}b40)"/>
  <ellipse cx="${cx}" cy="${cy - 2}" rx="${rx * 0.78}" ry="${ry * 0.55}" fill="${t.shadow}" opacity="${t.shadowO * 0.9 * k}" filter="url(#${id}b8)"/>`
const kilap = (id, d, w = 14, o = 0.38) => `<path d="${d}" fill="none" stroke="#ffffff" stroke-width="${w}" stroke-linecap="round" opacity="${o}" filter="url(#${id}b8)"/>`

// pantulan lantai (noir): gambar ulang produk terbalik dan memudar
const pantul = (id, t, inner, pivot = FLOOR + 40) => (t.reflect ? `<g mask="url(#${id}reflMask)" opacity="0.9"><g transform="translate(0 ${2 * pivot}) scale(1 -1)">${inner}</g></g>` : '')

// ---------- produk ----------
const P = {}
P.duo = (t, id) => {
  const c = t.silikon[0]
  const body = `<path d="M480 470 L480 820 C480 965 548 1018 616 1018 C688 1018 742 962 742 862 L742 650" fill="none" stroke="url(#${id}m)" stroke-width="122" stroke-linecap="round"/>
    <circle cx="742" cy="598" r="70" fill="url(#${id}mb)"/>`
  return {
    defs: silikon(id + 'm', c, t) + bola(id + 'mb', c, t),
    g: `${bayang(id, t, 615, 1080, 230, 28)}${pantul(id, t, body, 1079)}${body}
    ${kilap(id, 'M452 520 L452 800 C452 905 494 965 548 992', 18, 0.32)}
    ${kilap(id, 'M720 690 L720 840', 12, 0.22)}
    <circle cx="718" cy="572" r="18" fill="#ffffff" opacity="0.4" filter="url(#${id}b8)"/>
    <circle cx="676" cy="968" r="10" fill="${shade(c, 0.35)}" opacity="0.9"/>`,
  }
}
P.wand = (t, id) => {
  const c = t.silikon[1], h = t.silikon[0]
  const body = `<g transform="rotate(-7 600 1060)">
    <path d="M562 650 L638 650 L630 1032 Q600 1052 570 1032 Z" fill="url(#${id}h)"/>
    <rect x="566" y="626" width="68" height="40" rx="14" fill="${shade(h, -0.3)}"/>
    <circle cx="600" cy="510" r="118" fill="url(#${id}b)"/>
    <circle cx="600" cy="760" r="9" fill="${shade(h, 0.45)}"/><circle cx="600" cy="800" r="9" fill="${shade(h, 0.45)}"/><circle cx="600" cy="840" r="9" fill="${shade(h, 0.45)}"/></g>`
  return {
    defs: silikon(id + 'h', h, t) + bola(id + 'b', c, t),
    g: `${bayang(id, t, 606, 1052, 150, 24)}${pantul(id, t, body, 1050)}${body}
    <g transform="rotate(-7 600 1060)">${kilap(id, 'M546 470 C556 432 584 410 612 404', 16, 0.5)}${kilap(id, 'M576 690 L572 990', 10, 0.25)}</g>`,
  }
}
P.bullet = (t, id) => {
  const c = t.silikon[3], b = t.silikon[0]
  const body = `<g transform="rotate(-11 600 1060)">
    <path d="M535 640 C535 560 665 560 665 640 L665 1040 L535 1040 Z" fill="url(#${id}m)"/>
    <rect x="535" y="868" width="130" height="22" fill="url(#${id}ring)"/>
    <circle cx="600" cy="690" r="13" fill="${shade(c, -0.25)}"/><circle cx="600" cy="690" r="6" fill="${shade(c, 0.3)}"/></g>`
  return {
    defs: silikon(id + 'm', c, t) + `<linearGradient id="${id}ring" x1="0" x2="1"><stop offset="0" stop-color="${shade(b, -0.3)}"/><stop offset="0.4" stop-color="${shade(b, 0.4)}"/><stop offset="1" stop-color="${shade(b, -0.35)}"/></linearGradient>`,
    g: `${bayang(id, t, 612, 1056, 118, 22)}${pantul(id, t, body, 1054)}${body}
    <g transform="rotate(-11 600 1060)">${kilap(id, 'M562 640 L562 1000', 14, 0.4)}</g>`,
  }
}
P.remote = (t, id) => {
  const e = t.silikon[1], r = t.silikon[3]
  const body = `<g transform="rotate(-14 520 820)"><path d="M520 560 C640 560 680 720 680 830 C680 960 610 1040 520 1040 C430 1040 360 960 360 830 C360 720 400 560 520 560 Z" fill="url(#${id}e)"/></g>
    <rect x="730" y="820" width="104" height="228" rx="52" fill="url(#${id}r)"/>
    <circle cx="782" cy="880" r="14" fill="${t.aksen}" opacity="0.85"/><circle cx="782" cy="932" r="14" fill="${t.aksen}" opacity="0.65"/><circle cx="782" cy="984" r="14" fill="${t.aksen}" opacity="0.45"/>`
  return {
    defs: silikon(id + 'e', e, t, 8) + silikon(id + 'r', r, t),
    g: `${bayang(id, t, 566, 1040, 160, 24)}${bayang(id, t, 785, 1052, 66, 14)}${pantul(id, t, body, 1046)}${body}
    ${kilap(id, 'M420 760 C432 680 470 626 520 606', 20, 0.42)}${kilap(id, 'M752 860 L752 1010', 10, 0.35)}`,
  }
}
P.set = (t, id) => {
  const s = t.set, [a, b, c, d] = t.silikon
  const tray = (x, y) => `<rect x="${x}" y="${y}" width="250" height="196" rx="18" fill="${s.lapis}"/><rect x="${x}" y="${y}" width="250" height="196" rx="18" fill="url(#${id}in)"/>`
  return {
    defs: `<linearGradient id="${id}case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(s.kotak, 0.16)}"/><stop offset="1" stop-color="${shade(s.kotak, -0.25)}"/></linearGradient>
      <radialGradient id="${id}in" cx="0.5" cy="0.4" r="0.7"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.35"/></radialGradient>
      ${silikon(id + 'a', a, t)}${silikon(id + 'b', b, t, 90)}${silikon(id + 'c', c, t)}${silikon(id + 'd', d, t, 90)}${bola(id + 'eb', b, t)}${bola(id + 'wb', d, t)}`,
    g: `${bayang(id, t, 600, 1070, 300, 34)}
    <rect x="318" y="600" width="564" height="460" rx="34" fill="url(#${id}case)"/>
    <rect x="318" y="600" width="564" height="460" rx="34" fill="none" stroke="${s.tepi}" stroke-opacity="0.55" stroke-width="3"/>
    ${tray(340, 624)}${tray(610, 624)}${tray(340, 840)}${tray(610, 840)}
    <rect x="395" y="700" width="140" height="48" rx="24" fill="url(#${id}a)" transform="rotate(-8 465 724)"/>
    <ellipse cx="735" cy="722" rx="62" ry="50" fill="url(#${id}eb)"/>
    <path d="M405 905 C405 990 545 990 545 905" fill="none" stroke="url(#${id}c)" stroke-width="40" stroke-linecap="round"/>
    <rect x="652" y="926" width="130" height="30" rx="15" fill="url(#${id}d)"/><circle cx="802" cy="941" r="36" fill="url(#${id}wb)"/>
    ${kilap(id, 'M350 616 L860 616', 6, 0.25)}`,
  }
}
// botol: dipakai juga di dalam kit (skala kecil)
const botolPompa = (t, id, x, y, s, nama, sub, isi, fakta) => {
  const b = t.botol, f = t.font
  return `<g transform="translate(${x} ${y}) scale(${s}) translate(-600 -780)">
    <rect x="588" y="352" width="24" height="70" fill="url(#${id}chrome)"/>
    <path d="M556 352 h88 a10 10 0 0 1 10 10 v22 h-108 v-22 a10 10 0 0 1 10 -10 z" fill="url(#${id}pump)"/>
    <path d="M644 360 h72 a8 8 0 0 1 0 16 h-72 z" fill="url(#${id}pump)"/>
    <rect x="566" y="420" width="68" height="40" rx="6" fill="url(#${id}pump)"/>
    <path d="M520 470 C520 462 528 456 540 456 L660 456 C672 456 680 462 680 470 L690 500 L510 500 Z" fill="url(#${id}tb)"/>
    <rect x="490" y="496" width="220" height="574" rx="34" fill="url(#${id}tb)"/>
    <rect x="516" y="530" width="22" height="500" rx="11" fill="#fff" opacity="0.5" filter="url(#${id}b3)"/>
    <rect x="512" y="610" width="176" height="300" rx="4" fill="${b.label}"/>
    <rect x="522" y="620" width="156" height="280" fill="none" stroke="${b.aksen}" stroke-opacity="0.6" stroke-width="2"/>
    <text x="600" y="664" text-anchor="middle" style="font-family:${f.kecil};font-size:16px;letter-spacing:4px;font-weight:600" fill="${b.tinta}" opacity="0.85">PELUMAS</text>
    <line x1="572" y1="684" x2="628" y2="684" stroke="${b.aksen}" stroke-width="2"/>
    ${fakta
      ? `<text x="600" y="738" text-anchor="middle" style="font-family:${f.nama};font-size:34px;${f.namaStyle}" fill="${b.tinta}">Berbahan</text><text x="600" y="776" text-anchor="middle" style="font-family:${f.nama};font-size:34px;${f.namaStyle}" fill="${b.tinta}">air</text>
         <line x1="532" y1="800" x2="668" y2="800" stroke="${b.tinta}" stroke-width="1.5" opacity="0.5"/>
         <text x="532" y="826" style="font-family:${f.kecil};font-size:14px;letter-spacing:1px" fill="${b.tinta}">pH</text><text x="668" y="826" text-anchor="end" style="font-family:${f.kecil};font-size:14px;font-weight:600" fill="${b.tinta}">4,5</text>
         <line x1="532" y1="838" x2="668" y2="838" stroke="${b.tinta}" stroke-width="1" opacity="0.35"/>
         <text x="532" y="862" style="font-family:${f.kecil};font-size:14px;letter-spacing:1px" fill="${b.tinta}">Isi</text><text x="668" y="862" text-anchor="end" style="font-family:${f.kecil};font-size:14px;font-weight:600" fill="${b.tinta}">${isi}</text>`
      : `<text x="600" y="${nama.length > 7 ? 760 : 770}" text-anchor="middle" style="font-family:${f.nama};font-size:${nama.length > 7 ? 40 : 52}px;${f.namaStyle}" fill="${b.tinta}">${nama}</text>
         <text x="600" y="820" text-anchor="middle" style="font-family:${f.kecil};font-size:14px;letter-spacing:3px" fill="${b.tinta}" opacity="0.8">${sub}</text>
         <text x="600" y="856" text-anchor="middle" style="font-family:${f.kecil};font-size:15px;letter-spacing:2px" fill="${b.tinta}" opacity="0.8">${isi}</text>`}
  </g>`
}
const botolPompaDefs = (t, id) => {
  const b = t.botol
  return `<linearGradient id="${id}tb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(b.pelumas, -0.28)}"/><stop offset="0.3" stop-color="${shade(b.pelumas, 0.06)}"/><stop offset="0.5" stop-color="${shade(b.pelumas, 0.18)}"/><stop offset="0.74" stop-color="${shade(b.pelumas, -0.08)}"/><stop offset="0.94" stop-color="${mix(shade(b.pelumas, -0.25), t.rim, t.rimO * 0.6)}"/><stop offset="1" stop-color="${shade(b.pelumas, -0.35)}"/></linearGradient>
  <linearGradient id="${id}pump" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(b.pompa, -0.35)}"/><stop offset="0.45" stop-color="${shade(b.pompa, 0.2)}"/><stop offset="1" stop-color="${shade(b.pompa, -0.4)}"/></linearGradient>
  <linearGradient id="${id}chrome" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7d7468"/><stop offset="0.4" stop-color="#efe8de"/><stop offset="1" stop-color="#6b6156"/></linearGradient>`
}
const botolPipet = (t, id, x, y, s, nama, sub, isi) => {
  const b = t.botol, f = t.font
  const kaca = b.bening ? b.kaca : b.kaca
  return `<g transform="translate(${x} ${y}) scale(${s}) translate(-600 -800)">
    <path d="M566 470 C566 452 576 444 600 444 C624 444 634 452 634 470 L634 560 L566 560 Z" fill="url(#${id}rub)"/>
    <rect x="552" y="556" width="96" height="92" rx="10" fill="url(#${id}col)"/>
    <path d="M560 646 L640 646 L640 676 C640 700 720 704 720 760 L720 1050 C720 1072 704 1084 682 1084 L518 1084 C496 1084 480 1072 480 1050 L480 760 C480 704 560 700 560 676 Z" fill="url(#${id}glass)"/>
    <path d="M492 800 L492 1040" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="0.32" filter="url(#${id}b3)"/>
    <path d="M700 790 L700 1030" stroke="${t.rim}" stroke-width="6" stroke-linecap="round" opacity="${t.rimO * 0.5}" filter="url(#${id}b3)"/>
    <rect x="502" y="790" width="196" height="220" rx="4" fill="${b.label}"/>
    <rect x="512" y="800" width="176" height="200" fill="none" stroke="${b.aksen}" stroke-opacity="0.6" stroke-width="2"/>
    <text x="600" y="840" text-anchor="middle" style="font-family:${f.kecil};font-size:14px;letter-spacing:4px;font-weight:600" fill="${b.tinta}" opacity="0.85">MINYAK PIJAT</text>
    <line x1="574" y1="858" x2="626" y2="858" stroke="${b.aksen}" stroke-width="2"/>
    <text x="600" y="914" text-anchor="middle" style="font-family:${f.nama};font-size:${nama.length > 6 ? 40 : 46}px;${f.namaStyle}" fill="${b.tinta}">${nama}</text>
    <text x="600" y="952" text-anchor="middle" style="font-family:${f.kecil};font-size:12px;letter-spacing:2px" fill="${b.tinta}" opacity="0.8">${sub}</text>
    <text x="600" y="980" text-anchor="middle" style="font-family:${f.kecil};font-size:14px;letter-spacing:2px" fill="${b.tinta}" opacity="0.8">${isi}</text>
  </g>`
}
const botolPipetDefs = (t, id) => {
  const b = t.botol
  return `<linearGradient id="${id}glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(b.kaca, -0.45)}"/><stop offset="0.18" stop-color="${shade(b.kaca, -0.05)}"/><stop offset="0.42" stop-color="${shade(b.kaca, 0.25)}"/><stop offset="0.7" stop-color="${b.kaca}"/><stop offset="1" stop-color="${shade(b.kaca, -0.5)}"/></linearGradient>
  <linearGradient id="${id}rub" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(b.tutup, -0.3)}"/><stop offset="0.45" stop-color="${shade(b.tutup, 0.25)}"/><stop offset="1" stop-color="${shade(b.tutup, -0.4)}"/></linearGradient>
  <linearGradient id="${id}col" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(t.aksen, -0.45)}"/><stop offset="0.4" stop-color="${shade(t.aksen, 0.15)}"/><stop offset="1" stop-color="${shade(t.aksen, -0.5)}"/></linearGradient>`
}
P.pelumas = (t, id) => ({
  defs: botolPompaDefs(t, id),
  g: `${bayang(id, t, 600, 1114, 150, 24)}${pantul(id, t, botolPompa(t, id, 600, 790, 1.12, t.pelumas.nama, t.pelumas.sub, t.pelumas.isi, t.pelumas.fakta), 1114)}${botolPompa(t, id, 600, 790, 1.12, t.pelumas.nama, t.pelumas.sub, t.pelumas.isi, t.pelumas.fakta)}`,
})
P.minyak = (t, id) => ({
  defs: botolPipetDefs(t, id),
  g: `${bayang(id, t, 600, 1098, 170, 26)}${pantul(id, t, botolPipet(t, id, 600, 790, 1.08, t.minyak.nama, t.minyak.sub, t.minyak.isi), 1097)}${botolPipet(t, id, 600, 790, 1.08, t.minyak.nama, t.minyak.sub, t.minyak.isi)}
  <ellipse cx="800" cy="1112" rx="14" ry="5" fill="${t.botol.kaca}" opacity="0.55"/><ellipse cx="826" cy="1124" rx="7" ry="3" fill="${t.botol.kaca}" opacity="0.45"/>`,
})
// kit: kotak terbuka berisi barang sesuai varian
P.kit = (t, id) => {
  const k = t.kotak, kr = k.kraft
  const item = {
    pelumas: (x) => botolPompa(t, id, x, 716, 0.44, t.pelumas.nama, t.pelumas.sub, t.pelumas.isi, false),
    minyak: (x) => botolPipet(t, id, x, 742, 0.42, t.minyak.nama, t.minyak.sub, t.minyak.isi),
    pembersih: (x) => `<g transform="translate(${x} 0)"><rect x="-46" y="540" width="92" height="330" rx="20" fill="url(#${id}tb)"/><rect x="-24" y="508" width="48" height="40" rx="8" fill="url(#${id}pump)"/><rect x="-36" y="640" width="72" height="110" rx="3" fill="${t.botol.label}"/><text x="0" y="700" text-anchor="middle" style="font-family:${t.font.kecil};font-size:11px;letter-spacing:2px;font-weight:600" fill="${t.botol.tinta}">PEMBERSIH</text></g>`,
    kartu: (x) => `<g transform="translate(${x} 0) rotate(8 0 650)"><rect x="-70" y="560" width="150" height="210" rx="8" fill="${shade(t.botol.label, -0.06)}"/><rect x="-80" y="548" width="150" height="210" rx="8" fill="${t.botol.label}"/><line x1="-56" y1="590" x2="40" y2="590" stroke="${t.botol.aksen}" stroke-width="3"/><line x1="-56" y1="612" x2="20" y2="612" stroke="${t.botol.tinta}" stroke-opacity="0.35" stroke-width="3"/><line x1="-56" y1="630" x2="30" y2="630" stroke="${t.botol.tinta}" stroke-opacity="0.35" stroke-width="3"/></g>`,
    lilin: (x) => `<g transform="translate(${x} 0)"><ellipse cx="0" cy="800" rx="78" ry="22" fill="${shade(t.botol.aksen, -0.3)}"/><rect x="-78" y="740" width="156" height="60" fill="url(#${id}tin)"/><ellipse cx="0" cy="740" rx="78" ry="22" fill="${shade(t.botol.label, -0.05)}"/><line x1="0" y1="740" x2="0" y2="712" stroke="#2a1a10" stroke-width="4"/><path d="M0 668 C14 690 12 706 0 712 C-12 706 -14 690 0 668 Z" fill="#ffcf73" opacity="0.95"/><circle cx="0" cy="694" r="40" fill="#ffb347" opacity="0.35" filter="url(#${id}b18)"/></g>`,
    kantong: (x) => { const kc = t.kantong || shade(t.silikon[1], 0.15), tali = t.kantongTali || shade(kc, -0.35); return `<g transform="translate(${x} 0)"><path d="M-62 600 C-80 680 -84 820 -70 860 L70 860 C84 820 80 680 62 600 Z" fill="${kc}"/><path d="M-62 600 C-80 680 -84 820 -70 860" fill="none" stroke="#fff" stroke-opacity="0.14" stroke-width="10"/><path d="M-66 618 L66 618" stroke="${tali}" stroke-width="6"/><path d="M-12 618 C-34 586 -6 574 0 600 C6 574 34 586 12 618" fill="none" stroke="${tali}" stroke-width="4"/></g>` },
    duo: (x) => `<g transform="translate(${x - 600} -150) scale(1)"><path d="M560 640 L560 800 C560 880 600 910 640 910 C680 910 700 880 700 820 L700 700" fill="none" stroke="url(#${id}m)" stroke-width="62" stroke-linecap="round"/><circle cx="700" cy="672" r="36" fill="url(#${id}mb)"/></g>`,
  }
  const xs = { 4: [458, 556, 652, 748], 3: [478, 600, 722] }[t.kit.length]
  const items = t.kit.map((n, i) => item[n](xs[i])).join('')
  return {
    defs: botolPompaDefs(t, id) + botolPipetDefs(t, id) + silikon(id + 'm', t.silikon[0], t) + bola(id + 'mb', t.silikon[0], t) +
      `<linearGradient id="${id}box" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${shade(kr, -0.22)}"/><stop offset="0.5" stop-color="${shade(kr, 0.05)}"/><stop offset="1" stop-color="${shade(kr, -0.28)}"/></linearGradient>
      <linearGradient id="${id}flap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(kr, 0.1)}"/><stop offset="1" stop-color="${shade(kr, -0.2)}"/></linearGradient>
      <linearGradient id="${id}tin" x1="0" x2="1"><stop offset="0" stop-color="${shade(t.botol.aksen, -0.4)}"/><stop offset="0.45" stop-color="${shade(t.botol.aksen, 0.25)}"/><stop offset="1" stop-color="${shade(t.botol.aksen, -0.45)}"/></linearGradient>`,
    g: `${bayang(id, t, 600, 1072, 290, 32)}
    <path d="M380 760 L420 600 L780 600 L820 760 Z" fill="${shade(kr, -0.42)}"/>
    <path d="M380 760 L330 640 L420 600 Z" fill="url(#${id}flap)"/><path d="M820 760 L870 640 L780 600 Z" fill="url(#${id}flap)"/>
    <path d="M420 600 L450 520 L760 520 L780 600 Z" fill="${shade(kr, -0.12)}"/>
    ${items}
    <rect x="380" y="760" width="440" height="300" fill="url(#${id}box)"/>
    <path d="M380 760 L820 760 L820 772 L380 772 Z" fill="#000" opacity="0.12"/>
    ${k.pita ? `<rect x="582" y="760" width="36" height="300" fill="${k.pita}"/><path d="M600 780 C560 740 520 760 548 790 C566 806 590 800 600 790 C610 800 634 806 652 790 C680 760 640 740 600 780 Z" fill="${shade(k.pita, 0.15)}"/>` : `<line x1="600" y1="772" x2="600" y2="1060" stroke="${shade(kr, -0.25)}" stroke-width="2" opacity="0.6"/>`}
    <rect x="380" y="760" width="440" height="300" fill="none" stroke="${shade(kr, -0.35)}" stroke-opacity="0.35" stroke-width="2"/>`,
  }
}
// kartu percakapan (grace): kotak tutup terbuka + tumpukan kartu tiga warna
P.kartu = (t, id) => {
  const f = t.font
  const kartu = (x, y, r, warna, isi = '') => `<g transform="rotate(${r} ${x + 125} ${y + 360})"><rect x="${x}" y="${y}" width="250" height="360" rx="14" fill="${warna}"/>${isi}</g>`
  const depan = `<rect x="530" y="532" width="250" height="360" rx="14" fill="none" stroke="#a8834e" stroke-width="2" stroke-opacity="0.7"/>
      <text x="560" y="604" style="font-family:${f.kecil};font-size:13px;letter-spacing:3px;font-weight:600" fill="#a8834e">KARTU 07</text>
      <text x="560" y="664" style="font-family:${f.nama};font-size:30px;${f.namaStyle}" fill="#4a2338">Apa yang</text>
      <text x="560" y="702" style="font-family:${f.nama};font-size:30px;${f.namaStyle}" fill="#4a2338">ingin kita</text>
      <text x="560" y="740" style="font-family:${f.nama};font-size:30px;${f.namaStyle}" fill="#4a2338">ulangi minggu</text>
      <text x="560" y="778" style="font-family:${f.nama};font-size:30px;${f.namaStyle}" fill="#4a2338">depan?</text>
      <line x1="560" y1="846" x2="630" y2="846" stroke="#a8834e" stroke-width="2"/>`
  return {
    defs: `<linearGradient id="${id}kb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a1a2b"/><stop offset="0.5" stop-color="#5a2c45"/><stop offset="1" stop-color="#341626"/></linearGradient>
      <linearGradient id="${id}kd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1220"/><stop offset="1" stop-color="#4a2338"/></linearGradient>`,
    g: `${bayang(id, t, 600, 1066, 260, 28)}
    <path d="M392 860 L808 860 L790 812 L410 812 Z" fill="url(#${id}kd)"/>
    ${kartu(400, 520, -12, '#a8834e')}${kartu(470, 500, -3, '#4a2338')}${kartu(530, 532, 8, '#fbf6f1', depan)}
    <rect x="392" y="860" width="416" height="200" rx="6" fill="url(#${id}kb)"/>
    <rect x="392" y="860" width="416" height="12" fill="#000" opacity="0.18"/>
    <line x1="560" y1="960" x2="640" y2="960" stroke="#a8834e" stroke-width="2" opacity="0.8"/>
    <path d="M808 1040 C860 1030 900 1070 980 1058" fill="none" stroke="#a8834e" stroke-width="9" stroke-linecap="round" opacity="0.9"/>`,
  }
}

// skala & geser tiap produk supaya dasarnya duduk di lantai (±y 1130) dan tetap aman dipotong persegi
const SKALA = { duo: [1.2, 0], wand: [1.2, 40], bullet: [1.22, 38], remote: [1.2, 45], set: [1.15, 30], kit: [1.15, 30], pelumas: [1.06, 0], minyak: [1.12, 0], kartu: [1.15, 30] }
export function svgProduk(nama, varian) {
  const t = TEMA[varian], id = `${varian.slice(0, 2)}${nama.slice(0, 3)}`
  const s = studio(t, id), p = P[nama](t, id)
  const [S, dy] = SKALA[nama]
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${s.defs}${p.defs}</defs>${s.back}<g transform="translate(0 ${dy}) translate(600 820) scale(${S}) translate(-600 -820)">${p.g}</g>${s.front}</svg>`
}
const FONTDIR = path.join(path.dirname(new URL(import.meta.url).pathname), 'fonts')
export const htmlProduk = (nama, varian) => `<!doctype html><html><head><meta charset="utf-8"><link href="file://${FONTDIR}/${varian}/fonts.css" rel="stylesheet"><style>html,body{margin:0;background:transparent}svg{display:block}</style></head><body>${svgProduk(nama, varian)}</body></html>`

if (process.argv[1] && process.argv[1].endsWith('produk.mjs')) {
  const [, , pilih = 'semua', out = './out'] = process.argv
  const vs = pilih === 'semua' ? Object.keys(TEMA) : pilih.split(',')
  const batch = []
  for (const v of vs) {
    mkdirSync(path.join(out, v), { recursive: true })
    const daftar = ['duo', 'wand', 'bullet', 'remote', 'set', 'kit', 'pelumas', 'minyak', ...(v === 'grace' ? ['kartu'] : [])]
    for (const n of daftar) {
      const f = path.resolve(out, v, n + '.html')
      writeFileSync(f, htmlProduk(n, v))
      batch.push({ in: f, out: path.resolve(out, v, n + '.webp'), w: W, h: H, quality: 84, wait: 600 })
    }
  }
  writeFileSync(path.join(out, 'batch.json'), JSON.stringify(batch, null, 1))
  console.log(batch.length, 'berkas')
}
