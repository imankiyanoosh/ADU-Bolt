'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { projectTypes, budgetRanges, calculateLeadScore, type LeadData } from '@/lib/lead-scoring';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadForm = ({ isOpen, onClose }: LeadFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [leadData, setLeadData] = useState<Partial<LeadData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const timelineOptions = [
    { id: 'immediate', label: 'Ready to start immediately', urgency: 'high' },
    { id: '1-3months', label: 'Within 1-3 months', urgency: 'medium' },
    { id: '3-6months', label: 'Within 3-6 months', urgency: 'medium' },
    { id: '6-12months', label: 'Within 6-12 months', urgency: 'low' },
    { id: 'planning', label: 'Still planning/researching', urgency: 'low' }
  ];

  const propertyQuestions = [
    {
      id: 'property-address',
      type: 'text',
      label: 'Property Address',
      placeholder: 'Enter your property address',
      required: true
    },
    {
      id: 'ownership-status',
      type: 'select',
      label: 'Property Ownership',
      options: ['I own the property', 'I\'m buying the property', 'I\'m a real estate investor'],
      required: true
    },
    {
      id: 'permit-status',
      type: 'select',
      label: 'Permit Status Awareness',
      options: ['I need help with permits', 'I have preliminary permits', 'I have all permits', 'I\'m not sure'],
      required: true
    }
  ];

  const decisionQuestions = [
    {
      id: 'decision-makers',
      label: 'Who makes the final decision?',
      options: ['Just me', 'Me and my spouse/partner', 'Family decision', 'Investment committee']
    },
    {
      id: 'decision-timeline',
      label: 'When do you plan to make a decision?',
      options: ['Within 1 week', 'Within 2 weeks', 'Within 1 month', 'Within 3 months']
    }
  ];

  const contactFields = [
    { id: 'full-name', type: 'text', label: 'Full Name', required: true },
    { id: 'email', type: 'email', label: 'Email Address', required: true },
    { id: 'phone', type: 'tel', label: 'Phone Number', required: true },
    {
      id: 'preferred-contact',
      type: 'select',
      label: 'Preferred Contact Method',
      options: ['Phone call', 'Email', 'Text message', 'In-person meeting']
    }
  ];

  const updateLeadData = (key: string, value: string) => {
    setLeadData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Calculate lead score
    const score = calculateLeadScore(leadData);
    const formDataWithScore = { ...leadData, leadScore: score };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Lead submitted:', formDataWithScore);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getScopeOptions = (projectType: string) => {
    const scopeOptions: { [key: string]: string[] } = {
      'full-adu': [
        'Studio ADU (under 600 sq ft)',
        'One-bedroom ADU (600-800 sq ft)',
        'Two-bedroom ADU (800-1200 sq ft)',
        'Luxury ADU (1200+ sq ft)',
        'ADU with commercial kitchen',
        'Multi-unit ADU development'
      ],
      'kitchen': [
        'Cabinet refacing only',
        'Full cabinet replacement',
        'Layout reconfiguration',
        'Kitchen island addition',
        'Complete kitchen gut renovation',
        'Open concept conversion'
      ],
      'bathroom': [
        'Vanity and fixtures update',
        'Shower/tub replacement',
        'Complete bathroom renovation',
        'Master suite addition',
        'Accessibility modifications',
        'Luxury spa conversion'
      ],
      'full-renovation': [
        'Partial home renovation',
        'Complete home gut renovation',
        'Historic home restoration',
        'Modern home conversion',
        'Multi-unit property renovation',
        'Commercial to residential conversion'
      ],
      '3d-planning': [
        'Basic floor plans',
        'Detailed architectural drawings',
        '3D renderings and walkthroughs',
        'Permit-ready construction documents',
        'Interior design planning',
        'Landscape design integration'
      ]
    };
    return scopeOptions[projectType] || [];
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What type of project are you planning?</h3>
              <p className="text-gray-300">Select the service that best describes your needs</p>
            </div>
            <div className="grid gap-4">
              {projectTypes.map((type) => (
                <motion.div
                  key={type.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    leadData.projectType === type.id
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                      : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                  }`}
                  onClick={() => updateLeadData('projectType', type.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-lg ${
                        leadData.projectType === type.id ? 'bg-[var(--primary-gold)]' : 'bg-white/10'
                      }`}>
                        {/* Icon placeholder */}
                        <div className="w-6 h-6 bg-white/50 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{type.title}</h4>
                      <p className="text-gray-300 mb-3">{type.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--primary-gold)]">{type.estimatedTimeline}</span>
                        <span className="text-[var(--primary-gold)]">{type.priceRange}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 2:
        const scopeOptions = getScopeOptions(leadData.projectType || '');
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What's the scope of your project?</h3>
              <p className="text-gray-300">Help us understand the specific details</p>
            </div>
            <div className="grid gap-3">
              {scopeOptions.map((option) => (
                <motion.div
                  key={option}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    leadData.projectScope === option
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                      : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                  }`}
                  onClick={() => updateLeadData('projectScope', option)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-white">{option}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">When would you like to start?</h3>
              <p className="text-gray-300">Your timeline helps us prioritize your project</p>
            </div>
            <div className="grid gap-4">
              {timelineOptions.map((option) => (
                <motion.div
                  key={option.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    leadData.timeline === option.id
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                      : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                  }`}
                  onClick={() => updateLeadData('timeline', option.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white">{option.label}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      option.urgency === 'high' ? 'bg-red-500/20 text-red-300' :
                      option.urgency === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {option.urgency} priority
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 4:
        const ranges = budgetRanges[leadData.projectType || ''] || [];
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What's your budget range?</h3>
              <p className="text-gray-300">This helps us recommend the best options for you</p>
            </div>
            <div className="grid gap-3">
              {ranges.map((range) => (
                <motion.div
                  key={range.range}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    leadData.budget === range.range
                      ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                      : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                  }`}
                  onClick={() => updateLeadData('budget', range.range)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white">{range.range}</span>
                    {range.qualified && (
                      <CheckCircle className="text-[var(--primary-gold)]" size={20} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Property Details</h3>
              <p className="text-gray-300">Help us understand your property situation</p>
            </div>
            <div className="space-y-6">
              {propertyQuestions.map((question) => (
                <div key={question.id}>
                  <label className="block text-white font-medium mb-3">{question.label}</label>
                  {question.type === 'text' ? (
                    <input
                      type="text"
                      placeholder={question.placeholder}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                      value={leadData[question.id as keyof LeadData] || ''}
                      onChange={(e) => updateLeadData(question.id, e.target.value)}
                    />
                  ) : (
                    <div className="grid gap-2">
                      {question.options?.map((option) => (
                        <motion.div
                          key={option}
                          className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                            leadData[question.id as keyof LeadData] === option
                              ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                              : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                          }`}
                          onClick={() => updateLeadData(question.id, option)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <span className="text-white">{option}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Decision Process</h3>
              <p className="text-gray-300">Understanding your decision-making process helps us serve you better</p>
            </div>
            <div className="space-y-6">
              {decisionQuestions.map((question) => (
                <div key={question.id}>
                  <label className="block text-white font-medium mb-3">{question.label}</label>
                  <div className="grid gap-2">
                    {question.options.map((option) => (
                      <motion.div
                        key={option}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                          leadData[question.id as keyof LeadData] === option
                            ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                            : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                        }`}
                        onClick={() => updateLeadData(question.id, option)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="text-white">{option}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Almost Done!</h3>
              <p className="text-gray-300">Let's get your contact information so we can start your project</p>
              <div className="mt-4 p-4 bg-[var(--primary-gold)]/10 rounded-lg border border-[var(--primary-gold)]/20">
                <div className="flex items-center justify-center space-x-2 text-[var(--primary-gold)]">
                  <Star size={20} />
                  <span className="font-semibold">Join 500+ satisfied clients</span>
                  <Star size={20} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {contactFields.map((field) => (
                <div key={field.id}>
                  <label className="block text-white font-medium mb-2">{field.label}</label>
                  {field.type === 'select' ? (
                    <div className="grid gap-2">
                      {field.options?.map((option) => (
                        <motion.div
                          key={option}
                          className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                            leadData[field.id as keyof LeadData] === option
                              ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/10'
                              : 'border-white/20 bg-white/5 hover:border-[var(--primary-gold)]/50'
                          }`}
                          onClick={() => updateLeadData(field.id, option)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <span className="text-white">{option}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[var(--primary-gold)] focus:outline-none transition-colors"
                      value={leadData[field.id as keyof LeadData] || ''}
                      onChange={(e) => updateLeadData(field.id, e.target.value)}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Free consultation • No obligation • 24-hour response guarantee
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-morphism bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-md mx-4 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 bg-[var(--primary-gold)] rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="text-[var(--primary-charcoal)]" size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                Your information has been submitted. Our team will contact you within 24 hours to schedule your free consultation.
              </p>
              <motion.button
                className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-morphism bg-white/10 backdrop-blur-lg rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-luxury"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div>
                <h2 className="text-xl font-bold text-white">Free Project Assessment</h2>
                <p className="text-gray-300 text-sm">Step {currentStep} of {totalSteps}</p>
              </div>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-gradient-gold h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 pb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-white/20">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 1 ? { scale: 0.98 } : {}}
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </motion.button>

              {currentStep === totalSteps ? (
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-3 rounded-full font-bold transition-all duration-300 disabled:opacity-50"
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[var(--primary-charcoal)]/30 border-t-[var(--primary-charcoal)] rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <CheckCircle size={20} />
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-3 rounded-full font-bold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;