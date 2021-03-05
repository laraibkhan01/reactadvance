import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginActionType, AuthenticationAction } from "../actions/LoginActions";
import './LoginForm.css'
const LoginForm = (props: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <div className = "container">
        <div id="formBasicEmail">
          <p>Email address</p>
          <input
            type="email"
            placeholder="Enter email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div id="formBasicPassword">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          id = "kk"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
           console.log("user details:", userName, password);
            props.initiateUserAuth(userName, password);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch: React.Dispatch<AuthenticationAction>) => {
  return {
    initiateUserAuth: (userName: string, password: string) =>
      dispatch({
        type: LoginActionType.INITIATE_USER_AUTHENTICATION,
        payload: {
          userName: userName,
          password: password,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
