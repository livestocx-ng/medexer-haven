import React from 'react';
import { Lock, HeartPulse, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Lock,
    title: "The Evidence Vault",
    description: "Securely upload screenshots, audio, and links. All data is locally encrypted, timestamped, and hashed for potential legal admissibility. You hold the only key.",
    highlight: true,
  },
  {
    icon: HeartPulse,
    title: "Mental Health Triage",
    description: "Anonymous, AI-driven assessment to measure immediate trauma levels and suggest real-time grounding techniques to stabilize your mental state.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Connection Bridge",
    description: "When you are ready, get direct referrals to WARIF, STER, and verified trauma-informed therapists across Nigeria. You are never alone in recovery.",
    highlight: false,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary">Our Protection Pillars</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to protect your legal rights and restore your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border ${service.highlight ? 'border-primary/20' : 'border-gray-100'}`}
            >
              {service.highlight && (
                 <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                     CORE FEATURE
                 </div>
              )}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.highlight ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-secondary'}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors">
                Learn More &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
