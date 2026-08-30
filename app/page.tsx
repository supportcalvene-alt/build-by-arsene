import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Manifesto } from '@/components/manifesto'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Process } from '@/components/process'
import { WhyChoose } from '@/components/why-choose'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Manifesto />
      <Services />
      <Work />
      <Process />
      <WhyChoose />
      <Pricing />
      <Faq />
      <Contact />
      <WhatsappFloat />
    </main>
  )
}
