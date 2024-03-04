import { Navigate, Outlet } from "react-router-dom";
import ProfileProvider from "../../API/Providers/ProfileProvider";
import { useAuth } from "../../API/hooks/useAuth";
import Header from "../../components/common/Header/Header";


const PrivateRoutes = () => {

    const { auth } = useAuth();

    return (
        <>
            {
                auth.authToken ? (
                    <>
                        <ProfileProvider>
                            <Header />
                            <main className=" mx-auto max-w-[1020px] py-8">
                                <div className="container">
                                    <Outlet />
                                </div>
                            </main>
                        </ProfileProvider>
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