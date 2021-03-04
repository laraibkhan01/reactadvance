export enum LoginActionType {
  INITIATE_USER_AUTHENTICATION = "INITIATE_USER_AUTHENTICATION",
  SET_AUTH_STATUS = "SET_AUTH_STATUs",
  AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
}

interface AuthenticateUser {
  type: LoginActionType.INITIATE_USER_AUTHENTICATION;
  payload: {
    userName: string;
    password: string;
  };
}

interface SetUserAuthStatus {
  type: LoginActionType.SET_AUTH_STATUS;
  payload: {
    authStatus: boolean;
    authMsg: string;
  };
}

interface AuthenticationError {
  type: LoginActionType.AUTHENTICATION_ERROR;
}

export type AuthenticationAction =
  | AuthenticateUser
  | SetUserAuthStatus
  | AuthenticationError;
