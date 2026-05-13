"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Calendar, ChevronDown } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section 
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxuriöses Fahrzeug"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        {/* Subtle animated grain texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
        {/* Badge - Fade in from top */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm mb-8 animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs tracking-[0.2em] text-primary uppercase">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline - Slide in from left */}
        <h1 
          id="hero-heading"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
          itemProp="name"
        >
          <span className="text-foreground">Alawi</span>
          <span className="text-primary ml-4">Cars</span>
        </h1>

        {/* Subheadline - Fade in */}
        <div 
          className="max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {t("hero.subtitle")}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-primary">
            {t("hero.subtitle2")}
          </p>
        </div>

        {/* Description */}
        <p 
          className="max-w-lg text-muted-foreground mt-8 text-lg leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
          itemProp="description"
        >
          {t("hero.description")}
        </p>
        {/* Hidden local SEO text */}
        <meta itemProp="areaServed" content="Switzerland, Zürich, Winterthur, 50km radius" />
        <meta itemProp="serviceType" content="Car Detailing, Fahrzeugpflege, Mobile Car Wash, Oil Change, Brake Service, Tire Service, Car Transport" />

        {/* CTA Button */}
        <div 
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium"
          >
            <a href="https://wa.me/41762944702" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              {t("hero.cta")}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs tracking-widest uppercase">{t("hero.scroll")}</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  )
}
