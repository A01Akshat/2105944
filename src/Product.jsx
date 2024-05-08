import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './products.json';

function Product() {
  const { productName } = useParams();
  const product = productsData.find(product => product.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={`${process.env.PUBLIC_URL}/images/product.jpg`} alt={product.productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-gray-700 text-base">
          Price: ${product.price}<br />
          Rating: {product.rating}<br />
          Discount: {product.discount}%<br />
          Availability: {product.availability}
        </p>
      </div>
    </div>
  );
}

export default Product;
