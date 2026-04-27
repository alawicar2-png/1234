import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_IMG = 'https://images.pexels.com/photos/17092455/pexels-photo-17092455.png';

export const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const lineMotion = (delay) => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-onyx"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_IMG}
          alt="Luxury sports car"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 hero-vignette" />
      </motion.div>

      {/* Subtle gold gridlines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-40 md:pt-48 pb-32"
      >
        <motion.div {...lineMotion(0.1)}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-medium">
              {t.hero.eyebrow}
            </span>
          </div>
        </motion.div>

        <h1 className="mt-10 max-w-5xl">
          <motion.span
            {...lineMotion(0.25)}
            className="block font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-[-0.04em] text-chrome-gradient"
          >
            {t.hero.titleLine1}
          </motion.span>
          <motion.span
            {...lineMotion(0.4)}
            className="block font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6 leading-[1] tracking-tight text-white/90"
          >
            {t.hero.titleLine2}
          </motion.span>
          <motion.span
            {...lineMotion(0.55)}
            className="block font-heading font-light italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-[1] text-gold-gradient"
          >
            {t.hero.titleLine3}
          </motion.span>
        </h1>

        <motion.p
          {...lineMotion(0.7)}
          className="mt-10 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div {...lineMotion(0.85)} className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            data-testid="hero-cta-primary"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-onyx font-medium text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-500 shadow-[0_8px_40px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_60px_rgba(212,175,55,0.5)]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            data-testid="hero-cta-secondary"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-white/40 text-white/85 hover:text-white text-sm tracking-[0.15em] uppercase font-medium transition-all duration-500"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/40"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">{t.hero.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          <MoveDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
