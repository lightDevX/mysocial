import { Outlet } from "react-router-dom";
import Header from "../auth/common/Header/Header";


const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Root;