import React from 'react';
import '../../css/footer.css'
function Footer() {
  return (
    <div>
      <footer className='footer-04'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading'>
                <a href='#' className='logo'>
                  Rentrained.com
                </a>
              </h2>
              <p>
                A one stop destination to buy or rent goods
              </p>
              <a href='#'>
                read more <span className='ion-ios-arrow-round-forward'></span>
              </a>
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading'>Categories</h2>
              <ul className='list-unstyled'>
                <li>
                  <a href='#' className='py-1 d-block'>
                    Buy &amp; Sell
                  </a>
                </li>
                <li>
                  <a href='#' className='py-1 d-block'>
                    Merchant
                  </a>
                </li>
                <li>
                  <a href='#' className='py-1 d-block'>
                    Giving back
                  </a>
                </li>
                <li>
                  <a href='#' className='py-1 d-block'>
                    Help &amp; Support
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              
            </div>
            <div className='col-md-6 col-lg-3 mb-md-0 mb-4'>
              <h2 className='footer-heading'>Subcribe</h2>
              <form action='#' className='subscribe-form'>
                <div className='form-group d-flex'>
                  <input
                    type='text'
                    className='form-control rounded-left'
                    placeholder='Enter email address'
                  />
                  <button
                    type='submit'
                    className='form-control submit rounded-right'
                  >
                    <span className='sr-only'>Submit</span>
                    <i className='fa fa-paper-plane'></i>
                  </button>
                </div>
              </form>
              <h2 className='footer-heading mt-5'>Follow us</h2>
              <ul className='ftco-footer-social p-0'>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Twitter'
                  >
                    <span className='fa fa-twitter'></span>
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Facebook'
                  >
                    <span className=' fa fa-facebook'></span>
                  </a>
                </li>
                <li className='ftco-animate'>
                  <a
                    href='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Instagram'
                  >
                    <span className=' fa fa-instagram'></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
