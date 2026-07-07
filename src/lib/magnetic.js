// Atrae elementos [data-magnetic] hacia el cursor. La intensidad se define
// con el valor del atributo (data-magnetic="0.4"); por defecto 0.3.

import { gsap } from 'gsap'

export function initMagnetic(scope = document) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (reduce || !fine) return

  scope.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic) || 0.3
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    })
    el.addEventListener('pointerleave', () => {
      xTo(0)
      yTo(0)
    })
  })
}
