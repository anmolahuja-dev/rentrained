import React from 'react';
import ProductCard from '../layout/ProductCard';
import Footer from '../layout/Footer';
function Store() {
  return (
    <>
      <nav className=' container navbar navbar-expand-lg navbar-light bg-light '>
        <div className='dropdown'>
          <a
            className='categories dropdown-toggle'
            href='#'
            role='button'
            id='dropdownMenuLink'
            data-toggle='dropdown'
            aria-expanded='false'
          >
            All Categories
          </a>

          <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <div className='row'>
              <div className='col-4'>
                <div className='dropdown-item' id='catergory1'>
                  <a className=' categorylink' href='#'>
                    <b>Automobiles</b>
                  </a>
                  <ul className='categorieslist'>
                    <li>
                      <a href='' className='categorylink'>
                        Cars
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Bike
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='dropdown-item' id='catergory1'>
                  <a className=' categorylink' href='#'>
                    <b>Households</b>
                  </a>
                  <ul className='categorieslist'>
                    <li>
                      <a href='' className='categorylink'>
                        Kitchenware
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Books
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-4'>
                <div className='dropdown-item' id='catergory1'>
                  <a className=' categorylink' href='#'>
                    <b>Electronics & Appliances</b>
                  </a>
                  <ul className='categorieslist'>
                    <li>
                      <a href='' className='categorylink'>
                        Tvs, Video-Audio
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Computers and Laptops
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Cameras and Lenses
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Computer Accessories
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        ACs
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Washing Machine
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-4'>
                <div className='dropdown-item' id='catergory1'>
                  <a className=' categorylink' href='#'>
                    <b>Fashion</b>
                  </a>
                  <ul className='categorieslist'>
                    <li>
                      <a href='' className='categorylink'>
                        Men
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Women
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Kids
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className='dropdown-item' id='catergory1'>
                  <a className=' categorylink' href='#'>
                    <b>Furniture</b>
                  </a>
                  <ul className='categorieslist'>
                    <li>
                      <a href='' className='categorylink'>
                        Sofa and Dinnings
                      </a>
                    </li>
                    <li>
                      <a href='' className='categorylink'>
                        Beds and wardrobes
                      </a>
                    </li>
                    
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item ml-4'>
              <a className='nav-link' href='#'>
                Automobiles <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                Households <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                Electronics <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                Fashion <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                Furnitures <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                Books <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item  ml-2'>
              <a className='nav-link' href='#'>
                House and Apartments <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

        <div className="row">
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
            <div className="col-3">
                <ProductCard/> 
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Store;
