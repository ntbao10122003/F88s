import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import NewsNotification from "../components/NewsNotification";
import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoxSigninSucecs from "../components/BoxSigninSucecs";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settingsGame = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 5 },
      },
    ],
  };

  const games = [
    { title: "Bóng đá" },
    { title: "Casino" },
    { title: "Nổ Hũ" },
    { title: "Bắn cá" },
    { title: "Thể thao" },
  ];

  const gamesMobile = [
    { title: "Bóng đá", image: "/sport.97ee2afae78be1b8.2f4e86b39eb03af408fd.png" },
    { title: "Casino", image: "/live.e35483fa9ff9f0e1.png" },
    { title: "Nổ Hũ", image: "/slot.fb8f538dec8e96f3.png" },
    { title: "Bắn cá", image: "/fish.956cb4baca336fdb.png" },
    { title: "Thể thao", image: "/sport.97ee2afae78be1b8.png" }

  ];

  const sportsData = [
    {
      title: "Bóng đá",
      activeIcon: "/8766bc81d6662f03435338389ad19c54.png",
      defaultIcon: "/c67e44b68bec655d30317e2e8be4ffeb.png",
      avatar: "/a20e6d46b4128709986d3acb72f04154.png",
      buttonImg: "/aef367df7a75124e3ccebad241bc4984.png",
    },
    {
      title: "Casino",
      activeIcon: "/8766bc81d6662f03435338389ad19c54.png",
      defaultIcon: "/c67e44b68bec655d30317e2e8be4ffeb.png",
      avatar: "/7617d0d88f6254ff737f03e4bca075cf.png  ",
      buttonImg: "/aef367df7a75124e3ccebad241bc4984.png",
    },
    {
      title: "Nổ Hũ",
      activeIcon: "/8766bc81d6662f03435338389ad19c54.png",
      defaultIcon: "/c67e44b68bec655d30317e2e8be4ffeb.png",
      avatar: "/6219b39e4ee470a1870b6da02ab5d0c4.png",
      buttonImg: "/aef367df7a75124e3ccebad241bc4984.png",
    },
  ];



  return (
    <div className="box-home-pages">
      <Banner />
      <NewsNotification />

     
      <div className="Game-lobby">
        <div className="ctnr">
          <div className="title-hedding-Game-lobby">
            <div className="box-title-hedding-game">
              <h2>Sảnh trò chơi</h2>
              <span>Tổng hợp game chất lượng giải trí đỉnh cao</span>
            </div>
          </div>

          <div className="Sport-list">
            <div className="box-all-Sport">
              <div className="list-game-sport-lobby">
                {sportsData.map((sport, index) => (
            <div
              key={index}
              className={`item-sport-lobby ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="box-content-sport">
                <span>{sport.title}</span>
                <img
                  className="active-icon"
                  src={sport.activeIcon}
                  alt="active-icon"
                />
                <img
                  className="defaurt-icon"
                  src={sport.defaultIcon}
                  alt="default-icon"
                />
              </div>

              <div className="image-avatar-sport">
                <img src={sport.avatar} alt="avatar" />
              </div>

              <div className="btn-lobby-sport">
                <button>
                  Chơi ngay
                  <img src={sport.buttonImg} alt="button-img" />
                </button>
              </div>
            </div>
          ))}
              </div>
            </div>
          </div>

          <div className="list-category-sport-game">
            <div className="box-list-category-sport-game">
              <div className="item-category-sport-game">
                <div className="images-game-category">
                  <Link>
                    <img
                      src="/073d9297cdee9e11e83718a96312ca51.png"
                      alt=""
                    />
                    <span>Bắn Cá</span>
                    <div className="icon-next-category"></div>
                  </Link>
                </div>
              </div>

              <div className="item-category-sport-game">
                <div className="images-game-category">
                  <Link>
                    <img
                      src="/c7a511c2c32c8278b484effd776e7955.png"
                      alt=""
                    />
                    <span>Game Bài 3D
                    </span>
                    <div className="icon-next-category"></div>
                  </Link>
                </div>
              </div>
              <div className="item-category-sport-game">
                <div className="images-game-category">
                  <Link>
                    <img
                      src="/16f0e20aa9ab61d6608b49c0e04af189.png"
                      alt=""
                    />
                    <span>Xổ Số</span>
                    <div className="icon-next-category"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-list-categorys-game-desk">
        <div className="ctnr">
          <div className="hottest-game">
            <div className="bg-hottest-game">
              <img
                src="/6e4b4f8807756b6b2dbfb2c3eb6ac231.png"
                alt=""
              />
            </div>
            <div className="ctnr-hottest-game">
              <div className="box-title-hottest-game">
                <div className="hedding-hottest-game">
                  <span>hottest-game</span>
                </div>
                <div className="btn-view-all-notification">
                  <button>nhiều trò chơi hơn</button>
                </div>
              </div>

              <div className="list-hottest-game">
                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="item-hottest-game">
                  <Link>
                    <img
                      src="/06a494f8d2a53ee60dc5e02d46fbfbd6.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-list-category-game-mobile">
        <div className="ctnr">
          <div className="list-tab-category-mobile">
          <Slider {...settingsGame}>
              {gamesMobile.map((gamesMobile, index) => (
                <div className="box-item-category-track" key={index}>
                  <div className="item-category-game-mobile">
                    <Link href="#">
                      <div 
                        className="image-icon-category-mobile" 
                        style={{ backgroundImage: `url(${gamesMobile.image})` }}
                      ></div>
                      <p>{gamesMobile.title}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="box-login-sigin-respert">
              <div class="member-name-login">
              <div className="singin-name">
                      <p> Bao10122003 </p>
                      <span>0</span>
                    </div>
              </div>
              <div className="box-member-right-login">
                <BoxSigninSucecs/>
              </div>
            </div>        

          <div className="game-part-list">
            <div className="row">
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/ICONTT.a6397ad290b8d7b609f6.png"
                      alt=""
                    />
                    <span>Thể Thao</span>
                  </Link>
                </div>
              </div>

              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/ICONCASINO.c43a0fd18f4d128a6f8c.png"
                      alt=""
                    />
                    <span>Casino</span>
                  </Link>
                </div>
              </div>
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/ICONBANCA.94f75c355a1e4c092627.png  "
                      alt=""
                    />
                    <span>Bắn Cá</span>
                  </Link>
                </div>
              </div>
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/ICONSLOT.00fe6ed1eadc0116578a.png"
                      alt=""
                    />
                    <span>Slot</span>
                  </Link>
                </div>
              </div>

              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/ICONDAGA.8c269ccc0d1aa8033ac8.png"
                      alt=""
                    />
                    <span>Đá Gà</span>
                  </Link>
                </div>
              </div>
              
              
            </div>
          </div>
{/*          
          <div className="game-part-list">
            <div className="title-part-game d-flex js-between ai-center">
              <span>Trò Chơi Live Casino Hay Nhất</span>
              <Link>Xem tất cả</Link>
            </div>
            <div className="row">
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>

              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>

              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>
              <div
                className="clm"
                style={{ "--w-lg": 4, "--w-md": 4, "--w-xs": 4 }}
              >
                <div className="item-game-part-games">
                  <Link>
                    <img
                      src="/1fd5c51c4e9947f88bd972fe17f4710f.png"
                      alt=""
                    />
                    <span>WM Trực Tuyến</span>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
