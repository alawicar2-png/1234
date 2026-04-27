import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { Move } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PAIRS = {
  paint: {
    before: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.pexels.com/photos/20042056/pexels-photo-20042056.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  detailing: {
    before: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.pexels.com/photos/26954166/pexels-photo-26954166.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  wheels: {
    before: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.pexels.com/photos/31465247/pexels-photo-31465247.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  interior: {
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    after: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
  },
};

const TiltWrap = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const HandleNode = () => (
  <div
    aria-label="Slider handle"
    className="flex items-center justify-center h-14 w-14 rounded-full bg-gold text-onyx shadow-[0_0_30px_rgba(212,175,55,0.6)] border-2 border-onyx"
  >
    <Move className="h-5 w-5" strokeWidth={2.5} />
  </div>
);

export const Gallery = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(t.gallery.tabs[0].id);

  const pair = PAIRS[active] || PAIRS.paint;

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-32 md:py-40 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08),_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
          >
            — {t.gallery.eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] text-white"
          >
            {t.gallery.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-6 text-base md:text-lg text-white/60 max-w-xl font-light"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          data-testid="gallery-tabs"
          className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14"
        >
          {t.gallery.tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                data-testid={`gallery-tab-${tab.id}`}
                className={`px-5 md:px-6 py-3 rounded-full text-xs md:text-sm tracking-[0.15em] uppercase font-medium transition-all duration-500 border ${
                  isActive
                    ? 'bg-gold text-onyx border-gold shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                    : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-gold/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Slider */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ perspective: '1800px' }}
          className="relative"
          data-testid="gallery-slider-wrapper"
        >
          <TiltWrap>
            <div className="relative rounded-3xl overflow-hidden glass border-gold/20">
              <ReactCompareSlider
                handle={<HandleNode />}
                position={50}
                itemOne={
                  <div className="relative">
                    <ReactCompareSliderImage
                      src={pair.before}
                      alt="Vorher"
                      style={{ filter: 'saturate(0.7) brightness(0.85)' }}
                    />
                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-onyx/80 backdrop-blur-md border border-white/15">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-white/85 font-medium">
                        {t.gallery.labels.before}
                      </span>
                    </div>
                  </div>
                }
                itemTwo={
                  <div className="relative">
                    <ReactCompareSliderImage src={pair.after} alt="Nachher" />
                    <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gold text-onyx">
                      <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                        {t.gallery.labels.after}
                      </span>
                    </div>
                  </div>
                }
                style={{
                  height: 'min(72vh, 720px)',
                  width: '100%',
                }}
              />
            </div>
          </TiltWrap>

          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/40">
            <Move className="h-3 w-3" />
            <span>{t.gallery.hint}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
