import { useNavigate } from 'react-router-dom';
import logout from '../../../assets/icons/logout.svg';

const Logout = () => {

    const navigate = useNavigate()

    const handaleLogout = () => {
        navigate("/")
    }

    return (
        <button className="icon-btn" onClick={handaleLogout}>
            <img src={logout} alt="Logout" />
        </button>
    );
};

export default Logout;