'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface TestimonialsProps {
  onOpenLeadForm: () => void;
}

const Testimonials = ({ onOpenLeadForm }: TestimonialsProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'Palo Alto, CA',
      project: 'Two-Bedroom ADU Construction',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      quote: 'Aria Lux Builders transformed our backyard into a stunning ADU that now generates $3,500/month in rental income. The attention to detail and premium finishes exceeded our expectations.',
      videoUrl: null,
      results: {
        investment: '$280,000',
        valueAdded: '$350,000',
        monthlyIncome: '$3,500'
      }
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'Mountain View, CA',
      project: 'Complete Home Renovation',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      quote: 'From permits to final inspection, the team handled everything professionally. Our 1960s ranch is now a modern masterpiece worth $200K more than we invested.',
      videoUrl: 'https://example.com/testimonial-video',
      results: {
        investment: '$450,000',
        valueAdded: '$650,000',
        timeframe: '6 months'
      }
    },
    {
      id: 3,
      name: 'Jennifer Park',
      location: 'Menlo Park, CA',
      project: 'Luxury Kitchen Renovation',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      quote: 'The kitchen renovation was completed on time and on budget. The quality of workmanship is exceptional, and we love cooking in our new space every day.',
      videoUrl: null,
      results: {
        investment: '$85,000',
        valueAdded: '$110,000',
        timeframe: '3 months'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      location: 'Sunnyvale, CA',
      project: 'Studio ADU Construction',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      quote: 'As a real estate investor, I\'ve worked with many contractors. Aria Lux stands out for their expertise in permits and delivering premium quality on schedule.',
      videoUrl: null,
      results: {
        investment: '$180,000',
        valueAdded: '$220,000',
        monthlyIncome: '$2,800'
      }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      location: 'Los Altos, CA',
      project: 'Master Bathroom Remodel',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      quote: 'Our bathroom feels like a luxury spa now. The heated floors, rain shower, and custom finishes make every morning feel special. Worth every penny!',
      videoUrl: 'https://example.com/testimonial-video-2',
      results: {
        investment: '$65,000',
        valueAdded: '$85,000',
        timeframe: '6 weeks'
      }
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary-charcoal)] to-[var(--dark-surface)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--primary-gold)] rounded-full filter blur-3xl"></div>
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
            What Our <span className="text-gradient-gold">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Don't just take our word for it. Hear from satisfied clients who've transformed their properties with our premium construction services.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-morphism bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-luxury">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Client Photo & Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={currentTest.image}
                      alt={currentTest.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 border-4 border-[var(--primary-gold)]"
                    />
                    {currentTest.videoUrl && (
                      <motion.button
                        className="absolute -bottom-2 -right-2 bg-[var(--primary-gold)] text-[var(--primary-charcoal)] p-2 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play size={16} />
                      </motion.button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{currentTest.name}</h3>
                  <p className="text-[var(--primary-gold)] mb-2">{currentTest.location}</p>
                  <p className="text-gray-300 text-sm mb-4">{currentTest.project}</p>

                  {/* Star Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="text-[var(--primary-gold)] fill-current" size={20} />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Quote className="text-[var(--primary-gold)]/30 absolute -top-4 -left-2" size={48} />
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed italic pl-8">
                      "{currentTest.quote}"
                    </blockquote>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-lg font-bold text-[var(--primary-gold)]">
                        {currentTest.results.investment}
                      </div>
                      <div className="text-sm text-gray-300">Investment</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-lg font-bold text-[var(--primary-gold)]">
                        {currentTest.results.valueAdded}
                      </div>
                      <div className="text-sm text-gray-300">Value Added</div>
                    </div>
                    {currentTest.results.monthlyIncome && (
                      <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-lg font-bold text-[var(--primary-gold)]">
                          {currentTest.results.monthlyIncome}
                        </div>
                        <div className="text-sm text-gray-300">Monthly Income</div>
                      </div>
                    )}
                    {currentTest.results.timeframe && !currentTest.results.monthlyIncome && (
                      <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-lg font-bold text-[var(--primary-gold)]">
                          {currentTest.results.timeframe}
                        </div>
                        <div className="text-sm text-gray-300">Completion Time</div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <motion.button
            onClick={prevTestimonial}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[var(--primary-gold)]' : 'bg-white/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={24} />
          </motion.button>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-morphism bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-luxury transition-all duration-300 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => goToTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[var(--primary-gold)]"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.project}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[var(--primary-gold)] fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="text-3xl font-bold text-[var(--primary-gold)] mb-2">500+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--primary-gold)] mb-2">4.9/5</div>
            <p className="text-gray-300">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--primary-gold)] mb-2">98%</div>
            <p className="text-gray-300">On-Time Delivery</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--primary-gold)] mb-2">$50M+</div>
            <p className="text-gray-300">Property Value Added</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenLeadForm}
          >
            Join Our Satisfied Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;