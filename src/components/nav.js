import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '../data/content.js'

const LINKS = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Trayectoria', href: '#experiencia' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
]

export function renderNav() {
  return `
    <header class="nav" data-nav>
      <a class="nav__brand" href="#top" aria-label="Inicio">
        <svg class="nav__spark" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z" />
        </svg>
        <span class="nav__name">${profile.shortName}</span>
      </a>

      <nav class="nav__menu" aria-label="Secciones">
        ${LINKS.map(
          (l) => `<a class="nav__link" href="${l.href}"><span>${l.label}</span></a>`
        ).join('')}
      </nav>

      <div class="nav__actions">
        <button class="nav__burger" data-menu-toggle aria-label="Abrir menú" aria-expanded="false">
          <span></span><span></span>
        </button>
        <button class="nav__theme" data-theme-toggle data-magnetic="0.2" aria-label="Cambiar tema">
          <svg class="nav__ico nav__ico--moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
          </svg>
          <svg class="nav__ico nav__ico--sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <g stroke-width="1.6" stroke-linecap="round">
              <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
            </g>
          </svg>
        </button>

        <a class="nav__cta" href="${profile.ridersUrl}" target="_blank" rel="noopener" data-magnetic="0.35">
          <span class="nav__cta-label">Riders.media</span>
          <svg class="nav__cta-arrow" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </header>

    <div class="navmenu" data-navmenu aria-hidden="true">
      <nav class="navmenu__links" aria-label="Secciones">
        ${LINKS.map(
          (l, i) =>
            `<a class="navmenu__link" href="${l.href}" style="--mi:${i}"><span class="navmenu__i mono">0${i + 1}</span>${l.label}</a>`
        ).join('')}
      </nav>
      <div class="navmenu__foot">
        <a class="navmenu__riders" href="${profile.ridersUrl}" target="_blank" rel="noopener">Riders.media ↗</a>
        <a class="navmenu__mail" href="mailto:${profile.email}">${profile.email}</a>
      </div>
    </div>
  `
}

export function initNav() {
  const nav = document.querySelector('[data-nav]')
  if (!nav) return

  // Aparición inicial
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduce) {
    gsap.from(nav, { y: -30, autoAlpha: 0, duration: 1, ease: 'expo.out', delay: 0.2 })
  }

  // Fondo de vidrio al salir del hero + auto-ocultar al bajar / mostrar al subir
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const y = self.scroll()
      const isSolid = y > window.innerHeight * 0.55
      nav.classList.toggle('nav--solid', isSolid)
      // Añadir clase al root para que el contenido detrás del nav pueda recibir estilos
      document.documentElement.classList.toggle('nav-overlay', isSolid)
      if (y > 260 && !document.documentElement.classList.contains('menu-open')) {
        nav.classList.toggle('nav--hidden', self.direction === 1)
      } else {
        nav.classList.remove('nav--hidden')
      }
    },
  })

  // Menú overlay móvil
  const burger = nav.querySelector('[data-menu-toggle]')
  const menu = document.querySelector('[data-navmenu]')
  if (burger && menu) {
    const root = document.documentElement
    const setMenu = (open) => {
      root.classList.toggle('menu-open', open)
      burger.setAttribute('aria-expanded', String(open))
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
      menu.setAttribute('aria-hidden', String(!open))
      const lenis = window.__lenis
      if (lenis) open ? lenis.stop() : lenis.start()
    }
    burger.addEventListener('click', () =>
      setMenu(!root.classList.contains('menu-open'))
    )
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false)
    })
  }
}
