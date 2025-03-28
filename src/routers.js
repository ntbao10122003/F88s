import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./view/frontend/layouts/WebsiteLayout";
import Home from "./view/frontend/pages/Home";



// profile 
import Silbar from "./view/frontend/pages/Profile/Silbar";
import WithdrawApplication from "./view/frontend/pages/Profile/WithdrawApplication";
import MemberCenter from "./view/frontend/pages/MemberCenter";
import Deposit from "./view/frontend/pages/Profile/Deposit";
import WithdrawMoney from "./view/frontend/pages/Profile/WithdrawMoney";
import WebsiteProfile from "./view/frontend/layouts/WebsiteProfile";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />, 
    children: [
      { path: "/", element: <Home /> },
    ],
  },
  {
    path: "/profile",
    element: <WebsiteProfile />, 
    children: [
      { path: "silbar", element: <Silbar /> },
      { path: "withdraw-application", element: <WithdrawApplication /> },
      { path: "member-center", element: <MemberCenter /> },
      { path: "deposit", element: <Deposit /> },
      { path: "withdraw-money", element: <WithdrawMoney /> },
    ],
  },
]);



export default routers;
