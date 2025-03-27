import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHeadset } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onLoginClick, onSignupClick }) => {
  const [showSuccessBox, setShowSuccessBox] = useState(false); // State để kiểm soát hiển thị hộp đăng nhập thành công
  const [isActive, setIsActive] = useState(false); // State cho menu di động

  const handleLoginClick = (event) => {
    event.preventDefault();
    onLoginClick();
    setShowSuccessBox(true); // Hiển thị hộp đăng nhập thành công
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    onSignupClick();
  };
  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "/aesexy.webp",
    "/agassia.webp",
    "/evolution.webp",
    "/sagaming.webp",
    "/wmcasino.webp",
    "/dreamgaming.webp",
   
  ];

  return (
    <div className="box-header-all">
      <header>
        <div className="ctnr">
          <div className="box-header-desk">
            {/* Menu di động */}
            <div className="header-mobile-icon">
              <div className="icon-nav" onClick={() => setIsActive(true)}>
                <img
                  src="https://gwfd.qatgwawm.net/system-requirement/Web.MobileNew/UK255-01/41a6d232e6/bar.91baf94be5d93bac.png"
                  alt=""
                />
              </div>
              {/* Danh sách menu di động */}
              <div className={`list-bar-menus ${isActive ? "active" : ""}`}>
                <div
                  className="close-header-mobile"
                  onClick={() => setIsActive(false)}
                >
                  <img
                    src="https://gwfd.qatgwawm.net/system-requirement/Web.MobileNew/UK255-01/9f6994a110/menu_close.ab398811487c038b.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="logo-desk">
              <Link to="">
                <img src="/logo.png" alt="" />
              </Link>
            </div>

            {/* Thanh điều hướng bên phải */}
            <div className="box-header-right-top">
              {/* Hiển thị thời gian */}
              <div className="settime-auto-header">
                <p>{new Date().toLocaleString()}</p>
              </div>
              <div className="box-nav-desk-header-top">
                {/* Danh sách không hoạt động khi chưa đăng nhập */}
                  <ul class="box-no-active-sigin">
                    <li>
                      <Link to="">
                        <img src="/icon1.png" alt="" />
                        <span>Khuyến Mãi</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="">
                        <img
                          src="/47b3d6bb44afdd817b6fc2a0a66cd1aa.png"
                          alt=""
                        />
                        <span>Khuyến Mãi</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="">
                        <img
                          src="/088740c399764deeda2560381b2d8cd5.png"
                          alt=""
                        />
                        <span>Khuyến Mãi</span>
                      </Link>
                    </li>
                  </ul>

                {/* Hộp thành công sau khi đăng nhập */}
                {showSuccessBox && (
                  <div className="Box-signin-sucecs">
                    <ul>
                      <li>
                        <Link to="">
                          <img src="/icon1.png" alt="" />
                          <span>Nạp tiền</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="">
                          <img
                            src="/b04f2d4b96137eb35597bca4b4ab3a5a.png"
                            alt=""
                          />
                          <span>Rút tiền</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="">
                          <img
                            src="/3a63139307f5f1c83e9dba580f017d4c.png"
                            alt=""
                          />
                          <span>VIP</span>
                        </Link>
                      </li>
                    </ul>

                    <div className="singin-name">
                      <p> Bao10122003 </p>
                      <span>0</span>
                    </div>

                    <div
                      className={`avarat-name-active ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <div className="avatar-tion-name" onClick={toggleActive}>
                        <img
                          alt=""
                          src="https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/99cdae96e2/images/ea89097590e2197a90c2f5d3974eae55.png"
                        />
                      </div>
                      <div className="action-box-profile">
                        <ul>
                          <li>
                            <a href="/" data-discover="true">
                            
                              Đăng xuất
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Danh sách nút Đăng nhập và Đăng ký */}
                {!showSuccessBox && (
                  <div className="list-btn-header-top">
                    <Link
                      to="/login"
                      className="login"
                      onClick={handleLoginClick}
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      className="signup"
                      to="/register"
                      onClick={handleSignupClick}
                    >
                      Đăng ký
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header-bottom">
        <div className="ctnr">
          <div className="box-header-bottom-bar">
            <div className="list-tab-header-menu">
              <ul>
                <li>
                  <Link to="">Trang Chủ</Link>
                </li>

                <li>
                  <Link to="">Thể thao</Link>

                  <div className="menu-c2-desk">
                    <div className="ctnr">
                    <Slider {...settings}>
                      {images.map((src, index) => (
                        <div className="item-slick-menu-c2" key={index}>
                          <a href="#">
                            <img src={src} alt={`slide-${index}`} />
                          </a>
                        </div>
                      ))}
                    </Slider>
                    </div>
                  </div>
                </li>

                <li>
                  <Link to="">Casino</Link>
                </li>

                <li>
                  <Link to="">Nổ hũ</Link>
                </li>

                <li>
                  <Link to="">Bắn cá</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
