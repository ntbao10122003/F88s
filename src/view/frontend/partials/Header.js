import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen,faHeadset } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {


  const [isActive, setIsActive] = useState(false);


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
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
    "https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/6396a755c3fdf08ebaa817fd49d3a6f3.png",
  ];

  return (
    <div className="box-header-all">
      <header>
        <div className="ctnr">
          <div className="box-header-desk">
              <div className="header-mobile-icon">
                  <div className="icon-nav " onClick={() => setIsActive(true)}>
                    <img src="https://gwfd.qatgwawm.net/system-requirement/Web.MobileNew/UK255-01/41a6d232e6/bar.91baf94be5d93bac.png" alt="" />
                  </div>


                  <div className={`list-bar-menus ${isActive ? "active" : ""}`}>
                    <div className="images-qc-mobile">
                      <Link> 
                        <img src="https://gwfd.qatgwawm.net/system-requirement/Web.MobileNew/UK255-01/41a6d232e6/assets/images/menu/menu_img.png" alt="" />
                      </Link>
                      <div className="close-header-mobile" onClick={() => setIsActive(false)} >
                        <img src="https://gwfd.qatgwawm.net/system-requirement/Web.MobileNew/UK255-01/9f6994a110/menu_close.ab398811487c038b.png" alt="" />
                      </div>
                    </div>

                    <div className="list-menu-tab-mobile">
                      <ul>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} /> Đại Sứ Thương Hiệu 
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faHeadset } /> Chơi Thử 
                          </Link>
                        </li>

                        <li>
                          <Link>
                          <FontAwesomeIcon icon={faHeadset } /> Tải APP 
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} />  Tải APP CSKH Android 
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} />  TẢI APP CSKH IOS 
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} /> Nhận Thưởng 
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} />   VIP 
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faBookOpen} />  Lấy Mật Khẩu Qua SDT 
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>

              </div>


            <div className="logo-desk">
              <Link to="">
                <img
                  src="../../../../src/view/public/frontend/images/logo.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="box-header-right-top">
              <div className="settime-auto-header">
                <p>2025/03/24 (T2) 22:00:03</p>
              </div>
              <div className="box-nav-desk-header-top">
                <ul>
                  <li>
                    <Link to="">
                      <img
                        src="../../../../src/view/public/frontend/images/icon1.png"
                        alt=""
                      />
                      <span>Khuyến Mãi</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="">
                      <img
                        src="../../../../src/view/public/frontend/images/icon1.png"
                        alt=""
                      />
                      <span>Khuyến Mãi</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="">
                      <img
                        src="../../../../src/view/public/frontend/images/icon1.png"
                        alt=""
                      />
                      <span>Khuyến Mãi</span>
                    </Link>
                  </li>
                </ul>

                <div className="list-btn-header-top">
                  <button className="login">Đăng nhập</button>
                  <button className="signup">Đăng ký</button>
                </div>
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
                  <Link to="">Casino</Link>

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
                  <Link to="">Nổ Hũ</Link>
                </li>

                <li>
                  <Link to="">Bắn Cá</Link>
                </li>

                <li>
                  <Link to="">Thể Thao</Link>
                </li>
                <li>
                  <Link to="">Game Bài 3D</Link>
                </li>

                <li>
                  <Link to="">Live Game</Link>
                </li>

                <li>
                  <Link to="">Đá Gà</Link>
                </li>

                <li>
                  <Link to="">Xổ Số</Link>
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
