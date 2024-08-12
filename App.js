
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
// import ProductCard from './components/ProductCard';
import { CartProvider } from './context/CartContext';

import EyeCheckupDetails from './components/EyeCheckupDetails';
import CreateAccount from './CreateAccount';
import SignInSignUpPopup from './SignInSignUpPopup';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import ShipmentDetails from './components/ShipmentDetails';
import Payment from './components/Payment';
import PaymentPage from './components/PaymentPage';
import Confirmation from './components/Confirmation';
import './App.css';
import { ThemeProvider } from './ThemeContext';
// import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CombinedComponent from './components/ProductPage/CombinedComponent';
import CameraComponent from './components/Online/CameraComponent';
import DetailForm from './components/Online/DetailForm';
import DoctorAppointment from './components/Online/DoctorAppointment';
// import EyeTestForm from './components/Online/EyeTestForm';
import Instruction from './components/Online/Instruction';
import SecondTest from './components/Online/SecondTest';
import Service from './components/Online/Service';
// import EyeTestForm from './EyeTestForm';
// import EyeTestComponent from './EyeTestComponent';
// import EyeTestForm from './components/Online/EyeTestForm';


// import DashboardPage from './components/AdminDashboard/DashboardPage';
import AddProductPage from './components/AddProducts/AddProductsPage';
import AdminLogin from './AdminLogin';
import DashboardPage from './AdminDashboard/DashboardPage';
import Enquiries from './EnquiriesPage/Enquiries';
import Pay from './Pay';
import AddToCart from './components/ProductPage/AddToCart';

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

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="app-pl">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/component" element={<CombinedComponent/>} />
              <Route path="/products" element={<ProductList />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/eyetestlogin" element={<EyeTestLogin />} />
              <Route path="/address" element={<AddressSelection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/shipment-details" element={<ShipmentDetails />} />
              <Route path="/create-account" element={<CreateAccount onClose={() => setShowCreateAccountPopup(false)} />} />
              <Route path="/signin" element={<SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/paymentpage" element={<PaymentPage />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/address-selection" element={<AddressSelection />} />
              <Route path="/eye-checkup-details" element={<EyeCheckupDetails />} />
              <Route path="/homeservice" element={<HomeService />} />
             
              <Route path="/detailform" element={<DetailForm/>}/>
              <Route path="/doctorappointment" element={<DoctorAppointment/>}/>
              {/* <Route path="/eyetestform" element={<EyeTestForm/>}/> */}
              <Route path="/instruction" element={<Instruction/>}/>
              <Route path="/secondtest" element={<SecondTest/>}/>
              <Route path="/service" element={<Service/>}/>
              {/* <Route path="/" element={<EyeTestForm />} /> */}
              {/* <Route path="/eyetestcomponent" element={<EyeTestComponent />} /> */}
              <Route path="/add-products" element={<AddProductPage/>}/>
              {/* <Route path="/payments" element={<Pay} */}
              <Route path="/login" element={<SignInSignUpPopup />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path='/add-products' element={<AddProductPage/>}/>
              <Route path='/enquiries' element={<Enquiries/>}/>
              <Route path='/payments' element={<Pay/>}/>
              <Route path='/cart' element={<AddToCart/>}/>
            </Routes>
            {showSignInPopup && <SignInSignUpPopup onClose={() => setShowSignInPopup(false)} />}
            {showCreateAccountPopup && <CreateAccount onClose={() => setShowCreateAccountPopup(false)} />}
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

const Home = () => (
  <>
    <GlassesSection />
    <PromoBanner />
    <div className="banner-container-pl">
      {banners.map((banner, index) => (
        <Banner
          key={index}
          title={banner.title}
          subtitle={banner.subtitle}
          buttonText={banner.buttonText}
          imageUrl={banner.imageUrl}
          index={index}
        />
      ))}
    </div>
    <Footer />
  </>
);

export default App;