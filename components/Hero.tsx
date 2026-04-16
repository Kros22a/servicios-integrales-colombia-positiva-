'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { COMPANY } from '@/lib/constants'

// Dynamic import: Three.js no funciona en SSR
const HeroScene = dynamic(() => import('./three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  ),
})

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// Contador animado simple
function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const duration = 1800
    const step = 16
    const increment = (end / duration) * step
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [end])
  return (
    <div className="text-center">
      <p className="font-display text-3xl lg:text-4xl text-gold">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted font-body mt-1 tracking-wide">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-navy">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald/4 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Columna Izquierda: Texto ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:gap-8"
        >
          {/* Eyebrow tag */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/25 bg-gold/8 text-gold text-xs font-body font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              RUT: 47439407-0 — Colombia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-wider text-cream">
              SERVICIOS
              <br />
              <span className="text-gradient-gold">INTEGRALES</span>
              <br />
              <span className="text-cream/40">COLOMBIA</span>
            </h1>
          </motion.div>

          {/* Descriptor */}
          <motion.p
            variants={itemVariants}
            className="text-muted font-body text-base lg:text-lg leading-relaxed max-w-md"
          >
            Impulsamos el empleo digno y el desarrollo empresarial en Colombia.
            Contratación de personal, obra civil, dotaciones y más de{' '}
            <span className="text-gold font-medium">17 líneas de servicio</span> para
            empresas públicas y privadas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-light text-navy font-body font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
            </a>
            <a
              href="#servicios"
              onClick={e => { e.preventDefault(); document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/8 font-body font-semibold text-sm rounded-full transition-all duration-300"
            >
              Ver Servicios
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 pt-4 border-t border-white/5 flex-wrap"
          >
            <AnimatedStat end={17}   suffix=""  label="Líneas de Servicio" />
            <AnimatedStat end={2027} suffix=""  label="Meta ISO Certificaciones" />
            <AnimatedStat end={100}  suffix="%" label="Compromiso Total" />
          </motion.div>
        </motion.div>

        {/* ── Columna Derecha: Canvas 3D ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-square max-w-xl mx-auto lg:mx-0"
        >
          {/* Halo glow detrás del canvas */}
          <div className="absolute inset-0 bg-gold/8 rounded-full blur-[80px] scale-90" />
          <div className="absolute inset-0 bg-emerald/5 rounded-full blur-[60px] scale-75 rotate-45" />

          {/* Canvas container */}
          <div className="relative z-10 w-full h-full">
            <HeroScene />
          </div>

          {/* Badge flotante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-0 glass border-gold-glow rounded-xl p-3 hidden sm:flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-emerald/20 rounded-lg flex items-center justify-center text-sm">
              🏆
            </div>
            <div>
              <p className="text-xs text-cream font-body font-semibold leading-none">Meta 2027</p>
              <p className="text-[10px] text-muted font-body mt-0.5">Certificaciones ISO</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute top-8 right-0 glass border-gold-glow rounded-xl p-3 hidden sm:flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center text-sm">
              👷
            </div>
            <div>
              <p className="text-xs text-cream font-body font-semibold leading-none">Empleos Dignos</p>
              <p className="text-[10px] text-muted font-body mt-0.5">Sectores vulnerables</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border border-gold/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}
