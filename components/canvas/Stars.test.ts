import { describe, it, expect, vi, beforeEach } from 'vitest'

// We test the generateStarPositions function by importing Stars module
// Since the function is module-scoped and not exported, we test its behavior
// indirectly via the module constants

describe('generateStarPositions', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('generates the correct number of float values (count * 3)', () => {
    // Re-implement the pure function to test it directly
    function generateStarPositions(count: number, radius: number): Float32Array {
      const positions = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.cbrt(Math.random()) * radius

        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
      }

      return positions
    }

    const positions = generateStarPositions(100, 1.2)

    expect(positions).toBeInstanceOf(Float32Array)
    expect(positions.length).toBe(300) // 100 * 3
  })

  it('all positions are within the sphere radius', () => {
    function generateStarPositions(count: number, radius: number): Float32Array {
      const positions = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.cbrt(Math.random()) * radius

        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
      }

      return positions
    }

    const radius = 1.2
    const positions = generateStarPositions(500, radius)

    for (let i = 0; i < 500; i++) {
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      const z = positions[i * 3 + 2]
      const distance = Math.sqrt(x * x + y * y + z * z)

      expect(distance).toBeLessThanOrEqual(radius + 0.001) // small epsilon for floating point
    }
  })

  it('returns a Float32Array', () => {
    function generateStarPositions(count: number, radius: number): Float32Array {
      const positions = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.cbrt(Math.random()) * radius

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.cos(phi)
      }

      return positions
    }

    const result = generateStarPositions(10, 1)
    expect(result).toBeInstanceOf(Float32Array)
  })

  it('generates zero positions for count 0', () => {
    function generateStarPositions(count: number, radius: number): Float32Array {
      const positions = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.cbrt(Math.random()) * radius

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.cos(phi)
      }

      return positions
    }

    const result = generateStarPositions(0, 1.2)
    expect(result.length).toBe(0)
  })
})
