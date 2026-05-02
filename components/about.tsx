"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="ueber-uns" className="py-24 lg:py-32 overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div 
            className={`relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <Image
              src="/images/porsche-detail.jpg"
              alt="Porsche im Detailing Studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            {/* Floating accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-card/80 backdrop-blur-md border border-border/50">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Luxus ist bei uns kein Extra, sondern unser Standard.&rdquo;
              </p>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`lg:py-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm tracking-[0.2em] text-primary uppercase">
                {t("about.label")}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight text-balance">
              {t("about.title")}
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                {t("about.text")}
              </p>
            </div>

            {/* Stats - Removed "Jahre Erfahrung" as requested */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
              <div className={`transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{t("about.stat1.value")}</div>
                <div className="text-sm text-muted-foreground">{t("about.stat1.label")}</div>
              </div>
              <div className={`transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{t("about.stat2.value")}</div>
                <div className="text-sm text-muted-foreground">{t("about.stat2.label")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
