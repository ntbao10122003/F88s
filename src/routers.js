import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./view/frontend/layouts/WebsiteLayout";
import Home from "./view/frontend/pages/Home";
import WithdrawApplication from "./view/frontend/pages/Profile/WithdrawApplication";
import MemberCenter from "./view/frontend/pages/MemberCenter";
import Deposit from "./view/frontend/pages/Profile/Deposit";
import WebsiteProfile from "./view/frontend/layouts/WebsiteProfile";
import WithdrawMoney from "./view/frontend/pages/Profile/WithdrawMoney";


import Silbar from "./view/frontend/pages/Profile/Silbar";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />, 
    children: [
      { path: "/", element: <Home /> },


      
      {path: "/Silbar", element: <Silbar />},
      {path: "/withdrawApplication", element: <WithdrawApplication />},
      {path: "/memberCenter", element: <MemberCenter />},
      {path: "/deposit", element: <Deposit />},
      {path: "/withdrawMoney", element: <WithdrawMoney />},
      {path: "/WebsiteProfile", element: <WebsiteProfile />},
      
    ],
  },
]);

export default routers;
