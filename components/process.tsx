'use client'

import { motion } from 'framer-motion'
import { Compass, PenTool, Code2, Rocket, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const steps = [
  {
    n: '01',
    title: 'Strategy',
    icon: Compass,
    desc: 'We learn your business, audience, and goals, then map the structure that converts.',
  },
  {
    n: '02',
    title: 'Design',
    icon: PenTool,
    desc: 'A premium, on-brand visual direction crafted to make you impossible to ignore.',
  },
  {
    n: '03',
    title: 'Build',
    icon: Code2,
    desc: 'Fast, responsive, and SEO-ready — engineered to perform on every device.',
  },
  {
    n: '04',
    title: 'Launch',
    icon: Rocket,
    desc: 'We ship, connect your domain, and hand over a site ready to generate leads.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <Asterisk className="h-4 w-4" /> How it works
              </p>
              <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                From brief to launch in{' '}
                <span className="text-primary text-glow">1–2 days</span>
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-4">
              <p className="font-display text-3xl font-extrabold text-primary">1–2</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Days delivery
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-extrabold text-muted/60">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-6 h-px w-full bg-border">
                <div className="h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
