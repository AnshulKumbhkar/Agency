"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView, type Variants } from 'framer-motion';
import TextReveal from './TextReveal';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <TorusKnot ref={meshRef} args={[1.5, 0.4, 128, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#7c3aed"
          envMapIntensity={1.2}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.05}
          distort={0.35}
          speed={2}
        />
      </TorusKnot>
    </Float>
  );
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.05 });
  const logos = ["LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 px-6 bg-[#080808]"
    >
      {/* Gradient orbs */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-violet-900/30 via-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-100px] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          frameloop={isInView ? "always" : "never"}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
          <pointLight position={[-6, -6, -4]} intensity={1.2} color="#ec4899" />
          <Environment preset="night" />
          <AbstractShape />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="section-tag mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,1)]" />
          ANSHUL KUMAAR & CO.
        </motion.div>

        {/* Headline with roll-up effect */}
        <div className="mb-8 text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tight leading-[1.05]">
          <div className="overflow-hidden mb-1">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pastel-text-gradient"
            >
              AI Websites, Agents &
            </motion.div>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pastel-text-gradient"
            >
              Automations
            </motion.div>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.41, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/90"
            >
              for Growing
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
              className="pastel-text-gradient"
            >
              Businesses
            </motion.div>
          </div>
        </div>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          We build modern websites with AI integrations, custom agents, chatbots, CRM automations, and workflow systems that help businesses move faster.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item}>
          <button className="relative glass-panel-dark text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-2xl group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="flex -space-x-3 mr-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full object-cover bg-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" className="w-full h-full object-cover bg-white" />
              </div>
            </div>
            <span className="relative z-10">Work with Us</span>
          </button>
        </motion.div>

        {/* Infinite Logo Marquee */}
        <motion.div
          variants={item}
          className="w-full mt-24 relative overflow-hidden whitespace-nowrap"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: [0, -600] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="inline-flex gap-16 pr-16"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 text-white/20">
                <span className="text-white/10">✦</span> {logo}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
