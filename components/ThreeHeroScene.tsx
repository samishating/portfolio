"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, MeshTransmissionMaterial, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Group, Mesh, Texture } from "three";
import * as THREE from "three";

function CoreDevice() {
  const mesh = useRef<Mesh>(null);
  const reduceMotion = useReducedMotion();
  const [portraitTexture, setPortraitTexture] = useState<Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      "/profile/myimage.png",
      (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        loadedTexture.anisotropy = 8;
        setPortraitTexture(loadedTexture);
      },
      undefined,
      () => setPortraitTexture(null)
    );

    return () => texture.dispose();
  }, []);

  useFrame((state) => {
    if (!mesh.current || reduceMotion) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.22;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.24;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh}>
        <boxGeometry args={[1.9, 1.9, 1.9, 8, 8, 8]} />
        {portraitTexture ? (
          <meshStandardMaterial map={portraitTexture} roughness={0.36} metalness={0.12} />
        ) : (
          <MeshTransmissionMaterial
            color="#e0f2fe"
            transmission={0.28}
            thickness={0.25}
            roughness={0.36}
            metalness={0.12}
            chromaticAberration={0.035}
            anisotropy={0.12}
          />
        )}
      </mesh>
      <mesh scale={1.08}>
        <boxGeometry args={[1.9, 1.9, 1.9, 1, 1, 1]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.22} />
      </mesh>
    </Float>
  );
}

function Network() {
  const group = useRef<Group>(null);
  const reduceMotion = useReducedMotion();
  const { nodes, lines } = useMemo(() => {
    const points = Array.from({ length: 34 }, (_, index) => {
      const angle = index * 1.75;
      const radius = 2.2 + ((index % 7) * 0.23);
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(index * 0.9) * 1.4,
        Math.sin(angle) * radius
      );
    });

    const connectors = points
      .map((point, index) => [point, points[(index + 5) % points.length]] as [THREE.Vector3, THREE.Vector3])
      .filter((_, index) => index % 2 === 0);

    return { nodes: points, lines: connectors };
  }, []);

  useFrame((state) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
    group.current.rotation.x = Math.sin(state.pointer.y) * 0.08;
    group.current.position.x = state.pointer.x * 0.28;
  });

  return (
    <group ref={group}>
      {lines.map(([start, end], index) => (
        <Line key={index} points={[start, end]} color="#38bdf8" transparent opacity={0.2} lineWidth={1} />
      ))}
      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry args={[index % 5 === 0 ? 0.045 : 0.026, 12, 12]} />
          <meshBasicMaterial color={index % 5 === 0 ? "#f8fafc" : "#38bdf8"} transparent opacity={0.78} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeHeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.2, 7], fov: 48 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.75} />
      <pointLight position={[4, 3, 4]} intensity={7} color="#38bdf8" />
      <pointLight position={[0, 4, 2]} intensity={2.4} color="#10b981" />
      <pointLight position={[-3, -2, -4]} intensity={4} color="#ffffff" />
      <Stars radius={40} depth={18} count={650} factor={3.4} saturation={0} fade speed={0.25} />
      <Network />
      <CoreDevice />
    </Canvas>
  );
}
