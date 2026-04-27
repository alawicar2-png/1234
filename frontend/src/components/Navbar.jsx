import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/41762944702';

export const Navbar = () => {
  const { t, lang, setLang, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      data-testid="main-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand */}
          <a
            href="#top"
            data-testid="nav-brand"
            className="group flex items-center gap-3"
          >
            <div className="relative h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center overflow-hidden">
              <span className="font-heading font-black text-gold text-sm">A</span>
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors" />
            </div>
            <div className="leading-none">
              <div className="font-heading font-bold tracking-tight text-base md:text-lg text-white">
                ALAWI <span className="text-gold-gradient">CARS</span>
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40 mt-1">
                Swiss Detailing
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`nav-link-${item.id}`}
                className="text-sm tracking-wide text-white/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language switcher (text only) */}
            <div
              data-testid="language-switcher"
              className="hidden md:flex items-center gap-1 text-xs tracking-[0.25em] font-medium"
            >
              {languages.map((l, i) => (
                <React.Fragment key={l.code}>
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    data-testid={`lang-${l.code}`}
                    className={`px-1.5 py-1 transition-colors ${
                      lang === l.code
                        ? 'text-gold'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </button>
                  {i < languages.length - 1 && (
                    <span className="text-white/15">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="nav-whatsapp-cta"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/5 hover:bg-gold hover:text-onyx text-gold text-xs tracking-[0.2em] uppercase font-medium transition-all duration-500"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t.nav.bookNow}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              data-testid="mobile-menu-toggle"
              className="lg:hidden h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${item.id}`}
                  className="text-2xl font-heading font-semibold text-white hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center gap-1 text-xs tracking-[0.25em] pt-4 border-t border-white/10">
                {languages.map((l, i) => (
                  <React.Fragment key={l.code}>
                    <button
                      type="button"
                      onClick={() => setLang(l.code)}
                      data-testid={`mobile-lang-${l.code}`}
                      className={`px-2 py-1 transition-colors ${
                        lang === l.code ? 'text-gold' : 'text-white/40'
                      }`}
                    >
                      {l.label}
                    </button>
                    {i < languages.length - 1 && (
                      <span className="text-white/15">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="mobile-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs tracking-[0.2em] uppercase font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                {t.nav.bookNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
