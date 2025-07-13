'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-luxury' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-gradient-gold">
              Aria Lux Builders
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-white hover:text-[var(--primary-gold)] transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact CTA */}
          <motion.button
            className="hidden md:flex items-center space-x-2 bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone size={18} />
            <span>Free Consultation</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ maxHeight: isMenuOpen ? 384 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="glass-morphism rounded-lg mt-4 p-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-white hover:text-[var(--primary-gold)] transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              className="w-full flex items-center justify-center space-x-2 bg-gradient-gold text-[var(--primary-charcoal)] px-6 py-3 rounded-full font-semibold transition-all duration-300"
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone size={18} />
              <span>Free Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;