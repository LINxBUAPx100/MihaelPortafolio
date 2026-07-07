import { skills } from '../data/content.js'

const spark = `<svg class="spark marquee__spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>`

const arrow = `<svg class="skillcat__arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`

// Cada herramienta enlaza a una página que explica qué es.
const URLS = {
  'React.js': 'https://react.dev',
  'Next.js': 'https://nextjs.org',
  Vite: 'https://vitejs.dev',
  Python: 'https://www.python.org',
  Pandas: 'https://pandas.pydata.org',
  SQL: 'https://es.wikipedia.org/wiki/SQL',
  Supabase: 'https://supabase.com',
  'GitHub Pages': 'https://pages.github.com',
  'After Effects': 'https://www.adobe.com/products/aftereffects.html',
  'Clip Studio Paint': 'https://www.clipstudio.net',
  Overlord: 'https://www.battleaxe.co/overlord',
  'Adobe Suite': 'https://www.adobe.com/creativecloud.html',
  'Office (avanzado)': 'https://www.microsoft.com/microsoft-365',
}
const urlFor = (name) => URLS[name] || '#'

const flat = skills.flatMap((g) => g.items)

function track(words, dir) {
  const run = words
    .map(
      (w) =>
        `<a class="marquee__item" href="${urlFor(w)}" target="_blank" rel="noopener" tabindex="-1">${w}</a>${spark}`
    )
    .join('')
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
              ${g.items
                .map(
                  (i) =>
                    `<li><a class="skillcat__item" href="${urlFor(i)}" target="_blank" rel="noopener"><span>${i}</span>${arrow}</a></li>`
                )
                .join('')}
            </ul>
          </div>`
          )
          .join('')}
      </div>
    </section>
  `
}
