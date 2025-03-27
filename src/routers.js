import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./view/frontend/layouts/WebsiteLayout";
import Home from "./view/frontend/pages/Home";
import Profile from "./view/frontend/pages/Profile";
import Login from "./view/frontend/pages/Login";
import WithdrawApplication from "./view/frontend/pages/Profile/WithdrawApplication";
import Register from "./view/frontend/pages/Register";
import MemberCenter from "./view/frontend/pages/MemberCenter";
import Deposit from "./view/frontend/pages/Profile/Deposit";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      {path: "/withdrawApplication", element: <WithdrawApplication />},
      {path: "/memberCenter", element: <MemberCenter />},
      {path: "/deposit", element: <Deposit />},

      { path: "/login", element: <Login /> },
      {path: "/register", element: <Register />},
      
    ],
  },
]);

export default routers;
