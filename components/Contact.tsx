'use client'

// React
import { useRef, useState } from 'react'

// Module
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { slideIn, fadeIn } from '@/utils/motion'

// Content
import { SectionWrapper } from '@/hoc'

interface ContactFormState {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Lilian',
          from_email: form.email,
          to_email: 'contact.lprieu@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY,
      )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        setLoading(false)

        console.log(error)

        alert('Something went wrong.')
      })
  }

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div variants={fadeIn('up', 'tween', 0.2, 0.8)} className="mb-12 text-center">
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        variants={slideIn('up', 'tween', 0.3, 1)}
        className="relative rounded-2xl border border-transparent bg-tertiary p-8 transition-all duration-300 hover:border-[#bd34fe]/30 md:p-12"
      >
        {/* Gradient glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bd34fe]/5 to-[#41d1ff]/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />

        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col">
              <span className="mb-3 text-sm font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition-colors outline-none placeholder:text-secondary/50 focus:border-[#bd34fe]"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-3 text-sm font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                className="rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition-colors outline-none placeholder:text-secondary/50 focus:border-[#bd34fe]"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="mb-3 text-sm font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="resize-none rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition-colors outline-none placeholder:text-secondary/50 focus:border-[#bd34fe]"
            />
          </label>

          <button
            className="violet-gradient w-full rounded-lg px-10 py-4 font-semibold text-white transition-opacity outline-none hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
