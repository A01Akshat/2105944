// import React from 'react';
// import productData from './productData.json';

// function Card({ product }) {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
//       <img style={{width:"15rem",height:"10rem"}} src={`${process.env.PUBLIC_URL}/images/lap.png`} alt={product.productName} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{product.productName}</div>
//         <p className="text-red-700 text-base">
//           Price: ${product.price}<br />
//           Rating: {product.rating}<br />
//           Discount: {product.discount}%<br />
//           Availability: {product.availability}
//         </p>
//       </div>
//     </div>
//   );
// }

// const Home_Page=()=> {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {productData.map((product, index) => (
//         <Card key={index} product={product} />
//       ))}
//     </div>
//   );
// }

// export default Home_Page;

import React, { useState } from 'react';
import productData from './productsData.json';

function ProductCard({ product }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={`${process.env.PUBLIC_URL}/images/lap.png`} style={{width:"15rem",height:"10rem"}} alt={product.productName} 
        
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-red-700 text-base">
          Price: ${product.price}<br />
          Rating: {product.rating}<br />
          Discount: {product.discount}%<br />
          Availability: {product.availability}
        </p>
      </div>
    </div>
  );
}


//FILTERS CAN BE APPLIED BY EXPLICITELY CHANGING VALUES HERE
function App() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    minDiscount: 0,
    availability: 'all'
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = productData.filter(product => {
    return (
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      product.rating >= filters.minRating &&
      product.discount >= filters.minDiscount &&
      (filters.availability === 'all' || product.availability === filters.availability)
    );
  });

  return (
    <div>
      <div className="flex justify-center m-4">
        <label className="mr-2">Minimum Price:</label>
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
        <label className="mr-2">Maximum Price:</label>
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
        <label className="mr-2">Minimum Rating:</label>
        <input type="number" name="minRating" value={filters.minRating} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
        <label className="mr-2">Minimum Discount:</label>
        <input type="number" name="minDiscount" value={filters.minDiscount} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
        <label className="mr-2">Availability:</label>
        <select name="availability" value={filters.availability} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1">
          <option value="all">All</option>
          <option value="yes">Available</option>
          <option value="out-of-stock">Out of stock</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import productsData from './productsData.json';

// function ProductCard({ product }) {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
//       <Link to={`/product/${product.productName}`} className="block">
//         <img className="w-full" src={`${process.env.PUBLIC_URL}/images/product.jpg`} alt={product.productName} />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{product.productName}</div>
//           <p className="text-gray-700 text-base">
//             Price: ${product.price}<br />
//             Rating: {product.rating}<br />
//             Discount: {product.discount}%<br />
//             Availability: {product.availability}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }

// function ProductDetails({ match }) {
//   const { productName } = match.params;
//   const product = productsData.find(product => product.productName === productName);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
//       <img className="w-full" src={`${process.env.PUBLIC_URL}/images/product.jpg`} alt={product.productName} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{product.productName}</div>
//         <p className="text-gray-700 text-base">
//           Price: ${product.price}<br />
//           Rating: {product.rating}<br />
//           Discount: {product.discount}%<br />
//           Availability: {product.availability}
//         </p>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [filters, setFilters] = useState({
//     minPrice: 0,
//     maxPrice: 10000,
//     minRating: 0,
//     minDiscount: 0,
//     availability: 'all'
//   });

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const filteredProducts = productsData.filter(product => {
//     return (
//       product.price >= filters.minPrice &&
//       product.price <= filters.maxPrice &&
//       product.rating >= filters.minRating &&
//       product.discount >= filters.minDiscount &&
//       (filters.availability === 'all' || product.availability === filters.availability)
//     );
//   });

//   return (
  
//       <div>
//         <div>
//                 <div className="flex justify-center m-4">
//                   <label className="mr-2">Minimum Price:</label>
//                   <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
//                   <label className="mr-2">Maximum Price:</label>
//                   <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
//                   <label className="mr-2">Minimum Rating:</label>
//                   <input type="number" name="minRating" value={filters.minRating} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
//                   <label className="mr-2">Minimum Discount:</label>
//                   <input type="number" name="minDiscount" value={filters.minDiscount} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1 mr-2" />
//                   <label className="mr-2">Availability:</label>
//                   <select name="availability" value={filters.availability} onChange={handleFilterChange} className="border border-gray-400 rounded px-2 py-1">
//                     <option value="all">All</option>
//                     <option value="yes">Available</option>
//                     <option value="out-of-stock">Out of stock</option>
//                   </select>
//                 </div>
//                 <div className="flex flex-wrap justify-center">
//                   {filteredProducts.map((product, index) => (
//                     <ProductCard key={index} product={product} />
//                   ))}
//                 </div>
//               </div>
            
          
        
//       </div>
    
//   );
// }

// export default App;
