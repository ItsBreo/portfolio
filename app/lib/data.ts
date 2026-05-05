export const personalInfo = {
  name: 'Josue Castro',
  role: 'Fullstack Developer',
  bio: 'Fullstack con foco en Laravel, React y TypeScript. Me importa tanto que el sistema escale como que la interfaz sea rápida y precisa.',
  email: 'castrorodriguezjosue@gmail.com',
  github: 'https://github.com/ItsBreo',
  linkedin: 'https://linkedin.com/in/tunombre',
  cvUrl: '/cv.pdf',
}

export const aboutText = {
  heading: 'Sobre mí',
  paragraphs: [
    'Soy un desarrollador fullstack con una pasión por crear y seguir aprendiendo en mi leve experiencia en el mundo digital.',
    'Trabajo con tecnologías como Laravel, TypeScript, Python, Docker, JS, React y SQL/NoSQL. Me motiva resolver problemas complejos con soluciones elegantes y escribir código limpio que sea mantenible a largo plazo.',
  ],
}

export const stack = [
  { name: 'Next.js',     category: 'Frontend', level: 75 },
  { name: 'TypeScript',  category: 'Lenguaje', level: 85 },
  { name: 'React.js',    category: 'Frontend',  level: 80 },
  { name: 'Tailwind',    category: 'Estilos',  level: 90 },
  { name: 'Docker',      category: 'DevOps',   level: 80 },
  { name: 'Kubernetes',  category: 'DevOps',   level: 70 },
  { name: 'SQL / NoSQL', category: 'Datos',    level: 80 },
  { name: 'Java',        category: 'Backend',  level: 65 },
  { name: 'Laravel',     category: 'Backend',  level: 85 },
]

export const projects = [
  {
    id: 1,
    title: 'Black Lotus',
    subtitle: 'Tienda On-Line con temática en Magic The Gathering',
    description: 'E-commerce para la venta de cartas de Magic The Gathering, con pasarela de pago.',
    tags: ['React.js', 'Laravel/PHP', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/ItsBreo/tienda-magic',
    demo: '',
    featured: true,
    image: '/projects/blacklotus.png',
  },
  {
    id: 2,
    title: 'Elden Ring RPG',
    subtitle: 'Juego por turnos en terminal con Java',
    description: 'Gestión de ideas, ajuste de flujos y tareas entre los responsables, pruebas.',
    tags: ['Java'],
    github: 'https://github.com/AzaelReyesMartel-1ASIR/PjSystemVg',
    demo: '',
    featured: true,
    image: '/projects/eldenring.png',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Desarrollador Junior',
    company: 'Mercanza',
    period: 'Abril 2026 — Actualidad',
    description:
      'Desarrollo de Migración a React en Mercanza junto a Premium Drinks, nueva aplicación Frontend para la gestión de aportaciones.',
    tags: ['React', 'Docker', 'Django', 'SQL Server', 'QlikSense'],
  },
  {
    id: 2,
    role: 'Desarrollador en Prácticas',
    company: 'Mercanza',
    period: 'Enero 2026 — Abril 2026',
    description:
      'Integración de migración a React en Mercanza en el proyecto junto a Sistema Ingenería, adición de endpoints en FastAPI, Docker y SQL Server.',
    tags: ['React','Python', 'Docker', 'SQL Server'],
  },
    {
    id: 3,
    role: 'Auxiliar técnico',
    company: 'Grupo Dunas',
    period: 'Diciembre 2023 — Marzo 2024',
    description:
      'Integración de terminales móviles en diferentes hoteles del Grupo Dunas, creación de documentación, correos electrónicos empresariales y preparación de términales móviles, equipos de sobremesa y redes locales.',
    tags: ['Microsoft Office','Microsoft Outlook','Gestión de redes','Soporte técnico'],
  },
      {
    id: 4,
    role: 'Auxiliar técnico en prácticas',
    company: 'Ateneo Santa Lucía',
    period: 'Enero 2023 — Abril 2023',
    description:
      'Mantenimiento de equipos informáticos, gestión de redes locales, soporte técnico a usuarios y configuración de equipos de sobremesa.',
    tags: ['Soporte técnico', 'Gestión de redes'],
  },
]

export const certifications = [
  {
    id: 1,
    title: 'CFGS Desarrollo de Aplicaciones Web',
    issuer: 'CIFP Villa de Agüimes',
    date: '2024 - 2026',
    icon: 'graduation',
  },
  {
    id: 2,
    title: 'CFGS Administración de Sistemas Informáticos y Redes',
    issuer: 'CIFP Villa de Agüimes',
    date: '2023 - 2025',
    icon: 'graduation',
  },
  {
    id: 3,
    title: 'Docker y Kubernetes',
    issuer: 'Udemy',
    date: '2025',
    icon: 'docker',
  },
  {
    id: 4,
    title: 'React — The Complete Guide',
    issuer: 'Udemy',
    date: '2025 - 2026',
    icon: 'react',
  },
  {
    id: 5,
    title: 'Docker y Kubernetes',
    issuer: 'Udemy',
    date: '2025',
    icon: 'docker',
  },
  {
    id: 6,
    title: 'Tutorial Angular desde 0',
    issuer: 'Todo Code - YT',
    date: '2026',
    icon: 'angular',
  },
  {
    id: 7,
    title: 'Formación Qlik Sense',
    issuer: 'Mercanza',
    date: '2026',
    icon: 'analytics',
  },
  {
    id: 8,
    title: 'Formación PHP y Laravel',
    issuer: 'Udemy',
    date: '2025',
    icon: 'laravel',
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]