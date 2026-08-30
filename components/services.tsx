'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    n: '01',
    title: 'Website Design',
    price: '900 AED',
    desc: 'A bespoke, high-converting site built around your brand and your customers.',
    img: '/service-design.png',
    tag: 'Signature Build',
  },
  {
    n: '02',
    title: 'Website Redesign',
    price: '1000 AED',
    desc: 'Transform a dated site into a modern, fast, lead-generating machine.',
    img: '/service-redesign.png',
    tag: 'Full Refresh',
  },
  {
    n: '03',
    title: 'Landing Pages',
    price: 'On request',
    desc: 'Single-purpose pages engineered to capture leads and drive one action.',
    img: '/service-landing.png',
    tag: 'Conversion',
  },
  {
    n: '04',
    title: 'Business Websites',
    price: 'On request',
    desc: 'Credibility-first sites that make established businesses look unmissable.',
    img: '/service-business.png',
    tag: 'Corporate',
  },
  {
    n: '05',
    title: 'Restaurant Websites',
    price: 'On request',
    desc: 'Mouth-watering menus, reservations, and location — built to fill tables.',
    img: '/service-restaurant.png',
    tag: 'Hospitality',
  },
  {
    n: '06',
    title: 'Barbershop Websites',
    price: 'On request',
    desc: 'Sharp booking-ready sites that keep the chair full all week long.',
    img: '/service-barbershop.png',
    tag: 'Grooming',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <Asterisk className="h-4 w-4" /> What we do
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Everything your <span className="text-muted-foreground">brand</span> needs to
            grow
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            From strategy to launch, we design premium digital systems that grow with your
            business — built to cut through noise and deliver real results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img || '/placeholder.svg'}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground backdrop-blur-md">
                  {s.tag}
                </span>
                <span className="absolute right-4 top-4 font-display text-sm font-bold text-primary">
                  {s.n}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {s.price}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary"
                >
                  Start this build
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
