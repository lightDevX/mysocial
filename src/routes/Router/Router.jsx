import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErorrPage from "../../pages/ErrorPage/ErorrPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        element: <Root />,
        errorElement: <ErorrPage />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/home",
                element: <PrivateRoutes> <Home /></PrivateRoutes>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile /></PrivateRoutes>
            },
            {
                path: "/register",
                element: <Register />
            },
        ],
    }
])

export default router;