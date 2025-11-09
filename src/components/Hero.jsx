import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PencilRuler, Smartphone, Code2, Cloud, Lightbulb } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const assemblyStages = [
  { icon: Lightbulb, label: 'Ideation' },
  { icon: PencilRuler, label: 'Design' },
  { icon: Smartphone, label: 'Prototype' },
  { icon: Code2, label: 'Build' },
  { icon: Cloud, label: 'Deploy' },
];

function StageChip({ Icon, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ x: '110%' }}
      animate={{ x: ['110%', '-10%'] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'linear', delay }}
      className="pointer-events-none mr-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 shadow-lg backdrop-blur"
    >
      <div className="rounded-md bg-black/40 p-1.5 shadow-inner">
        <Icon className="h-4 w-4 text-cyan-300" />
      </div>
      <span className="text-xs font-medium text-white/80">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background (cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - keep background visible and interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div
        className="pointer-events-none absolute -inset-x-40 -top-64 h-[40rem] rounded-full blur-3xl opacity-50"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(250,204,21,0.25), rgba(14,165,233,0.25), transparent 70%)',
        }}
      />
      {/* Soft vignette for focus */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_rgba(0,0,0,0.55)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Floating accent rings behind title */}
        <span className="pointer-events-none absolute top-36 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-400/10 via-cyan-400/10 to-purple-400/10 blur-2xl" />
        <span className="pointer-events-none absolute top-24 right-24 h-40 w-40 rounded-full bg-yellow-400/10 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          InnovX • Elite Product Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-5 max-w-5xl bg-gradient-to-br from-white via-yellow-100 to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Crafting Digital Innovation for the Real World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 max-w-3xl text-base text-white/85 md:text-lg"
        >
          Websites, Apps, IoT innovations & cloud-scale platforms — engineered with precision and cinematic 3D.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-cyan-500 px-6 py-3 text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-300/60">
            <Rocket className="h-5 w-5" /> Start a Project
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Services
          </button>
        </motion.div>

        {/* Micro-stats */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/70"
        >
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 backdrop-blur">
            <span className="font-semibold text-white">24+</span> Products Launched
          </div>
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 backdrop-blur">
            <span className="font-semibold text-white">0→1</span> Venture Partners
          </div>
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 backdrop-blur">
            <span className="font-semibold text-white">Global</span> Delivery
          </div>
        </motion.div>

        {/* Animated "App Assembly Line" */}
        <div className="mt-14 w-full max-w-5xl">
          <div className="mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm uppercase tracking-widest text-yellow-300/80">How an App Comes to Life</p>
              <div className="h-2 w-32 rounded-full bg-gradient-to-r from-yellow-400/70 via-amber-400/70 to-cyan-400/70 blur-sm" />
            </div>

            {/* Conveyor track */}
            <div className="relative h-28 w-full">
              <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 rounded-xl border border-white/10 bg-gradient-to-b from-black/25 to-black/50 shadow-inner" />
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-yellow-400/70 via-cyan-400/70 to-yellow-400/70 opacity-80" />

              {/* Row 1 */}
              <div className="absolute left-0 top-2 w-full">
                {assemblyStages.map((s, i) => (
                  <StageChip key={`r1-${s.label}`} Icon={s.icon} label={s.label} delay={i * 0.5} />
                ))}
              </div>
              {/* Row 2 (offset) */}
              <div className="absolute left-0 bottom-2 w-full">
                {assemblyStages.map((s, i) => (
                  <StageChip key={`r2-${s.label}`} Icon={s.icon} label={s.label} delay={i * 0.5 + 2.5} />
                ))}
              </div>

              {/* Pulsing nodes along the track */}
              <div className="pointer-events-none absolute left-1/4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-300/90 shadow-[0_0_28px_rgba(252,211,77,0.7)]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_28px_rgba(34,211,238,0.7)]" />
              <div className="pointer-events-none absolute left-3/4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-300/90 shadow-[0_0_28px_rgba(252,211,77,0.7)]" />
            </div>

            {/* Status bar */}
            <div className="mt-5 flex items-center justify-between text-xs text-white/70">
              <span>Pipeline • realtime</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
