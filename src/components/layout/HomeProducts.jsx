import React from 'react';
import ProductCard from './ProductCard';

function HomeProducts() {
  return (
    <div className='container  '>
      <h4 className='text-center product mt-2'>PRODUCTS</h4>
      <div className='d-inline'>
      <ProductCard/> 
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </div>
  );
}

export default HomeProducts;
