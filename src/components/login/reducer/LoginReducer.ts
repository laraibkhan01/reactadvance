import { LoginActionType, AuthenticationAction } from "../actions/LoginActions";

interface LoginState {
  userName: string;
  authStatus: boolean;
  authMsg: string;
  showLoader: boolean;
  authError: boolean;
}

const initialState: LoginState = {
  userName: "",
  authMsg: "",
  authStatus: false,
  showLoader: false,
  authError: false,
};

export const LoginReducer = (
  state = initialState,
  action: AuthenticationAction
): LoginState => {
  switch (action.type) {
    case LoginActionType.INITIATE_USER_AUTHENTICATION:
      return {
        ...state,
        userName: action.payload.userName,
        showLoader: true,
        authError: false,
      };
    case LoginActionType.SET_AUTH_STATUS:
      //console.log("in reducer", action);
      return {
        ...state,
        showLoader: false,
        authStatus: action.payload.authStatus,
        authMsg: action.payload.authMsg,
      };
    case LoginActionType.AUTHENTICATION_ERROR:
      return {
        ...state,
        authStatus: false,
        showLoader: false,
        authError: true,
      };
    default:
      return state;
  }
};
