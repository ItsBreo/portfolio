export const personalInfo = {
  name: 'Josue Castro',
  role: 'Desarrollador Fullstack',
  bio: 'Desarrollador fullstack centrado en Laravel, React y TypeScript. Me importa tanto que el sistema escale como que la interfaz sea rápida y precisa.',
  email: 'castrorodriguezjosue@gmail.com',
  github: 'https://github.com/ItsBreo',
  linkedin: 'https://www.linkedin.com/in/josue-castro-rodríguez-8b355526a',
  cvUrl: '/cv.pdf',
}

export const aboutText = {
  heading: 'Sobre mí',
  paragraphs: [
    'Soy un desarrollador fullstack apasionado por construir productos digitales y por seguir afinando el oficio cada día.',
    'Trabajo con tecnologías como Laravel, TypeScript, Python, Docker, JavaScript, React y bases de datos SQL/NoSQL. Me motiva resolver problemas complejos con soluciones elegantes y escribir código limpio y mantenible a largo plazo.',
  ],
}

export const stack = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'Java', 'PHP'],
  },
  {
    category: 'Infraestructura',
    items: ['Docker', 'Kubernetes'],
  },
  {
    category: 'Datos',
    items: ['SQL', 'NoSQL'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Black Lotus',
    subtitle: 'Tienda online con temática Magic: The Gathering',
    description: 'Plataforma e-commerce para comprar cartas de Magic: The Gathering, con pasarela de pago integrada.',
    tags: ['React.js', 'Laravel/PHP', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/ItsBreo/tienda-magic',
    demo: '',
    featured: true,
    image: '/projects/blacklotus.webp',
    team: 1,
  },
  {
    id: 2,
    title: 'Elden Ring RPG',
    subtitle: 'RPG por turnos en terminal hecho en Java',
    description: 'Sistema de combate por turnos inspirado en Elden Ring, construido como aplicación de terminal con mecánicas de clases, inventario y progresión. Proyecto colaborativo desarrollado por un equipo de 2 personas.',
    tags: ['Java'],
    github: 'https://github.com/AzaelReyesMartel-1ASIR/PjSystemVg',
    demo: '',
    featured: true,
    image: '/projects/eldenring.webp',
    team: 2,
  },
]

export const experience = [
  {
    id: 1,
    role: 'Desarrollador Junior',
    company: 'Mercanza',
    period: 'Abril 2026 — Actualidad',
    description:
      'Migración del frontend a React en Mercanza en colaboración con Premium Drinks. Construyendo una nueva aplicación para gestionar aportes.',
    tags: ['React', 'Docker', 'Django', 'SQL Server', 'QlikSense'],
  },
  {
    id: 2,
    role: 'Becario de desarrollo',
    company: 'Mercanza',
    period: 'Enero 2026 — Abril 2026',
    description:
      'Participación en la migración a React de Mercanza en el proyecto Sistema Ingeniería. Desarrollo de endpoints en FastAPI, configuraciones Docker e integraciones con SQL Server.',
    tags: ['React', 'Python', 'Docker', 'SQL Server'],
  },
  {
    id: 3,
    role: 'Soporte informático',
    company: 'Grupo Dunas',
    period: 'Diciembre 2023 — Marzo 2024',
    description:
      'Integración de terminales móviles en los hoteles de Grupo Dunas, documentación, configuración de correo corporativo y aprovisionamiento de dispositivos móviles, equipos de escritorio y redes locales.',
    tags: ['Microsoft Office', 'Microsoft Outlook', 'Gestión de redes', 'Soporte técnico'],
  },
  {
    id: 4,
    role: 'Becario de soporte informático',
    company: 'Ateneo Santa Lucía',
    period: 'Enero 2023 — Abril 2023',
    description:
      'Mantenimiento de puestos de trabajo, gestión de la red local, soporte técnico a usuarios finales y configuración de equipos de escritorio.',
    tags: ['Soporte técnico', 'Gestión de redes'],
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Desarrollo de Aplicaciones Web (Grado Superior)',
    issuer: 'CIFP Villa de Agüimes',
    date: '2024 - 2026',
    icon: 'graduation',
  },
  {
    id: 2,
    title: 'Formación en Qlik Sense',
    issuer: 'Mercanza',
    date: '2026',
    icon: 'analytics',
  },
  {
    id: 3,
    title: 'React — La guía completa',
    issuer: 'Udemy',
    date: '2026',
    icon: 'react',
  },
  {
    id: 4,
    title: 'Angular desde cero',
    issuer: 'Todo Code — YT',
    date: '2026',
    icon: 'angular',
  },
  {
    id: 5,
    title: 'Administración de Sistemas Informáticos en Red (Grado Superior)',
    issuer: 'CIFP Villa de Agüimes',
    date: '2023 - 2025',
    icon: 'graduation',
  },
  {
    id: 6,
    title: 'Curso de PHP y Laravel',
    issuer: 'Udemy',
    date: '2025',
    icon: 'laravel',
  },
  {
    id: 7,
    title: 'Docker y Kubernetes',
    issuer: 'Udemy',
    date: '2025',
    icon: 'docker',
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]
