// Fuente única de verdad del CV. Todos los componentes consumen de aquí.
// Editar el contenido aquí se refleja en toda la página.

export const profile = {
  name: 'Mihael Alejandro Tejeda Soto',
  shortName: 'Mihael Tejeda',
  location: 'Puebla, Puebla · México',
  email: 'mihakengs@gmail.com',
  phone: '998-460-5333',
  ridersUrl: 'https://riders.media',
  roles: ['Desarrollador Web', 'Especialista en Innovación', 'Motion Grapher', 'Director Creativo', 'Gestor Multimedia', 'Profesional Multidisciplinario'],
  headline: 'Diseño sistemas que se mueven.',
  summary:
    'Desarrollador Web, Especialista en Innovación, Motion Grapher y Director Creativo con experiencia en soluciones digitales de alto rendimiento. Especializado en aplicaciones web con tecnologías modernas, dirección creativa multimedia e implementación de motion graphics avanzados. Alta adaptación tecnológica, resolución de problemas complejos a nivel corporativo, integración de IA en flujos de trabajo y enfoque en conversión.',
}

export const experience = [
  {
    role: 'Líder de Innovación y Desarrollo de Sistemas',
    company: 'Tomcat',
    period: 'Actualidad',
    highlight: false,
    points: [
      'Investigación, innovación y desarrollo de nuevos sistemas tecnológicos y soluciones a medida para las necesidades emergentes de la empresa.',
      'Reporte directo a la Subdirección, liderando la creación e implementación de herramientas digitales estratégicas sin supervisión intermedia.',
    ],
  },
  {
    role: 'Fundador y Director Creativo',
    company: 'Riders Media',
    period: 'Abril 2026 — Actualidad',
    highlight: true,
    points: [
      'Dirección de agencia digital especializada en motion graphics y desarrollo web de alto rendimiento.',
      'Creación de proyectos interactivos, dirección creativa y coordinación de equipos de producción y ventas.',
      'Desarrollo de algoritmos personalizados (Python y Pandas) para optimización de inventarios y cotizaciones.',
      'Integración de bases de datos y sincronización centralizada con Supabase, SQL y GitHub Pages.',
    ],
  },
  {
    role: 'Marketing y Diseño',
    company: 'Red Aduanera',
    period: '2023 — Actualidad',
    highlight: false,
    points: [
      'Producción de animaciones (motion graphics) para proyectos internos y externos.',
      'Desarrollo de estrategias digitales para fortalecer la identidad de la marca.',
      'Creación y gestión de contenido gráfico y corporativo para redes sociales.',
    ],
  },
  {
    role: 'Agente de Ventas',
    company: 'Anzus y Thurizas',
    period: '2023 — 2025',
    highlight: false,
    points: [
      'Gestión de relaciones con clientes internacionales de alto perfil.',
      'Estrategias de ventas enfocadas en conversión, fidelización y asesoría personalizada.',
    ],
  },
  {
    role: 'Productor',
    company: 'Canal 13',
    period: '2021 — 2023',
    highlight: false,
    points: [
      'Producción y gestión de contenido audiovisual y multimedia para el noticiero nacional.',
      'Supervisión de estudio, operación de cámaras, luces, sonido y efectos visuales.',
      'Manejo de cabina con Tricaster para garantizar transmisiones en vivo de calidad.',
      'Planificación de la programación y gestión del equipo técnico.',
    ],
  },
]

export const education = [
  { title: 'Licenciatura en Comunicación', place: 'BUAP', status: 'En curso' },
  { title: 'Paramédico en Formación', place: 'Academia RESCATE', status: 'En curso' },
  { title: 'Desarrollo Web Fullstack', place: 'Microsoft', status: 'Certificado' },
  { title: 'Ing. en Animación Digital y Efectos Visuales', place: '—', status: 'Trunca' },
  { title: 'Bachillerato P26 · Recursos Humanos', place: '—', status: 'Certificado' },
]

export const skills = [
  {
    group: 'Desarrollo y Programación',
    items: ['React.js', 'Next.js', 'Vite', 'Python', 'Pandas', 'SQL'],
  },
  {
    group: 'Plataformas y Backend',
    items: ['Supabase', 'GitHub Pages'],
  },
  {
    group: 'Dirección Creativa y Motion',
    items: ['After Effects', 'Clip Studio Paint', 'Overlord'],
  },
  {
    group: 'Productividad',
    items: ['Adobe Suite', 'Office (avanzado)'],
  },
  {
    group: 'Integración de IA',
    items: ['Claude Pro', 'Gemini Pro', 'ChatGPT Plus'],
  },
]

export const certifications = [
  'Embajador Certificado — Campaña Internacional Stop the Bleed',
]

export const languages = [
  { name: 'Español', level: 'Nativo', value: 100 },
  { name: 'Inglés', level: 'Avanzado', value: 85 },
  { name: 'Francés', level: 'Intermedio', value: 55 },
  { name: 'Alemán', level: 'A1', value: 25 },
]
