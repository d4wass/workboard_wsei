import axios, {AxiosResponse, AxiosStatic} from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { FetchDispatchType, Constants } from 'app/actions/actionTypes'



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

                dispatch({
                    type: Constants.FETCH_DATA_SUCCESS,
                    payload: {
                        users,
                        photos,
                        posts,
                        comments
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

