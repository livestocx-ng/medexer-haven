import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">In immediate physical danger?</h2>
                <p className="text-white/80">
                    Your safety comes first. Disconnect and find physical shelter immediately.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:112" className="px-6 py-3 bg-white text-primary font-bold rounded shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call Emergency (112)
                </a>
                {/* <button className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Find Physical Shelter
                </button> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;

