import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-12 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold">InnovX</h4>
          <p className="mt-1 text-sm text-white/60">Crafting Digital Innovation for the Real World</p>
        </div>
        <div className="text-sm text-white/60">© {new Date().getFullYear()} InnovX. All rights reserved.</div>
      </div>
    </footer>
  );
}
