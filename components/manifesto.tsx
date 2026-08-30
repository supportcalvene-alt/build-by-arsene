'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const shots = [
  { src: '/portrait-1.png', alt: 'Editorial portrait with futuristic eyewear' },
  { src: '/portrait-2.png', alt: 'Abstract red light and shadow study' },
  { src: '/portrait-3.png', alt: 'Moody cinematic portrait' },
]

export function Manifesto() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-start gap-4">
          <Asterisk className="mt-2 h-7 w-7 shrink-0 text-primary" />
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-7xl">
              We build websites
              <br />
              that turn local brands{' '}
              <span className="text-primary text-glow">into</span>
              <br />
              <span className="text-muted-foreground">the obvious choice</span>
              <br />
              in their market.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              BUILD BY ARSENE designs premium websites that cut through the noise. We
              combine bold visual identity, sharp strategy, and conversion-focused
              structure — all in one build. From restaurants to real estate, we ship fast
              and make every business look like the market leader.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {shots.map((s, i) => (
              <motion.div
                key={s.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={s.src || '/placeholder.svg'}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 30vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-[10rem] text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground underline underline-offset-4">
          Our latest projects
        </p>
      </div>
    </section>
  )
}
