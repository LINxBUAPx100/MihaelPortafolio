import { profile } from '../data/content.js'

export function renderContact() {
  return `
    <section id="contacto" class="contact">
      <span class="mono contact__idx" data-rev>(05) — Contacto</span>
      <h2 class="contact__title" data-rev>Hagamos algo<br />que se <em>mueva</em>.</h2>

      <a class="contact__email" href="mailto:${profile.email}" data-rev>
        ${profile.email}
      </a>

      <div class="contact__meta" data-rev>
        <a class="contact__link" href="tel:+52${profile.phone.replace(/-/g, '')}">${profile.phone}</a>
        <span class="contact__sep" aria-hidden="true"></span>
        <span class="contact__loc">${profile.location}</span>
      </div>

      <a class="contact__riders" href="${profile.ridersUrl}" target="_blank" rel="noopener" data-magnetic="0.4" data-rev>
        <span>Conoce Riders.media</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>
  `
}
