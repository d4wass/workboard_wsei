import axios, {AxiosResponse} from 'axios';
import { Dispatch } from 'redux';
import { Constants } from 'app/actions/actionTypes'
import { TLastPublication } from 'app/reducers/stateTypes';


export const fetchDataUsers = () => (dispatch: Dispatch) => {
    dispatch({ type: Constants.FETCH_DATA_REQUEST })
    return axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/photos'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        .then(
            axios.spread((...responses: AxiosResponse<any>[]) => {
                const users = responses[0].data;
                const photos = responses[1].data;
                const posts = responses[2].data;
                const comments = responses[3].data;
                let lastPublications: Array<TLastPublication> = [];

                users.forEach(
                    (item: any, index: number) => lastPublications.push({
                        image: photos[index].url,
                        title: posts[index].title,
                        imageAlt: photos[index].title,
                        userName: item.name,
                        userImage: photos[index].url
                    }))

                dispatch({
                    type: Constants.FETCH_DATA_SUCCESS,
                    payload: {
                        users,
                        photos,
                        posts,
                        comments,
                        lastPublications
                    }
                })
            })
        )
        .catch((error: any) => {
            console.log(error)
            dispatch({
                type: Constants.FETCH_DATA_FAILURE,
                payload: {
                    data: error
                }
            });
        });
}

export const fetchUsers = () => (dispatch: Dispatch) => {
    dispatch({ type: Constants.FETCH_USERS_REQUEST });
    return axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/photos'),
        ])
        .then(
            axios.spread((...responses: AxiosResponse<any>[]) => {
                const users = responses[0].data;
                const photos = responses[1].data;

                dispatch({
                    type: Constants.FETCH_USERS_SUCCESS,
                    payload: {
                        users,
                        photos
                    }
                })
            })
        )
        .catch((error: any) => {
            dispatch({
                type: Constants.FETCH_USERS_FAILURE,
                payload: {
                    data: error
                }
            })
        })
}


export const createUser = () => (dispatch: Dispatch) => {
    dispatch({ type: Constants.FETCH_USER_REQUEST });
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response: AxiosResponse<any>) => {
                const user = response.data[0];

                dispatch({
                    type: Constants.FETCH_USER_SUCCESS,
                    payload: {user}
                })
        })
        .catch((error: any) => {
            dispatch({
                type: Constants.FETCH_USER_FAILURE,
                payload: {
                    data: error
                }
            })
        })
}

