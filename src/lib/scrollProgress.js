// Barra de progreso de scroll (ácida) en el borde superior.
// Se engancha a Lenis (scroll virtual); si no hay Lenis (reduce-motion),
// usa el evento de scroll nativo.

export function initScrollProgress() {
  const bar = document.querySelector('[data-progress]')
  if (!bar) return

  const set = (p) => {
    const v = Math.max(0, Math.min(1, p || 0))
    bar.style.transform = `scaleX(${v})`
  }

  const lenis = window.__lenis
  if (lenis && typeof lenis.on === 'function') {
    lenis.on('scroll', () => set(lenis.progress))
    set(lenis.progress)
    return
  }

  const nativeUpdate = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    set(max > 0 ? window.scrollY / max : 0)
  }
  window.addEventListener('scroll', () => requestAnimationFrame(nativeUpdate), { passive: true })
  window.addEventListener('resize', nativeUpdate)
  nativeUpdate()
}
