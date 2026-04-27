"use client"

import { Sparkles, Droplets, Wrench, Shield, Car, Truck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"

const serviceIcons = [Sparkles, Droplets, Shield, Car, Wrench, Truck]

export function Services() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 })

  const services = [
    {
      icon: serviceIcons[0],
      titleKey: "services.1.title",
      descriptionKey: "services.1.description",
    },
    {
      icon: serviceIcons[1],
      titleKey: "services.2.title",
      descriptionKey: "services.2.description",
    },
    {
      icon: serviceIcons[2],
      titleKey: "services.3.title",
      descriptionKey: "services.3.description",
    },
    {
      icon: serviceIcons[3],
      titleKey: "services.4.title",
      descriptionKey: "services.4.description",
    },
    {
      icon: serviceIcons[4],
      titleKey: "services.5.title",
      descriptionKey: "services.5.description",
    },
    {
      icon: serviceIcons[5],
      titleKey: "services.6.title",
      descriptionKey: "services.6.description",
    },
  ]

  return (
    <section id="dienstleistungen" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm tracking-[0.2em] text-primary uppercase">
              {t("services.label")}
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ 
  service, 
  index, 
  t 
}: { 
  service: { icon: typeof Sparkles; titleKey: string; descriptionKey: string }
  index: number
  t: (key: string) => string
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <TiltCard className="h-full">
        {/* Glassmorphism Card */}
        <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t(service.titleKey)}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(service.descriptionKey)}
            </p>
          </div>
        </div>
      </TiltCard>
    </div>
  )
}
