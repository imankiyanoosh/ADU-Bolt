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

  const openLeadForm = () => setIsLeadFormOpen(true);

  return (
    <div className="min-h-screen">
      <Header onOpenLeadForm={openLeadForm} />
      <main>
        <Hero onOpenLeadForm={openLeadForm} />
        <About />
        <Services onOpenLeadForm={openLeadForm} />
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
          onClick={openLeadForm}
          className="invisible"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}