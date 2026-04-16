'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

const CATEGORIES = [
  { key: 'all',          label: 'Todos' },
  { key: 'construccion', label: 'Construcción' },
  { key: 'industrial',   label: 'Industrial' },
  { key: 'comercio',     label: 'Comercio' },
  { key: 'servicios',    label: 'Servicios' },
]

// Asignación de categoría por índice para el filtro
const SERVICE_CATEGORIES: Record<number, string> = {
  1: 'construccion', 2: 'industrial', 3: 'industrial', 4: 'industrial',
  5: 'construccion', 6: 'industrial', 7: 'servicios',  8: 'construccion',
  9: 'servicios',   10: 'servicios', 11: 'construccion', 12: 'comercio',
  13: 'comercio',   14: 'servicios', 15: 'comercio', 16: 'comercio', 17: 'industrial',
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass rounded-xl overflow-hidden cursor-default group"
      style={{ border: `1px solid ${hovered ? service.color + '50' : 'rgba(201,168,76,0.1)'}` }}
    >
      {/* Top color bar */}
      <div
        className="absolute top-0 inset-x-0 h-0.5 transition-all duration-300"
        style={{ background: hovered ? service.color : 'transparent' }}
      />

      {/* Number badge */}
      <div
        className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-display transition-colors duration-300"
        style={{
          background: hovered ? service.color + '20' : 'rgba(255,255,255,0.05)',
          color: hovered ? service.color : '#8A95A8',
        }}
      >
        {String(service.id).padStart(2, '0')}
      </div>

      <div className="p-6">
        {/* Icon */}
        <div
          className="text-3xl mb-4 transition-transform duration-300"
          style={{ transform: hovered ? 'scale(1.2) rotate(-5deg)' : 'scale(1) rotate(0)' }}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3
          className="font-body font-semibold text-sm leading-tight mb-2 transition-colors duration-300"
          style={{ color: hovered ? service.color : '#F5F0E8' }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-xs font-body leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${service.color}12, transparent)` }}
      />
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => SERVICE_CATEGORIES[s.id] === activeCategory)

  return (
    <section ref={ref} className="relative bg-navy section-padding overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-xs font-body tracking-[0.3em] uppercase mb-4">
            — Portafolio Completo —
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-cream leading-none tracking-wider mb-4">
            17 LÍNEAS DE
            <br />
            <span className="text-gradient-gold">SERVICIO</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted font-body text-base leading-relaxed">
            Una oferta integral diseñada para satisfacer las necesidades de
            empresas públicas y privadas en toda Colombia.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-body font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gold text-navy shadow-lg shadow-gold/25'
                  : 'border border-gold/20 text-muted hover:border-gold/40 hover:text-cream'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-muted font-body text-sm mb-4">
            ¿Necesitas un servicio específico? Contáctanos para una cotización personalizada.
          </p>
          <a
            href="https://wa.me/573208268897?text=Hola,%20me%20interesa%20cotizar%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-navy font-body font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
          >
            Solicitar Cotización Integral
          </a>
        </motion.div>
      </div>
    </section>
  )
}
