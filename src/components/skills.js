import { skills } from '../data/content.js'

const spark = `<svg class="spark marquee__spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>`

// Lista plana para el marquee.
const flat = skills.flatMap((g) => g.items)

function track(words, dir) {
  const run = words
    .map((w) => `<span class="marquee__item">${w}</span>${spark}`)
    .join('')
  // Se duplica el contenido para que el loop sea perfecto (translateX -50%).
  return `<div class="marquee__track marquee__track--${dir}">${run}${run}</div>`
}

export function renderSkills() {
  return `
    <section id="skills" class="skills">
      <header class="skills__head">
        <span class="mono" data-rev>(03) — Capacidades</span>
        <h2 class="skills__title" data-rev>Oficio de <em>punta a punta</em>.</h2>
      </header>

      <div class="marquee" aria-hidden="true">
        ${track(flat, 'l')}
      </div>
      <div class="marquee marquee--alt" aria-hidden="true">
        ${track([...flat].reverse(), 'r')}
      </div>

      <div class="skills__grid">
        ${skills
          .map(
            (g) => `
          <div class="skillcat" data-rev>
            <span class="mono skillcat__label">${g.group}</span>
            <ul class="skillcat__list">
              ${g.items.map((i) => `<li class="skillcat__item">${i}</li>`).join('')}
            </ul>
          </div>`
          )
          .join('')}
      </div>
    </section>
  `
}
