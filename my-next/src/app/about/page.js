// app/about/page.js
import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to bringing you the finest selection of products with exceptional service.
        </p>
      </div>

      {/* Image and Story Section */}
      <div className="flex md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, our e-commerce store began with a simple mission: to provide high-quality products 
            at reasonable prices with excellent customer service.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small online shop has grown into a trusted marketplace serving thousands of 
            customers worldwide. We carefully curate our selection to ensure we offer only the best products across 
            multiple categories.
          </p>
          <p className="text-gray-700">
            Our team is passionate about what we do and committed to ensuring your shopping experience is 
            seamless and satisfying from browsing to delivery.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Quality", 
              description: "We never compromise on the quality of our products. Each item is carefully selected and tested to ensure it meets our high standards."
            },
            { 
              title: "Customer Satisfaction", 
              description: "Your happiness is our priority. We're not satisfied until you are, which is why we offer hassle-free returns and responsive customer support."
            },
            { 
              title: "Sustainability", 
              description: "We're committed to reducing our environmental impact through eco-friendly packaging and partnering with sustainable brands."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      
    </div>
  );
}