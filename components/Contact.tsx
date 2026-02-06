'use client'

// React
import { useRef, useState } from 'react'

// Module
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'

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

    setForm((prev) => ({ ...prev, [name]: value }))
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
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">Get in touch</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Contact<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-8 max-w-xs" />
      </motion.div>

      <motion.p
        variants={fadeIn('none', 'tween', 0.15, 0.8)}
        className="max-w-xl text-base text-neutral-400"
      >
        Have a project in mind or want to collaborate? Feel free to reach out.
      </motion.p>

      <motion.div variants={fadeIn('up', 'tween', 0.25, 0.7)} className="mt-10 max-w-2xl">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-b border-neutral-800 bg-transparent px-0 py-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-700 focus:border-accent"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-b border-neutral-800 bg-transparent px-0 py-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-700 focus:border-accent"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
              Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="resize-none border-b border-neutral-800 bg-transparent px-0 py-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-700 focus:border-accent"
            />
          </label>

          <div className="mt-2">
            <motion.button
              className="rounded-none bg-accent px-8 py-3.5 font-[family-name:var(--font-syne)] text-sm font-semibold tracking-wide text-primary uppercase transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
