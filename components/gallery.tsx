"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"

const galleryItems = [
  {
    titleKey: "gallery.1.title",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
  {
    titleKey: "gallery.2.title",
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
  },
  {
    titleKey: "gallery.3.title",
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
  },
  {
    titleKey: "gallery.4.title",
    before: "/images/before-4.jpg",
    after: "/images/after-4.jpg",
  },
]

export function Gallery() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section 
      id="galerie" 
      className="py-24 lg:py-32 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
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
              {t("gallery.label")}
            </span>
          </div>
          <h2 
            id="gallery-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
          >
            {t("gallery.title")}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  item,
  index,
  t,
}: {
  item: { titleKey: string; before: string; after: string }
  index: number
  t: (key: string) => string
}) {
  const [showAfter, setShowAfter] = useState(false)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <TiltCard>
        <div className="relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-md border border-border/50 group">
          {/* Image Container */}
          <div 
            className="relative aspect-[4/3] cursor-pointer"
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
          >
            {/* Before Image */}
            <Image
              src={item.before}
              alt={`${t(item.titleKey)} - ${t("gallery.before")}`}
              fill
              className={`object-cover transition-opacity duration-500 ${
                showAfter ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* After Image */}
            <Image
              src={item.after}
              alt={`${t(item.titleKey)} - ${t("gallery.after")}`}
              fill
              className={`object-cover transition-opacity duration-500 ${
                showAfter ? "opacity-100" : "opacity-0"
              }`}
            />
            
            {/* Overlay with Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Before/After Labels */}
            <div className="absolute top-4 left-4">
              <span 
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                  showAfter 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background/80 text-foreground backdrop-blur-sm"
                }`}
              >
                {showAfter ? t("gallery.after") : t("gallery.before")}
              </span>
            </div>

            {/* Hover instruction */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-foreground/80 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Hover to see result
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {t(item.titleKey)}
            </h3>
          </div>
        </div>
      </TiltCard>
    </div>
  )
}
