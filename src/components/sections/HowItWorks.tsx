import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Lock, HeartPulse, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: LogOut,
    title: "1. Enter Safely",
    description: "Access the platform securely. Use the 'Quick Exit' button at any time to instantly clear your screen and redirect if you are unsafe.",
  },
  {
    icon: Lock,
    title: "2. Secure Evidence",
    description: "Upload screenshots, audio, or links to the Evidence Vault. Your data is locally encrypted, timestamped, and stored securely.",
  },
  {
    icon: HeartPulse,
    title: "3. Triage & Stabilize",
    description: "Complete an anonymous AI-driven assessment to measure trauma levels and receive immediate grounding techniques.",
  },
  {
    icon: MessagesSquare,
    title: "4. Connect to Help",
    description: "Based on your assessment, get matched with verified partners like WARIF or STER for legal and psychological support.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary">How It Works</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple, secure, and survivor-centric process designed to restore your agency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative z-10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 border-4 border-white">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
