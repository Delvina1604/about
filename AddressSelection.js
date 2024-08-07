// import React, { useState } from 'react';
// import './AddressSelection.css';
// import logo from '../src/Assets/logo2.png';

// const AddressSelection = () => {
//   const [selectedAddress, setSelectedAddress] = useState('');
//   const [newAddress, setNewAddress] = useState('');
//   const [showNewAddressInput, setShowNewAddressInput] = useState(false);

//   const addresses = [
//     {
//       name: 'Delvina M',
//       phone: '7397187860',
//       address: 'Snows Hall, Thoothukudi, Tamil Nadu, 628003'
//     }
//   ];

//   const handleAddressSelect = (address) => {
//     setSelectedAddress(address);
//   };

//   const handleNewAddressChange = (e) => {
//     setNewAddress(e.target.value);
//   };

//   const handleAddNewAddress = () => {
//     setShowNewAddressInput(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle address submission logic here
//     console.log('Selected Address:', selectedAddress || newAddress);
//   };

//   return (
//     <div className="address-container">
//       {/* <header className="address-header">
//         <img src={logo} alt="Eye Plus at Home" className="address-logo" />
//         <div className="phone-number">+918068864519</div>
//       </header> */}
//       <main className="address-main">
//         <div className="address-form-container">
//           <h2>Address</h2>
//           <form onSubmit={handleSubmit} className="address-form">
//             <label>Saved Address</label>
//             {addresses.map((addr, index) => (
//               <div key={index} className="address-option">
//                 <input
//                   type="radio"
//                   id={`address-${index}`}
//                   name="address"
//                   value={addr.address}
//                   checked={selectedAddress === addr.address}
//                   onChange={() => handleAddressSelect(addr.address)}
//                 />
//                 <label htmlFor={`address-${index}`}>
//                   <div>{addr.name}</div>
//                   <div>{addr.phone}</div>
//                   <div>{addr.address}</div>
//                 </label>
//               </div>
//             ))}
//             <div className="add-new-address">
//               <button type="button" onClick={handleAddNewAddress}>
//                 Add a new address
//               </button>
//               {showNewAddressInput && (
//                 <input
//                   type="text"
//                   placeholder="Enter new address"
//                   value={newAddress}
//                   onChange={handleNewAddressChange}
//                   required
//                 />
//               )}
//             </div>
//             <button type="submit" className="submit-button">Proceed</button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AddressSelection;
// src/components/AddressSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressSelection.css';
import eye1 from '../src/Assets/logo2.png';

const AddressSelection = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/eye-checkup-details');
  };

  return (
    <div className="address-container">
      <header className="address-header">
        <img src={eye1} alt="EyeTest at Home" className="address-logo" />
        <div className="phone-number">+918068864519</div>
      </header>
      <main className="address-main">
        <div className="address-form-container">
          <h1>Choose Address</h1>
          <div className="address-form">
            <div className="address-option">
              <input type="radio" id="address1" name="address" value="address1" />
              <label htmlFor="address1">Address 1: 123 Main St, City, Country</label>
            </div>
            <div className="address-option">
              <input type="radio" id="address2" name="address" value="address2" />
              <label htmlFor="address2">Address 2: 456 Another St, City, Country</label>
            </div>
            <div className="add-new-address">
              <button>Add New Address</button>
            </div>
            <button className="submit-button" onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddressSelection;
