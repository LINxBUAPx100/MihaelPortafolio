// Conmutador de tema claro/oscuro. Respeta la preferencia del sistema
// solo si el usuario no ha elegido manualmente (persistido en localStorage).

const KEY = 'mihael-theme'
const root = document.documentElement

export function initTheme() {
  const saved = localStorage.getItem(KEY)
  if (saved) root.setAttribute('data-theme', saved)

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]')
    if (!btn) return
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem(KEY, next)
  })
}
