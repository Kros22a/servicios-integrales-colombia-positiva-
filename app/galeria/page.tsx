'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Gallery Section */}
        <section id="galeria" className="section-padding bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
                Galería
              </h2>
              <p className="font-body text-cream/70 max-w-2xl mx-auto">
                Descubre nuestra identidad, equipo y procesos a través de imágenes y videos que representan la esencia de Colombia Positiva
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <video
                  className="w-full h-[64rem] object-cover"
                  controls
                >
                  <source src="/assets/images/gallery/video-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <video
                  className="w-full h-[64rem] object-cover"
                  controls
                >
                  <source src="/assets/images/gallery/video-2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </motion.div>

              {/* Company Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg bg-navy-mid flex items-center justify-center h-[64rem]"
              >
                <div className="relative w-[32rem] h-[32rem]">
                  <Image
                    src="/assets/images/logo/logos2.png"
                    alt="Colombia Positiva Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Team Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/team-photo.jpg"
                    alt="Nuestro Equipo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Process Image 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/process-1.jpg"
                    alt="Proceso 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Process Image 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/process-2.jpg"
                    alt="Proceso 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Process Image 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg md:col-span-2 lg:col-span-1"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/process-3.jpg"
                    alt="Proceso 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              {/* Process Image 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/process-4.jpg"
                    alt="Proceso 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              {/* Process Image 5 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gold/20 shadow-lg"
              >
                <div className="relative w-full h-[64rem]">
                  <Image
                    src="/assets/images/gallery/process-5.jpg"
                    alt="Proceso 5"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section id="colaboradores" className="section-padding bg-navy-mid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
                Colaboradores
              </h2>
              <p className="font-body text-cream/70 max-w-2xl mx-auto">
                Trabajamos junto a empresas líderes que confían en nuestra calidad y compromiso
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative bg-navy-light rounded-lg p-6 flex items-center justify-center h-32 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={`/assets/images/collaborators/logo-colaborador-${index + 1}.png`}
                      alt={`Colaborador ${index + 1}`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}