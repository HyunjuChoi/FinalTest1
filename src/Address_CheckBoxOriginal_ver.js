import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressTest from "./NewAddress";
import PopupDom from './PopupDom';
import Modal from 'react-modal';

import DaumPostCode from 'react-daum-postcode';

// 배송지 수정 모달
const PopupModal = ({ isOpen, closeModal }) => {

  const customStyles = {
    content: {
      width: '30%', // Set the desired width
      height: '50%', // Set the desired height
      margin: 'auto', // Center the modal horizontally
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      //textAlign: 'center',
      //padding: 'auto',
      fontFamily: 'NanumGothic',
      fontSize: '11pt',
    },
  };

  // 배송지 수정 -> 삭제
  const handleDelete = () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      //deleteData(); // Perform delete operation
      window.confirm('삭제되었습니다');
      closeModal(); // Close the modal
    }
  }

  return (

    
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* Content of your modal */}
        <div style={ {paddingTop: '8px',
                 //paddingBottom: '-5px',
      }}>
        <h2>&ensp;배송지 수정</h2>
        
        <p>&ensp;배송지를 수정하세요</p>
        <div style={ { margin: '5px', } }>
          <input style={{
            width: '100%',
            height: '38px',
            borderRadius: '3px',
            border: '1px solid lightgrey',
          }}></input>
        </div>

        <p>&ensp; 받으실 분</p>
        <div style={ { margin: '5px', } }>
          <input style={{
            width: '100%',
            height: '38px',
            borderRadius: '3px',
            border: '1px solid lightgrey',
          }}></input>
        </div>

        <p>&ensp; 휴대폰</p>
        <div style={ { margin: '5px', } }>
          <input style={{
            width: '100%',
            height: '38px',
            borderRadius: '3px',
            border: '1px solid lightgrey',
          }}></input>
        </div>

       &ensp;
       <div className="UpdateBtn" style={ {
          paddingTop: '10px',
        
       }}>
        <button onClick={closeModal}
                style ={{
                  width:'100%',
                  height: '45px',
                  background: '#5f0080',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '11pt',
                  fontWeight: 'bold',
                  color: 'white',
                  border: '0px',
                  
              }}
        >저장</button>
        </div>

        <div className="DeleteBtn"  style={ {
          paddingTop: '10px',
       }}>
        <button onClick={handleDelete}
                style ={{
                  width:'100%',
                  height: '45px',
                  background: '#ffffff',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '11pt',
                  fontWeight: 'bold',
                  color: 'black',
                  border: '1px solid lightgrey',
                  
                  
              }}
        >삭제</button>
                  
        </div>
      </div>
    </Modal>
  );
};


export default function Component() {

  // 배송지 추가 팝업
  const [isPopupOpen, setIsPopupOpen] = useState(false)

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
  }

  // const closePostCode = () => {
  //   setIsPopupOpen(false)
  // }


  // check box
  //const [isChecked, setIsChecked] = useState(false);

  // const [checkboxes, setCheckboxes] = useState([]);

  // const handleCheckboxChange = (id) => {
  //   //setIsChecked(!isChecked);
    
  //   setCheckboxes((prevCheckboxes) => {
  //     return prevCheckboxes.map((checkbox) => {
  //       if (checkbox.id === id){
  //         return { ...checkbox, checked: !checkbox.checked };
  //       }
  //       return checkbox;
  //     });
  //   });
  // };

  // const addCheckbox = () => {
  //   const newCheckbox = {
  //     id: checkboxes.length + 1,  // 고유한 식별자 생성
  //     checked:true,
  //   };
  //   setCheckboxes((prevCheckboxes)=> [ ...prevCheckboxes, newCheckbox]);
  // };

  const [checkValue, setCheckValue] = useState('사용');

  const checkOnlyOne = (e) => {
    // const checkboxes = document.getElementsByClassName('test')
    // for (let i = 0; i < checkboxes.length; i++) {
    //   if (checkboxes[i] !== checkThis) {
    //     checkboxes[i].checked = false
    //   }
    // }

    let checkItem = document.getElementsByName("useType");
        Array.prototype.forEach.call(checkItem, function (el) {
        	el.checked = false;
        });
        e.target.checked = true;
        setCheckValue(e.target.defaultValue);
  }

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  const handleChange = (event) => {
    setSelectedCheckbox(event.target.id);
  };

  // 배송지 모달 function
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isDeleteData, setIsDeleteData] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const deleteData = () => {
  //   setIsDeleteData(true);
  //   alert('삭제하시겠습니까?');
  // };
  

  return (
    <>
      <div
        className="MyPage"
        style={{
          boxSizing: "border-box",
          padding: "50px 0px 80px",
          margin: "0px auto",
          display: "flex",
          width: "1050px",
          flexDirection: "row",
          WebkitBoxPack: "justify",
          justifyContent: "space-between",
        }}
      >

    {/* 배송지 수정 모달페이지 */}
    <div> 
      <PopupModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>



        {/* 좌측 네비게이션 바 */}

        <div
          className="NavHeader"
          style={{
            //padding: "0px",
            //margin: "0px",
            //boxSizing: "border-box",
            width: "200px",
          }}
        >
          <div
            className="NavTitle"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              padding: "5px 0px 35px 1px",
              height: "75px",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "35px",
              color: "rgb(51, 51, 51)",
              letterSpacing: "-1px",
            }}
          >
            마이컬리
          </div>
          <ul
            className="NavMain"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              listStyleType: "none",
              border: "1px solid rgb(242, 242, 242)",
            }}
          >
            <li className="NavDetail" style={{ }}>
              <a href="/order"
                className="Order"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  //color: "rgb(102, 102, 102)",
                }}
              >
                주문내역
                
                {/* svg, g태그 : 이미지 사용할때! => 화살표 태그 이미지 삽입 */}
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"      /* 화살표 이미지 경로 */
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        > */}
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              id="arrowIcon"
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        {/* </g>
                      </g>
                    </g> */}
                  </g>
                </svg>
              </a>
            </li>
            
            
            <li className="NavDetail" style={{ }} >
              <a
                className="Address"
                style={{
                  textDecoration: "none",
                      borderBottom: "1px solid rgb(242, 242, 242)",
                      padding: "15px 13px 15px 20px",
                      cursor: "pointer",
                      display: "flex",
                      WebkitBoxPack: "justify",
                      justifyContent: "space-between",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      lineHeight: "19px",
                      letterSpacing: "-0.3px",
                      fontSize: "14px",
                      backgroundColor: "rgb(250, 250, 250)",
                      color: "rgb(95, 0, 128)",
                      fontWeight: 500,
                }}
              >
                배송지 관리
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              id="arrowIcon"
                              stroke="#5f0080"      // 화살표 색상
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                      
                  </g>
                </svg>
              </a>
            </li>
            <li className="NavDetail" style={{ }}>
              <a
                className="Review"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  //color: "rgb(102, 102, 102)",
                }}
              >
                상품후기
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              id="arrowIcon"
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        
                  </g>
                </svg>
              </a>
            </li>

            <li  className="NavDetail" style={{ }}>
              <a
                className="Info"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  //color: "rgb(102, 102, 102)",
                }}
              >
                개인 정보 수정
                <svg
                  height="19"
                  width="19"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <path
                      id="gfk9q0rhta"
                      d="M1.657 1.657L9.657 1.657 9.657 9.657"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    />
                  </defs>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              id="arrowIcon"
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              transform="rotate(45 5.657 5.657)"
                              xlinkHref="#gfk9q0rhta"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>


        <div
          className="AddressMain"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "820px",
            border: "2px solid blue",
          }}
        >
          <div
            className="AddressMain-1"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              width: "820px",
              border: "2px solid gold",
            }}
          >
            <div
              className="AddressMainTitle"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                borderBottom: "2px solid rgb(51, 51, 51)",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingBottom: "20px",
                WebkitBoxPack: "justify",
                justifyContent: "space-between",
                //border: "2px solid red",
              }}
            >
              <div
                className="css-tq074a e1af7ryb6"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  //border: "2px solid yellowgreen",
                }}
              >
                <div
                  className="css-fhxb3m e1af7ryb4"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    //border: "2px solid skyblue",
                  }}
                >
                  <span
                    className="css-1268zpe e1af7ryb5"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.5px",
                      lineHeight: "48px",
                      //border: "2px solid magenta",
                    }}
                  >
                    배송지 관리
                  </span>
                  <span
                    className="css-a3vgo2 e1af7ryb3"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      paddingLeft: "11px",
                      fontSize: "14px",
                      letterSpacing: "-0.3px",
                      color: "rgb(153, 153, 153)",
                      lineHeight: "20px",
                    }}
                  >
                    배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
                  </span>
                </div>
                <div
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="css-1es6ihh e1af7ryb2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      flex: "1 1 0%",
                      textAlign: "right",
                      //border: "2px solid blue",
                    }}
                  >
                    <div
                      className="css-1xhquvz e1a9f8h00"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >

                      {/* 새 배송지 추가 버튼 클릭 시 주소 api 새 창 띄움 */}
                      {/* <Link to='/address-shipping' > */}
                      <button
                        //onClick={ openPostCode }
                        onClick={ () => { 

                          // 주소api 팝업창 크기 및 브라우저 위치 지정
                          const width = 620;
                          const height = 630;
                          const left = (window.innerWidth - width) / 2;
                          const top = (window.innerHeight - height) / 2;

                          window.open(
                            './address-shipping',
                            '_blank',
                            `width=${width}, height=${height}, left=${left}, top=${top}, scrollbars=no`
                            )}}
                        className="NewAdressBtn"
                        type="button"
                        height="60"
                        style={{
                          boxSizing: "border-box",
                          font: "inherit",
                          margin: "0px",
                          WebkitTapHighlightColor: "transparent",
                          textTransform: "none",
                          appearance: "button",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontFamily:
                            '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                          padding: "0px 10px",
                          overflow: "hidden",
                          borderRadius: "3px",
                          display: "block",
                          textAlign: "center",
                          width: "100%",
                          height: "60px",
                          color: "rgb(51, 51, 51)",
                          backgroundColor: "rgb(255, 255, 255)",
                          //border: "5px solid grey",
                          border:"0px"
                        }}
                      >
                        <span
                          className="NewAddressText"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "inline-block",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "24px",
                            //border: "2px solid gold"
                          }}
                        >
                          <img      // + 버튼 이미지
                            className="css-1m3kac1 e4nu7ef0"
                            src="https://res.kurly.com/pc/ico/2006/ico_add_16x16.svg"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              maxWidth: "100%",
                              border: "0px",
                              display: "inline-block",
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                              marginTop: "5px",
                              verticalAlign: "top",
                            }}
                          />
                          새 배송지 추가
                        </span>
                      </button>
                      {/* {open ? <AddressTest handler={daumHandler}/> : null } <br/> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='popupDom'>
                {isPopupOpen && (
                  <PopupDom>
                    {/* <AddressTest onClose={closePostCode} /> */}
                    <AddressTest />
                  </PopupDom>
                )}
            </div>

            <div
                className="DivideLine"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  borderBottom: "2px solid rgb(51, 51, 51)",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  border: "1px black"
                }}
              />

            <div
              className="css-1jdq78j e1cucsfi1"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                padding: "20px 0px",
                borderBottom: "1px solid rgb(51, 51, 51)",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                className="css-wru9pk e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                  flexBasis: "60px",
                }}
              >
                선택
              </div>
              <div
                className="css-3fr0n1 e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  flex: "1 1 0%",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                }}
              >
                주소
              </div>
              <div
                className="css-gtglzf e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                  flexBasis: "120px",
                }}
              >
                받으실 분
              </div>
              <div
                className="css-1aqlhfo e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                  flexBasis: "100px",
                }}
              >
                연락처
              </div>
              {/* <div
                className="css-1aqlhfo e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                  flexBasis: "100px",
                }}
              >
                배송유형
              </div> */}
              <div
                className="css-wru9pk e1cucsfi0"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "rgb(51, 51, 51)",
                  flexBasis: "60px",
                }}
              >
                수정
              </div>
            </div>
            <ul
              className="css-1fttcpj erme1rh2"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li
                className="css-d35zkp erme1rh1"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  borderBottom: "1px solid rgb(244, 244, 244)",
                }}
              >
                <div
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    display: "flex",
                    border:"2px solid green"
                  }}
                >
                  {/* {checkboxes.map((checkbox) => ( */}

                    <div
                      // key={checkbox.id}
                      //className="eeocvzp5 css-1bs5q0a e19svclq0"
                      //className={`myDiv ${selectedCheckbox === 'unused' ? 'pinkBackground' : selectedCheckbox ? 'greenBackground' : 'whiteBackground'}`}
                      style={{
                        border:"2px solid pink",
                        boxSizing: "border-box",
                        padding: "0px",
                        margin: "20px 0px",
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        minHeight: "49px",
                        color: "rgb(51, 51, 51)",
                        letterSpacing: "-0.3px",
                        flexBasis: "60px",
                      }}
                  >
                    {/* <label className={`checkbox ${checkbox.checked ? 'checked' : ''}`} */}
                    <label 
                      //className='checkbox' 
                      htmlFor="use"
                      //className="css-1xdhyk6 e1dcessg3"
                      //htmlFor={`kurly-address-${checkbox.id}`}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        border: "2px solid blue"
                      }}
                    >
                      <input
                        //id={`kurly-address-${checkbox.id}`}
                        name="useType"
                        id="use"
                        //className="css-agvwxo e1dcessg2"
                        className="test"
                        type="checkbox"
                        value="사용"
                        //defaultChecked
                        //value={checkbox.id}
                        //checked={isChecked}
                        //checked={checkbox.checked}
                        //onChange={() => handleCheckboxChange(checkbox.id)}
                        //onChange={(e) => checkOnlyOne(e)}
                        //checked={checkValue === "사용"}
                        checked={selectedCheckbox === 'use'}
                        //onChange={() => handleCheckboxChange('use')}
                        onChange={ handleChange }

                        style={{
                          border:"2px solid gold",
                          font: "inherit",
                          margin: "0px",
                          WebkitTapHighlightColor: "transparent",
                          fontSize: "14px",
                          //color: "rgb(51, 51, 51)",
                          fontFamily:
                            '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                          overflow: "hidden",
                          position: "absolute",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          clipPath: "inset(50%)",
                          width: "1px",
                          height: "1px",
                          padding: "0px",
                          boxSizing: "border-box",
                          
                        }}
                      />
                      <div
                        className="css-79hxr7 e1dcessg1"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          marginRight: "12px",
                          border: "2px solid red"
                        }}
                      >
                        <svg
                          className={`myDiv ${selectedCheckbox === 'unused' ? 'pinkBackground' : selectedCheckbox ? 'greenBackground' : 'pinkBackground'}`}
                          height="24"
                          width="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            verticalAlign: "middle",
                            width:"27px",
                            height:"27px"
                          }}
                        >
                          <path
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                            fill="#5f0080"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                          <path     // 선택된 배송지 체크 표시
                            d="M7 12.6667L10.3846 16L18 8.5"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                  </div>
                  {/* ))} */}
                  {/* <button onClick={addCheckbox}>Add Checkbox</button> */}

                  <div
                    className="eeocvzp4 css-8xfsdg e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      flex: "1 1 0%",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      WebkitBoxPack: "start",
                      justifyContent: "start",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="css-1b3iimx eeocvzp0"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          borderRadius: "11px",
                          display: "block",
                          width: "74px",
                          height: "22px",
                          marginBottom: "7px",
                          backgroundColor: "rgb(247, 247, 247)",
                          fontWeight: 700,
                          fontSize: "12px",
                          color: "rgb(102, 102, 102)",
                          lineHeight: "22px",
                          letterSpacing: "0px",
                          textAlign: "center",
                        }}
                      >
                        기본 배송지
                      </div>
                      경기 성남시 분당구 미금로 215 (청솔마을) 807-1704
                    </div>
                  </div>
                  <div
                    className="eeocvzp3 css-1o9d8vk e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "120px",
                    }}
                  >
                    최현주
                  </div>
                  <div
                    className="eeocvzp2 css-xkreku e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "100px",
                    }}
                  >
                    010-6563-0571
                  </div>
                  {/* <div
                    className="eeocvzp6 css-xkreku e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "100px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span
                        className="css-z4mca9 e1jlkvf51"
                        type="direct"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          color: "rgb(95, 0, 128)",
                          fontSize: "14px",
                        }}
                      >
                        샛별배송
                      </span>
                    </div>
                  </div> */}

                  {/* 주소 수정 이미지 (연필) */}
                  <div
                    className="eeocvzp1 css-1bs5q0a e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "60px",
                    }}
                  >
                    {/* <Link to='/update'> */}
                    <button onClick={openModal}
                      style={{
                        padding: "0px",
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        WebkitTapHighlightColor: "transparent",
                        overflow: "visible",
                        border: "none",
                        backgroundColor: "transparent",
                        textTransform: "none",
                        appearance: "button",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "rgb(51, 51, 51)",
                        borderRadius: "0px",
                        fontFamily:
                          '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                      }}
                    >
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <g
                          fill="none"
                          fillRule="evenodd"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                          <path
                            d="m13.83 5.777 4.393 4.393-10.58 10.58H3.25v-4.394l10.58-10.58zm3.204-2.527c.418 0 .837.16 1.157.48l2.08 2.08a1.63 1.63 0 0 1 0 2.314l-2.157 2.156-4.394-4.394 2.157-2.156c.32-.32.738-.48 1.157-.48z"
                            stroke="#ccc"
                            strokeWidth="1.5"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                        </g>
                      </svg>
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </li>
              <li
                className="css-d35zkp erme1rh1"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  borderBottom: "1px solid rgb(244, 244, 244)",
                }}
              >
                <div
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    flex: "1 1 0%",
                    display: "flex",
                  }}
                >

                  
                  <div
                    //className="eeocvzp5 css-1bs5q0a e19svclq0"
                    //className={`myDiv ${selectedCheckbox === 'unused' ? 'pinkBackground' : selectedCheckbox ? 'greenBackground' : 'whiteBackground'}`}
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "60px",
                    }}
                  >
                    <label
                      //className="checkbox"
                      //className={`checkbox ${isChecked ? 'checked' : ''}`}
                      htmlFor="unused"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <input
                        
                        id="unused"
                        name="useType"
                        //className="css-agvwxo e1dcessg2"
                        className="test"
                        type="checkbox"
                        value="사용 안함"
                        //checked={isChecked}
                        //onChange={(e) => checkOnlyOne(e)}
                        //checked={checkValue === "사용 안함"}
                        checked={selectedCheckbox === 'unused'}
                        onChange={() => handleCheckboxChange('unused')}

                        style={{
                          font: "inherit",
                          margin: "0px",
                          WebkitTapHighlightColor: "transparent",
                          fontSize: "14px",
                          color: "rgb(51, 51, 51)",
                          fontFamily:
                            '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                          overflow: "hidden",
                          position: "absolute",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          clipPath: "inset(50%)",
                          width: "1px",
                          height: "1px",
                          padding: "0px",
                          boxSizing: "border-box",
                        }}
                      />
                      <div
                        className="css-79hxr7 e1dcessg1"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          className={`myDiv ${selectedCheckbox === 'unused' ? 'pinkBackground' : selectedCheckbox ? 'greenBackground' : 'whiteBackground'}`}
                          height="24"
                          width="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            verticalAlign: "middle",
                            width:"27px",
                            height: "27px"
                          }}
                        >
                          <path
                            d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                            fill="#fff"
                            stroke="#ddd"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                          <path
                            d="M7 12.6667L10.3846 16L18 8.5"
                            stroke="#ddd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      />
                    </label>
                  </div>
                  <div
                    className="eeocvzp4 css-8xfsdg e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      flex: "1 1 0%",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      WebkitBoxPack: "start",
                      justifyContent: "start",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      부산 금정구 부산대학로63번길 46-5 다인빌 101호
                    </div>
                  </div>
                  <div
                    className="eeocvzp3 css-1o9d8vk e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "120px",
                    }}
                  >
                    최현주
                  </div>
                  <div
                    className="eeocvzp2 css-xkreku e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "100px",
                    }}
                  >
                    010-6563-0571
                  </div>
                  {/* <div
                    className="eeocvzp6 css-xkreku e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "100px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span
                        className="css-z4mca9 e1jlkvf51"
                        type="direct"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          color: "rgb(95, 0, 128)",
                          fontSize: "14px",
                        }}
                      >
                        샛별배송
                      </span>
                    </div>
                  </div> */}
                  <div
                    className="eeocvzp1 css-1bs5q0a e19svclq0"
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "20px 0px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: "49px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.3px",
                      flexBasis: "60px",
                    }}
                  >

                    {/* 주소 수정 연필 이미지 */}
                    {/* <Link to='/update'> */}
                      <button onClick={openModal}
                        style={{
                          padding: "0px",
                          boxSizing: "border-box",
                          font: "inherit",
                          margin: "0px",
                          WebkitTapHighlightColor: "transparent",
                          overflow: "visible",
                          border: "none",
                          backgroundColor: "transparent",
                          textTransform: "none",
                          appearance: "button",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "rgb(51, 51, 51)",
                          borderRadius: "0px",
                          fontFamily:
                            '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                        }}
                      >
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                          }}
                        >
                          <g
                            fill="none"
                            fillRule="evenodd"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              //border:"2px solid green"
                            }}
                          >
                            <path
                              d="M0 0h24v24H0z"
                              fill="none"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                            <path
                              d="m13.83 5.777 4.393 4.393-10.58 10.58H3.25v-4.394l10.58-10.58zm3.204-2.527c.418 0 .837.16 1.157.48l2.08 2.08a1.63 1.63 0 0 1 0 2.314l-2.157 2.156-4.394-4.394 2.157-2.156c.32-.32.738-.48 1.157-.48z"
                              stroke="#ccc"
                              strokeWidth="1.5"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </g>
                        </svg>
                      </button>
                    {/* </Link> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style



dangerouslySetInnerHTML={{
          __html: `
        html {
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
          line-height: 1.15;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          text-size-adjust: 100%;
          height: 100%;
          font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
        }

        body {
          padding: 0px;
          box-sizing: border-box;
          height: 100%;
          margin: 0px;
          user-select: none;
          background-color: rgb(255, 255, 255);
          -webkit-tap-highlight-color: transparent;
          font-size: 14px;
          color: rgb(51, 51, 51);
        }
        li:hover {
          background-color: rgb(250, 250, 250);
        }

        li:hover a {
          color: rgb(95, 0, 128);
        }

        li:hover svg {
          color: #5f0080;
        }


        .NavDetail:hover #arrowIcon {
          stroke: #5f0080;
        }

        .myDiv {
          width: 200px;
          height: 200px;
        }
        
        .greenBackground {
          //background-color: green;
        }

        .greenBackground path{
          fill: #5f0080;
          stroke: rgb(247, 247, 247);
          //rgb(247, 247, 247)
        }
        
        .pinkBackground {
          background-color: pink;
        }

        .pinkBackground path{
          fill: #5f0080;
          stroke: rgb(247, 247, 247);
          //rgb(247, 247, 247)
        }

        .whiteBackground {
          background-color: white;
        }
        

      
        .myDiv:hover {
          cursor: pointer;
        }

        //  .checkbox svg{
        //    color: #fff;
        //    background-color: #ddd;
        //    fill: #fff;
        //    stroke: #ddd;

        //  }

        // .checkbox{
        //   color: rgb(51, 51, 51);
        //   background-color: red;
        // }
        `,
        }}
      />
    </>
  );
}
