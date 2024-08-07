
// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import GlassesSection from './GlassesSection';
// // // import PromoBanner from './PromoBanner';
// // // import EyeTestLogin from './EyeTestLogin';
// // // import HomeService from './HomeService';
// // // import AddressSelection from './AddressSelection';
// // // import Banner from './Banner';
// // // import Navbar from './Navbar';
// // // import Contact from './Contact';
// // // import AboutUs from './AboutUs';
// // // import Footer from './Footer';
// // // import CreateAccount from './CreateAccount';
// // // import SignInSignUpPopup from './SignInSignUpPopup';
// // // import Sidebar from './components/Sidebar';
// // // import ProductList from './components/ProductList';
// // // import Cart from './components/Cart';
// // // import ShipmentDetails from './components/ShipmentDetails';
// // // import Payment from './components/Payment';
// // // import './App.css';
// // // import { ThemeProvider } from './ThemeContext';
// // // import { CartProvider } from './context/CartContext';

// // // const banners = [
// // //   {
// // //     title: 'Free Lenses',
// // //     subtitle: 'With every frame',
// // //     buttonText: 'Shop Now',
// // //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif',
// // //   },
// // //   {
// // //     title: 'Summer Sale',
// // //     subtitle: 'Up to 50% off',
// // //     buttonText: 'Explore',
// // //     imageUrl: 'https://static5.lenskart.com/media/uploads/webharry_potter.gif',
// // //   },
// // //   {
// // //     // buttonText: 'Check',
// // //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg',
// // //   },
// // //   {
// // //     // title: 'Best Sellers',
// // //     // subtitle: 'Top-rated products',
// // //     // buttonText: 'Buy Now',
// // //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
// // //   },
// // // ];

// // // const App = () => {
// // //   const [showSignInPopup, setShowSignInPopup] = useState(false);
// // //   const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
// // //   const [filters, setFilters] = useState({
// // //     ageGroup: [],
// // //     frameType: '',
// // //     frameShape: '',
// // //     frameColor: '',
// // //     priceRange: [0, 10000],
// // //     brands: [],
// // //     material: '',
// // //   });

// // //   const handleFilterChange = (newFilters) => {
// // //     setFilters(newFilters);
// // //   };

// // //   return (
// // //     <ThemeProvider>
// // //       <CartProvider>
// // //         <Router>
// // //           <div className="App">
// // //             <Navbar />
// // //             <Routes>
// // //               <Route
// // //                 path="/"
// // //                 element={
// // //                   <>
// // //                     <GlassesSection />
// // //                     <PromoBanner />
// // //                     <div className="banner-container">
// // //                       {banners.map((banner, index) => (
// // //                         <Banner
// // //                           key={index}
// // //                           title={banner.title}
// // //                           subtitle={banner.subtitle}
// // //                           buttonText={banner.buttonText}
// // //                           imageUrl={banner.imageUrl}
// // //                         />
// // //                       ))}
// // //                     </div>
// // //                     <Footer />
// // //                   </>
// // //                 }
// // //               />
// // //               <Route path="/eyetestlogin" element={<EyeTestLogin />} />
// // //               <Route path="/address" element={<AddressSelection />} />
// // //               <Route path="/contact" element={<Contact />} />
// // //               <Route path="/aboutus" element={<AboutUs />} />
// // //               <Route
// // //                 path="/products"
// // //                 element={
// // //                   <div className="main-content">
// // //                     <Sidebar onFilterChange={handleFilterChange} />
// // //                     <ProductList filters={filters} />
// // //                   </div>
// // //                 }
// // //               />
// // //               <Route path="/cart" element={<Cart />} />
// // //               <Route path="/shipment-details" element={<ShipmentDetails />} />
// // //               <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
// // //               <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
// // //               <Route path="/payment" element={<Payment />} />
// // //             </Routes>
// // //             {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
// // //             {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
// // //           </div>
// // //         </Router>
// // //       </CartProvider>
// // //     </ThemeProvider>
// // //   );
// // // };

// // // export default App;
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import GlassesSection from './GlassesSection';
// // import PromoBanner from './PromoBanner';
// // import EyeTestLogin from './EyeTestLogin';
// // import HomeService from './HomeService';
// // import AddressSelection from './AddressSelection';
// // import Banner from './Banner';
// // import Navbar from './Navbar';
// // import Contact from './Contact';
// // import AboutUs from './AboutUs';
// // import Footer from './Footer';
// // import CreateAccount from './CreateAccount';
// // import SignInSignUpPopup from './SignInSignUpPopup';
// // import Sidebar from './components/Sidebar';
// // import ProductList from './components/ProductList';
// // import Cart from './components/Cart';
// // import ShipmentDetails from './components/ShipmentDetails';
// // import Payment from './components/Payment';
// // import './App.css';
// // import { ThemeProvider } from './ThemeContext';
// // import { CartProvider } from './context/CartContext';

// // const banners = [
// //   {
// //     // title: 'Free Lenses',
// //     // subtitle: 'With every frame',
// //     // buttonText: 'Shop Now',
// //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif',
// //   },
// //   {
// //     // title: 'Summer Sale',
// //     // subtitle: 'Up to 50% off',
// //     // buttonText: 'Explore',
// //     imageUrl: 'https://static5.lenskart.com/media/uploads/webharry_potter.gif',
// //   },
// //   {
// //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg',
// //   },
// //   {
// //     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
// //   },
// // ];

// // const App = () => {
// //   const [showSignInPopup, setShowSignInPopup] = useState(false);
// //   const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
// //   const [filters, setFilters] = useState({
// //     ageGroup: [],
// //     frameType: '',
// //     frameShape: '',
// //     frameColor: '',
// //     priceRange: [0, 10000],
// //     brands: [],
// //     material: '',
// //   });

// //   const handleFilterChange = (newFilters) => {
// //     setFilters(newFilters);
// //   };

// //   return (
// //     <ThemeProvider>
// //       <CartProvider>
// //         <Router>
// //           <div className="App">
// //             <Navbar />
// //             <Routes>
// //               <Route
// //                 path="/"
// //                 element={
// //                   <>
// //                     <GlassesSection />
// //                     <PromoBanner />
// //                     <div className="banner-container">
// //                       {banners.map((banner, index) => (
// //                         <Banner
// //                           key={index}
// //                           title={banner.title}
// //                           subtitle={banner.subtitle}
// //                           buttonText={banner.buttonText}
// //                           imageUrl={banner.imageUrl}
// //                         />
// //                       ))}
// //                     </div>
// //                     <Footer />
// //                   </>
// //                 }
// //               />
// //               <Route path="/eyetestlogin" element={<EyeTestLogin />} />
// //               <Route path="/address" element={<AddressSelection />} />
// //               <Route path="/contact" element={<Contact />} />
// //               <Route path="/aboutus" element={<AboutUs />} />
// //               <Route
// //                 path="/products"
// //                 element={
// //                   <div className="main-content">
// //                     <Sidebar onFilterChange={handleFilterChange} />
// //                     <ProductList filters={filters} />
// //                   </div>
// //                 }
// //               />
// //               <Route path="/cart" element={<Cart />} />
// //               <Route path="/shipment-details" element={<ShipmentDetails />} />
// //               <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
// //               <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
// //               <Route path="/payment" element={<Payment />} />
// //             </Routes>
// //             {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
// //             {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
// //           </div>
// //         </Router>
// //       </CartProvider>
// //     </ThemeProvider>
// //   );
// // };

// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GlassesSection from './GlassesSection';
// import PromoBanner from './PromoBanner';
// import EyeTestLogin from './EyeTestLogin';
// import HomeService from './HomeService';
// import AddressSelection from './AddressSelection';
// import Banner from './Banner';
// import Navbar from './Navbar';
// import Contact from './Contact';
// import AboutUs from './AboutUs';
// import Footer from './Footer';
// import CreateAccount from './CreateAccount';
// import SignInSignUpPopup from './SignInSignUpPopup';
// import Sidebar from './components/Sidebar';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import ShipmentDetails from './components/ShipmentDetails';
// import Payment from './components/Payment';
// import PaymentPage from './components/PaymentPage';
// import Confirmation from './components/Confirmation';


// import './App.css';
// import { ThemeProvider } from './ThemeContext';
// import { CartProvider } from './context/CartContext';

// const banners = [
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif',
//   },
//   {
//     imageUrl: 'https://static5.lenskart.com/media/uploads/webharry_potter.gif',
//   },
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg',
//   },
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
//   },
//   {
//     imageUrl: 'https://static5.lenskart.com/media/uploads/hechome11.png',
//   }
// ];

// const App = () => {
//   const [showSignInPopup, setShowSignInPopup] = useState(false);
//   const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
//   const [filters, setFilters] = useState({
//     ageGroup: [],
//     frameType: '',
//     frameShape: '',
//     frameColor: '',
//     priceRange: [0, 10000],
//     brands: [],
//     material: '',
//   });

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <ThemeProvider>
//       <CartProvider>
//         <Router>
//           <div className="App">
//             <Navbar />
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <GlassesSection />
//                     <PromoBanner />
//                     <div className="banner-container">
//                       {banners.map((banner, index) => (
//                         <Banner
//                           key={index}
//                           title={banner.title}
//                           subtitle={banner.subtitle}
//                           buttonText={banner.buttonText}
//                           imageUrl={banner.imageUrl}
//                         />
//                       ))}
//                     </div>
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route path="/eyetestlogin" element={<EyeTestLogin />} />
//               <Route path="/address" element={<AddressSelection />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/aboutus" element={<AboutUs />} />
//               <Route
//                 path="/products"
//                 element={
//                   <div className="main-content">
//                     <Sidebar onFilterChange={handleFilterChange} />
//                     <ProductList filters={filters} />
//                   </div>
//                 }
//               />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/shipment-details" element={<ShipmentDetails />} />
//               <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
//               <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
//               <Route path="/payment" element={<Payment />} />
//               <Route path="/payment" element={<PaymentPage />} />
//               <Route path="/confirmation" element={<Confirmation />} />


//             </Routes>
//             {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
//             {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
//           </div>
//         </Router>
//       </CartProvider>
//     </ThemeProvider>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GlassesSection from './GlassesSection';
// import PromoBanner from './PromoBanner';
// import EyeTestLogin from './EyeTestLogin';
// import HomeService from './HomeService';
// // import AddressSelection from './AddressSelection';
// import Banner from './Banner';
// import Navbar from './Navbar';
// import Contact from './Contact';
// import AboutUs from './AboutUs';
// import Footer from './Footer';
// import CreateAccount from './CreateAccount';
// import SignInSignUpPopup from './SignInSignUpPopup';
// import Sidebar from './components/Sidebar';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import ShipmentDetails from './components/ShipmentDetails';
// import Payment from './components/Payment';
// import PaymentPage from './components/PaymentPage';
// import Confirmation from './components/Confirmation';
// import './App.css';
// import { ThemeProvider } from './ThemeContext';
// import { CartProvider } from './context/CartContext';

// const banners = [
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif',
//   },
//   {
//     imageUrl: 'https://static5.lenskart.com/media/uploads/webharry_potter.gif',
//   },
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg',
//   },
//   {
//     imageUrl: 'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
//   },
//   {
//     imageUrl: 'https://static5.lenskart.com/media/uploads/hechome11.png',
//   }
// ];

// const App = () => {
//   const [showSignInPopup, setShowSignInPopup] = useState(false);
//   const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
//   const [filters, setFilters] = useState({
//     ageGroup: [],
//     frameType: '',
//     frameShape: '',
//     frameColor: '',
//     priceRange: [0, 10000],
//     brands: [],
//     material: '',
//   });

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <ThemeProvider>
//       <CartProvider>
//         <Router>
//           <div className="App">
//             <Navbar />
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <GlassesSection />
//                     <PromoBanner />
//                     <div className="banner-container">
//                       {banners.map((banner, index) => (
//                         <Banner
//                           key={index}
//                           title={banner.title}
//                           subtitle={banner.subtitle}
//                           buttonText={banner.buttonText}
//                           imageUrl={banner.imageUrl}
//                           index={index} // Pass the index to the Banner component
//                         />
//                       ))}
//                     </div>
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route path="/eyetestlogin" element={<EyeTestLogin />} />
//               {/* <Route path="/address" element={<AddressSelection />} /> */}
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/aboutus" element={<AboutUs />} />
//               <Route
//                 path="/products"
//                 element={
//                   <div className="main-content">
//                     <Sidebar onFilterChange={handleFilterChange} />
//                     <ProductList filters={filters} />
//                   </div>
//                 }
//               />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/shipment-details" element={<ShipmentDetails />} />
//               <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
//               <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
//               <Route path="/payment" element={<Payment />} />
//               <Route path="/paymentpage" element={<PaymentPage />} />
//               <Route path="/confirmation" element={<Confirmation />} />
//               <Route path="/homeservice" element={<HomeService />} />
//             </Routes>
//             {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
//             {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
//           </div>
//         </Router>
//       </CartProvider>
//     </ThemeProvider>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlassesSection from './GlassesSection';
import PromoBanner from './PromoBanner';
import EyeTestLogin from './EyeTestLogin';
import HomeService from './HomeService';
import AddressSelection from './AddressSelection';
import Banner from './Banner';
import Navbar from './Navbar';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ProductCard from './components/ProductCard';
import Products from './components/Products';
import EyeCheckupDetails from './components/EyeCheckupDetails';
import CreateAccount from './CreateAccount';
import SignInSignUpPopup from './SignInSignUpPopup';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ShipmentDetails from './components/ShipmentDetails';
import Payment from './components/Payment';
import PaymentPage from './components/PaymentPage';
import Confirmation from './components/Confirmation';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './context/CartContext';

const banners = [
  {
    imageUrl: 'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif',
  },
  {
    imageUrl: 'https://static5.lenskart.com/media/uploads/webharry_potter.gif',
  },
  {
    imageUrl: 'https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg',
  },
  {
    imageUrl: 'https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif',
  },
  {
    imageUrl: 'https://static5.lenskart.com/media/uploads/hechome11.png',
  }
];

const App = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
  const [filters, setFilters] = useState({
    ageGroup: [],
    frameType: '',
    frameShape: '',
    frameColor: '',
    priceRange: [0, 10000],
    brands: [],
    material: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <GlassesSection />
                    <PromoBanner />
                    <div className="banner-container">
                      {banners.map((banner, index) => (
                        <Banner
                          key={index}
                          title={banner.title}
                          subtitle={banner.subtitle}
                          buttonText={banner.buttonText}
                          imageUrl={banner.imageUrl}
                          index={index} // Pass the index to the Banner component
                        />
                      ))}
                    </div>
                    <Footer />
                  </>
                }
              />
              <Route path="/eyetestlogin" element={<EyeTestLogin />} />
              <Route path="/address" element={<AddressSelection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route
                path="/products"
                element={
                  <div className="main-content">
                    <Sidebar onFilterChange={handleFilterChange} />
                    <ProductList filters={filters} />
                  </div>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductCard />} />

              <Route path="/shipment-details" element={<ShipmentDetails />} />
              <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
              <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/paymentpage" element={<PaymentPage />} />
              <Route path="/" element={<ProductCard />} />

              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/address-selection" element={<AddressSelection />} />
              <Route path="/eye-checkup-details" element={<EyeCheckupDetails />} />
              <Route path="/homeservice" element={<HomeService />} />
            </Routes>
            {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
            {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
