'use client';

import { motion } from 'framer-motion';
import { Building2, Home, Wrench, Calculator, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeInLeft } from '@/lib/animations';
import { GlowCard } from '@/components/ui/spotlight-card';

interface ServicesProps {
  onOpenLeadForm: () => void;
}

const Services = ({ onOpenLeadForm }: ServicesProps) => {
  const mainServices = [
    {
      icon: Building2,
      title: 'ADU Construction',
      description: 'Complete ADU builds from permits to completion. Turn your backyard into a income-generating asset.',
      features: ['Permit acquisition', 'Custom design', 'Full construction', 'Final inspections'],
      pricing: 'Starting at $180k',
      timeline: '4-6 months'
    },
    {
      icon: Home,
      title: 'Home Renovations',
      description: 'Transform your existing space with luxury finishes and modern functionality.',
      features: ['Kitchen remodels', 'Bathroom upgrades', 'Room additions', 'Whole home renovation'],
      pricing: 'Starting at $50k',
      timeline: '2-4 months'
    },
    {
      icon: Wrench,
      title: 'Custom Build Services',
      description: 'Bespoke construction solutions tailored to your vision and investment goals.',
      features: ['Architectural design', 'Engineering', 'Premium materials', 'Project management'],
      pricing: 'Custom quote',
      timeline: 'Varies'
    }
  ];

  const secondaryServices = [
    {
      icon: Calculator,
      title: 'Investment Analysis',
      description: 'ROI calculations and feasibility studies for your construction projects.'
    },
    {
      icon: CheckCircle,
      title: 'Permit Services',
      description: 'Navigate complex Bay Area permits with our expert team.'
    },
    {
      icon: Star,
      title: 'Design Consultation',
      description: 'Professional design services to maximize your property value.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[var(--primary-charcoal)] to-[var(--dark-surface)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Premium <span className="text-gradient-gold">Construction Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            From ADU construction to complete home renovations, we deliver luxury results that maximize your property value and rental income potential.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full"
            >
              <GlowCard 
                glowColor={index % 2 === 0 ? 'blue' : 'purple'} 
                customSize 
                className="glass-morphism bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 hover:border-[var(--primary-gold)]/30 transition-all duration-300 w-full h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[var(--primary-gold)]/20 to-[var(--accent-gold)]/20 p-4 rounded-xl mr-4">
                    <service.icon className="text-[var(--primary-gold)]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-[var(--primary-gold)] font-semibold">{service.pricing}</span>
                      <span className="text-gray-400">• {service.timeline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="text-[var(--primary-gold)] mr-3 flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenLeadForm}
                >
                  <span>Get Quote</span>
                  <ArrowRight size={16} />
                </motion.button>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Services */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {secondaryServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full"
            >
              <GlowCard 
                glowColor={index % 2 === 0 ? 'blue' : 'purple'} 
                customSize 
                className="glass-morphism bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 hover:border-[var(--primary-gold)]/30 transition-all duration-300 w-full h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[var(--primary-gold)]/20 to-[var(--accent-gold)]/20 p-4 rounded-xl mr-4">
                    <service.icon className="text-[var(--primary-gold)]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Ready to <span className="text-gradient-gold">Transform Your Property?</span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've increased their property value and generated substantial rental income with our premium construction services.
          </p>
          <motion.button
            className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenLeadForm}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;