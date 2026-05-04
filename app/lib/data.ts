export const personalInfo = {
  name: 'Josue Castro',
  role: 'Fullstack Developer',
  bio: 'Desarrollo aplicaciones web completas — desde la API hasta la interfaz. Me importa igual el rendimiento del backend que el último detalle del diseño.',
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
    subtitle: 'Tienda On-Line tematizada en Magic The Gathering',
    description: 'Estandarización de tareas y flujo de proyecto, gestión de documentación, estructuración de proyecto.',
    tags: ['React.js', 'Laravel/PHP', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/ItsBreo/tienda-magic',
    demo: '',
    featured: true,
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
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]