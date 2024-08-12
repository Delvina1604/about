// // // // src/Banner.js
// // // import React from 'react';
// // // import './Banner.css';

// // // const Banner = ({ title, subtitle, buttonText, imageUrl }) => {
// // //   return (
// // //     <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
// // //       <div className="banner-content">
// // //         <h1>{title}</h1>
// // //         <p>{subtitle}</p>
// // //         <button>{buttonText}</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Banner;
// // import React from 'react';
// // import './Banner.css';

// // const Banner = ({ title, subtitle, buttonText, imageUrl }) => {
// //   return (
// //     <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
// //       {title && <h2>{title}</h2>}
// //       {subtitle && <p>{subtitle}</p>}
// //       {buttonText && <button>{buttonText}</button>}
// //     </div>
// //   );
// // };

// // export default Banner;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Banner.css';

// const Banner = ({ title, subtitle, buttonText, imageUrl, index }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (index === 4) { // Check if it's the 4th banner
//       navigate('/homeservice');
//     }
//   };

//   return (
//     <div className="banner" onClick={handleClick} style={{ backgroundImage: `url(${imageUrl})` }}>
//       {title && <h2>{title}</h2>}
//       {subtitle && <p>{subtitle}</p>}
//       {buttonText && <button>{buttonText}</button>}
//     </div>
//   );
// };

// export default Banner;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = ({ title, subtitle, buttonText, imageUrl, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (index === 4) { // Check if it's the 4th banner
      navigate('/homeservice');
    }
    if (index === 2) { // Check if it's the 4th banner
      navigate('/service');
    }
  };

  return (
    <div className="banner" onClick={handleClick} style={{ backgroundImage: `url(${imageUrl})` }}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {buttonText && <button>{buttonText}</button>}
    </div>
  );
};

export default Banner;
