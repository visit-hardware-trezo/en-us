import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say About <span className="text-green-200">Trezor Hardware Wallet</span>
          </h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Join thousands of satisfied users who trust Trezor to secure their digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              "After losing some crypto in an exchange hack, I decided to take security seriously. My Trezor has been a game-changer. The setup was straightforward, and I sleep better knowing my assets are truly secure."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold text-xl">JD</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">James Davis</h4>
                <p className="text-gray-600">Crypto Investor</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              "As someone who's not very tech-savvy, I was worried about using a hardware wallet. The Trezor Model One surprised me with how user-friendly it is. The step-by-step setup guide made everything simple, and now I feel in control of my crypto."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold text-xl">SM</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Sarah Miller</h4>
                <p className="text-gray-600">New to Crypto</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              "I've been using the Trezor Model T for over two years now, and it's been flawless. The touchscreen makes transactions easy to verify, and I appreciate the regular firmware updates that keep security at the cutting edge."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold text-xl">RJ</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Robert Johnson</h4>
                <p className="text-gray-600">Blockchain Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;