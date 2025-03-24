// app/products/page.js
import Link from 'next/link';
import Image from 'next/image';

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' }); 
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">All Products</h1>
        <p className="mt-2 text-lg text-gray-600">Browse our latest collection of products</p>
      </div>
      
     

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64 bg-gray-100 flex items-center justify-center p-4">
              {/* Using a div with background image as fallback since we can't use external images with Image */}
              <div 
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-indigo-600">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">{product.rating?.rate || "N/A"}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
}