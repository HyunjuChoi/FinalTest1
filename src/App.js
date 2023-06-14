import React, { useState } from 'react';
import Order from './Order';
import Address from './Address';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/order' element ={ <Order /> } />
        <Route path='/address' element={ <Address /> } />
        {/*<Route path='/address-shipping' element= { <NewAddress />  }  />*/}
        {/* <Route path='/update' element = { <AddressUpdate />} /> */}
      </Routes>
    </BrowserRouter>

  );
};

export default App;