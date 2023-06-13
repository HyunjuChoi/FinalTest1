import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
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
                  <a
                    className="Order"
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
                                  stroke="#5f0080"          // 화살표 색상
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
                  <a href="/address"
                    className="Address"
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
              {/* <a
                className="css-196gwz9 e19l01ug3"
                href="https://www.kurly.com/mypage/inquiry/list"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "0px 14px 0px 20px",
                  width: "100%",
                  height: "60px",
                  marginTop: "36px",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(250, 250, 250)",
                  lineHeight: "20px",
                }}
              > */}
                {/* <div
                  className="css-rmee6s e19l01ug2"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    color: "rgb(51, 51, 51)",
                  }}
                >
                  <span
                    className="css-1sdidca e19l01ug1"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    도움이 필요하신가요 ?
                  </span>
                  <span
                    className="css-rnnx2x e19l01ug0"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      fontSize: "12px",
                    }}
                  >
                    1:1 문의하기
                  </span>
                </div> */}
                {/* <svg
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
                              stroke="#333"
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
                      </g>
                    </g>
                  </g>
                </svg> */}
              {/* </a> */}
            </div>
    
    
    
            {/* 주문내역 본문*/}
    
            <div
              className="OrderList"
              style={{
                padding: "5px",
                margin: "px",
                boxSizing: "border-box",
                width: "820px",
                //width: "110%",
                height: "100%",
                border: "2px solid red"
              }}
            >
              <div
                className="OrderTitle"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  paddingBottom: "27px",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  //border: "2px solid green"
                }}
              >
                <div
                  className="OrderTitleSubject"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    //border: "2px solid blue"
                  }}
                >
                  <h2
                    className="OrderTitleSub1"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "rgb(51, 51, 51)",
                      letterSpacing: "-0.5px",
                      lineHeight: "48px",
                      //border:"2px solid gold"
                    }}
                  >
                    주문 내역
                  </h2>
                  <span
                    className="OrderTitleSub2"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      paddingLeft: "11px",
                      fontSize: "14px",
                      letterSpacing: "-0.3px",
                      color: "rgb(153, 153, 153)",
                      lineHeight: "20px",
                      //border: "2px solid pink"
                    }}
                  >
                    최대 지난 3년간의 주문 내역까지 확인할 수 있어요
                  </span>
                </div>
                <div
                  className="css-fhxb3m ed9qr672"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="OrderTitleDate"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      width: "157px",
                      //border: "2px solid red"
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "3px",
                        boxSizing: "border-box",
                        //border: "2px solid skyblue"
                      }}
                    >
                      <div
                        className="MuiFormControl-root css-tzsjye"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          margin: "5px",
                          //border: "2px solid black",
                          display: "inline-flex",
                          flexDirection: "column",
                          position: "relative",
                          minWidth: "0px",
                          verticalAlign: "top",
                          width: "100%",
            
                        }}
                      >
                        <div
                          className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl jss1 css-eg1co4"
                          style={{
                            padding: "0px",
                            margin: "5px",
                            borderColor: "rgb(221, 221, 221)",
                            borderRadius: "0px",
                            fontWeight: 400,
                            lineHeight: "1.4375em",
                            letterSpacing: "0.00938em",
                            color: "rgba(0, 0, 0, 0.87)",
                            boxSizing: "border-box",
                            cursor: "text",
                            display: "inline-flex",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            position: "relative",
                            fontSize: "14px",
                            height: "44px",
                            fontFamily: '"Noto Sans"',
                            //border: "1px solid yellowgreen"
                          }}
                        >

                          {/* select box 셀렉트 박스 */}
                          <select className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1g99zn8" tabIndex="-1" 
                                    // style={{ 
                                    //     opacity: 1, 
                                    //     transform: 'none', 
                                    //     minWidth: 157, 
                                    //     height: 'fit-content', 
                                    //     padding: 0, 
                                    //     boxShadow: 'none', 
                                    //     borderRadius: 0, 
                                    //     border: '1px solid rgb(221, 221, 221)', 
                                    //     fontFamily: 'Noto Sans', 
                                    //     transition: 'opacity 279ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', 
                                    //     top: 606, 
                                    //     left: 345, 
                                    //     transformOrigin: '94.5px 18.2344px' }}>
                                    style={{
                                        borderRadius: "4px",
                                        font: "inherit",
                                        border: "0",
                                        background: "none",
                                        margin: "0px",
                                        padding: "16.5px 14px",
                                        appearance: "none",
                                        userSelect: "none",
                                        cursor: "pointer",
                                        letterSpacing: "inherit",
                                        color: "currentcolor",
                                        boxSizing: "content-box",
                                        WebkitTapHighlightColor: "transparent",
                                        display: "block",
                                        minWidth: "0px",
                                        width: "100%",
                                        animationName: "mui-auto-fill-cancel",
                                        animationDuration: "10ms",
                                        fontFamily: '"Noto Sans"',
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        height: "auto",
                                        minHeight: "1.4375em",
                                        textOverflow: "ellipsis",
                                        paddingRight: "32px",
                                      }}
                                    >
                                <option key="3month"value="3month">3개월</option>
                                <option key="6month" value="6month">6개월</option>
                                <option key="1year" value="1year">1년</option>
                            </select>

                          
                          {/* <div
                            className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-qiwgdb"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-label="Without label"
                            role="button"
                            tabIndex="0"
                            style={{
                              borderRadius: "4px",
                              font: "inherit",
                              border: "0",
                              background: "none",
                              margin: "0px",
                              padding: "16.5px 14px",
                              appearance: "none",
                              userSelect: "none",
                              cursor: "pointer",
                              letterSpacing: "inherit",
                              color: "currentcolor",
                              boxSizing: "content-box",
                              WebkitTapHighlightColor: "transparent",
                              display: "block",
                              minWidth: "0px",
                              width: "100%",
                              animationName: "mui-auto-fill-cancel",
                              animationDuration: "10ms",
                              fontFamily: '"Noto Sans"',
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              height: "auto",
                              minHeight: "1.4375em",
                              textOverflow: "ellipsis",
                              paddingRight: "32px",
                            }}
                          >
                            {" "}
                            3개월
                          </div> */}
                          <input
                            className="MuiSelect-nativeInput css-1k3x8v3"
                            defaultValue="3"
                            aria-hidden="true"
                            tabIndex="-1"
                            style={{
                              padding: "0px",
                              font: "inherit",
                              margin: "0px",
                              WebkitTapHighlightColor: "transparent",
                              fontSize: "14px",
                              color: "rgb(51, 51, 51)",
                              fontFamily:
                                '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                              bottom: "0px",
                              left: "0px",
                              position: "absolute",
                              opacity: 0,
                              pointerEvents: "none",
                              width: "100%",
                              boxSizing: "border-box",
                            }}
                          />
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt"
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              transition:
                                "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                              userSelect: "none",
                              width: "1em",
                              height: "1em",
                              display: "inline-block",
                              fill: "currentcolor",
                              flexShrink: 0,
                              fontSize: "1.5rem",
                              position: "absolute",
                              top: "calc(50% - 0.5em)",
                              pointerEvents: "none",
                              color: "rgba(0, 0, 0, 0.54)",
                              overflow: "hidden",
                              right: "10px",
                            }}
                          >
                            <path
                              d="M7 10l5 5 5-5z"
                              style={{
                                padding: "0px",
                                margin: "0px",
                                boxSizing: "border-box",
                              }}
                            />
                          </svg>
                          <fieldset
                            className="MuiOutlinedInput-notchedOutline css-igs3ac"
                            aria-hidden="true"
                            style={{
                              boxSizing: "border-box",
                              inset: "-5px 0px 0px",
                              margin: "0px",
                              padding: "0px 8px",
                              borderRadius: "inherit",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              overflow: "hidden",
                              textAlign: "left",
                              position: "absolute",
                              pointerEvents: "none",
                              minWidth: "0%",
                              borderColor: "rgb(221, 221, 221)",
                            }}
                          >
                            <legend
                              className="css-nnbavb"
                              style={{
                                margin: "0px",
                                boxSizing: "border-box",
                                //border: "2px solid blue",
                                verticalAlign: "top",
                                padding: "0px",
                                transition:
                                  "width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                cssFloat: "unset",
                                lineHeight: "11px",
                              }}
                            >
                              <span
                                className="notranslate"
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  boxSizing: "border-box",
                                }}
                              >
                                ​
                              </span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  border: "1px solid black"
                }}
              />
    
              <div
                className="OrderDetail"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  paddingTop: "20px",
                  position: "relative",
                  height: "100%",
                  //border: "2px solid yellowgreen"
                }}
              >
                {/* 동적 처리 */}
                {/*주문 내역 상품별로 데이터 바뀌는 곳(back-end)*/}
                <div
                  className="OrderDetailContent"    
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "16px 20px",
                    width: "100%",
                    marginBottom: "14px",
                    border: "2px solid gold"
                  }}
                >
                  <div
                    className="OrderDetailSubject"
                    style={{
                      margin: "0px",
                      boxSizing: "border-box",
                      padding: "8px 0px 13px",
                      borderBottom: "1px solid rgb(221, 223, 225)",
                      display: "flex",
                      WebkitBoxPack: "justify",
                      justifyContent: "space-between",
                      border: "2px solid green"
                    }}
                  >
                    <span
                      className="OrderDetailDate"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: 1.31,
                        color: "rgb(51, 51, 51)",
                      }}
                    >
                      2023.06.02 (17시 13분)
                    </span>
                    {/* <a
                      className="OrderDetailClick"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        textDecoration: "none",
                        background:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBzdHJva2U9IiMzMzMiPgogICAgICAgICAgPHBhdGggZD0iTTAgMEw0IDQgMCA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxNS4wMDAwMDAsIC02OTkuMDAwMDAwKSB0cmFuc2xhdGUoMTk1LjAwMDAwMCwgNTczLjAwMDAwMCkgdHJhbnNsYXRlKDIzMC4wMDAwMDAsIDk2LjAwMDAwMCkgdHJhbnNsYXRlKDIwLjAwMDAwMCwgMTYuMDAwMDAwKSB0cmFuc2xhdGUoNjMwLjAwMDAwMCwgMTAuMDAwMDAwKSB0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNS4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K") right center / 10px 10px no-repeat',
                        alignSelf: "center",
                        paddingRight: "10px",
                        lineHeight: 1.33,
                        fontSize: "12px",
                        color: "rgb(51, 51, 51)",
                        backgroundColor: "initial",
                        cursor: "pointer",
                      }}
                    >
                      주문내역 상세보기
                    </a> */}
                  </div>
                  <div
                    className="OrderDetailItem"
                    style={{
                      margin: "0px",
                      boxSizing: "border-box",
                      padding: "14px 0px 16px",
                      display: "flex",
                      flexDirection: "row",
                      WebkitBoxPack: "justify",
                      justifyContent: "space-between",
                      border: "2px solid skyblue"
                    }}
                  >
                    <div
                      className="css-fhxb3m e1437c649"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "row",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="OrderItemImg"
                        alt="[아티제] 버터롤 상품 이미지"
                        src="https://img-cf.kurly.com/shop/data/goods/1653038714146l0.jpeg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          border: "0px",
                          verticalAlign: "top",
                          width: "60px",
                          height: "78px",
                          marginRight: "20px",
                          backgroundColor: "rgb(245, 245, 245)",
                        }}
                      />
                      <div
                        className="OrderItemDescript"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          border: "2px solid blue"
                        }}
                      >
                        <dl
                          className="css-1ccl3pq e1437c646"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            paddingTop: "6px",
                            flexDirection: "row",
                            color: "rgb(0, 0, 0)",
                            lineHeight: "20px",
                            //border: "2px solid blue"
                          }}
                        >
                          <dt
                            className="css-dzjp62 e1437c645"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              width: "50px",
                              lineHeight: 1.58,
                              marginRight: "10px",
                              fontSize: "12px",
                              color: "rgb(51, 51, 51)",
                            }}
                          >
                            상품명
                          </dt>
                          <dd
                            className="css-1o8e829 e1437c643"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              flex: "1 1 0%",
                              overflow: "hidden",
                              whiteSpace: "normal",
                              fontWeight: 500,
                              color: "rgb(51, 51, 51)",
                              lineHeight: 1.36,
                              display: "-webkit-box",
                              wordBreak: "break-all",
                              WebkitLineClamp: "1",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            [아티제] 버터롤
                          </dd>
                        </dl>
                        <dl
                          className="css-1ccl3pq e1437c646"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            paddingTop: "6px",
                            flexDirection: "row",
                            color: "rgb(0, 0, 0)",
                            lineHeight: "20px",
                          }}
                        >
                          <dt
                            className="css-dzjp62 e1437c645"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              width: "50px",
                              lineHeight: 1.58,
                              marginRight: "10px",
                              fontSize: "12px",
                              color: "rgb(51, 51, 51)",
                            }}
                          >
                            주문번호
                          </dt>
                          <dd
                            className="css-1i58pf4 e1437c644"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              flex: "1 1 0%",
                              fontWeight: 500,
                              color: "rgb(51, 51, 51)",
                              lineHeight: 1.36,
                            }}
                          >
                            2307417130098
                          </dd>
                        </dl>
                        <dl
                          className="css-1ccl3pq e1437c646"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            paddingTop: "6px",
                            flexDirection: "row",
                            color: "rgb(0, 0, 0)",
                            lineHeight: "20px",
                          }}
                        >
                          <dt
                            className="css-dzjp62 e1437c645"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              width: "50px",
                              lineHeight: 1.58,
                              marginRight: "10px",
                              fontSize: "12px",
                              color: "rgb(51, 51, 51)",
                            }}
                          >
                            결제방법
                          </dt>
                          <dd
                            className="css-1i58pf4 e1437c644"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              flex: "1 1 0%",
                              fontWeight: 500,
                              color: "rgb(51, 51, 51)",
                              lineHeight: 1.36,
                            }}
                          >
                            신용카드
                          </dd>
                        </dl>
                        <dl
                          className="css-1ccl3pq e1437c646"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            paddingTop: "6px",
                            flexDirection: "row",
                            color: "rgb(0, 0, 0)",
                            lineHeight: "20px",
                          }}
                        >
                          <dt
                            className="css-dzjp62 e1437c645"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              width: "50px",
                              lineHeight: 1.58,
                              marginRight: "10px",
                              fontSize: "12px",
                              color: "rgb(51, 51, 51)",
                            }}
                          >
                            결제금액
                          </dt>
                          <dd
                            className="css-1i58pf4 e1437c644"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              flex: "1 1 0%",
                              fontWeight: 500,
                              color: "rgb(51, 51, 51)",
                              lineHeight: 1.36,
                            }}
                          >
                            2,500원
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div
                      className="css-s5xdrg e1437c642"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="css-1fdt947 e1437c641"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          width: "100px",
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "right",
                          color: "rgb(51, 51, 51)",
                          marginRight: "20px",
                        }}
                      >
                        배송완료
                      </span>
                      <div
                        className="css-1bbz142 e1437c640"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          width: "96px",
                        }}
                      >
                        <Link to='/review'>
                        <button
                          className="css-oyz24n e4nu7ef3"
                          type="button"
                          height="36"
                          radius="3"
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
                            border: "1px solid rgb(95, 0, 128)",
                            display: "block",
                            textAlign: "center",
                            width: "100%",
                            height: "36px",
                            color: "rgb(95, 0, 128)",
                            backgroundColor: "rgb(255, 255, 255)",
                          }}
                        >
                          <span
                            className="css-ymwvow e4nu7ef1"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                              display: "inline-block",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          >
                            후기작성
                          </span>
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="css-bx0kqw e1mkosgq0"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    width: "1px",
                    height: "1px",
                  }}
                />
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
            `,
            }}
          />
        </>
      );
};

export default Order;