import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Droplets, Disc3, Cog, Handshake, Truck } from 'lucide-react';

const SERVICE_ICONS = [Sparkles, Droplets, Disc3, Cog, Handshake, Truck];

const SERVICE_IMAGES = [
  'https://images.pexels.com/photos/20042055/pexels-photo-20042055.jpeg',
  'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg',
  'https://images.pexels.com/photos/34277926/pexels-photo-34277926.jpeg',
  'https://images.pexels.com/photos/31465247/pexels-photo-31465247.jpeg',
  'https://images.pexels.com/photos/26954166/pexels-photo-26954166.jpeg',
  'https://images.pexels.com/photos/34539243/pexels-photo-34539243.jpeg',
];

const TiltCard = ({ children, testId }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      data-testid={testId}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative h-full"
    >
      {children}
    </motion.div>
  );
};

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-32 md:py-40 bg-[#0A0A0A]"
    >
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
          >
            — {t.services.eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] text-white"
          >
            {t.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-6 text-base md:text-lg text-white/60 max-w-xl font-light"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ perspective: '1500px' }}
        >
          {t.services.items.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <TiltCard testId={`service-card-${idx}`}>
                  <div className="group relative h-full overflow-hidden rounded-3xl glass hover:glass-hover transition-all duration-700 p-8 md:p-10 min-h-[440px] flex flex-col">
                    {/* Background image with mask */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                      <img
                        src={SERVICE_IMAGES[idx]}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
                    </div>

                    {/* Number ribbon */}
                    <div className="relative z-10 flex items-center justify-between" style={{ transform: 'translateZ(40px)' }}>
                      <span className="font-heading font-light text-sm tracking-[0.3em] text-gold/70">
                        {service.number}
                      </span>
                      <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/60 transition-all duration-500">
                        {Icon && <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />}
                      </div>
                    </div>

                    {/* Title & desc */}
                    <div className="relative z-10 mt-auto" style={{ transform: 'translateZ(60px)' }}>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm md:text-base text-white/65 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Corner glow */}
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
