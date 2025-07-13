'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, Calendar, DollarSign } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageIndices, setImageIndices] = useState<{[key: number]: number}>({});

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'adu', label: 'ADU Construction' },
    { id: 'kitchen', label: 'Kitchen Renovation' },
    { id: 'bathroom', label: 'Bathroom Remodel' },
    { id: 'full-home', label: 'Full Home Renovation' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Studio ADU',
      category: 'adu',
      location: 'Palo Alto, CA',
      completedDate: 'October 2024',
      investment: '$180,000',
      valueAdd: '$220,000',
      size: '650 sq ft',
      description: 'A stunning modern studio ADU with floor-to-ceiling windows, luxury finishes, and smart home integration.',
      images: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        'https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
      ],
      features: ['Smart home integration', 'Luxury vinyl flooring', 'Energy-efficient appliances', 'Private entrance']
    },
    {
      id: 2,
      title: 'Luxury Kitchen Transformation',
      category: 'kitchen',
      location: 'Menlo Park, CA',
      completedDate: 'September 2024',
      investment: '$85,000',
      valueAdd: '$110,000',
      size: '400 sq ft',
      description: 'Complete kitchen renovation featuring custom cabinetry, quartz countertops, and premium appliances.',
      images: [
        'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
      ],
      features: ['Custom cabinetry', 'Quartz countertops', 'Premium appliances', 'Under-cabinet lighting']
    },
    {
      id: 3,
      title: 'Two-Bedroom ADU Paradise',
      category: 'adu',
      location: 'Mountain View, CA',
      completedDate: 'August 2024',
      investment: '$320,000',
      valueAdd: '$380,000',
      size: '1,200 sq ft',
      description: 'A luxurious two-bedroom ADU with open-concept living, premium finishes, and private outdoor space.',
      images: [
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
        'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
      ],
      features: ['Two bedrooms', 'Open concept', 'Private patio', 'In-unit laundry']
    },
    {
      id: 4,
      title: 'Spa-Inspired Bathroom',
      category: 'bathroom',
      location: 'Sunnyvale, CA',
      completedDate: 'July 2024',
      investment: '$45,000',
      valueAdd: '$60,000',
      size: '120 sq ft',
      description: 'A complete bathroom transformation featuring luxury fixtures, heated floors, and spa-like amenities.',
      images: [
        'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg',
        'https://images.pexels.com/photos/2228225/pexels-photo-2228225.jpeg',
        'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg'
      ],
      features: ['Heated floors', 'Rain shower', 'Custom vanity', 'Smart mirrors']
    },
    {
      id: 5,
      title: 'Complete Home Renovation',
      category: 'full-home',
      location: 'Los Altos, CA',
      completedDate: 'June 2024',
      investment: '$450,000',
      valueAdd: '$650,000',
      size: '2,800 sq ft',
      description: 'A comprehensive home renovation transforming a 1960s ranch into a modern luxury residence.',
      images: [
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
      ],
      features: ['Open floor plan', 'Vaulted ceilings', 'Premium finishes', 'Landscaping included']
    },
    {
      id: 6,
      title: 'Studio ADU with Loft',
      category: 'adu',
      location: 'Cupertino, CA',
      completedDate: 'May 2024',
      investment: '$220,000',
      valueAdd: '$280,000',
      size: '800 sq ft',
      description: 'An innovative studio ADU design with a loft space, maximizing both living area and storage.',
      images: [
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg'
      ],
      features: ['Loft design', 'High ceilings', 'Modern finishes', 'Energy efficient']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextImage = (projectId: number, projectImages: string[]) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % projectImages.length
    }));
  };

  const prevImage = (projectId: number, projectImages: string[]) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + projectImages.length) % projectImages.length
    }));
  };

  const getCurrentImageIndex = (projectId: number) => {
    return imageIndices[projectId] || 0;
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Our <span className="text-gradient-gold">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Explore our recent projects showcasing luxury craftsmanship, innovative design, and exceptional value creation.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-gold text-[var(--primary-charcoal)] shadow-luxury'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-morphism bg-white backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              layout
            >
              {/* Project Image Carousel */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.images[getCurrentImageIndex(project.id)]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(project.id, project.images)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.images)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary-gold)] text-[var(--primary-charcoal)] px-3 py-1 rounded-full text-sm font-semibold">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>

                {/* External Link */}
                <div className="absolute top-4 right-4">
                  <motion.button
                    className="bg-white/90 text-[var(--primary-charcoal)] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary-charcoal)] mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Completed {project.completedDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign size={16} className="mr-2" />
                    <span>{project.size} • {project.investment}</span>
                  </div>
                </div>

                {/* Value Addition */}
                <div className="bg-gradient-to-r from-[var(--primary-gold)]/10 to-[var(--accent-gold)]/10 border border-[var(--primary-gold)]/20 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--primary-charcoal)]">
                      {project.valueAdd}
                    </div>
                    <div className="text-sm text-gray-600">Property Value Added</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[var(--primary-gold)] rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[var(--primary-charcoal)] mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients and transform your property into a luxury income generator.
          </p>
          <motion.button
            className="bg-gradient-gold hover:bg-gradient-gold-hover text-[var(--primary-charcoal)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-luxury"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;