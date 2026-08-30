'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const projects = [
  {
    title: 'Restaurant Website',
    cat: 'Hospitality · Menu + Reservations',
    img: '/work-restaurant.png',
    span: 'lg:col-span-7',
  },
  {
    title: 'Barbershop Website',
    cat: 'Grooming · Online Booking',
    img: '/work-barbershop.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'Cleaning Company Website',
    cat: 'Services · Lead Generation',
    img: '/work-cleaning.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'Real Estate Website',
    cat: 'Property · Listings + Enquiries',
    img: '/work-realestate.png',
    span: 'lg:col-span-7',
  },
]

export function Work() {
  return (
    <section id="work" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <Asterisk className="h-4 w-4" /> Selected work
              </p>
              <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                We turn ideas into visual{' '}
                <span className="text-muted-foreground">statements</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A glimpse at recent builds for local businesses — from vision to delivery,
              impact that lasts.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[16/11] overflow-hidden rounded-3xl border border-border ${p.span}`}
            >
              <Image
                src={p.img || '/placeholder.svg'}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-primary">
                    {p.cat}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <span className="flex h-12 w-12 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-background/40 text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
