import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile, experience, languages } from '../data/content.js'

// Destello reutilizable (motivo de marca).
const spark = (cls = '') =>
  `<svg class="spark ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>`

export function renderBento() {
  // Disciplinas core (coincide con la nota); independiente del ticker de roles del hero.
  const disciplines = 4
  const startYear = 2021
  const years = new Date().getFullYear() - startYear

  return `
    <section id="perfil" class="bento">
      <header class="bento__head">
        <span class="mono" data-rev>(01) — Perfil</span>
        <h2 class="bento__title" data-rev>Innovación con<br /><em>intención</em>.</h2>
      </header>

      <div class="bento__grid">
        <article class="cell cell--sum" data-rev>
          <span class="mono">Sobre mí</span>
          <p class="cell__lead">${profile.summary}</p>
          <a class="cell__inline" href="#experiencia">Ver trayectoria</a>
        </article>

        <article class="cell cell--spark" data-rev aria-hidden="true">
          <div class="spark-field">
            ${spark('spark--xl')}
            ${spark('spark--md')}
            ${spark('spark--sm')}
            ${spark('spark--xs')}
          </div>
        </article>

        <article class="cell cell--stat" data-rev>
          <span class="cell__num" data-count="${disciplines}">0${disciplines}</span>
          <span class="mono">Disciplinas</span>
          <span class="cell__note">Dev · Innovación · Motion · Dirección</span>
        </article>

        <article class="cell cell--lang" data-rev>
          <span class="mono">Idiomas</span>
          <ul class="lang">
            ${languages
              .map(
                (l) => `
              <li class="lang__row">
                <div class="lang__meta">
                  <span class="lang__name">${l.name}</span>
                  <span class="mono lang__lvl">${l.level}</span>
                </div>
                <div class="lang__track"><span class="lang__fill" data-v="${(l.value / 100).toFixed(2)}"></span></div>
              </li>`
              )
              .join('')}
          </ul>
        </article>

        <article class="cell cell--loc" data-rev>
          <span class="mono">Base</span>
          <p class="cell__place">${profile.location}</p>
          <span class="mono cell__coords">19.04° N / 98.21° O</span>
        </article>

        <article class="cell cell--stat cell--stat-alt" data-rev>
          <span class="cell__num">0${years}</span>
          <span class="mono">Años activo</span>
          <span class="cell__note">Desde ${startYear} — producción, dev y dirección</span>
        </article>
      </div>
    </section>
  `
}

export function initBento() {
  const section = document.querySelector('.bento')
  if (!section) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // (El reveal de celdas y header lo maneja el sistema global initReveal)

  // Barras de idioma
  section.querySelectorAll('.lang__fill').forEach((fill) => {
    const v = parseFloat(fill.dataset.v)
    gsap.fromTo(
      fill,
      { scaleX: 0 },
      {
        scaleX: v,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: fill.closest('.cell--lang'), start: 'top 80%' },
      }
    )
  })

  // Conteo del stat principal
  const counter = section.querySelector('.cell__num[data-count]')
  if (counter && !reduce) {
    const end = parseInt(counter.dataset.count, 10)
    const obj = { v: 0 }
    gsap.to(obj, {
      v: end,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: counter, start: 'top 85%' },
      onUpdate: () => {
        counter.textContent = '0' + Math.round(obj.v)
      },
    })
  }

  // Destellos recursivos girando a distintas velocidades
  if (!reduce) {
    const speeds = { xl: 26, md: -18, sm: 12, xs: -8 }
    Object.entries(speeds).forEach(([k, dur]) => {
      const el = section.querySelector('.spark--' + k)
      if (el) gsap.to(el, { rotate: dur > 0 ? 360 : -360, duration: Math.abs(dur), ease: 'none', repeat: -1 })
    })
  }
}
