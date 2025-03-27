import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import NewsNotification from "../components/NewsNotification";
import Deposit from "./Profile/Deposit";
import WithdrawMoney from "./Profile/WithdrawMoney";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faDonate, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("deposit");

  const menuItems = [
    { icon: faDonate, label: "Cài đặt bảo mật" },
    { icon: faDonate, label: "Cài đặt bảo mật" },
    { icon: faDonate, label: "Cài đặt bảo mật" },
    { icon: faDonate, label: "Cài đặt bảo mật" },
    { icon: faDonate, label: "Cài đặt bảo mật" },
  ];

  return (
    <div className="box-profile">
      <Banner />
      <NewsNotification />

      <div className="ctnr">
        <div className="sibar-profile-left">
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
              <button className={`item-bank-out ${activeTab === "deposit" ? "active" : ""}`} onClick={() => setActiveTab("deposit")}>
                <FontAwesomeIcon icon={faDonate} />
                <span>Nạp tiền</span>
              </button>

              <button className={`item-bank-out ${activeTab === "withdraw" ? "active" : ""}`} onClick={() => setActiveTab("withdraw")}>
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

          <div className="silbar-right-step">
            {activeTab === "deposit" && <Deposit />}
            {activeTab === "withdraw" && <WithdrawMoney />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
