import { profile } from '../data/content.js'

const LINKS = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Trayectoria', href: '#experiencia' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export function renderFooter() {
  const year = new Date().getFullYear()
  return `
    <footer class="footer">
      <div class="footer__top">
        <a class="footer__back" href="#top" data-magnetic="0.25">
          <svg class="spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>
          <span>Volver al inicio</span>
        </a>
        <nav class="footer__nav" aria-label="Secciones">
          ${LINKS.map((l) => `<a class="footer__link" href="${l.href}">${l.label}</a>`).join('')}
        </nav>
      </div>

      <a class="footer__wordmark" href="#top" aria-label="Volver al inicio">${profile.shortName}</a>

      <div class="footer__base">
        <span class="mono">© ${year} — ${profile.name}</span>
        <span class="mono">Puebla · México</span>
        <a class="mono footer__riders" href="${profile.ridersUrl}" target="_blank" rel="noopener">Riders.media ↗</a>
      </div>
    </footer>
  `
}
