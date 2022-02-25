import React from 'react';
import pdct from '../../images/pdct.svg'

function ProductCard() {
  return (
    <div className='d-inline'>
    <div className='card text-center' style={{width : '18rem'}}>
      <img src={pdct} className='card-img-top ' alt='...' style={{width:"12rem", height:'9rem'}} />
      <div className='card-body'>
        <h5 className='card-title mb-1' style={{fontSize:"20px"}}>Product title</h5>
        <p className='card-text mb-1' style={{fontSize:"15px"}}>
          Some quick example text to build on the product title and make up the
          bulk of the product's content.
        </p>
        <span className='d-block font-weight-bolder'> Rs :- 5000/month </span>
      </div>
    </div>
    </div>
  )
}

export default ProductCard