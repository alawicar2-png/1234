import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="main-footer"
      className="relative border-t border-white/[0.06] bg-onyx pt-16 pb-10"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center">
                <span className="font-heading font-black text-gold">A</span>
              </div>
              <div className="font-heading font-bold text-xl">
                ALAWI <span className="text-gold-gradient">CARS</span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed font-light max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              {t.footer.contact}
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/41762944702"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  +41 76 294 47 02
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alawicars.ch"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  info@alawicars.ch
                </a>
              </li>
              <li className="text-white/55">{t.footer.hours}</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              {t.footer.location}
            </div>
            <ul className="space-y-3 text-sm">
              <li className="text-white/80">{t.footer.switzerland}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="text-xs text-white/40">
            © {year} Alawi Cars. {t.footer.rights}
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/30">
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
