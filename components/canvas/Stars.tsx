'use client'

// Core
import { Suspense, useRef } from 'react'
import type { Group } from 'three'
import type { ThreeElements } from '@react-three/fiber'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

type GroupProps = ThreeElements['group']

const STAR_COUNT = 3000
const SPHERE_RADIUS = 1.2

// Generate star positions at module level (pure, computed once)
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

const starPositions = generateStarPositions(STAR_COUNT, SPHERE_RADIUS)

const Stars = (props: GroupProps) => {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 25
      groupRef.current.rotation.y -= delta / 30
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points positions={starPositions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#e8a849"
          size={0.0012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
