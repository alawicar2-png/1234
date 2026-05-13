"use client"

import Image from "next/image"
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactCTA() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const contactMethods = [
    {
      icon: MessageCircle,
      labelKey: "cta.whatsapp",
      value: "+41 76 294 47 02",
      href: "https://wa.me/41762944702"
    },
    {
      icon: Phone,
      labelKey: "cta.phone",
      value: "+41 76 294 47 02",
      href: "tel:+41762944702"
    },
    {
      icon: Mail,
      labelKey: "cta.email",
      value: "info@alawicars.ch",
      href: "mailto:info@alawicars.ch"
    },
    {
      icon: MapPin,
      labelKey: "cta.location",
      value: "Mobiler Service in der ganzen Schweiz",
      href: "#"
    }
  ]

  return (
    <section 
      id="kontakt" 
      className="py-24 lg:py-32 bg-secondary/30 overflow-hidden"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm tracking-[0.2em] text-primary uppercase">
                {t("cta.label")}
              </span>
            </div>
            <h2 
              id="contact-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
            >
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
              {t("cta.text")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <a href="https://wa.me/41762944702" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("cta.button")}
              </a>
            </Button>
          </div>

          {/* Right - Contact Card */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}>
            <div className="bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 p-8 lg:p-10">
              {/* Company Info */}
              <div className="flex items-center gap-4 pb-8 border-b border-border/50" itemScope itemType="https://schema.org/Organization">
                <Image
                  src="/images/alawi-cars-logo.png"
                  alt="Alawi Cars Logo"
                  width={56}
                  height={56}
                  className="w-14 h-auto object-contain"
                  style={{ height: 'auto' }}
                  itemProp="logo"
                />
                <div>
                  <div className="font-semibold text-foreground text-lg" itemProp="name">Alawi Cars</div>
                  <div className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                    Exklusive Fahrzeugpflege & Autoservice
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="divide-y divide-border/50">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 py-6 group hover:bg-primary/5 -mx-4 px-4 transition-colors rounded-lg"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-1">
                        {t(method.labelKey)}
                      </div>
                      <div className="text-foreground font-medium">
                        {method.value}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
