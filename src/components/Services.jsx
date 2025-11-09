import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Smartphone, ScanLine, Shield, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    desc: 'Premium, fast, and SEO-ready websites with world-class UI.',
    icon: MonitorSmartphone,
    gradient: 'from-cyan-500/30 to-purple-500/30',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS & Android apps with silky interactions and performance.',
    icon: Smartphone,
    gradient: 'from-purple-500/30 to-blue-500/30',
  },
  {
    title: 'IoT Innovations',
    desc: 'Connected devices and edge intelligence that feel like magic.',
    icon: Cpu,
    gradient: 'from-emerald-500/30 to-cyan-500/30',
  },
  {
    title: 'Cybersecurity Testing',
    desc: 'Advanced pentesting, audits, and real-world defense.',
    icon: Shield,
    gradient: 'from-red-500/30 to-pink-500/30',
  },
  {
    title: 'Cloud Solutions',
    desc: 'Scalable cloud-native architectures built for growth.',
    icon: Cloud,
    gradient: 'from-sky-500/30 to-indigo-500/30',
  },
  {
    title: 'AI-Powered Services',
    desc: 'Intelligent automations and data-driven experiences.',
    icon: ScanLine,
    gradient: 'from-fuchsia-500/30 to-cyan-500/30',
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-br from-white via-cyan-200 to-purple-300 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Services Engineered for Excellence
          </h2>
          <p className="mt-4 text-white/70">3D floating cards with micro-interactions</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: 'spring', stiffness: 120, damping: 15 }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl`} />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + idx * 0.2, ease: 'easeInOut' }}
                  className="relative mb-4 inline-flex rounded-xl bg-black/40 p-3 shadow-xl"
                >
                  <Icon className="h-6 w-6 text-cyan-300" />
                </motion.div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>

                {/* Icon morph mini animation line */}
                <motion.div
                  className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
