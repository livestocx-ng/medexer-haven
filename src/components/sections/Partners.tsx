import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
    // Using placeholder images for partners as we don't have the actual assets
    const partners = [
      "/hindsight_ventures.png",
      "/UNICEF.png",
      "/cchub.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#009688]">Our Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscal hover:grayscale-0 transition-all duration-500">
            {partners.map((logo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <img 
                        src={logo} 
                        alt="Partner Logo" 
                        width={120}
                        height={100}
                        className="h8 md:h10 object-contain"
                    />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
