'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap, Sparkles, Smartphone, Search, MessageCircle, BadgeDollarSign, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  { icon: Zap, label: 'Fast Delivery', sub: 'Live in 1–2 days' },
  { icon: Sparkles, label: 'Premium Design', sub: 'Award-worthy craft' },
  { icon: Smartphone, label: 'Mobile Responsive', sub: 'Perfect on every screen' },
  { icon: Search, label: 'SEO Ready', sub: 'Built to be found' },
  { icon: MessageCircle, label: 'WhatsApp Integration', sub: 'Instant customer chat' },
  { icon: BadgeDollarSign, label: 'Affordable Pricing', sub: 'Premium, not overpriced' },
]

export function WhyChoose() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <Asterisk className="h-4 w-4" /> Why BUILD BY ARSENE
          </p>
          <h2 className="max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            We turn ideas into{' '}
            <span className="text-muted-foreground">digital experiences</span> that get{' '}
            <span className="text-primary text-glow">results.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border lg:min-h-full"
          >
            <Image
              src="/portrait-3.png"
              alt="Cinematic portrait representing premium creative direction"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-balance">
                Built to attract attention & generate leads.
              </p>
            </div>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                    {b.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
