// Capa ambiental: destellos a la deriva de fondo (movimiento constante y
// sutil que refuerza el motivo recursivo sin robar protagonismo).

const PATH =
  'M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z'

// Posiciones curadas (top%, left%, tamaño px, duración s, dirección de giro).
const SPARKS = [
  { t: 14, l: 7, s: 20, d: 26, dir: 1 },
  { t: 8, l: 84, s: 12, d: 32, dir: -1 },
  { t: 32, l: 46, s: 9, d: 22, dir: 1 },
  { t: 58, l: 12, s: 16, d: 30, dir: -1 },
  { t: 72, l: 88, s: 22, d: 28, dir: 1 },
  { t: 46, l: 72, s: 10, d: 24, dir: -1 },
  { t: 86, l: 40, s: 13, d: 34, dir: 1 },
  { t: 24, l: 62, s: 7, d: 20, dir: -1 },
  { t: 64, l: 55, s: 8, d: 27, dir: 1 },
  { t: 40, l: 26, s: 11, d: 31, dir: -1 },
]

export function renderAmbient() {
  const sparks = SPARKS.map(
    (p, i) =>
      `<svg class="ambient__spark" style="top:${p.t}%;left:${p.l}%;width:${p.s}px;--d:${p.d}s;--delay:${-i * 1.7}s;--dir:${p.dir}" viewBox="0 0 24 24" aria-hidden="true"><path d="${PATH}"/></svg>`
  ).join('')
  return `<div class="ambient" aria-hidden="true">${sparks}</div>`
}
