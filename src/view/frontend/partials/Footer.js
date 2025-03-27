import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brandImages = [
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
    "https://www.3twin.bet/images/nhacungcap1.webp",
  ];

  return (
    <footer>

      <div className="list-menu-entire-fixed">
        <ul>
          <li>
            <Link>
              <div className="icon-menu-fixed-footer"></div>
              Trang chủ</Link>
          </li>
          <li>
            
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            Tải App</Link>
          </li>
          <li>
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            Khuyến mãi</Link>
          </li>
          <li>
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            CSKH 24/7</Link>
          </li>
          <li>
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            Tài khoản</Link>
          </li>
        </ul>
      </div>
      <div className="ctnr">
        <div className="footer-top">
          <div className="logo-footer">
            <Link>
              <img
                src="https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/9f6994a110/images/812ee25a09813ea702fb26170cc3c0d3.png"
                alt=""
              />
            </Link>
          </div>
          <div className="desc-footer-top">
            <span>
              F8BET là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do
              Isle of Man và Khu kinh tế Cagayan and Freeport cấp. Với bề dày
              kinh nghiệm và danh tiếng phục vụ hơn 10 triệu người chơi, F8BET
              đã và đang khẳng định vị thế của mình [...]
            </span>
            <span className="show-footer-top">Xem thêm</span>
          </div>
        </div>

        <div className="footer-center-brand">
          <div className="list-brand-footer">
            <Slider {...settings}>
              {brandImages.map((img, index) => (
                <div className="item-brand" key={index}>
                  <a href="#">
                    <img src={img} alt={`Brand ${index + 1}`} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="list-category-footers">
          <div className="box-category-footers">
            <ul>
              <li>
                <Link>
                Điều khoản và điều kiện 
                </Link>
              </li>
              <li>
                <Link>
                Giới thiệu về F8BET
                </Link>
              </li>
              <li>
                <Link>
                Chơi có trách nhiệm
                </Link>
              </li>
              <li>
                <Link>
                Miễn trách nhiệm
                </Link>
              </li>
              <li>
                <Link>
                Quyền riêng tư tại F8BET
                </Link>
              </li>
              <li>
                <Link>
                Những câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="coppy-right-footer">
          <span>Copyright © F8BET.COM Reserved  </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
