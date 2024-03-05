import { Link } from "react-router-dom";
import { useAuth } from "../../../API/hooks/useAuth";
import { useProfile } from "../../../API/hooks/useProfile";
import home from '../../../assets/icons/home.svg';
import notifications from "../../../assets/icons/notification.svg";
import logo from '../../../assets/images/logo.svg';
import Logout from "../../Logout/Logout";

const Header = () => {

    const { auth } = useAuth();
    const { state } = useProfile();

    console.log(state);

    const user = state?.user ?? auth?.user;

    console.log(user);

    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                <Link to="/">
                    <img className="max-w-[100px] rounded-full lg:max-w-[130px]" src={logo} />
                </Link>


                <div className="flex items-center space-x-4">
                    <Link to="/home" className="btn-primary">
                        <img src={home} alt="Home" />
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={notifications} alt="Notification" />
                    </button>
                    <Logout />
                    <button>
                        <Link to="/profile" className="flex-center !ml-8 gap-3">
                            <span className="text-lg font-medium lg:text-xl">
                                {user?.firstName}{' '}{user?.lastName}
                            </span>
                            <img className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`} alt="Avatar" />
                        </Link>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Header;