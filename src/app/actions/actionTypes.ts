import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Constants {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
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

export type FetchDispatchType = IDataFailure | IDataRequest | IDataSuccess;
export type DispatchTypeAction = IDataFailure["type"] | IDataRequest["type"] | IDataSuccess["type"]