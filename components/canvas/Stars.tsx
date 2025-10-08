"use client";

// Core
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import type { ThreeElements } from "@react-three/fiber";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";

type GroupProps = ThreeElements["group"];

const Stars = (props: GroupProps) => {
  const groupRef = useRef<Group>(null);
  const positions = useMemo(
    () => inSphere(new Float32Array(6000), { radius: 1.2 }) as Float32Array,
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
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
  );
};

export default StarsCanvas;
