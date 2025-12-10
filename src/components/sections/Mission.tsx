import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden shadow-xl relative">
                   <img
                    src="/image_dr_maju.jpg"
                    alt="Dr. Maju Favour"
                    className="w-full h-full object-cover grayscal hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold">Dr. Favour Maju</p>
                      <p className="text-gray-300 text-sm">Co-Founder, Medexer HerShield</p>
                   </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -z-10 top-12 -left-12 w-full h-full border-4 border-gray-100 rounded-lg"></div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
                <div className="inline-block w-16 h-1 bg-primary mb-6"></div>
                <h2 className="text-3xl font-bold text-secondary mb-8 leading-tight">
                    "Digital spaces must be safe spaces. HerShield exists to reclaim agency for every woman online."
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        In an era where our lives are increasingly digital, the threat of online gender-based violence has grown exponentially.
                        Victims often suffer in silence, fearing stigma or lacking the tools to prove the abuse.
                    </p>
                    <p>
                        HerShield is a targeted initiative, born from the Medexer ecosystem and developed for the UNDP challenge.
                        We provide a secure vault for evidence that stands up in court, and a bridge to the emotional healing every survivor deserves.
                    </p>
                </div>
                <div className="mt-10">
                    <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-hover transition-colors">
                        Read Our Full Mission Statement
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
