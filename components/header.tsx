"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const languages = ["DE", "EN", "FR", "IT"] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t("nav.services"), href: "#dienstleistungen" },
    { label: t("nav.about"), href: "#ueber-uns" },
    { label: t("nav.gallery"), href: "#galerie" },
    { label: t("nav.contact"), href: "#kontakt" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://www.alawicars.ch" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.jpeg"
              alt="Alawi Cars Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                <span className="text-foreground">ALAWI</span>
                <span className="text-primary">CARS</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                {t("nav.tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 text-sm">
              {languages.map((lang, index) => (
                <span key={lang} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang)}
                    className={`px-1.5 py-1 transition-colors ${
                      language === lang
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                  {index < languages.length - 1 && (
                    <span className="text-muted-foreground/30 mx-0.5">|</span>
                  )}
                </span>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
            >
              <a href="https://wa.me/41762944702" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                {t("nav.cta")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-6 border-t border-border/50 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full mt-2"
            >
              <a href="https://wa.me/41762944702" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                {t("nav.cta")}
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
