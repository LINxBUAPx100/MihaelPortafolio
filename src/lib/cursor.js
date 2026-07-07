// Cursor personalizado: punto sólido + anillo con retardo (efecto magnético).
// Además, una onda ácida al hacer clic (funciona también en táctil).

import { gsap } from 'gsap'

export function initCursor() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Onda al presionar — disponible en cualquier dispositivo.
  if (!reduce) {
    window.addEventListener('pointerdown', (e) => {
      const r = document.createElement('div')
      r.className = 'cursor-ripple'
      r.style.left = e.clientX + 'px'
      r.style.top = e.clientY + 'px'
      document.body.appendChild(r)
      r.addEventListener('animationend', () => r.remove(), { once: true })
    })
  }

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!fine) return

  const dot = document.createElement('div')
  const ring = document.createElement('div')
  dot.className = 'cursor-dot'
  ring.className = 'cursor-ring'
  document.body.append(dot, ring)
  document.documentElement.classList.add('has-cursor')

  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

  const dur = reduce ? 0 : 0.15
  const xDot = gsap.quickTo(dot, 'x', { duration: dur, ease: 'power3' })
  const yDot = gsap.quickTo(dot, 'y', { duration: dur, ease: 'power3' })
  const xRing = gsap.quickTo(ring, 'x', { duration: dur + 0.3, ease: 'power3' })
  const yRing = gsap.quickTo(ring, 'y', { duration: dur + 0.3, ease: 'power3' })

  window.addEventListener('pointermove', (e) => {
    xDot(e.clientX); yDot(e.clientY)
    xRing(e.clientX); yRing(e.clientY)
  })

  const interactive = 'a, button, [data-magnetic]'
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest?.(interactive)) document.documentElement.classList.add('cursor-active')
  })
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest?.(interactive)) document.documentElement.classList.remove('cursor-active')
  })
}
