import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faDonate,
    faHandHoldingUsd,
  } from "@fortawesome/free-solid-svg-icons";
const Silbar = () => {
     const [activeTab, setActiveTab] = useState("deposit");
    
      const menuItems = [
        { icon: faDonate, label: "Ví" },
        { icon: faDonate, label: "Thông tin cá nhân " },
        { icon: faDonate, label: "Lịch sử cược" },
        { icon: faDonate, label: "Cài đặt rút tiền" },
        { icon: faDonate, label: "Lịch sử nạp rút" },
        { icon: faDonate, label: "Đăng xuất" },
      ];

  return (
    <div className="box-silbar-profile">
      <div className="images-avatar-profile">
        <FontAwesomeIcon icon={faUserCircle} />
        <div className="box-name-profile">
          <span>Tài Khoản</span>
          <span>Bao10122003</span>
        </div>
        <div className="price-avatar">
          <span>Số dư:</span>
          <span>0</span>
        </div>
      </div>

      <div className="list-bank-out">
        <button
          className={`item-bank-out ${activeTab === "deposit" ? "active" : ""}`}
          onClick={() => setActiveTab("deposit")}
        >
          <FontAwesomeIcon icon={faDonate} />
          <span>Nạp tiền</span>
        </button>

        <button
          className={`item-bank-out ${
            activeTab === "withdraw" ? "active" : ""
          }`}
          onClick={() => setActiveTab("withdraw")}
        >
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          <span>Rút tiền</span>
        </button>
      </div>

      <div className="list-menu-bar-profile">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to="#">
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Silbar;
