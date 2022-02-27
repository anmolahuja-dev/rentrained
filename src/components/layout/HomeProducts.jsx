import React from 'react';
import ProductCard from './ProductCard';

function HomeProducts() {
  return (
    <div className='container product '>
      <h3 className='text-center producthead mt-4'> <b>PRODUCTS</b> </h3>
      <p className='text-center'>Explore From the wide range of product and buy anything on rent in a few click without any hassle</p>
      <div className="categories d-flex justify-content-center mb-4">
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <a className="nav-item nav-link active"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Sofa" aria-selected="true">Household</a>
        <a className="nav-item nav-link"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Table" aria-selected="false">Automobiles</a>
        <a className="nav-item nav-link"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Chair" aria-selected="false">Electronics</a>
        <a className="nav-item nav-link"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Bed" aria-selected="false">Furnitures</a>
        <a className="nav-item nav-link"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Lightning" aria-selected="false">Fashion</a>
        <a className="nav-item nav-link"  data-toggle="tab" href="#" role="tab" aria-controls="nav-Decore" aria-selected="false">more</a>
        </div>
       
      </div>
      
      <div className="row mt-3 mb-4">
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
        <div className="col-md-4">
          <ProductCard/>
        </div>
      </div>
      
      <div className="row justify-content-center">
      <a href="#" className="btn btn-lg btn-outline-warning mb-3 mt-4 mx-auto"> Discover More</a>
      </div>
    </div>
  );
}

export default HomeProducts;
