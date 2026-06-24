"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Abstract glowing shapes moving slowly in the background
function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial 
          color="#8b5cf6" 
          envMapIntensity={0.5} 
          clearcoat={0.8} 
          clearcoatRoughness={0} 
          metalness={0.8} 
          roughness={0.2}
          distort={0.4}
          speed={2}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

function SmallShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={1} position={[3, 2, -2]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.8} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3} position={[-4, -1, -3]}>
        <mesh>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial color="#c084fc" roughness={0.2} metalness={0.9} />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, opacity: 0.7 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
        <spotLight position={[0, 5, 5]} intensity={2} color="#8b5cf6" />
        
        <AnimatedShape />
        <SmallShapes />
      </Canvas>
    </div>
  );
}
