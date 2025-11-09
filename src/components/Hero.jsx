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
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
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
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl bg-gradient-to-br from-white via-cyan-200 to-purple-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Crafting Digital Innovation for the Real World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 max-w-3xl text-base text-white/80 md:text-lg"
        >
          Websites, Apps, IoT Innovations & Cybersecurity — engineered with precision and playful 3D.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-transform hover:scale-[1.02] hover:shadow-cyan-500/30">
            <Rocket className="h-5 w-5" /> Start a Project
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Services
          </button>
        </motion.div>

        {/* Animated "App Assembly Line" replacing the old flow grid */}
        <div className="mt-14 w-full max-w-5xl">
          <div className="mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm uppercase tracking-widest text-cyan-200/80">How an App Comes to Life</p>
              <div className="h-2 w-32 rounded-full bg-gradient-to-r from-cyan-400/60 to-purple-500/60 blur-sm" />
            </div>

            {/* Conveyor track */}
            <div className="relative h-28 w-full">
              <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 rounded-xl border border-white/10 bg-gradient-to-b from-black/20 to-black/40 shadow-inner" />
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-cyan-500/60 via-purple-500/60 to-cyan-500/60 opacity-70" />

              {/* Row 1 */}
              <div className="absolute left-0 top-2 w-full">
                {assemblyStages.map((s, i) => (
                  <StageChip key={`r1-${s.label}`} Icon={s.icon} label={s.label} delay={i * 0.5} />
                ))}
              </div>
              {/* Row 2 (offset + mirrored speed) */}
              <div className="absolute left-0 bottom-2 w-full">
                {assemblyStages.map((s, i) => (
                  <StageChip key={`r2-${s.label}`} Icon={s.icon} label={s.label} delay={i * 0.5 + 2.5} />
                ))}
              </div>

              {/* Pulsing nodes along the track */}
              <div className="pointer-events-none absolute left-1/4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-500/80 shadow-[0_0_24px_rgba(168,85,247,0.6)]" />
              <div className="pointer-events-none absolute left-3/4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
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
