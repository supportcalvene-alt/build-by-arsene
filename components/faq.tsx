'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'A brand-new Starter Website is 900 AED and includes responsive design, 5 pages, WhatsApp integration, a contact form, and SEO setup. A full Website Redesign is 1000 AED. Larger or custom projects are quoted on request.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most websites go from brief to launch in just 1–2 days. Once we align on content and direction, we move fast without cutting corners on quality.',
  },
  {
    q: 'Do you redesign existing websites?',
    a: 'Absolutely. Our Redesign package modernizes your current site with a fresh UI, mobile optimization, and performance improvements — turning it into a real lead-generation tool.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Every site we build is fully responsive and mobile-optimized by default. Most of your customers browse on their phones, so we design for that experience first.',
  },
  {
    q: 'Do you provide SEO setup?',
    a: 'Yes. Every build includes foundational local SEO setup so your business can be found by the customers searching for you in your area across the UAE.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <Asterisk className="h-4 w-4" /> FAQ
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-5xl">
              Questions,
              <br />
              <span className="text-muted-foreground">answered</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Still unsure about something? Message us directly on WhatsApp and we&apos;ll
              get back to you fast.
            </p>
          </Reveal>

          <div className="flex flex-col">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <Reveal key={item.q} delay={i * 0.06}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-primary bg-primary text-primary-foreground'
                            : 'border-input text-foreground'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-6 text-sm leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
