'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { COMPANY } from '@/lib/constants'

const CATALOG_CATEGORIES = [
  {
    icon: '🏗️',
    title: 'Materiales de Construcción',
    items: ['Cemento y prefabricados', 'Hierro y acero', 'Madera y PVC', 'Pinturas y acabados'],
    color: '#C9A84C',
  },
  {
    icon: '🦺',
    title: 'Dotaciones & EPP',
    items: ['Cascos y gafas de seguridad', 'Chalecos reflectivos', 'Calzado industrial', 'Guantes y protección'],
    color: '#22A05A',
  },
  {
    icon: '⚙️',
    title: 'Insumos Industriales',
    items: ['Herramientas y equipos', 'Lubricantes y químicos', 'Materiales eléctricos', 'Soldadura e industrial'],
    color: '#4A9EFF',
  },
  {
    icon: '👷',
    title: 'Servicios Profesionales',
    items: ['Electricistas certificados', 'Plomeros y gasfiteros', 'Ingenieros HSE', 'Maestros de obra'],
    color: '#E4C97A',
  },
]

function CatalogCard({ cat, index }: { cat: typeof CATALOG_CATEGORIES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative glass rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-opacity-50 transition-all duration-400 group"
      style={{ '--accent': cat.color } as React.CSSProperties}
    >
      {/* Glow */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: cat.color + '20' }}
      />

      <div className="text-4xl mb-5">{cat.icon}</div>
      <h3
        className="font-body font-semibold text-base mb-4 transition-colors duration-300"
        style={{ color: cat.color }}
      >
        {cat.title}
      </h3>
      <ul className="space-y-2">
        {cat.items.map(item => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-muted font-body">
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: cat.color }} />
            {item}
          </li>
        ))}
      </ul>

      <div
        className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: cat.color }}
      />
    </motion.div>
  )
}

export default function Catalog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-navy section-padding overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald/4 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs font-body tracking-[0.3em] uppercase mb-4">
            — Catálogo Virtual —
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-cream leading-none tracking-wider mb-4">
            TU TIENDA
            <br />
            <span className="text-gradient-gold">INDUSTRIAL 24/7</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted font-body text-base leading-relaxed">
            Accede a nuestro catálogo completo de materiales, dotaciones e insumos.
            Cotiza y compra de forma rápida a través de WhatsApp o correo electrónico.
          </p>
        </motion.div>

        {/* Catalog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CATALOG_CATEGORIES.map((cat, i) => (
            <CatalogCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* MEGA CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* CTA Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-mid via-navy to-coal" />
          <div className="absolute inset-0 bg-gold/5" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 lg:p-14">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* Left: Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/25 text-gold text-xs font-body tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Cotización Inmediata
                </div>
                <h3 className="font-display text-[clamp(2rem,5vw,4rem)] text-cream leading-none tracking-wider mb-4">
                  ¿LISTO PARA
                  <br />
                  <span className="text-gradient-gold">COTIZAR?</span>
                </h3>
                <p className="text-muted font-body text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                  Contáctanos por WhatsApp o correo electrónico y recibe tu cotización
                  personalizada en menos de <strong className="text-cream">24 horas</strong>.
                  Atención profesional garantizada.
                </p>

                {/* Contact cards */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                  {/* WhatsApp */}
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ background: '#25D36618', border: '1px solid #25D36630' }}
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#25D366]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[#25D366] text-xs font-body font-medium mb-0.5">WhatsApp directo</p>
                      <p className="text-cream font-body font-semibold text-lg leading-none">320 826 8897</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl glass border-gold-glow transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                  >
                    <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-gold text-xs font-body font-medium mb-0.5">Correo electrónico</p>
                      <p className="text-cream font-body font-semibold text-xs leading-tight break-all">
                        servicios.integrales<br />
                        .colombia.si@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Feature badges */}
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 max-w-xs w-full">
                {[
                  { icon: '⚡', label: 'Respuesta en 24h' },
                  { icon: '📋', label: 'Cotización gratis' },
                  { icon: '🔒', label: 'Póliza incluida' },
                  { icon: '🇨🇴', label: 'Cobertura nacional' },
                  { icon: '🏅', label: 'Calidad garantizada' },
                  { icon: '🤝', label: 'Asesoría sin costo' },
                ].map(badge => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center text-center p-4 rounded-xl glass border border-white/5"
                  >
                    <span className="text-2xl mb-2">{badge.icon}</span>
                    <span className="text-xs text-muted font-body leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
