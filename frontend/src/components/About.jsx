import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ABOUT_IMG = 'https://images.pexels.com/photos/26954166/pexels-photo-26954166.jpeg';

export const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yImage = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const reveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: '-80px' },
  };

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative py-32 md:py-40 lg:py-48 bg-onyx overflow-hidden"
    >
      <div className="absolute -top-1/2 -left-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06),_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
              <motion.img
                style={{ y: yImage }}
                src={ABOUT_IMG}
                alt="Luxury black sports car"
                className="absolute inset-0 h-[110%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-1">
                    Made in
                  </div>
                  <div className="font-heading font-bold text-2xl text-white">
                    Switzerland
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center">
                  <span className="font-heading font-black text-gold text-xs">A</span>
                </div>
              </div>
            </div>

            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-5 max-w-[180px]"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">
                {t.about.stat3Label}
              </div>
              <div className="font-heading font-black text-3xl text-gold-gradient">
                {t.about.stat3Value}
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="lg:col-span-7">
            <motion.div {...reveal}>
              <div className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6">
                — {t.about.eyebrow}
              </div>
            </motion.div>

            <motion.h2
              {...reveal}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] text-white"
            >
              {t.about.title.split(' ').map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-gold-gradient italic font-light">
                    {' '}
                    {word}
                  </span>
                ) : (
                  <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
                )
              )}
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base md:text-lg text-white/70 leading-relaxed font-light max-w-2xl"
            >
              {t.about.paragraph}
            </motion.p>

            {/* Stats */}
            <motion.div
              {...reveal}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
            >
              {[
                { label: t.about.stat1Label, value: t.about.stat1Value },
                { label: t.about.stat2Label, value: t.about.stat2Value },
                { label: t.about.stat3Label, value: t.about.stat3Value },
              ].map((stat, i) => (
                <div
                  key={i}
                  data-testid={`about-stat-${i}`}
                  className="border-l border-gold/30 pl-4 md:pl-6"
                >
                  <div className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/45 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
