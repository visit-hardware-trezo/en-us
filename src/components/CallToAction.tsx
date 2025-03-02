import React from 'react';
import { ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-10 md:p-16 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Crypto Future with Trezor Hardware Wallet
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Don't leave your digital assets vulnerable. Join thousands of satisfied users who trust Trezor for ultimate cryptocurrency security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white text-green-800 px-8 py-3 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center font-medium"
              >
                Shop Now
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;