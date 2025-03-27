import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./view/frontend/layouts/WebsiteLayout";
import Home from "./view/frontend/pages/Home";
import Profile from "./view/frontend/pages/Profile";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default routers;
