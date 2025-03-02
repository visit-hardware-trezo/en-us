import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const TrezorHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure Your <span className="text-green-800">Crypto Assets</span> with Trezor Hardware Wallet
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            The most trusted and secure way to store your cryptocurrencies. 
            Protect your digital assets with military-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#cta" 
              className="bg-green-800 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              Shop Now
              <ChevronRight size={20} className="ml-2" />
            </a>
            <a 
              href="#features" 
              className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Trezor Hardware Wallet" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="text-green-800 mr-2" size={24} />
            <span className="font-medium">Military-grade security for your crypto assets</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="text-green-800 mr-2" size={24} />
            <span className="font-medium">Offline storage protects from online threats</span>
          </div>
          <div className="flex items-center">
            <Shield className="text-green-800 mr-2" size={24} />
            <span className="font-medium">Easy backup and recovery options</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrezorHero;