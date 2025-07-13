'use client';

import { motion } from 'framer-motion';
import { Building, ChefHat, Bath, Home, Ruler, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

interface ServicesProps {
  onOpenLeadForm: () => void;
}

const Services = ({ onOpenLeadForm }: ServicesProps) => {
  const primaryService = {
    id: 'full-adu',
    title: 'Full ADU Construction',
    description: 'Complete accessory dwelling unit from permits to completion. Transform your property into a luxury income generator.',
    icon: Building,
    features: [
      'Complete permit handling',
      'Architectural design & 3D rendering',
      'Luxury finishes & fixtures',
      'Smart home integration',
      'Landscaping & outdoor spaces',
      '2-year warranty included'
    ],
    timeline: '6-12 months',
    priceRange: '$150K - $400K+',
    roi: '15-25% annual return',
    valueAdd: '$200K+ property value'
  };

  const secondaryServices = [
    {
      id: 'kitchen',
      title: 'Kitchen Renovation',
      description: 'Luxury kitchen transformation with premium appliances and custom cabinetry.',
      icon: ChefHat,
      timeline: '2-4 months',
      priceRange: '$50K - $150K',
      highlights: ['Custom cabinetry', 'Premium appliances', 'Smart technology']
    },
    {
      id: 'bathroom',
      title: 'Bathroom Remodel',
      description: 'Spa-quality bathroom renovation with luxury fixtures and finishes.',
      icon: Bath,
      timeline: '1-2 months',
      priceRange: '$25K - $75K',
      highlights: ['Luxury fixtures', 'Custom tile work', 'Heated floors']
    },
    {
      id: 'full-renovation',
      title: 'Full Home Renovation',
      description: 'Complete home transformation bringing modern luxury to every space.',
      icon: Home,
      timeline: '4-8 months',
      priceRange: '$200K - $800K+',
      highlights: ['Whole house design', 'Structural updates', 'Energy efficiency']
    },
    {
      id: '3d-planning',
      title: '3D Architecture Plans',
      description: 'Professional architectural design with detailed 3D visualizations.',
      icon: Ruler,
      timeline: '2-4 weeks',
      priceRange: '$5K - $15K',
      highlights: ['3D visualizations', 'Permit-ready plans', 'Design consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[var(--primary-charcoal)] to-[var(--dark-surface)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
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
            Premium Construction <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            From complete ADU construction to luxury renovations, we deliver exceptional craftsmanship that transforms properties and maximizes investment returns.
          </motion.p>
        </motion.div>

        {/* Primary Service - Full ADU */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-morphism bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-luxury border border-[var(--primary-gold)]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-gold p-4 rounded-2xl mr-4">
                    <primaryService.icon className="text-[var(--primary-charcoal)]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{primaryService.title}</h3>
                    <p className="text-[var(--primary-gold)] font-semibold">Our Signature Service</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {primaryService.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-gold)] mb-2">
                      {primaryService.valueAdd}
                    </div>
                    <p className="text-gray-400 text-sm">Property Value Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-gold)] mb-2">
                      {primaryService.roi}
                    </div>
                    <p className="text-gray-400 text-sm">Annual ROI Potential</p>
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-[var(--primary-gold)]" size={20} />
                    <span className="text-white font-semibold">{primaryService.priceRange}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-[var(--primary-gold)]" size={20} />
                    <span className="text-white font-semibold">{primaryService.timeline}</span>
                  </div>
                </div>

                <motion.button
                  className="group bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenLeadForm}
                >
                  <span className="flex items-center space-x-2">
                    <span>Start Your ADU Project</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </motion.button>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">What's Included</h4>
                <div className="space-y-4">
                  {primaryService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div className="w-2 h-2 bg-[var(--primary-gold)] rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={cardHover}
                className="glass-morphism bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 hover:border-[var(--primary-gold)]/30 transition-all duration-300 cursor-pointer"
                onClick={onOpenLeadForm}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[var(--primary-gold)]/20 to-[var(--accent-gold)]/20 p-4 rounded-xl mr-4">
                    <service.icon className="text-[var(--primary-gold)]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-[var(--primary-gold)] font-semibold">{service.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Investment:</span>
                    <span className="text-[var(--primary-gold)] font-semibold">{service.priceRange}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[var(--primary-gold)] rounded-full"></div>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="flex items-center text-[var(--primary-gold)] hover:text-[var(--accent-gold)] transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to transform your property? Let's discuss your vision.
          </p>
          <motion.button
            className="bg-transparent border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenLeadForm}
          >
            Get Your Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;