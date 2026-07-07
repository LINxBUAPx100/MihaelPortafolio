import { education, certifications } from '../data/content.js'

const statusClass = (s) => {
  const t = s.toLowerCase()
  if (t.includes('curso')) return 'is-active'
  if (t.includes('trunca')) return 'is-muted'
  return 'is-done'
}

export function renderEducation() {
  return `
    <section id="formacion" class="edu">
      <header class="edu__head">
        <span class="mono" data-rev>(04) — Formación</span>
        <h2 class="edu__title" data-rev>Siempre en <em>construcción</em>.</h2>
      </header>

      <div class="edu__cols">
        <div class="edu__block" data-rev>
          <span class="mono edu__label">Educación</span>
          <ul class="edu__list">
            ${education
              .map(
                (e) => `
              <li class="edu__row">
                <div class="edu__info">
                  <h3 class="edu__name">${e.title}</h3>
                  ${e.place !== '—' ? `<span class="edu__place">${e.place}</span>` : ''}
                </div>
                <span class="edu__status ${statusClass(e.status)}">${e.status}</span>
              </li>`
              )
              .join('')}
          </ul>
        </div>

        <div class="edu__block" data-rev>
          <span class="mono edu__label">Certificaciones & Distinciones</span>
          <ul class="edu__list edu__list--certs">
            ${certifications
              .map(
                (c) => `<li class="edu__cert"><span class="edu__cert-mark"></span>${c}</li>`
              )
              .join('')}
            <li class="edu__cert"><span class="edu__cert-mark"></span>Desarrollo Web Fullstack — Microsoft</li>
          </ul>
        </div>
      </div>
    </section>
  `
}
