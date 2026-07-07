// Cortina de entrada: cuenta 000→100 y sube revelando el hero.
// Al terminar, ejecuta onDone (la animación de entrada del hero).

import { gsap } from 'gsap'

export function initLoader(onDone) {
  const el = document.querySelector('[data-loader]')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let finished = false
  const finish = () => {
    if (finished) return
    finished = true
    if (el) el.remove()
    const lenis = window.__lenis
    lenis && lenis.start()
    onDone && onDone()
  }

  if (!el || reduce) return finish()

  const count = el.querySelector('[data-loader-count]')
  const bar = el.querySelector('[data-loader-bar]')

  window.__lenis && window.__lenis.stop() // bloquea el scroll durante la carga
  const obj = { v: 0 }

  gsap
    .timeline({ onComplete: finish })
    .to(obj, {
      v: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        count.textContent = String(Math.round(obj.v)).padStart(3, '0')
      },
    })
    .to(bar, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 0)
    .to(el.querySelector('.loader__inner'), { autoAlpha: 0, duration: 0.4, ease: 'power2.in' }, '+=0.1')
    .to(el, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1')

  // Red de seguridad: si rAF se congela (pestaña en segundo plano) no dejamos
  // el scroll bloqueado indefinidamente.
  setTimeout(finish, 6000)
}
