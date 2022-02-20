import React from 'react';
import '../../css/navbar.css';

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
      id='ftco-navbar'
    >
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          Rentrained<span>.com</span>
        </a>
        <form action='#' className='searchform order-sm-start order-lg-last'>
          <div className='form-group d-flex'>
            <input
              type='text'
              className='form-control pl-3'
              placeholder='Search'
            />
            <button
              type='submit'
              placeholder=''
              className='form-control search'
            >
              <span className='fa fa-search'></span>
            </button>
          </div>

        </form>
        
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#ftco-nav'
          aria-controls='ftco-nav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='fa fa-bars'></span> Menu
        </button>
        <div className='collapse navbar-collapse' id='ftco-nav'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <a href='#' className='nav-link'>
                Home
              </a>
            </li>
            
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Store
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Contact
              </a>
            </li>
            
            <li className='nav-item '>
              <a href='#' className='nav-link'>
                Sign Up
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
