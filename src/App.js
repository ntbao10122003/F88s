import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithdrawMoney from "./view/frontend/pages/Profile/WithdrawMoney";
import WebsiteLayout from "./view/frontend/layouts/WebsiteLayout";
import WithdrawApplication from "./view/frontend/pages/Profile/WithdrawApplication";
import WebsiteProfile from "./view/frontend/layouts/WebsiteProfile";
import Home from "./view/frontend/pages/Home";
import Wellet from "./view/frontend/pages/Profile/Wellet";
import History from "./view/frontend/pages/Profile/History";
import HistoryRut from "./view/frontend/pages/Profile/HistoryRut";
import SecurityList from "./view/frontend/pages/Profile/SecurityList";
import Silbar from "./view/frontend/pages/Profile/Silbar";
import MemberCenter from "./view/frontend/pages/MemberCenter";
import Deposit from "./view/frontend/pages/Profile/Deposit";
import ChangeBankAccount from "./view/frontend/pages/Profile/ChangeBankAccount";
import Footer from "./view/frontend/partials/Footer";
import LayoutProfileMobile from "./view/frontend/layouts/LayoutProfileMobile";

function App() {
  return (
    <Router>
      <div> {/* Bọc chung để giữ Footer luôn xuất hiện */}
        <Routes>
          {/* Layout chính */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Layout Profile */}
          <Route path="/WebsiteProfile" element={<WebsiteProfile />}>
            <Route index element={<Deposit />} />
            <Route path="withdrawApplication" element={<WithdrawApplication />} />
            <Route path="withdrawMoney" element={<WithdrawMoney />} />
            <Route path="wellet" element={<Wellet />} />
            <Route path="history" element={<History />} />
            <Route path="historyRut" element={<HistoryRut />} />
            <Route path="securityList" element={<SecurityList />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="changeBankAccount" element={<ChangeBankAccount />} />
          </Route>

          <Route path="/WithdrawApplication" element={<WithdrawApplication />} />
          <Route path="/memberCenter" element={<MemberCenter />} />
          <Route path="/WithdrawMoney" element={<WithdrawMoney />} />


          <Route path="/LayoutProfileMobile" element={<LayoutProfileMobile />}>
            <Route index element={<MemberCenter />} />
            <Route path="withdrawApplication" element={<WithdrawApplication />} />
            <Route path="withdrawMoney" element={<WithdrawMoney />} />
            <Route path="wellet" element={<Wellet />} />
            <Route path="history" element={<History />} />
            <Route path="historyRut" element={<HistoryRut />} />
            <Route path="securityList" element={<SecurityList />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="changeBankAccount" element={<ChangeBankAccount />} />
          </Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
