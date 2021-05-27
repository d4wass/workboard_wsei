import { Constants } from 'app/actions/actionTypes';
import {TUser, TComment, TPhoto, TPost} from 'app/reducers/stateTypes'


interface IinitialState {
    loading: boolean,
    users: Array<TUser>,
    comments: Array<TComment>,
    photos: Array<TPhoto>,
    posts: Array<TPost>,
    error: Array<any>
}

type TAction = {
    type: string,
    payload: any
}

const initialState: IinitialState = {
    loading: false,
    users: [],
    comments: [],
    photos: [],
    posts: [],
    error: []
}

export const rootReducer = (state: IinitialState = initialState, action: TAction): IinitialState => {
    switch (action.type) {
        case Constants.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Constants.FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                comments: action.payload.comments,
                photos: action.payload.photos,
                posts: action.payload.posts,
                loading: false
            }
        case Constants.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: [...state.error, action.payload.error],
            };
        case Constants.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Constants.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                photos: action.payload.photos,
                loading: false
            }
        case Constants.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: [...state.error, action.payload.error],
            };
        default:
            return state;
    }
}