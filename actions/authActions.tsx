import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authActionTypes';


interface User {
  email: string;
  password: string;
}


export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: User;
  };
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

export const loginRequest = (email: string, password: string): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
