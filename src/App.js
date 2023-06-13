import React, { useState } from 'react';
import Order from './Order';
import Address from './Address';
import NewAddress from './NewAddress';
import { ReactDOM } from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddressUpdate from './AddressUpdate';

import DaumPostcodeEmbed from 'react-daum-postcode';

import modalState from 'react-modal';


const App = () => {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/order' element ={ <Order /> } />
        <Route path='/address' element={ <Address /> } />
        <Route path='/address-shipping' element= { <NewAddress /> } />
        {/* <Route path='/update' element = { <AddressUpdate />} /> */}
      </Routes>
    </BrowserRouter>

  );
};

export default App;