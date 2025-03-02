import React from 'react';
import { Shield, Lock, Wallet, ChevronRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-800">Trezor Hardware Wallet</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trezor offers unparalleled security features that keep your cryptocurrencies safe from online threats and hackers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-800">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Shield className="text-green-800" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Storage Security</h3>
            <p className="text-gray-700 mb-4">
              Trezor hardware wallets keep your private keys offline and protected from online attacks, malware, and phishing attempts.
            </p>
            <a href="#security" className="text-green-800 font-medium flex items-center hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-800">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Lock className="text-green-800" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">PIN Protection</h3>
            <p className="text-gray-700 mb-4">
              Secure your Trezor with a PIN code that prevents unauthorized access, with advanced protection against brute force attacks.
            </p>
            <a href="#security" className="text-green-800 font-medium flex items-center hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-800">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Wallet className="text-green-800" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Currency Support</h3>
            <p className="text-gray-700 mb-4">
              Store and manage multiple cryptocurrencies in one device, with support for Bitcoin, Ethereum, and thousands of other tokens.
            </p>
            <a href="#models" className="text-green-800 font-medium flex items-center hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;