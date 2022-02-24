import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <div className='container product '>
        <h1 className='text-center contactheading mt-5'>
          {' '}
          <b>We'd Love To Hear From You</b>{' '}
        </h1>
        <p className='text-center'>
          Whether you're curious about features, have any complaints regarding
          any services - we're ready to answer any and all questions.
        </p>

        <div className='row'>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem', height: '18rem' }}>
              <div className='card-body'>
                <h2 className='card-title mb-3'>Get Support</h2>
                <h6
                  className='card-subtitle mb-4 text-muted'
                  style={{ color: 'grey' }}
                >
                  Having Issues with our services? - Contact us by writing an
                  email or call us on our customer care number
                </h6>
                <a href='#' className='card-link d-block'>
                  customer@rentrained.com
                </a>
                <a href='#' className='card-link d-block ml-0'>
                  +9112343863
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem', height: '18rem' }}>
              <div className='card-body'>
                <h2 className='card-title mb-3'>Partnership inquiries</h2>
                <h6
                  className='card-subtitle mb-4 text-muted'
                  style={{ color: 'grey' }}
                >
                  Want to inquire about Ads and Parnership, Write Us at these
                  contacts
                </h6>
                <a href='#' className='card-link d-block'>
                  partner@rentrained.com
                </a>
                <a href='#' className='card-link d-block ml-0'>
                  +9112343863
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem', height: '18rem' }}>
              <div className='card-body'>
                <h2 className='card-title mb-3'>Feedback</h2>
                <h6
                  className='card-subtitle mb-4 text-muted'
                  style={{ color: 'grey' }}
                >
                  We'd like to hear from you! - Please share your valuable
                  feedback with us
                </h6>
                <a href='#' className='card-link d-block'>
                  feedback@rentrained.com
                </a>
                <a href='#' className='card-link d-block ml-0'>
                  +9112343863
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className=' mt-4 text-center'>Frequently Asked Questions</h2>
        <p className='d-block text-center'>
          You can check out from these FAQs to get easy and quicker solution to
          your problems.
        </p>

        <div className='row text-center'>
          <div className='col-md-2'></div>
          <div className='col-md-8 d-flex justify-content-center mb-4'>
            <div className='card pt-4' style={{ width: '38rem', height: '45rem' }}>
              <div id='accordion'>
                <div className='card ' style={{width : "90%"}}>
                  <div className='card-header' id='headingOne'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link'
                        data-toggle='collapse'
                        data-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        1. I am Unable to Track the order
                      </button>
                    </h5>
                  </div>

                  <div
                    id='collapseOne'
                    className='collapse show'
                    aria-labelledby='headingOne'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. 
                    </div>
                  </div>
                </div>
                <div className='card' style={{width : "90%"}}>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed'
                        data-toggle='collapse'
                        data-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        2. I forgot my password
                      </button>
                    </h5>
                  </div>
                  <div
                    id='collapseTwo'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labo.
                    </div>
                  </div>
                </div>
                <div className='card' style={{width : "90%"}}>
                  <div className='card-header' id='headingThree'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed'
                        data-toggle='collapse'
                        data-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                        
                      >
                        3. The Item is not delivered
                      </button>
                    </h5>
                  </div>
                  <div
                    id='collapseThree'
                    className='collapse'
                    aria-labelledby='headingThree'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
