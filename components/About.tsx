'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { VALUES, CERTIFICATIONS } from '@/lib/constants'

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-coal overflow-hidden section-padding">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald/4 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span variants={fadeUp} className="inline-block text-gold text-xs font-body tracking-[0.3em] uppercase mb-4">
            — Quiénes Somos —
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(2.5rem,6vw,5rem)] text-cream leading-none tracking-wider mb-6">
            COMPROMETIDOS CON
            <br />
            <span className="text-gradient-gold">COLOMBIA</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-muted font-body text-base lg:text-lg leading-relaxed">
            Somos una empresa colombiana comprometida con la generación de empleo digno y el desarrollo
            sostenible. Realizamos contratación de obra civil y ofrecemos programas de capacitación
            para inserción laboral, disminuyendo el desempleo en sectores vulnerables.
          </motion.p>
        </motion.div>

        {/* Misión / Visión */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {/* Misión */}
          <motion.div
            variants={fadeLeft}
            className="relative glass border-gold-glow rounded-2xl p-8 lg:p-10 overflow-hidden group hover:border-gold/40 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-gold-light to-transparent" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="font-display text-3xl tracking-wider text-gold mb-4">MISIÓN</h3>
              <p className="text-muted font-body leading-relaxed text-base">
                Ofrecer servicios de alta calidad a empresas públicas y privadas, superando sus
                expectativas con{' '}
                <span className="text-cream font-medium">eficiencia, responsabilidad, seguridad y calidad</span>{' '}
                en cada uno de nuestros procesos.
              </p>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={fadeUp}
            className="relative glass border border-emerald/20 rounded-2xl p-8 lg:p-10 overflow-hidden group hover:border-emerald/40 transition-all duration-500"
            style={{ boxShadow: '0 0 20px rgba(26,107,60,0.06)' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald via-emerald-light to-transparent" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald/5 rounded-full blur-2xl group-hover:bg-emerald/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald/15 rounded-xl flex items-center justify-center text-2xl mb-6">
                🔭
              </div>
              <h3 className="font-display text-3xl tracking-wider text-emerald-light mb-4">VISIÓN 2027</h3>
              <p className="text-muted font-body leading-relaxed text-base">
                Ser líderes en servicios integrales con{' '}
                <span className="text-cream font-medium">rentabilidad sustentable en Colombia</span>,
                alcanzando las certificaciones ISO 9001, ISO 14001, ISO 18001 y el Registro Único
                de Proponentes (RUP).
              </p>
              {/* Certification tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {CERTIFICATIONS.map(cert => (
                  <span
                    key={cert.code}
                    className="px-2.5 py-1 bg-emerald/10 border border-emerald/20 rounded-full text-xs font-body text-emerald-light font-medium"
                  >
                    {cert.code}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Valores */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-cream tracking-wider mb-3">
              NUESTROS <span className="text-gradient-gold">VALORES</span>
            </h3>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass border-gold-glow rounded-xl p-6 text-center group cursor-default hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4 block">{value.icon}</div>
                <h4 className="font-body font-semibold text-cream text-sm mb-3 leading-tight">
                  {value.title}
                </h4>
                <p className="text-muted text-xs font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
