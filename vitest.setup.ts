import '@testing-library/jest-dom/vitest'

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
