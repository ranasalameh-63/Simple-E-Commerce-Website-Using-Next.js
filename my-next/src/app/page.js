// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Welcome to Our E-Commerce Store
            </h1>
            <p className="max-w-xl mx-auto text-xl text-gray-500 mb-8">
              Discover amazing products at incredible prices
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md border border-indigo-600 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Newsletter */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Newsletter
            </h2>
            <p className="max-w-xl mx-auto mb-6">
              Subscribe to get special offers, free giveaways, and product launches.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="px-4 py-2 bg-indigo-900 text-white font-medium rounded-r-md hover:bg-indigo-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}