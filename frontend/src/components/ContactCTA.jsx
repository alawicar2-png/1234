import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/41762944702';
const PHONE = '+41 76 294 47 02';
const PHONE_TEL = 'tel:+41762944702';
const EMAIL = 'info@alawicars.ch';
const EMAIL_HREF = 'mailto:info@alawicars.ch';

export const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-32 md:py-40 bg-onyx overflow-hidden"
    >
      {/* Big ambient glow */}
      <div className="absolute -bottom-40 -left-40 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12),_transparent_60%)] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[50%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08),_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Heading side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
            >
              — {t.cta.eyebrow}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.04em] text-white"
            >
              {t.cta.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gold-gradient italic font-light">
                {t.cta.title.split(' ').slice(-1)}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-8 text-base md:text-lg text-white/65 max-w-xl font-light leading-relaxed"
            >
              {t.cta.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="cta-whatsapp-button"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-onyx font-medium text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-500 shadow-[0_8px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_60px_rgba(212,175,55,0.55)]"
              >
                <MessageCircle className="h-4 w-4" />
                {t.cta.whatsapp}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={PHONE_TEL}
                data-testid="cta-call-button"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-gold/40 text-white/85 hover:text-gold text-sm tracking-[0.15em] uppercase font-medium transition-all duration-500"
              >
                <Phone className="h-4 w-4" />
                {t.cta.call}
              </a>
            </motion.div>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-3xl p-8 md:p-10 space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center">
                  <span className="font-heading font-black text-gold">A</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-white">Alawi Cars</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                    {t.footer.tagline}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="contact-whatsapp-row"
                className="group flex items-center gap-4 p-4 -m-2 rounded-2xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="h-4 w-4 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">
                    WhatsApp
                  </div>
                  <div className="font-heading text-base text-white truncate">{PHONE}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-gold transition-colors" />
              </a>

              <a
                href={PHONE_TEL}
                data-testid="contact-phone-row"
                className="group flex items-center gap-4 p-4 -m-2 rounded-2xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">
                    {t.cta.call}
                  </div>
                  <div className="font-heading text-base text-white truncate">{PHONE}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-gold transition-colors" />
              </a>

              <a
                href={EMAIL_HREF}
                data-testid="contact-email-row"
                className="group flex items-center gap-4 p-4 -m-2 rounded-2xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">
                    E-Mail
                  </div>
                  <div className="font-heading text-base text-white truncate">{EMAIL}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-gold transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 -m-2 rounded-2xl">
                <div className="h-11 w-11 shrink-0 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">
                    {t.footer.location}
                  </div>
                  <div className="font-heading text-base text-white">{t.footer.switzerland}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
