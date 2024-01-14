import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education } from "@components"

export default function Main() {
  return (
    <main className="realtive z-0 bg-primary">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </section>
      <About />
      <Education/>
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
    </main>
  )
}
