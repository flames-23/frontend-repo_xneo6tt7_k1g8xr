import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, PencilRuler, Smartphone, Code2, Cloud, Lightbulb } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const steps = [
  { icon: Lightbulb, label: 'Ideation' },
  { icon: PencilRuler, label: 'UI Sketches' },
  { icon: Smartphone, label: '3D Screens' },
  { icon: Code2, label: 'Coding' },
  { icon: Cloud, label: 'Deploy' },
  { icon: Smartphone, label: 'Final App' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - pointer events disabled so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div
        className="pointer-events-none absolute -inset-x-40 -top-64 h-[40rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,180,255,0.35), rgba(112,0,255,0.25), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur md:mb-8"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-sm tracking-wide text-cyan-100/90">InnovX — Crafting Digital Innovation for the Real World</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-4xl bg-gradient-to-br from-white via-cyan-200 to-purple-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          InnovX — Building the Future, One Pixel at a Time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-3xl text-base text-white/80 md:text-lg"
        >
          Websites, Apps, IoT Innovations & Cybersecurity — Engineered for Excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-transform hover:scale-[1.02] hover:shadow-cyan-500/30">
            <Rocket className="h-5 w-5" /> Start a Project
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Services
          </button>
        </motion.div>

        {/* Animated flow: How an App is Created */}
        <div className="mt-12 w-full max-w-5xl">
          <div className="mx-auto w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-200/80">How an App is Created</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4 text-center shadow-inner"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 2 + idx * 0.1, ease: 'easeInOut' }}
                      className="mb-2 rounded-lg bg-black/40 p-2 shadow-lg"
                    >
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </motion.div>
                    <span className="text-xs text-white/80">{step.label}</span>
                    {idx < steps.length - 1 && (
                      <div className="absolute right-[-10px] top-1/2 hidden h-0.5 w-5 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 md:block" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
