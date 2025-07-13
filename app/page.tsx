'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import LeadForm from '@/components/forms/LeadForm';

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      
      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
      
      {/* Global Lead Form Trigger */}
      <div id="lead-form" className="invisible">
        <button 
          onClick={() => setIsLeadFormOpen(true)}
          className="invisible"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}