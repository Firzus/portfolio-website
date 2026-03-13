import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export async function POST(request: Request) {
  const body = await request.json()
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    return Response.json({ error: 'Invalid form data.' }, { status: 400 })
  }

  const { name, email, message } = result.data

  const { error } = await resend.emails.send({
    from: 'Lilian Music <contact@portfolio.lprieu.dev>',
    to: ['contact.lprieu@gmail.com'],
    subject: `New message from ${name}`,
    replyTo: email,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  if (error) {
    return Response.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return Response.json({ success: true })
}
