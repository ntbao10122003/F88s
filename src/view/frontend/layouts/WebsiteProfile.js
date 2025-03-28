import React from "react";
import WithdrawApplication from "../pages/Profile/WithdrawApplication";
import Silbar from "../pages/Profile/Silbar";
import Banner from "../components/Banner";
import NewsNotification from "../components/NewsNotification";
const WebsiteProfile = () => {
  return (
    <div className="box-profile">
      <Banner />
      <NewsNotification />
      <div className="ctnr">
        <div className="row">
          <div className="">
            <Silbar />
          </div>
          <div className="silbar-right-step">
            <WithdrawApplication />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteProfile;
