import { Constants } from 'app/actions/actionTypes';
import { TUser, TComment, TPhoto, TPost, TLastPublication } from 'app/reducers/stateTypes';

interface IinitialState {
    loading: boolean,
    user: TUser,
    users: Array<TUser>,
    comments: Array<TComment>,
    photos: Array<TPhoto>,
    posts: Array<TPost>,
    error: Array<any>
    lastPublications: Array<TLastPublication>
}

type TAction = {
    type: string,
    payload: any
}

const initialState: IinitialState = {
    loading: false,
    user: {} as TUser,
    users: [],
    comments: [],
    photos: [],
    posts: [],
    error: [],
    lastPublications: []
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
                user: action.payload.users[0],
                users: action.payload.users,
                comments: action.payload.comments,
                photos: action.payload.photos,
                posts: action.payload.posts,
                lastPublications: action.payload.lastPublications,
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
                user: action.payload.users[0],
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
            case Constants.FETCH_USER_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case Constants.FETCH_USER_SUCCESS:
                return {
                    ...state,
                    user: action.payload.user,
                    loading: false
                }
            case Constants.FETCH_USER_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: [...state.error, action.payload.error],
                };
        default:
            return state;
    }
}