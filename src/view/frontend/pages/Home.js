import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import NewsNotification from "../components/NewsNotification";
import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const games = [
    { title: "Nổ hũ" },
    { title: "Nổ hũ" },
    { title: "Nổ hũ" },
    { title: "Nổ hũ" },
    { title: "Nổ hũ" },
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
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`item-sport-lobby ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="box-content-sport">
                      <span>Thể Thao</span>
                      <img
                        className="active-icon"
                        src="/8766bc81d6662f03435338389ad19c54.png"
                        alt="img-1"
                      />
                      <img
                        className="defaurt-icon"
                        src="/c67e44b68bec655d30317e2e8be4ffeb.png"
                        alt="img-2"
                      />
                    </div>

                    <div className="image-avatar-sport">
                      <img
                        src="/a20e6d46b4128709986d3acb72f04154.png"
                        alt="avatar"
                      />
                    </div>

                    <div className="btn-lobby-sport">
                      <button>
                        Chơi ngay
                        <img
                          src="/aef367df7a75124e3ccebad241bc4984.png"
                          alt="button-img"
                        />
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
                      src="/073d9297cdee9e11e83718a96312ca51.png"
                      alt=""
                    />
                    <span>Bắn Cá</span>
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
              {games.map((game, index) => (
                <div className="box-item-category-track">
                  <div key={index} className="item-category-game-mobile">
                    <Link href="#">
                      <div className="image-icon-category-mobile"></div>
                      <p>{game.title}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
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
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
