import React from 'react';
import banner1 from '../../images/banner1.png';
import bannerv from '../../images/bannerv.mp4';
import banner2 from '../../images/banner2.mp4';
import HomeProducts from './HomeProducts';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <div
        id='carouselExampleSlidesOnly'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <video className='img-fluid' autoPlay  muted>
              <source src={banner2} type='video/mp4' />
            </video>
          </div>
          <div className='carousel-item'>
            <video className='img-fluid' autoPlay muted>
              <source src={bannerv} type='video/mp4' />
            </video>
          </div>
          <div className='carousel-item'>
            <img src={banner1} className='d-block w-100' alt='...' />
          </div>
        </div>
      </div>
      <HomeProducts/>
      <Footer/>
    </div>
  );
}

export default HomePage;
