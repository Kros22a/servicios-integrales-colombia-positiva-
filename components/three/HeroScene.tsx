'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

// ─── Torus Knot Principal ──────────────────────────────────────────────────
function CoreObject() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.4}>
        <torusKnotGeometry args={[1, 0.32, 200, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#C9A84C"
          emissive="#6B4A1A"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

// ─── Orbs Flotantes ────────────────────────────────────────────────────────
function FloatingOrbs() {
  const positions: [number, number, number][] = useMemo(() => [
    [-3.5,  1.5, -2],
    [ 3.0, -1.0, -3],
    [-2.5, -2.0, -1],
    [ 4.0,  2.5, -4],
    [-4.5,  0.5, -2],
    [ 2.5,  3.0, -3],
  ], [])

  return (
    <>
      {positions.map(([x, y, z], i) => (
        <Float key={i} speed={1 + i * 0.3} floatIntensity={0.5 + i * 0.1}>
          <mesh position={[x, y, z]} scale={0.15 + (i % 3) * 0.08}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#C9A84C' : '#1A6B3C'}
              emissive={i % 2 === 0 ? '#7A5A20' : '#0A3520'}
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
              wireframe={i % 3 === 0}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// ─── Grid / Plano de fondo ─────────────────────────────────────────────────
function GridPlane() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(state => {
    if (ref.current) {
      (ref.current.material as THREE.MeshStandardMaterial).opacity =
        0.06 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial
        color="#C9A84C"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  )
}

// ─── Anillos orbitales ─────────────────────────────────────────────────────
function OrbitalRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)

  useFrame(state => {
    const t = state.clock.elapsedTime
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3
      ring1.current.rotation.z = t * 0.1
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2
      ring2.current.rotation.y = t * 0.4
    }
  })

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#C9A84C" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.2, 0.008, 16, 100]} />
        <meshStandardMaterial color="#22A05A" transparent opacity={0.18} />
      </mesh>
    </>
  )
}

// ─── Escena completa exportada ─────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      {/* Luces */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}   color="#C9A84C" intensity={2} />
      <pointLight position={[-5, -3, -3]} color="#1A6B3C" intensity={1.5} />
      <pointLight position={[0, -5, 5]}   color="#4A9EFF" intensity={0.8} />

      {/* Entorno HDR para reflejos metálicos */}
      <Environment preset="city" />

      {/* Objetos */}
      <CoreObject />
      <FloatingOrbs />
      <OrbitalRings />
      <GridPlane />

      {/* Partículas doradas */}
      <Sparkles
        count={120}
        scale={10}
        size={0.6}
        speed={0.3}
        color="#C9A84C"
        opacity={0.6}
      />
    </Canvas>
  )
}
