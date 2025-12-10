import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Sad pensive woman in dark"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset0 bg-gradient-to-r from-secondary via-secondary/0 to-secondary/0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-hover border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
             <Shield size={16} className="text-primary" />
             <span className="font-semibold text-sm uppercase tracking-wider text-white">Confidential & Secure</span>
          </div> */}

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            60% of Nigerian Women Face Digital Violence.<br />
            <span className="text-primary">You Are Not Alone.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            The first digital triage hub for secure evidence collection and immediate mental health recovery.
            We stand with you to reclaim your agency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-white text-lg font-bold rounded shadow-lg hover:bg-primary-hover transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
              Get Immediate Help
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-3">
              Secure Your Evidence
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
