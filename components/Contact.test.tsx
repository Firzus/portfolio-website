import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
    p: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <p {...rest}>{children}</p>
    ),
    button: ({
      children,
      disabled,
      type,
      className,
      ...rest
    }: {
      children?: React.ReactNode
      disabled?: boolean
      type?: string
      className?: string
      [key: string]: unknown
    }) => (
      <button disabled={disabled} type={type as 'submit'} className={className} {...rest}>
        {children}
      </button>
    ),
    section: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <section {...rest}>{children}</section>
    ),
  },
}))

// Mock emailjs
const mockSend = vi.fn()
vi.mock('@emailjs/browser', () => ({
  default: {
    send: (...args: unknown[]) => mockSend(...args),
  },
}))

// Mock SectionWrapper to just return the component directly
vi.mock('@/hoc', () => ({
  SectionWrapper: (Component: React.ComponentType, _id: string) => Component,
}))

// Mock motion utilities
vi.mock('@/utils/motion', () => ({
  fadeIn: () => ({}),
  textVariant: () => ({}),
}))

// Import after mocks
const { default: Contact } = await import('./Contact')

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)

    expect(screen.getByText(/Contact/)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)

    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Tell me about your project...')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)

    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('updates form fields on input', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('John Doe')
    const emailInput = screen.getByPlaceholderText('john@example.com')
    const messageInput = screen.getByPlaceholderText('Tell me about your project...')

    await user.type(nameInput, 'Jane')
    await user.type(emailInput, 'jane@test.com')
    await user.type(messageInput, 'Hello!')

    expect(nameInput).toHaveValue('Jane')
    expect(emailInput).toHaveValue('jane@test.com')
    expect(messageInput).toHaveValue('Hello!')
  })

  it('calls emailjs.send on form submission', async () => {
    mockSend.mockResolvedValueOnce({ status: 200, text: 'OK' })
    vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('John Doe')
    const emailInput = screen.getByPlaceholderText('john@example.com')
    const messageInput = screen.getByPlaceholderText('Tell me about your project...')

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane' } })
    fireEvent.change(emailInput, { target: { name: 'email', value: 'jane@test.com' } })
    fireEvent.change(messageInput, { target: { name: 'message', value: 'Test message' } })

    const form = nameInput.closest('form')!
    fireEvent.submit(form)

    expect(mockSend).toHaveBeenCalledWith(
      '',
      '',
      {
        from_name: 'Jane',
        to_name: 'Lilian',
        from_email: 'jane@test.com',
        to_email: 'contact.lprieu@gmail.com',
        message: 'Test message',
      },
      undefined,
    )
  })

  it('shows success alert and resets form after successful send', async () => {
    mockSend.mockResolvedValueOnce({ status: 200, text: 'OK' })
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('John Doe')

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane' } })
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { name: 'email', value: 'jane@test.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Tell me about your project...'), {
      target: { name: 'message', value: 'Test' },
    })

    const form = nameInput.closest('form')!
    fireEvent.submit(form)

    // Wait for promise resolution
    await vi.waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Thank you. I will get back to you as soon as possible.',
      )
    })

    // Form should be reset
    expect(nameInput).toHaveValue('')
  })

  it('shows error alert on failed send', async () => {
    mockSend.mockRejectedValueOnce(new Error('Network error'))
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('John Doe')

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane' } })
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { name: 'email', value: 'jane@test.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Tell me about your project...'), {
      target: { name: 'message', value: 'Test' },
    })

    const form = nameInput.closest('form')!
    fireEvent.submit(form)

    await vi.waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Something went wrong.')
    })
  })

  it('disables submit button while loading', () => {
    mockSend.mockReturnValueOnce(new Promise(() => {})) // Never resolves

    render(<Contact />)

    const nameInput = screen.getByPlaceholderText('John Doe')

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane' } })
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { name: 'email', value: 'jane@test.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Tell me about your project...'), {
      target: { name: 'message', value: 'Test' },
    })

    const form = nameInput.closest('form')!
    fireEvent.submit(form)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveTextContent('Sending...')
  })
})
