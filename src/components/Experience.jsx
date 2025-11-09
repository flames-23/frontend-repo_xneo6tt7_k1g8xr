import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Shield, Network, Server, Lock } from 'lucide-react';

const steps = [
  { title: 'Ideation', desc: 'Discover, define, and align on business goals.', icon: Cpu },
  { title: 'UI/UX Design', desc: 'Design systems, prototypes, and user flows.', icon: Network },
  { title: 'Development', desc: 'Web, mobile, IoT firmware, and backend APIs.', icon: Server },
  { title: 'Testing', desc: 'Automated, manual, and device lab validation.', icon: Shield },
  { title: 'Launch', desc: 'CI/CD, cloud, and observability baked-in.', icon: Lock },
  { title: 'Maintenance & Growth', desc: 'Iterate with analytics and A/B testing.', icon: Cpu },
];

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.7]);

  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,94,239,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-br from-white via-cyan-200 to-purple-300 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Our Process
          </h2>
          <p className="mt-3 text-white/70">Each step highlights as you scroll</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <motion.div style={{ opacity: glow }} className="absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-xl bg-black/40 p-3 shadow-xl">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                  <motion.div
                    whileInView={{ backgroundColor: 'rgb(59 130 246 / 0.8)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 h-1 w-16 rounded-full bg-white/10"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
