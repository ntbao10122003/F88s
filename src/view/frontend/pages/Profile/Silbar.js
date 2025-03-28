import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faDonate,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
const Silbar = () => {

  const menuItems = [
    { icon: faDonate, label: "Ví", path: "/WebsiteProfile/wellet" },
    { icon: faDonate, label: "Thông tin cá nhân", path: "/WebsiteProfile/securityList" },
    { icon: faDonate, label: "Lịch sử cược", path: "/WebsiteProfile/history" },
    { icon: faDonate, label: "Cài đặt rút tiền", path: "/WebsiteProfile/changeBankAccount" },
    { icon: faDonate, label: "Lịch sử nạp rút", path: "/WebsiteProfile/historyRut" },
    { icon: faDonate, label: "Đăng xuất", path: "/" },
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
        <Link className="item-bank-out" to="/WebsiteProfile/Deposit">
          <FontAwesomeIcon icon={faDonate} />
          <span>Nạp tiền</span>
        </Link>
        <Link className="item-bank-out" to="/WebsiteProfile/withdrawApplication">
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          <span>Rút tiền</span>
        </Link>

       
      </div>

      <div className="list-menu-bar-profile">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
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
