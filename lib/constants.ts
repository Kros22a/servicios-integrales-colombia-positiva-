// ──────────────────────────────────────────────────────────────────────────────
// lib/constants.ts — Datos de la empresa Colombia Positiva SSSS
// ──────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name:      'Servicios Integrales Colombia Positiva SSSS',
  shortName: 'Colombia Positiva',
  rut:       '47439407-0',
  whatsapp:  '573208268897',
  email:     'servicios.integrales.colombia.si@gmail.com',
  whatsappUrl: 'https://wa.me/573208268897?text=Hola,%20me%20interesa%20cotizar%20sus%20servicios',
}

export const STATS = [
  { value: 17,   suffix: '',    label: 'Líneas de Servicio' },
  { value: 2027, suffix: '',    label: 'Meta de Certificaciones ISO' },
  { value: 100,  suffix: '%',   label: 'Compromiso con la Calidad' },
  { value: 5,    suffix: '+',   label: 'Especialistas en el Equipo' },
]

export const VALUES = [
  {
    icon: '⚖️',
    title: 'Conducta Ética',
    description: 'Actuamos con integridad y transparencia en cada proceso, manteniendo los más altos estándares de honestidad con nuestros clientes y colaboradores.',
  },
  {
    icon: '🎯',
    title: 'Satisfacción del Cliente',
    description: 'Superamos las expectativas de nuestros clientes entregando soluciones que van más allá de lo contratado, con excelencia y dedicación.',
  },
  {
    icon: '🏆',
    title: 'Orientación al Logro',
    description: 'Establecemos metas ambiciosas y trabajamos con determinación para alcanzarlas, innovando continuamente en nuestros procesos.',
  },
  {
    icon: '🤝',
    title: 'Trabajo en Equipo',
    description: 'Fomentamos la colaboración y el respeto mutuo, entendiendo que los grandes resultados son producto del esfuerzo colectivo.',
  },
  {
    icon: '🌱',
    title: 'Responsabilidad Social',
    description: 'Comprometidos con el desarrollo de sectores vulnerables, generando empleo digno y oportunidades de capacitación laboral en Colombia.',
  },
]

export const CERTIFICATIONS = [
  { code: 'ISO 9001', label: 'Gestión de Calidad' },
  { code: 'ISO 14001', label: 'Gestión Ambiental' },
  { code: 'ISO 18001', label: 'Seguridad y Salud' },
  { code: 'RUP', label: 'Registro Único de Proponentes' },
]

// ─── 17 Líneas de Servicio ────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    title: 'Materiales de Construcción Civil',
    icon: '🏗️',
    image: '/assets/images/services/construccion.png',
    color: '#C9A84C',
    description: 'Suministro de materiales de alta calidad para proyectos de construcción civil a nivel nacional.',
  },
  {
    id: 2,
    title: 'Maquinaria y Transporte',
    icon: '🚛',
    image: '/assets/images/services/maquinaria.png',
    color: '#E4C97A',
    description: 'Venta, alquiler e importación/exportación de maquinaria industrial y flota de transporte.',
  },
  {
    id: 3,
    title: 'Dotaciones Industriales',
    icon: '🦺',
    image: '/assets/images/services/dotaciones.png',
    color: '#C9A84C',
    description: 'Dotaciones adaptadas a la seguridad específica de cada negocio y sector industrial.',
  },
  {
    id: 4,
    title: 'Seguridad e Higiene',
    icon: '🛡️',
    image: '/assets/images/services/seguridad-higiene.png',
    color: '#22A05A',
    description: 'Materiales y equipos certificados para garantizar ambientes de trabajo seguros.',
  },
  {
    id: 5,
    title: 'Carpintería Industrial',
    icon: '🪵',
    image: '/assets/images/services/carpinteria.png',
    color: '#C9A84C',
    description: 'Carpintería industrial y ornamentación para proyectos empresariales y comerciales.',
  },
  {
    id: 6,
    title: 'Insumos',
    icon: '📦',
    image: '/assets/images/services/insumos.png',
    color: '#E4C97A',
    description: 'Suministro integral de insumos para operaciones industriales, comerciales y de servicios.',
  },
  {
    id: 7,
    title: 'Tecnología',
    icon: '💻',
    image: '/assets/images/services/tecnologia.png',
    color: '#4A9EFF',
    description: 'Soluciones tecnológicas, equipos y software para optimizar los procesos de su empresa.',
  },
  {
    id: 8,
    title: 'Construcción y Decoración',
    icon: '🎨',
    image: '/assets/images/services/decoracion.png',
    color: '#C9A84C',
    description: 'Mantenimientos, adecuaciones eléctricas, pintura y proyectos de decoración integral.',
  },
  {
    id: 9,
    title: 'Salud',
    icon: '⚕️',
    image: '/assets/images/services/salud.png',
    color: '#22A05A',
    description: 'Servicios de salud ocupacional, exámenes médicos de ingreso y seguimiento periódico.',
  },
  {
    id: 10,
    title: 'Personal Capacitado',
    icon: '👷',
    image: '/assets/images/services/personal.png',
    color: '#C9A84C',
    description: 'Selección y contratación de personal técnico y profesional con perfil validado por psicóloga.',
  },
  {
    id: 11,
    title: 'Contratación de Obra Civil',
    icon: '🏢',
    image: '/assets/images/services/obra-civil.png',
    color: '#E4C97A',
    description: 'Ejecución de proyectos de obra civil con póliza de garantía y respaldo profesional.',
  },
  {
    id: 12,
    title: 'Alimentos',
    icon: '🌾',
    image: '/assets/images/services/alimentos.png',
    color: '#22A05A',
    description: 'Importación y exportación de alimentos con aval INVIMA. Requiere certificación ICPO.',
  },
  {
    id: 13,
    title: 'Minerales',
    icon: '⛏️',
    image: '/assets/images/services/minerales.png',
    color: '#C9A84C',
    description: 'Carbón, oro y esmeraldas. Operaciones mineras con cumplimiento normativo y certificación ICPO.',
  },
  {
    id: 14,
    title: 'Licencias y Certificaciones',
    icon: '📋',
    image: '/assets/images/services/licencias.png',
    color: '#4A9EFF',
    description: 'Gestión de licencias ambientales, certificaciones ISO, RUP y trámites regulatorios.',
  },
  {
    id: 15,
    title: 'Chatarra',
    icon: '♻️',
    image: '/assets/images/services/chatarra.png',
    color: '#9E7A2A',
    description: 'Compra, venta y gestión de chatarra metálica con procesos responsables y certificados.',
  },
  {
    id: 16,
    title: 'Container y Naviera',
    icon: '🚢',
    image: '/assets/images/services/container.png',
    color: '#4A9EFF',
    description: 'Servicios de container y naviera a nivel nacional e internacional para importación y exportación.',
  },
  {
    id: 17,
    title: 'Combustibles',
    icon: '⛽',
    image: '/assets/images/services/combustibles.png',
    color: '#E4C97A',
    description: 'Distribución y suministro de combustibles para flotas y operaciones industriales.',
  },
]

// ─── 3 Pilares Principales ────────────────────────────────────────────────────
export const PILLARS = [
  {
    id: 'personal',
    number: '01',
    title: 'Contratación de Personal',
    subtitle: 'Tu empresa, libre de cargas legales',
    image: '/assets/images/pillars/pilar-personal.jpg',
    color: '#C9A84C',
    description:
      'Liberamos a las empresas de toda carga legal y administrativa en la gestión de personal. Nuestro equipo multidisciplinario garantiza procesos seguros, eficientes y 100% conformes a la normativa laboral colombiana.',
    features: [
      '👨‍⚖️ Equipo de abogados laborales especializados',
      '📊 Contadora con informes financieros mensuales',
      '🧠 Psicóloga para perfil y selección de candidatos',
      '⚠️ Ingeniero HSE — Gestión de riesgos laborales',
      '🩺 Exámenes médicos de ingreso y periódicos',
    ],
    highlight: {
      label: 'Salario neto desde',
      value: '$3.160.000',
      note: 'Mora del 10% | Descuentos especiales para grupos +10 empleados',
    },
  },
  {
    id: 'obra-civil',
    number: '02',
    title: 'Proyectos de Obra Civil',
    subtitle: 'Construimos con respaldo y garantía',
    image: '/assets/images/pillars/pilar-obra-civil.jpg',
    color: '#22A05A',
    description:
      'Ejecutamos proyectos de construcción, mantenimiento y adecuación con los más altos estándares de calidad. Cada proyecto cuenta con póliza de garantía y un equipo técnico calificado.',
    features: [
      '🏗️ Mantenimientos y adecuaciones generales',
      '⚡ Adecuaciones eléctricas certificadas',
      '🎨 Pintura y acabados profesionales',
      '🏢 Construcción de obra nueva',
      '📄 Póliza de garantía incluida',
    ],
    highlight: {
      label: 'Anticipo del proyecto',
      value: '70%',
      note: 'Póliza de garantía incluida en todos los proyectos',
    },
    subbranches: [
      { icon: '⛏️', name: 'Minería', detail: 'Carbón, Oro, Esmeraldas — Requiere ICPO' },
      { icon: '🚛', name: 'Maquinaria', detail: 'Venta, alquiler, importación y exportación' },
      { icon: '🌾', name: 'Alimentos', detail: 'Import/Export, INVIMA — Requiere ICPO' },
      { icon: '🚢', name: 'Naviera', detail: 'Containers nacionales e internacionales' },
    ],
  },
  {
    id: 'catalogo',
    number: '03',
    title: 'Catálogo Virtual',
    subtitle: 'Tu tienda industrial siempre disponible',
    image: '/assets/images/pillars/pilar-catalogo.jpg',
    color: '#4A9EFF',
    description:
      'Plataforma web y móvil para la compra y cotización de materiales, insumos, dotaciones y servicios profesionales especializados. Acceso 24/7 con atención inmediata vía WhatsApp.',
    features: [
      '🛒 Materiales de construcción e insumos',
      '🦺 Dotaciones adaptadas a tu sector',
      '👷 Servicios: electricistas, plomeros, ingenieros',
      '📱 Acceso web y móvil — disponible 24/7',
      '💬 Cotización directa por WhatsApp',
    ],
    highlight: {
      label: 'Cotiza ahora',
      value: '3208268897',
      note: 'servicios.integrales.colombia.si@gmail.com',
    },
  },
]
