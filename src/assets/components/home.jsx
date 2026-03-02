import React from 'react'
import './home.css';
import BannerBackground from '../home-banner-background.png';
import BannerImage from '../home-banner-image.png';
import {FiArrowRight} from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          { <img src={BannerBackground} alt="" />}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like chopping and marinating, so you can cook a delicious meal in no time.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;