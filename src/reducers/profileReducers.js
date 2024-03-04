import { actions } from "../actions"

const initialState = {
    user: null,
    post: [],
    loading: false,
    error: null,
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FACTHING: {
            return {
                ...state,
                loading: true,
            }
        }
        case actions.profile.DATA_FACTHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                post: action.data.posts,
            }
        }
        case actions.profile.DATA_FATCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        default: {
            return state
        }
    }
}

export { initialState, profileReducer }

