// ============================================================
// ORQUESTADOR — monta la página por módulos.
// Cada componente vive en src/components y expone render(mount).
// En Fase 3 se desarrollan uno por uno; aquí solo se cablean.
// ============================================================

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/cursor.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/bento.css'
import './styles/experience.css'
import './styles/skills.css'
import './styles/education.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/loader.css'
import './styles/ambient.css'
import './styles/fx.css'

import { initTheme } from './lib/theme.js'
import { initSmoothScroll } from './lib/smoothScroll.js'
import { initCursor } from './lib/cursor.js'
import { initMagnetic } from './lib/magnetic.js'
import { initReveal } from './lib/reveal.js'
import { initLoader } from './lib/loader.js'
import { initScrollProgress } from './lib/scrollProgress.js'

import { renderAmbient } from './components/ambient.js'
import { renderNav, initNav } from './components/nav.js'
import { renderHero, initHero, playHeroIntro } from './components/hero.js'
import { renderBento, initBento } from './components/bento.js'
import { renderExperience } from './components/experience.js'
import { renderSkills } from './components/skills.js'
import { renderEducation } from './components/education.js'
import { renderContact } from './components/contact.js'
import { renderFooter } from './components/footer.js'

// Los sitios scroll-driven deben abrir siempre desde arriba.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

const app = document.querySelector('#app')

// Estructura semántica de la página
app.innerHTML = `
  ${renderAmbient()}
  <div class="scroll-progress" aria-hidden="true"><span data-progress></span></div>
  <div class="loader" data-loader>
    <div class="loader__inner">
      <span class="loader__count" data-loader-count>000</span>
      <span class="loader__label">
        Mihael Tejeda — Portafolio
        <svg class="loader__spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c1 8 3 11 12 12-9 1-11 4-12 12-1-8-3-11-12-12 9-1 11-4 12-12Z"/></svg>
      </span>
    </div>
    <div class="loader__bar"><span data-loader-bar></span></div>
  </div>
  ${renderNav()}
  <main>
    ${renderHero()}
    ${renderBento()}
    ${renderExperience()}
    ${renderSkills()}
    ${renderEducation()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`

// Comportamiento (motion, tema, scroll) se inicializa tras pintar el DOM
initTheme()
initSmoothScroll()
initCursor()
initNav()
initHero()
initBento()
initMagnetic()
initReveal()
initScrollProgress()

// La cortina de entrada dispara la animación del hero al terminar.
initLoader(playHeroIntro)
