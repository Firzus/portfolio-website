'use client'

// Core
import { Suspense, useMemo, useRef } from 'react'
import type { Group } from 'three'
import type { ThreeElements } from '@react-three/fiber'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

type GroupProps = ThreeElements['group']

const Stars = (props: GroupProps) => {
  const groupRef = useRef<Group>(null)
  const positions = useMemo(() => {
    const count = 4000
    const positions = new Float32Array(count * 3)
    const radius = 1.2

    // Generate random positions in a sphere manually
    for (let i = 0; i < count; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = Math.cbrt(Math.random()) * radius

      // Convert to Cartesian coordinates
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 20
      groupRef.current.rotation.y -= delta / 25
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#bd34fe"
          size={0.0015}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
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
