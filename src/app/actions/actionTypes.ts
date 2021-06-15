import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Constants {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
    FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
}

export type IPayload = {
    payload: any
}

interface IDataRequest {
    type: typeof Constants.FETCH_DATA_REQUEST
}

interface IDataFailure {
    type: typeof Constants.FETCH_DATA_FAILURE,
    payload: any
}

interface IDataSuccess {
    type: typeof Constants.FETCH_DATA_SUCCESS,
    payload: any// tutaj bedzie w zaleznosci od potrzebnego zapytania type dla obiektu ktory zwracany jest do payload
}

interface IUsersRequest {
    type: typeof Constants.FETCH_USERS_REQUEST
}

interface IUsersFailure {
    type: typeof Constants.FETCH_USERS_FAILURE,
    payload: any
}

interface IUsersSuccess {
    type: typeof Constants.FETCH_USERS_SUCCESS,
    payload: any// tutaj bedzie w zaleznosci od potrzebnego zapytania type dla obiektu ktory zwracany jest do payload
}

interface IUserRequest {
    type: typeof Constants.FETCH_USER_REQUEST
}

interface IUserFailure {
    type: typeof Constants.FETCH_USER_FAILURE,
    payload: any
}

interface IUserSuccess {
    type: typeof Constants.FETCH_USER_SUCCESS,
    payload: any// tutaj bedzie w zaleznosci od potrzebnego zapytania type dla obiektu ktory zwracany jest do payload
}




export type FetchDispatchType = IDataFailure | IDataRequest | IDataSuccess;
export type DispatchTypeAction = IDataFailure["type"] | IDataRequest["type"] | IDataSuccess["type"]