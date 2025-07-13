'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const stats = [
    { value: '200+', label: 'Projects Completed', icon: TrendingUp },
    { value: '15+', label: 'Years Experience', icon: Star },
    { value: '$200K+', label: 'Avg. Value Added', icon: TrendingUp }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        >
          <source src="https://cdn.pexels.com/lib/videos/free-videos.js" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-charcoal)]/80 via-[var(--primary-charcoal)]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-charcoal)]/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-gold text-[var(--primary-charcoal)] px-4 py-2 rounded-full text-sm font-semibold">
                Award-Winning ADU Specialists
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your Property Into A{' '}
              <span className="text-gradient-gold">Luxury Income Generator</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Premium ADU construction that adds <strong className="text-[var(--primary-gold)]">$200K+ property value</strong> with expert permits, luxury design, and guaranteed timelines.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                className="group bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury animate-pulse-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Your Free ADU Assessment</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </motion.button>

              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Portfolio
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="text-[var(--primary-gold)] mr-2" size={24} />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="glass-morphism p-8 rounded-2xl shadow-luxury animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-gold)] mb-2">
                  $350K
                </div>
                <p className="text-white text-sm">Average ADU Investment</p>
                <p className="text-gray-300 text-xs mt-1">ROI: 180% in 3 years</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism p-6 rounded-2xl shadow-luxury mt-6 ml-8 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  6-12
                </div>
                <p className="text-[var(--primary-gold)] text-sm">Months to Complete</p>
                <p className="text-gray-300 text-xs mt-1">Fully permitted & certified</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism p-6 rounded-2xl shadow-luxury mt-6 animate-float"
              style={{ animationDelay: '4s' }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-gold)] mb-2">
                  100%
                </div>
                <p className="text-white text-sm">Permit Success Rate</p>
                <p className="text-gray-300 text-xs mt-1">Expert local knowledge</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-[var(--primary-gold)] rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;