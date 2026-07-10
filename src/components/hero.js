import { gsap } from 'gsap'
import { profile } from '../data/content.js'

const BASE = import.meta.env.BASE_URL

// Envuelve cada letra en una máscara para el reveal cinético.
function splitChars(word) {
  return [...word]
    .map((ch) => `<span class="char"><span class="char__in">${ch}</span></span>`)
    .join('')
}

export function renderHero() {
  return `
    <section id="top" class="hero">
      <div class="hero__meta">
        <span class="mono">${profile.location}</span>
      </div>

      <h1 class="sr-only">${profile.name} — ${profile.roles.join(', ')}</h1>

      <span class="hero__line hero__line--1" aria-hidden="true">${splitChars('Mihael')}</span>

      <figure class="hero__photo">
        <img src="${BASE}mihael.png" alt="Retrato de ${profile.name}" width="1200" height="1171" decoding="async" fetchpriority="high" />
      </figure>

      <span class="hero__line hero__line--2" aria-hidden="true">${splitChars('Tejeda')}</span>

      <div class="hero__foot">
        <p class="hero__roles">
          <span class="mono hero__roles-idx">(01)</span>
          <span class="hero__roles-view"><span class="hero__role" data-role>${profile.roles[0]}</span></span>
        </p>
        <a class="hero__scroll" href="#perfil" data-magnetic aria-label="Bajar">
          <span class="mono">Scroll</span>
          <span class="hero__scroll-track"><span class="hero__scroll-thumb"></span></span>
        </a>
      </div>

      <svg class="hero__spark" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z" />
      </svg>
    </section>
  `
}

let introTl = null

// El loader dispara esto al terminar (o main.js directamente si no hay loader).
export function playHeroIntro() {
  if (introTl) introTl.play()
}

export function initHero() {
  const hero = document.querySelector('.hero')
  if (!hero) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const chars = hero.querySelectorAll('.char__in')
  const photo = hero.querySelector('.hero__photo')
  const spark = hero.querySelector('.hero__spark')

  if (!reduce) {
    // Timeline en pausa: los estados iniciales se aplican de inmediato
    // (hero oculto bajo el loader) y se reproduce cuando la cortina sube.
    introTl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } })
    introTl
      .from(chars, { yPercent: 130, duration: 1.1, stagger: 0.03 })
      .from(photo, { yPercent: 6, autoAlpha: 0, scale: 1.05, duration: 1.5 }, 0.25)
      .from('.hero__meta > *', { autoAlpha: 0, y: 14, duration: 0.9, stagger: 0.12 }, 0.7)
      .from('.hero__foot > *', { autoAlpha: 0, y: 20, duration: 0.9, stagger: 0.12 }, 0.85)

    gsap.to(spark, { rotate: 360, repeat: -1, duration: 22, ease: 'none' })

    // Parallax leve de la foto siguiendo el puntero.
    // Nota: deshabilitamos el desplazamiento horizontal para mantener la
    // foto siempre centrada horizontalmente. Solo aplicamos movimiento Y.
    const py = gsap.quickTo(photo, 'y', { duration: 0.8, ease: 'power3' })
    hero.addEventListener('pointermove', (e) => {
      // Mantener X en 0 para que la foto conserve su centrado CSS
      // y aplicar solo un leve movimiento vertical.
      py((e.clientY / window.innerHeight - 0.5) * 18)
    })
  }

  // Rotación de roles.
  const roleEl = hero.querySelector('[data-role]')
  const idxEl = hero.querySelector('.hero__roles-idx')
  let idx = 0
  const swap = () => {
    idx = (idx + 1) % profile.roles.length
    const label = `(0${idx + 1})`
    if (reduce) {
      roleEl.textContent = profile.roles[idx]
      idxEl.textContent = label
      return
    }
    gsap.to(roleEl, {
      yPercent: -100,
      autoAlpha: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        roleEl.textContent = profile.roles[idx]
        idxEl.textContent = label
        gsap.fromTo(
          roleEl,
          { yPercent: 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out' }
        )
      },
    })
  }
  hero._roleTimer = setInterval(swap, 2600)
}
