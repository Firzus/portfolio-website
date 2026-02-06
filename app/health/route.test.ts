import { describe, it, expect, vi, beforeEach } from 'vitest'

import { GET } from './route'

describe('GET /health', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('returns 200 status', async () => {
    const response = await GET()

    expect(response.status).toBe(200)
  })

  it('returns JSON with status "ok"', async () => {
    const response = await GET()
    const body = await response.json()

    expect(body.status).toBe('ok')
  })

  it('returns a valid ISO timestamp', async () => {
    const fixedDate = new Date('2026-01-15T10:30:00.000Z')
    vi.setSystemTime(fixedDate)

    const response = await GET()
    const body = await response.json()

    expect(body.timestamp).toBe('2026-01-15T10:30:00.000Z')

    vi.useRealTimers()
  })

  it('returns correct content-type header', async () => {
    const response = await GET()
    const contentType = response.headers.get('content-type')

    expect(contentType).toContain('application/json')
  })
})
