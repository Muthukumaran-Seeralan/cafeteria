"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import type * as THREE from "three"

function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} scale={1.4} position={[0, -0.3, 0]}>
        {/* Saucer */}
        <mesh position={[0, -0.85, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.3, 0.08, 64]} />
          <meshStandardMaterial color="#e8ddd0" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, -0.78, 0]}>
          <cylinderGeometry args={[0.88, 1.1, 0.06, 64]} />
          <meshStandardMaterial color="#f0e8dc" roughness={0.2} metalness={0.05} />
        </mesh>

        {/* Cup outer */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.7, 0.55, 1.0, 64]} />
          <meshStandardMaterial color="#e8ddd0" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Cup inner (dark coffee) */}
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.06, 64]} />
          <meshStandardMaterial color="#3d1c0a" roughness={0.1} metalness={0.3} />
        </mesh>

        {/* Crema layer */}
        <mesh position={[0, 0.31, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 0.02, 64]} />
          <meshStandardMaterial color="#c8956b" roughness={0.4} metalness={0.05} />
        </mesh>

        {/* Handle */}
        <mesh position={[0.85, -0.15, 0]} rotation={[0, 0, 0.1]}>
          <torusGeometry args={[0.22, 0.06, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#e8ddd0" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Steam particles */}
        {[...Array(3)].map((_, i) => (
          <SteamParticle key={i} delay={i * 0.7} offsetX={(i - 1) * 0.15} />
        ))}
      </group>
    </Float>
  )
}

function SteamParticle({ delay, offsetX }: { delay: number; offsetX: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = ((state.clock.elapsedTime + delay) % 3) / 3
    ref.current.position.y = 0.5 + t * 1.5
    ref.current.position.x = offsetX + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.08
    const material = ref.current.material as THREE.MeshStandardMaterial
    material.opacity = Math.sin(t * Math.PI) * 0.15
    ref.current.scale.setScalar(0.5 + t * 0.8)
  })

  return (
    <mesh ref={ref} position={[offsetX, 0.5, 0]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
    </mesh>
  )
}

export function CoffeeCupScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffe8cc" />
        <directionalLight position={[-3, 3, -2]} intensity={0.4} color="#ffd4a6" />
        <pointLight position={[0, 2, 2]} intensity={0.6} color="#c8a97e" />
        <Environment preset="studio" />
        <CoffeeCup />
      </Canvas>
    </div>
  )
}
