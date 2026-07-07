import { experience } from '../data/content.js'

const sparkMark = `<svg class="spark exp__spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>`

export function renderExperience() {
  return `
    <section id="experiencia" class="exp">
      <header class="exp__head">
        <span class="mono" data-rev>(02) — Trayectoria</span>
        <h2 class="exp__title" data-rev>Dónde he <em>construido</em>.</h2>
      </header>

      <ol class="exp__list">
        ${experience
          .map(
            (job, i) => `
          <li class="exp__item${job.highlight ? ' is-featured' : ''}">
            <div class="exp__idx">
              <span class="mono" data-rev>0${i + 1}</span>
              ${job.highlight ? sparkMark : ''}
            </div>
            <h3 class="exp__role" data-rev>${job.role}</h3>
            <span class="exp__period mono" data-rev>${job.period}</span>
            <p class="exp__company" data-rev>${job.company}</p>
            <ul class="exp__points">
              ${job.points.map((p) => `<li data-rev>${p}</li>`).join('')}
            </ul>
          </li>`
          )
          .join('')}
      </ol>
    </section>
  `
}
