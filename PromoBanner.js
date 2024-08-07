import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoBanner.css';

function PromoBanner() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <div className="promo-banner">
      <h2>THE EYE-CONIC SALE</h2>
      <p>Last 3 days</p>
      <p>Free lenses with every frame</p>
      <button onClick={handleShopNowClick}>Shop Now</button>
    </div>
  );
}

export default PromoBanner;
