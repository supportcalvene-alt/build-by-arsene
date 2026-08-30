'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Zap, TrendingUp } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section id="top" ref={ref} className="relative w-full px-2 pb-4 pt-2 sm:px-3 sm:pb-6 sm:pt-3">
      {/* Framed cinematic hero */}
      <div className="relative min-h-[94svh] w-full overflow-hidden rounded-[1.75rem] border border-border/70">
        {/* Background image with parallax */}
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
          <Image
            src="/hero-wide.png"
            alt="Cinematic portrait representing bold creative direction"
            fill
            priority
            className="object-cover object-[70%_center]"
          />
          {/* Legibility gradients biased to the left/bottom where text lives */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-background/40" />
        </motion.div>

        <div className="relative flex min-h-[94svh] flex-col justify-between p-5 sm:p-8 md:p-10 lg:p-12">
          {/* Top row: eyebrow labels */}
          <div className="flex items-start justify-between gap-6 pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-[13rem]"
            >
              <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
                Source of
                <br />
                bold ideas
                <span className="text-primary">/</span>
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                Where brands are reborn and businesses get remembered.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden max-w-[11rem] text-right text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block"
            >
              Premium web design
              <br />
              United Arab Emirates
            </motion.p>
          </div>

          {/* Center giant headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-display text-[16vw] font-extrabold uppercase leading-[0.86] tracking-tighter text-balance sm:text-[13vw] lg:text-[8.5rem]"
          >
            Premium
            <br />
            Website
            <br />
            <span className="text-primary text-glow">Design</span>
          </motion.h1>

          {/* Bottom row: description, CTA, floating stat cards */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
              {/* Stat card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="w-fit rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">Conversion lift</span>
                </div>
                <p className="mt-2 font-display text-5xl font-extrabold leading-none tracking-tight">
                  85%
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Avg. increase in qualified leads
                </p>
              </motion.div>

              {/* Reload-style info card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -4 }}
                className="w-fit max-w-xs rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Zap className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-sm font-bold uppercase tracking-tight">
                  Reload your brand
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  From strategy to launch in as little as 48 hours.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-start gap-4 lg:items-end"
            >
              <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground lg:text-right">
                Websites built to attract attention, generate leads, and make
                your business impossible to ignore.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-input bg-background/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/5"
                >
                  View Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
