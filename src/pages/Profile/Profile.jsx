/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuth } from "../../API/hooks/useAuth";
import useAxios from "../../API/hooks/useAxios";
import { useProfile } from "../../API/hooks/useProfile";
import { actions } from "../../actions";
import MyPost from "../../components/Profile/MyPost";
import ProfileInfo from "../../components/Profile/ProfileInfo";

const Profile = () => {

    const { state, dispatch } = useProfile();
    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING });
        const fetchProfile = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id
                    }`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.error(error);
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: error.message,
                });
            }
        };

        fetchProfile();
    }, []);

    if (state?.loading) {
        return <div> Fetching your Profile data...</div>;
    }

    return (
        <>
            <ProfileInfo />
            <MyPost />
        </>
    );
};



export default Profile;