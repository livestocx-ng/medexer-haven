import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                 <h3 className="text-2xl font-bold mb-4">Medexer <span className="text-primary">HerShield</span></h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                     Reclaiming agency for women in digital spaces. Secure, anonymous, and supportive.
                 </p>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                 <ul className="space-y-2 text-gray-400 text-sm">
                     <li><a href="#" className="hover:text-primary transition-colors">The Vault</a></li>
                     <li><a href="#" className="hover:text-primary transition-colors">Mental Health Triage</a></li>
                     <li><a href="#" className="hover:text-primary transition-colors">Partner Network</a></li>
                 </ul>
            </div>
             <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Legal & Safety</h4>
                 <ul className="space-y-2 text-gray-400 text-sm">
                     <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                     <li><a href="#" className="hover:text-primary transition-colors">Data Security</a></li>
                 </ul>
            </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Medexer HerShield. All rights reserved.</p>
            <p className="mt-2 md:mt-0 max-w-md text-center md:text-right">
                <span className="text-primary font-bold">DISCLAIMER:</span> HerShield is a digital triage tool. For life-threatening emergencies, please contact local authorities or utilize the Emergency Banner resources.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
