import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const NewAddress2 = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState({
    streetNameAddress: '',
    jibunAddress: '',
    detailedAddress: '',
  });

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    const streetNameAddress = data.address;
    const jibunAddress = data.jibunAddress;

    setAddress({
      ...address,
      streetNameAddress: streetNameAddress,
      jibunAddress: jibunAddress,
      detailedAddress: '',
    });

    setIsPopupOpen(false); // Close the popup when an address is selected
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '10%',
    width: '600px',
    height: '600px',
    padding: '7px',
  };

  return (
    <>
      {isPopupOpen && (
        <div>
          <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} autoClose={false} />
        </div>
      )}

      {!isPopupOpen && (
        <button onClick={() => setIsPopupOpen(true)}>Open Address Shipping</button>
      )}

      {/* Render the address fields */}
      <div>
        <p>Street Name Address: {address.streetNameAddress}</p>
        <p>Jibun Address: {address.jibunAddress}</p>
      </div>
    </>
  );
};

export default NewAddress2;
