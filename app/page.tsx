import { About, Contact, Experience, Hero, Navbar, Tech, Works, Education } from '@/components'
import DynamicStars from '@/components/canvas/DynamicStars'

export default function Main() {
  return (
    <main className="relative z-0 bg-primary">
      <section>
        <Navbar />
        <Hero />
      </section>

      {/* Decorative divider */}
      <div className="rule-line" />

      <About />
      <div className="rule-line" />

      <Education />
      <div className="rule-line" />

      <Experience />
      <div className="rule-line" />

      <Tech />
      <div className="rule-line" />

      <Works />
      <div className="rule-line" />

      <section className="relative z-0">
        <Contact />
        <DynamicStars />
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 px-6 py-8 text-center">
        <p className="text-xs tracking-wider text-neutral-600">Designed & Built by Lilian Prieu</p>
      </footer>
    </main>
  )
}
