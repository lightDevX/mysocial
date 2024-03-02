import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErorrPage from "../../components/pages/ErorrPage";


const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        element: <Root />,
        errorElement: <ErorrPage />,
        children: [],
    }
])

export default router;