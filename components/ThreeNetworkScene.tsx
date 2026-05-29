"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function PulseNode({ position, highlight }: { position: THREE.Vector3; highlight: boolean }) {
  const mesh = useRef<Mesh>(null);
  const reduceMotion = useReducedMotion();

  useFrame((state) => {
    if (!mesh.current || reduceMotion) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2.2 + position.x) * 0.18;
    mesh.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[highlight ? 0.09 : 0.055, 16, 16]} />
      <meshStandardMaterial color={highlight ? "#ef4444" : "#f8fafc"} emissive={highlight ? "#7f1d1d" : "#18181b"} emissiveIntensity={1.6} />
    </mesh>
  );
}

function LivingSystem() {
  const root = useRef<Group>(null);
  const reduceMotion = useReducedMotion();

  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const ring = index % 3;
        const angle = (index / 18) * Math.PI * 2;
        return new THREE.Vector3(
          Math.cos(angle) * (1.6 + ring * 0.75),
          Math.sin(index * 1.37) * 0.55,
          Math.sin(angle) * (1.25 + ring * 0.55)
        );
      }),
    []
  );

  useFrame((state) => {
    if (!root.current || reduceMotion) return;
    root.current.rotation.y = state.clock.elapsedTime * 0.16 + state.pointer.x * 0.25;
    root.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08 + state.pointer.y * 0.1;
  });

  return (
    <group ref={root}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 96]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.35, 0.01, 12, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[0.85, 0.3, 0.2]}>
        <octahedronGeometry args={[0.78, 1]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.5} />
      </mesh>
      {nodes.map((node, index) => {
        const linked = nodes[(index + 4) % nodes.length];
        return (
          <group key={index}>
            <Line points={[node, linked]} color="#ffffff" transparent opacity={0.18} lineWidth={1} />
            <PulseNode position={node} highlight={index % 4 === 0} />
          </group>
        );
      })}
    </group>
  );
}

export default function ThreeNetworkScene() {
  return (
    <Canvas camera={{ position: [0, 0.15, 5.4], fov: 46 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 4]} intensity={2.8} />
      <pointLight position={[-3, 2, 2]} intensity={6} color="#ef4444" />
      <LivingSystem />
    </Canvas>
  );
}
