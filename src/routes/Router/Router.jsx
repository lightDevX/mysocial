import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErorrPage from "../../pages/ErrorPage/ErorrPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";


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
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/register",
                element: <Register />
            },
        ],
    }
])

export default router;