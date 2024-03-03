import { useAuth } from "../../API/hooks/useAuth";
import Header from "../../components/auth/common/Header/Header";


const Home = () => {

    const { auth } = useAuth();
    console.log(auth);

    return (
        <>
            <Header />
            <h1 className=" text-cyan-300 font-bold text-center mt-5">This is home page</h1>
        </>
    );
};

export default Home;