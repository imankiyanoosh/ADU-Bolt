'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, FileText, Clock, DollarSign, Home } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: FileText },
    { id: 'permits', label: 'Permits & Legal', icon: FileText },
    { id: 'timeline', label: 'Timeline & Process', icon: Clock },
    { id: 'pricing', label: 'Pricing & Investment', icon: DollarSign },
    { id: 'adu', label: 'ADU Specific', icon: Home }
  ];

  const faqs = [
    {
      id: 1,
      category: 'permits',
      question: 'Do you handle all permit requirements for ADU construction?',
      answer: 'Yes, we handle the entire permit process from start to finish. Our team has extensive experience with local building codes and maintains relationships with city planning departments. We ensure all permits are obtained correctly and efficiently, including building permits, electrical permits, plumbing permits, and final inspections. Our 100% permit success rate reflects our expertise in navigating complex regulatory requirements.'
    },
    {
      id: 2,
      category: 'timeline',
      question: 'How long does it take to complete a full ADU construction?',
      answer: 'A typical ADU construction project takes 6-12 months from design to completion. This includes 2-3 months for design and permitting, followed by 4-9 months of construction depending on size and complexity. We provide detailed project timelines with milestone checkpoints and maintain regular communication throughout the process to ensure on-schedule delivery.'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'What is the typical cost range for ADU construction?',
      answer: 'ADU construction costs typically range from $150,000 to $400,000+ depending on size, finishes, and complexity. Studio ADUs (under 600 sq ft) start around $150,000, while luxury two-bedroom ADUs can exceed $400,000. We provide detailed cost breakdowns and work within your budget to maximize value while maintaining our quality standards.'
    },
    {
      id: 4,
      category: 'adu',
      question: 'How much rental income can I expect from my ADU?',
      answer: 'Rental income varies by location and ADU quality, but our clients typically generate $2,500-$4,500 per month. In the Bay Area, well-designed ADUs can command premium rents due to high housing demand. We provide market analysis and design recommendations to help maximize your rental income potential and return on investment.'
    },
    {
      id: 5,
      category: 'permits',
      question: 'What are the setback requirements for ADUs in my area?',
      answer: 'Setback requirements vary by city and zoning, but recent California laws have relaxed many restrictions. Typically, ADUs require 4-foot side and rear setbacks, though some jurisdictions allow smaller setbacks or zero setbacks for certain configurations. We research your specific property\'s requirements and optimize the design to maximize square footage within regulations.'
    },
    {
      id: 6,
      category: 'timeline',
      question: 'Can I live in my main house during ADU construction?',
      answer: 'Yes, in most cases you can continue living in your main house during ADU construction. We plan construction activities to minimize disruption and coordinate utility connections to avoid service interruptions. We also provide detailed scheduling so you know what to expect each week and can plan accordingly.'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'Do you offer financing options for ADU projects?',
      answer: 'While we don\'t provide direct financing, we work with several trusted lending partners who specialize in ADU construction loans. Options include construction-to-permanent loans, home equity lines of credit, and cash-out refinancing. We can provide referrals and project documentation needed for loan applications.'
    },
    {
      id: 8,
      category: 'adu',
      question: 'How much value will an ADU add to my property?',
      answer: 'ADUs typically add $200,000-$400,000 in property value, often exceeding the construction cost. The exact value depends on your location, local market conditions, and ADU quality. Our premium finishes and thoughtful design ensure maximum value appreciation while creating an attractive rental opportunity.'
    },
    {
      id: 9,
      category: 'permits',
      question: 'What happens if we encounter permit issues or delays?',
      answer: 'Our experienced team anticipates potential permit challenges and proactively addresses them. If unexpected issues arise, we work directly with city officials to resolve them quickly. We also maintain contingency plans and alternative approaches to minimize delays. Our 100% permit success rate demonstrates our ability to navigate complex situations.'
    },
    {
      id: 10,
      category: 'timeline',
      question: 'What is included in your project timeline and milestones?',
      answer: 'Our detailed timeline includes design development, permit submission and approval, construction phases (foundation, framing, mechanical, finishes), and final inspections. We provide weekly progress updates and milestone celebrations. Each phase has clear deliverables and quality checkpoints to ensure the project stays on track and meets our standards.'
    },
    {
      id: 11,
      category: 'adu',
      question: 'Can you help with interior design and furnishing for rental optimization?',
      answer: 'Yes, we offer complete interior design services optimized for rental markets. This includes space planning, fixture selection, appliance packages, and furnishing coordination. Our designs maximize both aesthetic appeal and practical functionality to attract quality tenants and command premium rents.'
    },
    {
      id: 12,
      category: 'pricing',
      question: 'What warranty and post-construction support do you provide?',
      answer: 'We provide a comprehensive 2-year warranty covering all construction work, plus extended warranties on major systems and appliances. Our post-construction support includes regular check-ins, maintenance guidance, and priority response for any warranty issues. We\'re committed to your long-term success and satisfaction.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Get answers to common questions about ADU construction, permits, timelines, and investment returns.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full focus:border-[var(--primary-gold)] focus:outline-none transition-colors text-[var(--primary-charcoal)] placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-gold text-[var(--primary-charcoal)] shadow-luxury'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="glass-morphism bg-white backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              variants={fadeInUp}
              layout
            >
              <motion.button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50/50 transition-colors"
                whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[var(--primary-charcoal)] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-[var(--primary-gold)]" size={24} />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16 p-8 glass-morphism bg-gradient-to-r from-[var(--primary-gold)]/10 to-[var(--accent-gold)]/10 rounded-3xl border border-[var(--primary-gold)]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[var(--primary-charcoal)] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experienced team is here to help. Schedule a free consultation to discuss your specific project needs and get personalized answers.
          </p>
          <motion.button
            className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;