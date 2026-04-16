import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'
import About    from '@/components/About'
import Services from '@/components/Services'
import Pillars  from '@/components/Pillars'
import Catalog  from '@/components/Catalog'
import Footer   from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <About />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="pilares">
          <Pillars />
        </section>
        <section id="catalogo">
          <Catalog />
        </section>
      </main>
      <Footer />
    </>
  )
}
