'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, ArrowUpRight, Asterisk } from 'lucide-react'
import { Reveal } from './reveal'

const WHATSAPP = 'https://wa.me/971551229776'
const EMAIL = '1of1arsene@gmail.com'
const PHONE = '+971551229776'

export function Contact() {
  return (
    <section id="contact" className="relative bg-background pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <Image
            src="/contact.png"
            alt="Cinematic portrait representing bold creative direction"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

          <div className="relative flex flex-col gap-10 p-8 md:p-14 lg:p-20">
            <Reveal>
              <p className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <Asterisk className="h-4 w-4" /> Start a project
              </p>
              <h2 className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Let&apos;s build something{' '}
                <span className="text-primary text-glow">impossible to ignore.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Tell us about your business and we&apos;ll get back to you fast. Premium
                websites, delivered in days — not months.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </motion.a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-input px-8 py-4 text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/5"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="truncate text-sm font-semibold">{EMAIL}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Phone / WhatsApp
                  </p>
                  <p className="truncate text-sm font-semibold">{PHONE}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl px-5 pb-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-border pt-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-black text-primary-foreground">
              A
            </span>
            <span className="font-display text-sm font-extrabold uppercase leading-none tracking-tight">
              Build by Arsene
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Build by Arsene · UAE
          </p>
        </div>
      </footer>
    </section>
  )
}
