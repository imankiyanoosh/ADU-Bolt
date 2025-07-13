'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const About = () => {
  const stats = [
    { icon: Award, value: '200+', label: 'Projects Completed', color: 'text-[var(--primary-gold)]' },
    { icon: Users, value: '15+', label: 'Years Experience', color: 'text-blue-400' },
    { icon: Clock, value: '98%', label: 'On-Time Delivery', color: 'text-green-400' },
    { icon: Shield, value: '100%', label: 'Permit Success', color: 'text-purple-400' }
  ];

  const achievements = [
    'Licensed General Contractor (CA License #1234567)',
    'Better Business Bureau A+ Rating',
    'EPA Certified Lead-Safe Firm',
    'OSHA 30-Hour Safety Certified',
    'Local Building Code Expert',
    'Sustainable Building Practices Certified'
  ];

  const certifications = [
    { name: 'CA State Licensed', logo: '🏛️' },
    { name: 'BBB A+ Rating', logo: '⭐' },
    { name: 'EPA Certified', logo: '🌱' },
    { name: 'OSHA Certified', logo: '🔒' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-[var(--primary-charcoal)] mb-6"
            variants={fadeInUp}
          >
            Why <span className="text-gradient-gold">Aria Lux Builders</span> Leads the Industry
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            With over 15 years of luxury construction expertise, we transform properties into income-generating assets while exceeding the highest quality standards.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="glass-morphism bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-luxury">
              <h3 className="text-3xl font-bold text-[var(--primary-charcoal)] mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize residential construction, Aria Lux Builders has become the Bay Area's premier ADU construction specialist. Our commitment to luxury, precision, and client satisfaction has earned us recognition as industry leaders.
                </p>
                <p>
                  We understand that your property is more than just real estate—it's your legacy. Every ADU we build is designed to maximize both immediate value and long-term returns, creating beautiful spaces that generate substantial rental income.
                </p>
                <p>
                  Our expert team navigates complex permit processes, delivers projects on schedule, and ensures every detail meets our exacting standards. From initial consultation to final walkthrough, we're your trusted partner in property transformation.
                </p>
              </div>

              {/* Achievements */}
              <div className="mt-8 space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-[var(--primary-gold)] flex-shrink-0" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Certifications */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-morphism bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center hover:shadow-luxury transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                  <div className="text-3xl font-bold text-[var(--primary-charcoal)] mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass-morphism bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-luxury">
              <h4 className="text-2xl font-bold text-[var(--primary-charcoal)] mb-6 text-center">
                Certifications & Credentials
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-[var(--primary-gold)]/10 to-[var(--accent-gold)]/10 border border-[var(--primary-gold)]/20"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-3xl mb-2">{cert.logo}</div>
                    <p className="text-sm font-semibold text-[var(--primary-charcoal)]">{cert.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;