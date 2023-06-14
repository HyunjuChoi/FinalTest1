import React, { useEffect, useState } from 'react';

import DaumPostcode from 'react-daum-postcode';
import DaumPostcodeEmbed from 'react-daum-postcode';
//import './post.css';

import styled from "styled-components";

import ReactDom from "react-dom";


const NewAddress = (props) => {

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const [address, setAddress] = useState({
    //postNumber: "", // 우편 번호
    streetNameAddress: "", // 도로명 주소
    jibunAddress: "", // 지번 주소
    detailedAddress: "", // 상세 주소
    //note: "", // 참고사항
  });


  /*
  const PopupDom = ({ children }) => {
    const el = document.getElementById("popupDom");
    return ReactDom.createPortal(children, el);
  };
  */

  const handlePostCode = (data) => {

    //const { address, setAddress, onClose } = props;
    

    let fullAddress = data.address;
    let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      console.log(data)
      console.log(fullAddress)
      console.log(data.zonecode)
      //console.log(props)
      //props.onClose()

      const streetNameAddress = data.address; // 도로명 주소
      const jibunAddress = data.jibunAddress; // 지번 주소
    //const note = `(${data.bname}, ${data.query})`; // 참고항목

    // 주소 선택 시 우편번호, 도로명 주소, 지번 주소, 참고항목 state 저장
    
    setAddress({
      ...address,
      //postNumber: postNumber,
      streetNameAddress: streetNameAddress,
      jibunAddress: jibunAddress,
      detailedAddress: "",
      //note: note,
    });

    setIsPopupOpen(false);    // Close the popup when an address is selected
  
  }

 
  {/* 주소 api 팝업 CSS*/}

  const postCodeStyle = {
      display: "block",
      position: "absolute",
      top: "10%",
      width: "600px",
      height: "600px",
      padding: "7px",
    };
 
  return(
    <>
      {/* 주소 api 팝업 */}
      { !isPopupOpen && (
          <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} autoClose={true} />
          </div>
      )}


    </>
  )
}


export default NewAddress;


