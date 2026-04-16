'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { PILLARS, COMPANY } from '@/lib/constants'

function PillarCard({ pillar, isActive, onClick }: {
  pillar: typeof PILLARS[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isActive ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
      style={{
        border: `1px solid ${isActive ? pillar.color + '40' : 'rgba(201,168,76,0.1)'}`,
        background: isActive
          ? `linear-gradient(135deg, rgba(10,15,30,0.95), rgba(10,15,30,0.85))`
          : 'rgba(255,255,255,0.03)',
        boxShadow: isActive ? `0 0 60px ${pillar.color}18` : 'none',
      }}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 inset-x-0 h-0.5"
        style={{ background: isActive ? pillar.color : 'transparent', transition: 'background 0.4s' }}
      />

      {/* Header — always visible */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className="font-display text-5xl leading-none transition-colors duration-300"
              style={{ color: isActive ? pillar.color : 'rgba(255,255,255,0.12)' }}
            >
              {pillar.number}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 border rounded-full flex items-center justify-center flex-shrink-0 mt-1"
            style={{ borderColor: isActive ? pillar.color + '60' : 'rgba(255,255,255,0.1)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              style={{ color: isActive ? pillar.color : '#8A95A8' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </div>

        <h3
          className="font-display text-2xl lg:text-3xl tracking-wider mb-2 transition-colors duration-300"
          style={{ color: isActive ? pillar.color : '#F5F0E8' }}
        >
          {pillar.title}
        </h3>
        <p className="text-muted text-sm font-body">{pillar.subtitle}</p>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              <p className="text-muted font-body text-sm leading-relaxed mb-6 border-t border-white/5 pt-6">
                {pillar.description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {pillar.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm font-body text-cream/80"
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{feature.split(' ')[0]}</span>
                    <span>{feature.slice(feature.indexOf(' ') + 1)}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Highlight box */}
              <div
                className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{ background: pillar.color + '12', border: `1px solid ${pillar.color}25` }}
              >
                <div>
                  <p className="text-xs font-body text-muted mb-0.5">{pillar.highlight.label}</p>
                  <p className="font-display text-2xl tracking-wider" style={{ color: pillar.color }}>
                    {pillar.highlight.value}
                  </p>
                  <p className="text-xs text-muted font-body mt-0.5">{pillar.highlight.note}</p>
                </div>

                {/* Sub-branches (only for pillar 2) */}
                {pillar.subbranches && (
                  <div className="grid grid-cols-2 gap-2 sm:w-auto">
                    {pillar.subbranches.map((sb, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-body text-cream/70"
                        style={{ background: 'rgba(255,255,255,0.05)' }}
                      >
                        <span>{sb.icon}</span>
                        <span className="font-medium">{sb.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-navy font-body font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: pillar.color }}
                >
                  Solicitar Información
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border text-sm font-body font-medium rounded-full transition-colors hover:bg-white/5"
                  style={{ borderColor: pillar.color + '40', color: pillar.color }}
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Pillars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activePillar, setActivePillar] = useState<string | null>('personal')

  const handleClick = (id: string) => {
    setActivePillar(prev => prev === id ? null : id)
  }

  return (
    <section ref={ref} className="relative bg-coal section-padding overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/4 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-xs font-body tracking-[0.3em] uppercase mb-4">
            — Nuestros Pilares —
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-cream leading-none tracking-wider mb-4">
            3 PILARES
            <br />
            <span className="text-gradient-gold">FUNDAMENTALES</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted font-body text-base leading-relaxed">
            Cada pilar representa un compromiso integral con nuestros clientes.
            Haz clic en cada uno para conocer los detalles.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {PILLARS.map(pillar => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              isActive={activePillar === pillar.id}
              onClick={() => handleClick(pillar.id)}
            />
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 glass border-gold-glow rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-display text-2xl tracking-wider text-cream mb-1">
              ¿LISTO PARA TRABAJAR CON NOSOTROS?
            </h4>
            <p className="text-muted font-body text-sm">
              Contacta a nuestro equipo y recibe asesoría personalizada sin costo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold hover:bg-gold-light text-navy font-body font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 whitespace-nowrap"
            >
              WhatsApp: 320 826 8897
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="px-6 py-3 border border-gold/30 text-gold hover:bg-gold/8 font-body font-medium text-sm rounded-full transition-colors whitespace-nowrap"
            >
              Enviar Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
