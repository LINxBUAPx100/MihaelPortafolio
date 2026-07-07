// Reveal al hacer scroll, robusto y reutilizable.
// Marca elementos con [data-rev]; el estado oculto vive en CSS (propiedad
// `translate`, que NO choca con transforms de hover) y ScrollTrigger solo
// alterna la clase .is-in. Sin resets de gsap ni transforms pegados.

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return // sin js-motion, los elementos quedan visibles por defecto

  document.documentElement.classList.add('js-motion')

  ScrollTrigger.batch('[data-rev]', {
    start: 'top 86%',
    once: true,
    onEnter: (batch) =>
      batch.forEach((el, i) => {
        el.style.setProperty('--rev-d', (i % 6) * 0.06 + 's')
        el.classList.add('is-in')
      }),
  })
}
