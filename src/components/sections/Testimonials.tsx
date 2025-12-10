import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I didn't know how to prove what was happening to me. HerShield gave me a way to keep records safe without my abuser finding them. I finally feel like I have a voice.",
    author: "Anonymous Survivor",
    role: "Lagos, Nigeria"
  },
  {
    quote: "The grounding techniques helped me breathe again during a panic attack. Knowing that help was just a click away made all the difference.",
    author: "T.A.",
    role: "University Student"
  },
  {
    quote: "Connecting with a WARIF counselor through this platform changed my life. I realized it wasn't my fault. This tool is essential.",
    author: "Hidden Hero",
    role: "Abuja, Nigeria"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Voices of Resilience</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real stories from women who have reclaimed their safety and agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Quote className="text-primary mb-6 opacity-50" size={40} />
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">
                "{item.quote}"
              </p>
              <div>
                <p className="font-bold text-white">{item.author}</p>
                <p className="text-sm text-primary">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
