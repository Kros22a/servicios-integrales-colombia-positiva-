'use client'

import { motion } from 'framer-motion'
import { COMPANY, CERTIFICATIONS } from '@/lib/constants'

const FOOTER_SERVICES = [
  'Contratación de Personal',
  'Proyectos de Obra Civil',
  'Catálogo Virtual',
  'Dotaciones Industriales',
  'Maquinaria y Transporte',
  'Minería y Minerales',
  'Alimentos Import/Export',
  'Container y Naviera',
]

const QUICK_LINKS = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Pilares',   href: '#pilares' },
  { label: 'Catálogo',  href: '#catalogo' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-coal border-t border-gold/8 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-white/5">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gold-shimmer flex items-center justify-center font-display text-navy text-xl font-bold">
                CP
              </div>
              <div>
                <p className="font-display text-gold text-lg tracking-widest leading-none">COLOMBIA</p>
                <p className="font-body text-cream/50 text-[10px] tracking-[0.2em] uppercase">Positiva SSSS</p>
              </div>
            </div>

            <p className="text-muted font-body text-sm leading-relaxed mb-5">
              Empresa colombiana comprometida con la generación de empleo digno
              y el desarrollo sostenible en sectores vulnerables.
            </p>

            {/* Certifications goal */}
            <div className="mb-5">
              <p className="text-xs text-gold font-body font-medium mb-2 tracking-wide uppercase">Meta 2027 — Certificaciones</p>
              <div className="flex flex-wrap gap-1.5">
                {CERTIFICATIONS.map(cert => (
                  <span
                    key={cert.code}
                    className="px-2 py-0.5 bg-gold/8 border border-gold/15 rounded text-xs font-body text-gold/80"
                  >
                    {cert.code}
                  </span>
                ))}
              </div>
            </div>

            {/* RUT */}
            <p className="text-muted text-xs font-body">RUT: <span className="text-cream/60">{COMPANY.rut}</span></p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-cream uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-muted hover:text-gold text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-cream uppercase mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map(service => (
                <li key={service}>
                  <a
                    href="#servicios"
                    onClick={e => { e.preventDefault(); document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-muted hover:text-gold text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-cream uppercase mb-5">
              Contacto
            </h4>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-[#25D366]/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-body">WhatsApp</p>
                  <p className="text-cream text-sm font-body font-medium group-hover:text-gold transition-colors">
                    +57 320 826 8897
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-body">Correo electrónico</p>
                  <p className="text-cream text-xs font-body font-medium group-hover:text-gold transition-colors break-all">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-body">Cobertura</p>
                  <p className="text-cream text-sm font-body font-medium">Colombia Nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-body text-center sm:text-left">
            © {year} <span className="text-cream/60">{COMPANY.name}</span>.
            Todos los derechos reservados. RUT: {COMPANY.rut}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-light animate-pulse" />
            Comprometidos con el empleo digno en Colombia
          </div>
        </div>
      </div>
    </footer>
  )
}
