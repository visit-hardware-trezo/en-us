import React from 'react';

const TrezorContent: React.FC = () => {
  return (
    <>
      <section id="security" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uncompromising <span className="text-green-800">Security</span> for Your Digital Assets
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                The Trezor hardware wallet represents the gold standard in cryptocurrency security, offering a comprehensive solution for safeguarding your digital assets against both online and physical threats.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security Features:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Offline private key generation and storage</li>
                <li>Secure element chip resistant to physical tampering</li>
                <li>PIN protection with exponential timeout</li>
                <li>Optional passphrase for additional security layer</li>
                <li>Recovery seed backup for wallet restoration</li>
                <li>Open-source firmware for transparency and security auditing</li>
              </ul>
              
              <p className="text-lg text-gray-700">
                With Trezor, your cryptocurrencies remain protected even if your computer is compromised or your device is stolen. The combination of hardware isolation and cryptographic security ensures that your private keys never leave the device.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Trezor Security Features" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trezor <span className="text-green-800">Hardware Wallet</span> Models
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the perfect Trezor model that fits your cryptocurrency security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Trezor Model T</h3>
                <p className="text-gray-700 mb-4">
                  The flagship model with a color touchscreen for enhanced security and user experience. Supports all major cryptocurrencies and tokens.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700">
                  <li>Full-color touchscreen interface</li>
                  <li>Support for 1,800+ cryptocurrencies</li>
                  <li>Advanced recovery methods</li>
                  <li>USB-C connectivity</li>
                  <li>Built-in SD card slot for firmware updates</li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="#cta" 
                    className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Trezor Model One</h3>
                <p className="text-gray-700 mb-4">
                  The original hardware wallet that revolutionized cryptocurrency security. Simple, effective, and affordable.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700">
                  <li>OLED display with physical buttons</li>
                  <li>Support for 1,000+ cryptocurrencies</li>
                  <li>Compact and portable design</li>
                  <li>USB connectivity</li>
                  <li>Affordable entry-level security</li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="#cta" 
                    className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-green-800">Trezor Hardware Wallet</span> Is Essential
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                In today's digital landscape, securing your cryptocurrency investments is more important than ever. Trezor hardware wallets provide the ultimate protection against the growing threats facing crypto holders.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits of Using Trezor:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Complete control over your private keys</li>
                <li>Protection from exchange hacks and failures</li>
                <li>Immunity to computer viruses and malware</li>
                <li>User-friendly interface for beginners and experts</li>
                <li>Regular firmware updates for enhanced security</li>
                <li>Compatibility with popular wallet software</li>
              </ul>
              
              <p className="text-lg text-gray-700">
                With a Trezor hardware wallet, you're not just buying a device – you're investing in peace of mind. Your cryptocurrencies remain secure and accessible only to you, regardless of what happens to exchanges or online services.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Trezor Hardware Wallet Benefits" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrezorContent;