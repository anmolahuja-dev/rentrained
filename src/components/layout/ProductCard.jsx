import React from 'react';
import pdct from '../../images/pdct.svg'

function ProductCard() {
  return (
    <div className='d-inline'>
    <div className='card' style={{width : '18rem'}}>
      <img src={pdct} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Product title</h5>
        <p className='card-text'>
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