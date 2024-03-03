import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../API/hooks/useAuth";
import Header from "../../components/auth/common/Header/Header";


const PrivateRoutes = () => {

    const { auth } = useAuth();

    return (
        <>
            {
                auth.user ? (
                    <>
                        <Header />
                        <main className=" mx-auto max-w-[1020px] py-8">
                            <div className="container">
                                <Outlet />
                            </div>
                        </main>
                    </>
                ) :
                    (
                        <Navigate to="/" />
                    )
            }
        </>
    );
};

export default PrivateRoutes;