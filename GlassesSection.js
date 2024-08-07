import React from 'react';
import './GlassesSection.css';

const glassesData = [
  { name: 'Eyeglasses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/Apr22/a2.png' },
  { name: 'Sunglasses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/Apr22/b2.png' },
  { name: 'Screen Glasses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/Apr22/d2.png' },
  { name: 'Contact Lenses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/Apr22/d.png' },
  { name: 'Power Sunglasses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/Apr22/e2.png' },
  { name: 'Progressive Lenses', imgSrc: 'https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg' },
];

function GlassesSection() {
  return (
    <div className="glasses-section">
      {glassesData.map((item, index) => (
        <div key={index} className="glasses-item">
          <img src={item.imgSrc} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default GlassesSection;
