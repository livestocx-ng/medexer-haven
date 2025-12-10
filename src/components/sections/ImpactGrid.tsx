import React from 'react';
import { motion } from 'framer-motion';

const ImpactGrid: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-800">Our <span className="text-[#009688]">Impact</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Block 1: Survivors (Teal) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#009688] text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px]"
        >
          <h3 className="text-xl font-semibold mb-4">Survivors</h3>
          <p className="text-6xl font-bold mb-6">7,182</p>
          <p className="text-sm leading-relaxed opacity-90">
            Through the HerShield Crisis Centre, we have been able to provide personalized and essential support services to survivors of digital and physical violence.
          </p>
        </motion.div>

        {/* Block 2: Image 1 */}
        <div className="relative min-h-[400px]">
           <img 
             src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop" 
             alt="Counseling session" 
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-red-500/20 mix-blend-multiply"></div>
        </div>

        {/* Block 3: Adolescent Educated (Pink) */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-[#D81B60] text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px]"
        >
          <h3 className="text-xl font-semibold mb-4">Adolescent Educated</h3>
          <p className="text-6xl font-bold mb-6">12,446</p>
          <p className="text-sm leading-relaxed opacity-90">
            HerShield Education Initiatives empower male and female students at secondary and university levels with the tools and knowledge to prevent and report SGBV.
          </p>
        </motion.div>

        {/* Block 4: Image 2 */}
        <div className="relative min-h-[400px]">
             <img 
               src="/team.jpg" 
               alt="Team presentation" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-teal-500/20 mix-blend-multiply"></div>
        </div>

        {/* Block 5: Reached (Dark) */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="bg-[#263238] text-white p-12 flex flex-col justify-center items-center text-center min-h-[400px]"
        >
          <h3 className="text-xl font-semibold mb-4">Reached</h3>
          <p className="text-6xl font-bold mb-6">9,000+</p>
          <p className="text-sm leading-relaxed opacity-90">
             Community members engaged through our varied sensitization and awareness programs across the country.
          </p>
        </motion.div>

        {/* Block 6: Image 3 */}
        <div className="relative min-h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2669&auto=format&fit=crop" 
               alt="Support group" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
