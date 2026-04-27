"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide">
                  <span className="text-foreground">ALAWI</span>
                  <span className="text-primary">CARS</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+41762944702" className="text-foreground hover:text-primary transition-colors">
                  +41 76 294 47 02
                </a>
              </li>
              <li>
                <a href="mailto:info@alawicars.ch" className="text-foreground hover:text-primary transition-colors">
                  info@alawicars.ch
                </a>
              </li>
              <li className="text-muted-foreground">
                {t("footer.appointment")}
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              {t("footer.location")}
            </h3>
            <p className="text-sm text-foreground">
              Schweiz
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 mt-12 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © 2026 Alawi Cars. {t("footer.copyright")}
          </p>
          <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase">
            {t("footer.swiss")}
          </p>
        </div>
      </div>
    </footer>
  )
}
