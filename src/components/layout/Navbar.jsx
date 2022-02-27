import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css';

function Navbar(props) {
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
            <NavLink to='/' activeClassName='active' className='nav-item '>
              <a href='/' className='nav-link'>
                Home
              </a>
            </NavLink>
            
            <NavLink to='/about' className='nav-item'>
              <a href='/about' className='nav-link'>
                About
              </a>
            </NavLink>
            <NavLink to='/store' className='nav-item'>
              <a href='/store' className='nav-link'>
                Store
              </a>
            </NavLink>
            <NavLink to='/contact' className='nav-item'>
              <a className='nav-link'>
                Contact
              </a>
            </NavLink>
            
            <NavLink to='signup' className='nav-item '>
              <a  className='nav-link'>
                Sign Up
              </a>
            </NavLink>
            <NavLink to='/login' className='nav-item'>
              <a className='nav-link'>
                Log In
              </a>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
