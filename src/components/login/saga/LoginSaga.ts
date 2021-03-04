import { all, put, takeLatest, call } from "redux-saga/effects";
import { LoginActionType, AuthenticationAction } from "../actions/LoginActions";
import firebaseApp from "../../../helper/base";

function* authenticateUser(action: any) {
  try {
    //console.log("in login saga:", action);
    // User Authentication without an api call
    /** 
    yield put({
      type: LoginActionType.SET_AUTH_STATUS,
      payload: {
        authStatus: true,
        authMsg: "success",
      },
    });
    */
    // User Authentication Using Firebase
    /**
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(
        action.payload.userName,
        action.payload.password
      )
      .then((response: any) => {
        console.log("in login respnse:", response);
      });
 */
    const auth = firebaseApp.auth();

    //  auth.signInWithEmailAndPassword(userName,password).then().catch()

    const response = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.userName,
      action.payload.password
    );

    if (response.user) {
      yield put({
        type: LoginActionType.SET_AUTH_STATUS,
        payload: {
          authStatus: true,
          authMsg: "Successfully verified user",
        },
      });
    } else {
      yield put({
        type: LoginActionType.SET_AUTH_STATUS,
        payload: {
          authStatus: false,
          authMsg: "Failed to verify user",
        },
      });
    }
  } catch (error) {
    yield put({ type: LoginActionType.AUTHENTICATION_ERROR });
  }
}

export function* LoginSaga() {
  yield all([
    yield takeLatest(
      LoginActionType.INITIATE_USER_AUTHENTICATION,
      authenticateUser
    ),
  ]);
}
