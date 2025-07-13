'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Award,
  Shield,
  Star,
  ArrowUp
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'ADU Construction', href: '#services' },
    { label: 'Kitchen Renovation', href: '#services' },
    { label: 'Bathroom Remodel', href: '#services' },
    { label: 'Home Renovation', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About Us', href: '#about' }
  ];

  const services = [
    { label: 'Permit Assistance', href: '#services' },
    { label: '3D Design & Planning', href: '#services' },
    { label: 'Project Management', href: '#services' },
    { label: 'Interior Design', href: '#services' },
    { label: 'Warranty & Support', href: '#services' },
    { label: 'Rental Optimization', href: '#services' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'License Information', href: '/license' },
    { label: 'Insurance Details', href: '/insurance' },
    { label: 'Warranty Terms', href: '/warranty' }
  ];

  const certifications = [
    { name: 'CA State Licensed', logo: '🏛️', id: 'License #1234567' },
    { name: 'BBB A+ Rating', logo: '⭐', id: 'Accredited Business' },
    { name: 'EPA Certified', logo: '🌱', id: 'Lead-Safe Firm' },
    { name: 'OSHA Certified', logo: '🔒', id: '30-Hour Safety' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/arialuxbuilders', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/arialuxbuilders', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/arialuxbuilders', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/arialuxbuilders', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--primary-charcoal)] to-[var(--dark-surface)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid lg:grid-cols-4 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">
                  Aria Lux Builders
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Premium ADU construction specialists transforming properties into luxury income generators with expert craftsmanship and guaranteed results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="text-[var(--primary-gold)] flex-shrink-0" size={20} />
                  <span className="text-gray-300">(650) 555-ARIA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-[var(--primary-gold)] flex-shrink-0" size={20} />
                  <span className="text-gray-300">hello@arialuxbuilders.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[var(--primary-gold)] flex-shrink-0" size={20} />
                  <span className="text-gray-300">Serving the San Francisco Bay Area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-[var(--primary-gold)] flex-shrink-0" size={20} />
                  <span className="text-gray-300">Mon-Fri 8AM-6PM, Sat 9AM-4PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[var(--primary-gold)] text-white hover:text-[var(--primary-charcoal)] p-3 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-[var(--primary-gold)] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <motion.a
                    key={service.label}
                    href={service.href}
                    className="block text-gray-300 hover:text-[var(--primary-gold)] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Certifications & Legal */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold text-white mb-6">Certifications</h4>
              <div className="space-y-4 mb-8">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center space-x-3">
                    <span className="text-2xl">{cert.logo}</span>
                    <div>
                      <div className="text-white font-medium">{cert.name}</div>
                      <div className="text-gray-400 text-sm">{cert.id}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-[var(--primary-gold)] transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 p-8 glass-morphism bg-gradient-to-r from-[var(--primary-gold)]/10 to-[var(--accent-gold)]/10 rounded-3xl border border-[var(--primary-gold)]/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ satisfied clients who've increased their property value with our premium construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Assessment
              </motion.button>
              <motion.button
                className="border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Aria Lux Builders. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  CA Contractor License #1234567 • EPA Lead-Safe Certified • OSHA Compliant
                </p>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-[var(--primary-gold)] hover:bg-[var(--accent-gold)] text-[var(--primary-charcoal)] p-3 rounded-full transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;