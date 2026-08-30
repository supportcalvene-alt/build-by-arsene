'use client'

import { motion } from 'framer-motion'
import { Check, ArrowUpRight, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const plans = [
  {
    name: 'Starter Website',
    price: '900',
    tagline: 'A brand-new premium site, ready to convert.',
    featured: true,
    features: [
      'Responsive Design',
      '5 Pages',
      'WhatsApp Integration',
      'Contact Form',
      'SEO Setup',
    ],
  },
  {
    name: 'Website Redesign',
    price: '1000',
    tagline: 'Modernize an existing site into a lead machine.',
    featured: false,
    features: [
      'Full Redesign',
      'Modern UI',
      'Mobile Optimization',
      'Performance Improvements',
      'SEO Refresh',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <Asterisk className="h-4 w-4" /> Pricing
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Premium work, <span className="text-muted-foreground">honest</span> pricing
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Transparent, fixed prices in AED. No hidden fees — just a premium website that
            makes your business impossible to ignore.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 md:p-10 ${
                plan.featured
                  ? 'border-primary/50 bg-gradient-to-br from-secondary/60 to-card red-glow'
                  : 'border-border bg-card'
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight">
                  {plan.price}
                </span>
                <span className="mb-1 text-lg font-semibold text-primary">AED</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform hover:scale-[1.02] ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-input text-foreground hover:bg-foreground/5'
                }`}
              >
                Start This Build
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
