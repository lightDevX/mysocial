import { Link } from "react-router-dom";
import { useAuth } from "../../API/hooks/useAuth";


const Home = () => {

    const { auth } = useAuth();
    console.log(auth);

    return (
        <>
            <h1 className=" text-cyan-300 font-bold text-center mt-5">This is home page</h1>
            <Link to="/profile">Profile Page</Link>
        </>
    );
};

export default Home;