import React from 'react';
import Footer from './Footer';

function About() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <div className='jumbotron jumbotron-fluid about'>
            <div className='container'>
              <h1 className=' aboutheading'>
                <b>About</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 about1'>
          <h1
            className=' text-center .aboutheadline'
            style={{ fontFamily: 'Abhaya libre', color: '#f1bc31' }}
          >
            Quality, Not Quantity
          </h1>
          <p>
            We have made quality our habit. It’s not something that we just
            strive for – we live by this principle every day.
          </p>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 about1'>
          <h1
            className=' text-center .aboutheadline'
            style={{ fontFamily: 'Abhaya libre' }}
          >
            OUR STORY
          </h1>
          <p className='mb-4'>
            Our mission is to provide a trusted and experienced online resource
            for the retail community. We are committed to providing our members
            with a wide range of products and services. This allows you to shop
            with confidence knowing you are shopping with a trusted brand that
            knows and understands the marketplace. We do this by delivering a
            wide selection of products and services that are tailored to fit
            your lifestyle. The company is founded by Anna and Michael Hofer,
            who have a keen interest in children’s fashion. Their aim is to
            provide the best possible shopping experience for children and their
            parents and to support the companies that do. Anna and Michael are
            passionate about children’s fashion and the role it plays in the
            lives of children. They believe that children can never grow up
            without fashion, and that fashion should always be available for
            them. 'We love children’s clothing. We believe that every child
            should have a wonderful wardrobe filled with clothes that will make
            them feel good. We love that children love clothes, that they want
            to look good and that they want to be in good clothes. We have
            created a fashion website where parents can find their children’s
            clothing, so they can take care of their children’s clothing and
            enjoy the good times.'
          </p>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='jumbotron jumbotron-fluid aboutServices'>
            <div className='container'>
              <h1
                className=' text-center'
                style={{ fontFamily: 'Abhaya libre' }}
              >
                <b>Our Services</b>
              </h1>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
