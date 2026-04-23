'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { COMPANY } from '@/lib/constants'

const NAV_LINKS = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#pilares',   label: 'Pilares' },
  { href: '#catalogo',  label: 'Catálogo' },
  { href: '/galeria#galeria', label: 'Galería' },
  { href: '/galeria#colaboradores', label: 'Colaboradores' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    // Filter out external links (starting with /)
    const ids = NAV_LINKS
      .filter(l => !l.href.startsWith('/'))
      .map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    
    // Check if it's an external link (starts with /)
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }
    
    // Handle anchor links
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-xl border-b border-gold/10 shadow-2xl shadow-navy/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a
              href="#inicio"
              onClick={e => { e.preventDefault(); handleNavClick('#inicio') }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Colombia Positiva"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="leading-tight">
                <p className="font-display text-gold text-lg tracking-widest leading-none">
                  COLOMBIA
                </p>
                <p className="font-body text-cream/70 text-[10px] tracking-[0.2em] uppercase leading-none">
                  Positiva SSSS
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 rounded-md ${
                    activeSection === link.href.replace('#', '') && !link.href.startsWith('/')
                      ? 'text-gold'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && !link.href.startsWith('/') && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 bottom-0 h-0.5 bg-gold rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-body font-semibold text-navy bg-gold hover:bg-gold-light rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                Cotizar Ahora
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-cream"
              aria-label="Abrir menú"
            >
              <span className="sr-only">Menú</span>
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-gold origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="block h-0.5 w-full bg-gold"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-gold origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-navy-mid border-l border-gold/10 flex flex-col pt-24 pb-8 px-8 gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`text-xl font-display tracking-widest py-3 border-b border-white/5 transition-colors ${
                    activeSection === link.href.replace('#', '') && !link.href.startsWith('/')
                      ? 'text-gold'
                      : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-auto pt-6">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 text-sm font-body font-semibold text-navy bg-gold hover:bg-gold-light rounded-full transition-colors"
                >
                  Cotizar Ahora
                </a>
                <p className="text-center text-muted text-xs mt-4 font-body">
                  RUT: {COMPANY.rut}
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
