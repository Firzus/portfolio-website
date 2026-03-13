import '@testing-library/jest-dom/vitest'

// Set test env vars for Zod validation (env.ts)
process.env.NEXT_PUBLIC_SITE_URL = 'https://test.example.com'

// Mock IntersectionObserver (used by framer-motion whileInView)
class MockIntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
