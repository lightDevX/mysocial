import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../API/hooks/useAuth';
import logout from '../../assets/icons/logout.svg';

const Logout = () => {

    const navigate = useNavigate();

    const { setAuth } = useAuth();

    const handaleLogout = () => {
        setAuth({});
        navigate("/")
    }

    return (
        <button className="icon-btn" onClick={handaleLogout}>
            <img src={logout} alt="Logout" />
        </button>
    );
};

export default Logout;