import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActionTypes';


interface User {
  email: string;
  password: string;
}


interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    user: User; // Updated payload to include user object
  };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: User; // Updated payload to include user object
  };
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

export type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload.user };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default authReducer;
