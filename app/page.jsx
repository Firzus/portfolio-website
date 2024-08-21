import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Education,
} from "@components";

export default function Main() {
  return (
    <main className="realtive z-0 bg-primary">
      <section>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Education />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
    </main>
  );
}
