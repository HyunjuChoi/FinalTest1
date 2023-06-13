import React, { useEffect, useState } from 'react';

import DaumPostcode from 'react-daum-postcode';
import DaumPostcodeEmbed from 'react-daum-postcode';
//import './post.css';

import styled from "styled-components";

import ReactDom from "react-dom";

//import PopupDom from './PopupDom';




const AddressTest = (props) => {

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState({
    postNumber: "", // 우편 번호
    streetNameAddress: "", // 도로명 주소
    jibunAddress: "", // 지번 주소
    detailedAddress: "", // 상세 주소
    note: "", // 참고사항
  });

  // 팝업창 열고 닫기
  const openPostCode = () => {
    setIsPopupOpen(!isPopupOpen);
  };

    const handlePostCode = (data) => {
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
        props.onClose()
    }
 
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
        <div>
            <DaumPostcodeEmbed style={postCodeStyle} onComplete={handlePostCode} />
            {/* <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button> */}
        </div>

        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode
                address={address}
                setAddress={setAddress}
                onClose={openPostCode}
              />
          </PopupDom>
        )}
      </div>
      </>
    )
}

const AddressForm = styled.div`
  position: relative;
  margin-top: 500px;
  margin-left: 500px;

  & .postNumber {
    margin: 0.2em 0;
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #d0d0d0 #d2d2d3;
    box-shadow: inset 0.1em 0.1em 0.15em rgb(0 0 0 / 10%);
    vertical-align: middle;
    line-height: 1.25em;
    outline: 0;
    width: 200px;
  }

  & .findPostAddress {
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0.4em 0.15em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #b2b2b2 #d2d2d3;
    cursor: pointer;
    color: #464646;
    border-radius: 0.2em;
    vertical-align: middle;
    font-size: 1em;
    line-height: 1.25em;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fff),
      to(#f2f2f2)
    );
  }

  & .streetNameAddress {
    margin: 0.2em 0;
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #d0d0d0 #d2d2d3;
    box-shadow: inset 0.1em 0.1em 0.15em rgb(0 0 0 / 10%);
    vertical-align: middle;
    line-height: 1.25em;
    outline: 0;
    width: 337px;
  }

  & .detailAddress {
    margin: 0.2em 0;
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #d0d0d0 #d2d2d3;
    box-shadow: inset 0.1em 0.1em 0.15em rgb(0 0 0 / 10%);
    vertical-align: middle;
    line-height: 1.25em;
    outline: 0;
    width: 165px;
    margin-right: 5.5px;
  }

  & .note {
    margin: 0.2em 0;
    font-size: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #d0d0d0 #d2d2d3;
    box-shadow: inset 0.1em 0.1em 0.15em rgb(0 0 0 / 10%);
    vertical-align: middle;
    line-height: 1.25em;
    outline: 0;
    width: 165px;
  }

  & .addressPopUp {
    position: relative;
    width: 500px;
    top: -300px;
    left: 25%;
  }
`;

//TODO 2. 팝업창을 띄울 수 있도록 react-dom을 하나 생성한다.
const PopupDom = ({ children }) => {
  const el = document.getElementById("popupDom");
  return ReactDom.createPortal(children, el);
};

//TODO 3. 실제로 팝업창이 나타날 페이지를 생성한다.
const PopupPostCode = (props) => {
  const { address, setAddress, onClose } = props;

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    const postNumber = data.zonecode; // 우편번호
    const streetNameAddress = data.address; // 도로명 주소
    const jibunAddress = data.jibunAddress; // 지번 주소
    const note = `(${data.bname}, ${data.query})`; // 참고항목

    // 주소 선택 시 우편번호, 도로명 주소, 지번 주소, 참고항목 state 저장
    setAddress({
      ...address,
      postNumber: postNumber,
      streetNameAddress: streetNameAddress,
      jibunAddress: jibunAddress,
      detailedAddress: "",
      note: note,
    });

    // 주소 Form창 닫기
    onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    width: "500px",
    height: "600px",
    border: "2px solid #dadada",
  };

  return (
    <div className="addressPopUp">
      <DaumPostcode
        className="modalForm"
        style={postCodeStyle}
        onComplete={handlePostCode}
      />
    </div>
  );
};

export default AddressTest;


