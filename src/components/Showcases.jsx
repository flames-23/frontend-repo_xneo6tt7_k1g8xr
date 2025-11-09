import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RadioTower, Smartphone, Monitor } from 'lucide-react';

export default function Showcases() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-slate-950 py-24 text-white">
      {/* IoT Innovation Showcase */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-br from-white via-cyan-200 to-purple-300 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
              IoT Innovation Network
            </h2>
            <p className="mt-4 text-white/70">
              Futuristic 3D render of IoT devices connected by holographic links—pulsing nodes and flowing data lines bring the network to life.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl" />
            <div className="relative grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.1 }}
                  className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner"
                />
              ))}
              <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 6 }}
                style={{
                  background: 'radial-gradient(circle at 20% 30%, rgba(34,211,238,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.25), transparent 40%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Cybersecurity Section */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative order-last md:order-first">
            <div className="absolute inset-0 -z-0 rounded-3xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-purple-500/20 blur-2xl" />
            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
              <motion.div
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
              />
              <ShieldCheck className="h-20 w-20 text-cyan-300" />
              <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{ backgroundPosition: ['0% 0%', '200% 200%'] }}
                transition={{ repeat: Infinity, duration: 8 }}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, rgba(34,211,238,0.05) 0 8px, transparent 8px 16px)',
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">Cybersecurity</h3>
            <p className="mt-3 text-white/70">
              Advanced Pentesting, Secure Code Audits, Real-World Vulnerability Defense. Animated cyber-grid with neon shield built from lines.
            </p>
          </div>
        </div>

        {/* Portfolio + Testimonials inline summary */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold md:text-4xl">Portfolio Highlights</h3>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory]">
              {[Monitor, Smartphone, RadioTower].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="scroll-snap-align-start min-w-[260px] rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <Icon className="h-8 w-8 text-cyan-300" />
                  <h4 className="mt-4 text-lg font-semibold">Case Study {idx + 1}</h4>
                  <p className="mt-2 text-sm text-white/70">Smooth carousel transitions and interactive previews.</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">Testimonials</h3>
            <div className="mt-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-[2px]">
                      <div className="h-full w-full rounded-full bg-black/70" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">“InnovX elevated our digital presence beyond expectations.”</p>
                      <p className="mt-1 text-xs text-white/50">Product Lead</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
