'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);
  
  // Karakter muncul lebih awal - gak ada void
const characterY = useTransform(scrollYProgress, [0, 0.18], ['15%', '0%']);
const characterOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
const characterScale = useTransform(scrollYProgress, [0, 0.15], [0.97, 1]);
  
  // Text fade out lebih cepat
const textY = useTransform(scrollYProgress, [0, 0.15], ['0%', '-10%']);
const textOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const smoothCharacterY = useSpring(characterY, { stiffness: 120, damping: 25 });
  const smoothCharacterScale = useSpring(characterScale, { stiffness: 120, damping: 25 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh]"  // ← lebih pendek, gak ada void
      style={{ background: '#0a0a0a' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: bgY, opacity: bgOpacity }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Mountain scenery"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Noise */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(196,163,90,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Karakter - muncul lebih awal, gak ada void */}
        <motion.div
          className="absolute bottom-0 left-1/2 z-10 pointer-events-none"
          style={{
            y: smoothCharacterY,
            opacity: characterOpacity,
            scale: smoothCharacterScale,
            x: '-50%',
          }}
        >
          <div className="relative w-[280px] h-[420px] md:w-[380px] md:h-[570px] lg:w-[480px] lg:h-[720px]">
            <Image
              src="/images/hero-character.png"
              alt="Bale Explorer"
              fill
              className="object-contain object-bottom"
              priority
              quality={95}
            />
            <div
              className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(196,163,90,0.25) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </div>
        </motion.div>

        {/* Text content - fade out lebih cepat */}
        <motion.div
          className="relative z-20 max-w-4xl text-center px-6"
          style={{ y: textY, opacity: textOpacity }}
        >
          <span 
            className="inline-block px-4 py-2 border rounded-full text-xs uppercase tracking-widest mb-6 md:mb-8"
            style={{ 
              color: '#c4a35a', 
              borderColor: 'rgba(196,163,90,0.3)',
              background: 'rgba(196,163,90,0.08)' 
            }}
          >
            Mountain & Outdoor Inspired
          </span>

          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f5f5f5' }}
          >
            Built for the <span style={{ color: '#c4a35a' }}>wild</span>,<br />
            made for everyday.
          </h1>

          <p className="text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed" style={{ color: '#888888' }}>
            Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            {['Calm', 'Explore', 'Experience'].map((value) => (
              <div key={value} className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest" style={{ color: '#888888' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#c4a35a' }} />
                {value}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/etalase"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 no-underline"
              style={{ background: '#c4a35a', color: '#0a0a0a' }}
            >
              Lihat Etalase
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://instagram.com/bale.explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 border no-underline"
              style={{ background: 'transparent', color: '#f5f5f5', borderColor: '#2a2a2a' }}
            >
              Instagram
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#888888' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: '#2a2a2a' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: '#c4a35a' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}